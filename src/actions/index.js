import axios from 'axios';

const API_KEY = config.MY_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // 프로미스는 어떤 데이터를 가지지 않는다.

  // console.log('Request:', request);

  // 페이로드의 키로 프로미스를 넣는다!
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
