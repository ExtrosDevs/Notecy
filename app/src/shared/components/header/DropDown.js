import React from "react";
import { NavLink } from "react-router-dom";

import './DropDown.css'

const DropDown = props =>{
    return <div className="drop-down" style={{left:props.offset}}>
        {props.items && props.items.map((item, index) => <NavLink key={index} to={item.path} className="item" >
            <img src={item.icon}  alt={item.name}/>
            <p>{item.name}</p>
    </NavLink>)}
    </div>
}


export default DropDown