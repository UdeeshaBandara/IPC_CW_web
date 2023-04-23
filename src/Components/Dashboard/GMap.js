import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import classes from "./GMap.module.css";
import RacingCarIcon from "../../assets/car/F1icon.png";
import {
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  getDocs,
  limit,
} from "firebase/firestore";

import { firebaseApp } from "./../../Firebase";

const center = { lat: 6.906667, lng: 79.870414 };


const GMap = () => {
  const GMAP_API_KEY = process.env.REACT_APP_GMAP_API_KEY;
  const [markers, setMarkers] = useState([]);

  const collectionName = "carsList";
  const firestore = getFirestore(firebaseApp);

  const [carList, setCarList] = useState([]);
  const [carLocations, setCarLocations] = useState({});

  const getCarList = () => {
    const carsLocation = [];
    const carList = fetch("https://ipc-node-coursework.onrender.com/reading")
      .then((response) => response.json())
      .then((data) => {
        const locations = data.lastUpdates;
        locations.map((location) => {
          const lastLocation = location.lastLocation;
          carsLocation.push({
            carNo: location.carNo,
            driverName: location.driverName,
            lat: lastLocation.latitude,
            lng: lastLocation.longitude,
          });
        });

        setMarkers(carsLocation);
      });
  };

  useEffect(() => {
    getCarList();
  }, []);

  return (
    <div className={classes["map-holder"]}>
      {/*<div className={classes['banner']}>*/}
      {/*    Hello Banner*/}
      {/*</div>*/}
      <div className={classes["map"]}>
        <LoadScript googleMapsApiKey={GMAP_API_KEY}>
          <GoogleMap
            center={center}
            zoom={18}
            // mapTypeControlOptions={}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: true,
              fullscreenControl: false,
              styles: [],
            }}
            // onLoad={map => setMap(map)},
          >
            {markers.map((marker, index) => (
              <MarkerF position={marker} icon={RacingCarIcon} key={index} />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default GMap;
