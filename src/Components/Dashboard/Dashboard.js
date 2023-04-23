import classes from "./Dashboard.module.css";
import CarItem from "./CarItem";
import Banner from "./Banner";
import GMap from "./GMap";
import { useEffect, useState } from "react";
import {
  collection,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  getDocs,
} from "firebase/firestore";
import { firebaseApp } from "./../../Firebase";

const Dashboard = (req, res) => {
  const collectionName = "carsList";
  const firestore = getFirestore(firebaseApp);

  const [carList, setCarList] = useState([]);
  const [carLocations, setCarLocations] = useState({});

  const getCarList = () => {
    const q = query(collection(firestore, collectionName));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cars = [];
      const location = {};
      querySnapshot.forEach((doc) => {
        //get car data
        const driverName = doc.data().driverName;
        const carNo = doc.data().carNo;

        const car = {
          driverName,
          carNo,
        };
        cars.push(car);

        //get location data
        const locationListRef = collection(doc.ref, "locationList");

        getDocs(locationListRef).then((querySnapshot) => {
          const locations = [];
          querySnapshot.forEach((locationDoc) => {
            const longitude = locationDoc.data().longitude;
            const latitude = locationDoc.data().latitude;
            const timestamp = locationDoc.data().timestamp;

            const location = {
              longitude,
              latitude,
              timestamp,
              carNo,
            };

            locations.push(location);
          });

          setCarLocations(locations);
        });
      });

      setCarList(cars);
    });
  };

  const selectCar = (car) => {
    const carNo = car.carNo;
    console.log(carNo);
  };
  useEffect(() => {
    getCarList();
  }, []);

  useEffect(() => {
    console.log(carLocations);
  }, [carLocations]);

  return (
    <div className={classes["dashboard"]}>
      <div className={classes["Banner"]}>
        <Banner />
      </div>
      <div className={classes["car-list-container"]}>
        <ul>
          {carList.map((car, index) => (
            <li onClick={() => selectCar(car)} key={index}>
              <CarItem car={car} />
            </li>
          ))}
        </ul>
      </div>

      <div className={classes["map-container"]}>
        <GMap />
      </div>
    </div>
  );
};

export default Dashboard;
