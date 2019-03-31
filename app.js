const place = require('./place/place');
const weather = require('./weather/weather');
const argv = require('./config/yargs').argv;


// place.getPlaceLatLon(argv.d)
//      .then(console.log);

// weather.getWeather(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async (direccion) => {
    
    try {
        const coord = await place.getPlaceLatLon(direccion);
        const temp = await weather.getWeather(coord.lat, coord.lon);
        return `El clima de ${coord.direccion} es de ${temp}°.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}.`;
    }

}

getInfo(argv.d)
    .then(console.log)
    .catch(console.log);