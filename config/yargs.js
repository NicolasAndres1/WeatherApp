const argv = require('yargs')
    .command('direccion', 'Direccion de la ciudad', {
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad a obtener el clima',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}