console.log('starting app');

setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('Inside of callback 0ms');
}, 0);

console.log('Finishing up');
