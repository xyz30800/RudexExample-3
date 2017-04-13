import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
	switch (action.type) {
	case FETCH_WEATHER:
		return state.concat([action.payload.data]);
		// Also can rewrite as 'return [action.payload.data ...state];'
		// We never want to manipulate/mutate our state. Never said state equal or something 
		// e.g. return state.push(action.payload.data), it would have manipulate the existing array. Intead we create an entirely new array and return that instead
		// e.g. state.tomorrowWeather = weather;
	}

	return state;
}