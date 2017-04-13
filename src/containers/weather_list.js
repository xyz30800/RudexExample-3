import React, {Component} from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const cityName = cityData.city.name;
		const tempList = cityData.list.map(weather => weather.main.temp);
		const pressureList = cityData.list.map(weather => weather.main.pressure);
		const humidityList = cityData.list.map(weather => weather.main.humidity);

		const { lon, lat } = cityData.city.coord;

		return(
			<tr key={cityName}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={tempList} color="red" units="K"/></td>
				<td><Chart data={pressureList} color="green" units="hPa"/></td>
				<td><Chart data={humidityList} color="orange" units="%"/></td>
			</tr>
		);
	}
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperatrue (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({weather}) {
	// const weather = state.weather;
	return { weather }; // {weather} = { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);