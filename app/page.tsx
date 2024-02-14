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

    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
    {Object.values(card.shoplist).map((item:any,id:number) => (
      <div key={id}>
         <img src={item.image} alt={`Produit`} />
        <h2>{item.Company}</h2>
        <p>Ville: {item.town}</p>
        <p>Adresse: {item.Address}</p>
      
       

      
      </div>
    ))}
  </div>
  
  
  

   
 </div>

  )
}
