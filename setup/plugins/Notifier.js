const notifier = require('node-notifier');
class Notifier {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        compiler.hooks.done.tap('notification', (state) => {

            notifier.notify('Message');
        });
        // Setup callback for accessing a compilation:
        compiler.hooks.compilation.tap('NotifierPlugin', (compilation) => {
            // Now setup callbacks for accessing compilation steps:
            compilation.hooks.optimize.tap('HelloCompilationPlugin', () => {
                console.log('Hello compilation!');
            });
        });
    }
}
module.exports = Notifier;