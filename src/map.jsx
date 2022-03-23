import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./locationPin";
import "./map.css";

const location = {
	address: "113 Av. Mustapha Mohsen, Ariana 2073",
	lat: 36.869813,
	lng: 10.212367,
};

const Map = ({ location, zoomLevel }) => (
	<div className='map'>
		<div className='google-map'>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: "AIzaSyC1BvA5mvri0l4Ao5UCJCPObOIlfpXh_2U",
				}}
				defaultCenter={location}
				defaultZoom={zoomLevel}
			>
				<LocationPin
					lat={location.lat}
					lng={location.lng}
					text={location.address}
				/>
			</GoogleMapReact>
		</div>
	</div>
);

export default Map;
