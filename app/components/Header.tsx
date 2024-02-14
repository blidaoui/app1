import React from 'react'
import Image from 'next/image'
import logo from '../img/logo.webp'
import dynamic from 'next/dynamic'; 

const DropDownMenu = dynamic(() => import('./DropDownMenu'), { ssr: false }); // Render DropDownMenu on the client side only

const Header = () => {
  return (
    <div className='header'>
        
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container-fluid">
         <div className='container'>
       
       <div className='logo'> 
       <Image 
        src={logo}
        width={80}
       height={80}
       className="hidden md:block"
       alt="Picture of the author"/> </div> 
     </div>
    
    <DropDownMenu />
       
         </div>
    </nav> 
    </div>
         
    </div>
    
  )
}

export default Header