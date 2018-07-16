class HelloWorldPlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        compiler.hooks.done.tap('HelloWorldPlugin', () => {
            console.log('Hello World!');
            console.log(this.options);
        });
        // Setup callback for accessing a compilation:
        compiler.hooks.compilation.tap('HelloCompilationPlugin', (compilation) => {
            // Now setup callbacks for accessing compilation steps:
            compilation.hooks.optimize.tap('HelloCompilationPlugin', () => {
                console.log('Hello compilation!');
            });
        });
    }
}

module.exports = HelloWorldPlugin;
