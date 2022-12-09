import React, { useEffect, useRef, useState } from "react";
import { NavLink } from 'react-router-dom'
import DropDown from "./DropDown";
import './Header.css'
import { Button, Fade } from '@mui/material'
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

import { Box } from "@mui/material";


const Header = props => {
    const [showDropDown, setShowDropDown] = useState(false)
    const [offset, setOfsset] = useState(100)
    const profile = useRef()

    const profileClickHandler = event => {
        setOfsset(profile.current.offsetLeft - profile.current.offsetWidth * 1.9)
        setShowDropDown(!showDropDown)
    }
    
    useEffect(() => {
        window.addEventListener('resize', function () {
            setOfsset(profile.current.offsetLeft - profile.current.offsetWidth * 1.9)
        })
    }, [])

    return <div className="header"  >
        <nav >
            {props.items && props.items.map((item, index) => {
                if (item.profile) {
                    // if the item is the profile icon will be an normal button
                    return <Button className='b' ref={profile} key={index} onClick={profileClickHandler}>{item.icon} </Button>
                }
                else
                    return <Button key={index}> <NavLink to={item.path}>{item.icon} </NavLink></Button>
            })}
        </nav>

        <Box sx={{ display: 'flex' }}>
            {/* this part for transition the drop-down menu */}
            <Fade  direction="up" in={showDropDown}><div    ><DropDown offset={offset} items={[
                { name: 'account', icon: <AccountCircleIcon />, path: '/' },
                { name: 'My notes', icon: <StickyNote2Icon />, path: '/' }]} /></div></Fade>
        </Box>

    </div>
}


export default Header