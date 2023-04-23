import react from "react"
import classes from "./CartItem.module.css"


const CarItem = () => {
    return <div className={classes['cart-item']}>
         <p className={classes['no-plate']}>1</p>
        <p className={classes['rider-name']}>Max Verstappen</p>
       
    </div>
}
export default CarItem
