'use client'
import React from 'react'
import { useState } from 'react'
import { CiLogout } from 'react-icons/ci';
import { CgMail } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import './dropdown.css'

function DropDownMenu(): React.JSX.Element {

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
      <p className="username"></p>
    </div>
    <div className="menuToggle" onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className="menu">
      <li>
        <p><CgMail /> E-mail
        <input className='input' placeholder='Saisssez votre e-mail'></input>
      </p></li>
      <li>
        <p><RiLockPasswordFill />  Mot de passe
        <input className='input' placeholder='Saisssez votre mot de passe'></input>
      </p></li>
      <button>
        Connexion
    <div className="arrow-wrapper">
        <div className="arrow"></div> 
    </div>
</button>
    <div> <p className='text'>ou</p>
    <a href=''>Inscription</a>
    </div>
      <li>
        <a href="/"><CiLogout/> Logout</a>
      </li>
    </ul>
  </div>
);
}



export default DropDownMenu 