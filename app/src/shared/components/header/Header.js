import React from "react";
import {NavLink} from 'react-router-dom'
import './Header.css'
const Header = props =>{
    return <div className="header">
        <nav>
            {props.items && props.items.map((item , index) => <NavLink key={index} to={item.path}><img src={item.icon} /> </NavLink>)}
        </nav>

    </div>
}


export default Header