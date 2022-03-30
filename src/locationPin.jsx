import React from "react";
// import { Icon } from "@iconify/react";
// import locationIcon from "@iconify/icons-mdi/map-marker";

const LocationPin = ({ text }) => (
	<div className='pin'>
		<img
			src='https://cdn.iconscout.com/icon/free/png-64/gps-location-map-marker-pin-navigation-3-10926.png'
			alt=''
			className='location-pin-icon'
		/>
		<p className='pin-text'>{text}</p>
	</div>
);

export default LocationPin;
