import React from 'react'
import Image from 'next/image'
import "./globals.css";
import imgheader from "../app/img/imgheader.jpg"
import {card} from "../app/components/constants"



export default function page() {
 
  return (
   <div> 
     <div className='img'> 
       <Image 
       src={imgheader}
       style={{
        width: '100%',
        height: '250',
         }}
       
        className="hidden md:block"
         alt="pizza"/> 
      </div>  

<span> <h1 className='text'>Nos magasins à proximité</h1></span>
    <div className='containers' >
    {Object.values(card.shoplist).map((item:any,id:number) => (
      <div key={id}>
         <img src={item.image} alt={`Produit`} />
        <p >{item.Company} </p>
        <p> {item.Address},{item.PostalCode} {item.town}</p>
        
      </div>
    ))}
  </div>
  
  
  

   
 </div>

  )
}
