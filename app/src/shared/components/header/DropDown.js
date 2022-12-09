import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

import './DropDown.css'

const DropDown = props => {
    return <div className="drop-down" style={{ left: props.offset }} onMouseLeave={props.onMouseLeave}>
        {props.items && props.items.map((item, index) => <NavLink key={index} to={item.path} className="item" >
 
                <Button startIcon={item.icon}  size="large" sx={{width:'100%', height:'100%', color:'black'}} >
                    {item.name}
                </Button>
            </NavLink>
        )}
        
    </div>
}


export default DropDown