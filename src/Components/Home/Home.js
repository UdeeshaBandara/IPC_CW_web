import classes from "./Home.module.css"
import {NavLink} from "react-router-dom";


const Home = () => {
    return <div className={classes['home']}>
        <div className={classes['container']}>
        
                
                <tr>
                 <td>
                    <div className={classes['btn-container']}>
                
                <NavLink
                    className={classes['btn-outline']}
                    to="/car/add" end> Add New F1 Cars
                </NavLink>
                </div>
                </td>
                 </tr>
                 <tr>
                 <td>
                    <div className={classes['btn-container']}>
                
                    <NavLink
                    className={classes['btn-outline']}
                    to="/dashboard" end> Locate F1 cars
                </NavLink>

                </div>
                </td>
                 </tr>
                
                
             
               
            
        </div>
    </div>
}

export default Home
