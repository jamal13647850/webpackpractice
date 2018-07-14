import log from './logger.js';
import '../styles/main.css';
import '../styles/main.scss';

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'Hello webpack'

    return element;
}

document.body.appendChild(component());

log.success('Hello webpack');
log.warning('Hello webpack');
log.lg.error('Hello webpack');
