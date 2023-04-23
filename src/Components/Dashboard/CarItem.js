import react from "react";
import classes from "./CartItem.module.css";
import CarDrive from "./../../assets/car/Driver.png";

const CarItem = (props) => {
  return (
    <div className={classes["cart-item"]}>
      <div className={classes["img-container"]}>
        <img
          src={CarDrive}
          alt="driver-img"
          className={classes["driver-img"]}
        />
      </div>
      <p className={classes["no-plate"]}>{props.car.carNo}</p>
      <p className={classes["rider-name"]}>{props.car.driverName}</p>
    </div>
  );
};
export default CarItem;
