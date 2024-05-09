import "./Map.css";
import GoogleMapReact from "google-map-react";
import PlaceMarker from "../PlaceMarker";

const MapPlaces = ({ places, coordinates, setCoordinates, setLimits, zoom }) => {
  return (
    <>
      <div className="map-wrapper">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCD9cgMISDTbYjvW7vxfuBGPFynU2Zo2gw', libraries:['places','geometry','drawing'] }}
          // Map Style (Google Developers Plattaform)
          mapId={'AIzaSyCD9cgMISDTbYjvW7vxfuBGPFynU2Zo2gw'}
          center={coordinates}
          defaultZoom={zoom}
          options={{ disableDefaultUI: true, zoomControl: true }}
        >
          {places.map((place, i) => (
            <PlaceMarker
              lat={place.latitude ? place.latitude : place.lat}
              lng={place.longitude ? place.longitude : place.lng}
              key={i}
              place={place}
            />
          ))}
        </GoogleMapReact>
      </div>
    </>
  );
};

export default MapPlaces;
