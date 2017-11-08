import axios from 'axios'; // https://home.openweathermap.org/api_keys

const API_KEY = '29059eef30c12a695021d27e3140f9ac'; // Weather forecast API KEY
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ro`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
