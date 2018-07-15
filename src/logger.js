import moment from 'moment';

let day = moment().format('dddd');

export function success(message) {
    console.log('%c ' + message + ' ' + day , 'color : #27ae60 ');
}
export function warning(message) {
    console.log('%c ' + message + ' ' + day , 'color : #f39c12 ');
}
export function error(message) {
    console.log('%c ' + message + ' ' + day , 'color : #e74c3c ');
}
class lg{
    static error(message) {
        console.log('%c ' + message + ' ' + day , 'color : #e74c3c ');
    }
}
export default {
    success,
    warning,
    error,
    lg
};