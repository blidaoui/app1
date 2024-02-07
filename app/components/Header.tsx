import React from 'react'
import Image from 'next/image'
import cc from '../img/cc.png'

const Header = () => {
  

  return (
    <div className='header'>
        
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container-fluid">
         <div className='container'>
       
       <div className='logo'> 
       <Image 
        src={cc}
        width={150}
       height={150}
       className="hidden md:block"
       alt="Picture of the author"/> </div> 
     </div>
    
     <a href="#"><i className="fa fa-fw fa-user"></i> Login</a>
         
       
         </div>
    </nav> 
    </div>
         
    </div>
    
  )
}

export default Header