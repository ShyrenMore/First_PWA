import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather/'
const API_KEY = '99148bfc74d703beb07552c6e0fd2c0f';

export const fetchWeather = async (nameOfTown) => {
    const {data} = await axios.get(URL, {
        params: {
            q: nameOfTown,
            units: 'metrics',
            // APPID: `${process.env.REACT_APP_WEATHER_API_KEY}`,
            APPID: API_KEY,
        }
    });

    return data;
}

