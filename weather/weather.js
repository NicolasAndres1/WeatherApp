const axios = require('axios');

const getWeather = async (lat, lon) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a27f9554c262bde4f97c3862c759bc38&units=metric`)
    return res.data.main.temp;
}

module.exports = {
    getWeather
}