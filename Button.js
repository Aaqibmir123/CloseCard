import { Fragment } from "react";
import classes from './Header.module.css';

const Button=(props)=>{

    return(
        <Fragment>
            <button className={classes.button} onClick={props.onClick}>
                <span>Your Cart</span>
                <span className={classes.badge}>0</span>
            </button>
        </Fragment>

    )
}
export default Button;