import { combineReducers } from 'redux';

import WeatherReudcer from './reducer_weather';

const rootReducer = combineReducers({
 	weather: WeatherReudcer,
});

export default rootReducer;
