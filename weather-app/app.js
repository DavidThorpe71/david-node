const yargs = require('yargs');

const geocode = require('./geocode/geocode');
// encode plain text entry
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.error(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});
