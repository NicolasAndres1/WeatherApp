const axios = require('axios');

const getPlaceLatLon = async (dir) => {
    const encodedURL = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'X-RapidAPI-Key': 'befaeeadebmsh12fc094a8ac6257p1ceeabjsne123c526f9bf' }
    });

    const res = await instance.get();
    
    if(res.data.Results.length === 0) {
        throw new Error (`No hay resultados para ${dir}`);
    }

    const data = res.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getPlaceLatLon
}