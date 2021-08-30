// const EventEmitter = require('events');

// //назначение обработчика
// const myEmmiter = new EventEmitter();
// myEmmiter.on('event', (...a) => {
//     console.log(a);
// });

// //отправка события
// myEmmiter.emit('event', 'test');
// myEmmiter.emit('event', 'test2', 4, true);

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmmiter = new EventEmitter();
const fn = () => {
    console.log('an event2 occured!');
}

myEmmiter.on('event', () => {
    console.log('an event occurred!');
    myEmmiter.off('event', fn)
});
myEmmiter.once('event', (...a) => {
    console.log('один раз');
});

myEmmiter.on('event', fn);

myEmmiter.emit('event', 'test');
myEmmiter.emit('event', 'test2', 4, true);