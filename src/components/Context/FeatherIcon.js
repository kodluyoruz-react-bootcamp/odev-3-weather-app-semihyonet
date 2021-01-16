//This file structure was inspired from kt-sec's implementation
import {
	CloudLightning,
	CloudRain,
	CloudSnow,
	Wind,
	Sun,
	Cloud,
	CloudDrizzle,
} from "react-feather";

const FeatherIcon = (weatherCode, isWeatherSide, size) => {
	if (weatherCode > 199 && weatherCode < 233) {
		return (
			<CloudLightning
				className={isWeatherSide ? "weather-icon" : "day-icon"}
			/>
		);
	} else if (weatherCode > 299 && weatherCode < 322) {
		return (
			<CloudDrizzle
				className={isWeatherSide ? "weather-icon" : "day-icon"}
			/>
		);
	} else if (weatherCode > 499 && weatherCode < 532) {
		return (
			<CloudRain
				className={isWeatherSide ? "weather-icon" : "day-icon"}
			/>
		);
	} else if (weatherCode > 599 && weatherCode < 623) {
		return (
			<CloudSnow
				className={isWeatherSide ? "weather-icon" : "day-icon"}
			/>
		);
	} else if (weatherCode > 700 && weatherCode < 782) {
		return <Wind className={isWeatherSide ? "weather-icon" : "day-icon"} />;
	} else if (weatherCode === 800) {
		return (
			<Sun
				style={{ size: "50px" }}
				className={isWeatherSide ? "weather-icon" : "day-icon"}
			/>
		);
	} else if (weatherCode > 800 && weatherCode < 805) {
		return (
			<Cloud className={isWeatherSide ? "weather-icon" : "day-icon"} />
		);
	}
};
export default FeatherIcon;
