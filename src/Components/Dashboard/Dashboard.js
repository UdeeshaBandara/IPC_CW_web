import classes from "./Dashboard.module.css"
//import GMap from "./GMap";
import CarItem from "./CarItem";
import Banner from "./Banner";

const Dashboard = (req,res) => {
    return <div className={classes['dashboard']}>
        <div className={classes['Banner']}>
        <ul>
                <li>
                <tr>
                <td><Banner/></td>
                 </tr>
                </li>
                
            </ul>

        </div>
        <div className={classes['car-list-container']}>
            <ul>
                <li>
                <tr>
                 <td><CarItem/></td>
                 <td><CarItem/></td>
                 <td><CarItem/></td>
                 <td><CarItem/></td>
                 <td><CarItem/></td>
                 </tr>
                </li>
                
            </ul>

        </div>

        {/* <div className={classes['map-container']}>
           // <GMap/>
        </div> */}
    </div>
}

export default Dashboard
