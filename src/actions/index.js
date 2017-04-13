import axios from 'axios';

const API_KEY = '57f7ba81c61b976e022530435b760f1f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action creator always have to return an action which is an object, and action object always has to have a type.
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url); // return a promise 

	// Action
	return {
		type: FETCH_WEATHER,
		payload: request  // return a promise as payload
		// If payload is a promise, redux-promise stops the action entirely, and once the request finishes it dispatches a new action of the same type but with a payload of the resolved request.
		// We use middleware that stops the promise and it stops the action until the promise is resolved and then goes off and does its thing.
	}
}