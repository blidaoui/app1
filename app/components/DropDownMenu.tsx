'use client'
import React from 'react'
import { useState } from 'react'
import {IoMdNotificationsOutline} from 'react-icons/io'
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { CiLogout } from 'react-icons/ci';
import {CiSettings} from 'react-icons/ci'
import {RiEditBoxLine} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'
import './dropdown.css'
function DropDownMenu() {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(!isActive);
    };
  
  return (
    <div className={`navigation${isActive ? " active" : ""}`}>
    <div className="userBx">
      <div className="imgBx">
        <img src="/img/user2.jpg" alt="user" />
      </div>
      <p className="username">Jully smith</p>
    </div>
    <div className="menuToggle" onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className="menu">
      <li>
        <a href="/"><CgProfile/>My profile</a>
      </li>
      <li>
        <a href="/"><RiEditBoxLine/> Edit</a>
      </li>
      <li>
        <a href="/"><IoMdNotificationsOutline/> Notifications</a>
      </li>
      <li>
        <a href="/"><CiSettings/> Settings</a>
      </li>
      <li>
        <a href="/"><IoIosHelpCircleOutline/> Help & support</a>
      </li>
      <li>
        <a href="/"><CiLogout/> Logout</a>
      </li>
    </ul>
  </div>
);
}



export default DropDownMenu