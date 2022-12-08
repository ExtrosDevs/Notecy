import React, {  useRef, useState } from "react";
import { NavLink } from 'react-router-dom'
import DropDown from "./DropDown";
import './Header.css'
import icon from '../icons/icon.json'
const Header = props => {
    const [showDropDown, setShowDropDown] = useState(false)
    const [offset, setOfsset] = useState(100)
    const profile = useRef()
    const profileClickHandler = event => {
        setOfsset(profile.current.offsetLeft-profile.current.offsetWidth*2)
        setShowDropDown(!showDropDown)
    }

    return <div className="header" >
        <nav  >
            {props.items && props.items.map((item, index) => {
                if (item.profile) {
                    return <button ref={profile} key={index} onClick={profileClickHandler}><img src={item.icon} alt='account' /> </button>
                }
                else
                    return <NavLink key={index} to={item.path}><img src={item.icon} alt="item"/> </NavLink>
            })}
        </nav>
        {showDropDown && <DropDown offset={offset} items={[{ name: 'account', icon: icon.account, path: '/' }, { name: 'My notes', icon: icon.note, path: '/' }]} />}
    </div>
}


export default Header