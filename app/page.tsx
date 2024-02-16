import React from "react";
import Image from "next/image";
import "./globals.css";
import imgheader from "../app/img/imgheader.jpg"
import { card } from "./components/constants";
import Header from "./components/shop/Header";
 
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

      <span>
        {/* {" "}
        <h1 className="text">Nos magasins à proximité</h1> */}
        <Header />
      </span>
      <div className="containers">
        {Object.values(card.shoplist).map((item: any, id: number) => (
          <div key={id}>
            <a href={`/components/boutiques/${item.Company.replace(/\s/g, "")}`}>
              <img src={item.image} alt={`Produit`} className="image" />
            </a>
            <p>{item.Company} </p>
            <p>
              {" "}
              {item.Address},{item.PostalCode} {item.town}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}