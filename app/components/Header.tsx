import React from 'react'
import Image from 'next/image'
import logo from '../img/logo.webp'
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
    
     <a href="/Login"><i className="fa fa-fw fa-user "></i> </a>
       
         </div>
    </nav> 
    </div>
         
    </div>
    
  )
}

export default Header