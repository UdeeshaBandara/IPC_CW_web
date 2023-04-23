import react from "react";
import classes from "./CartItem.module.css";
import f1Logo from "./../../assets/car//formulalogo.png";

const Banner = () => {
  return (
    <div className={classes["banner"]}>
      <img src={f1Logo} alt="F1 car logo" className={classes["banner"]} />
    </div>
  );
};
export default Banner;
