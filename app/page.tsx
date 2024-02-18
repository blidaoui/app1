import React from "react";
import "./globals.css";
import { card } from "./components/constants";
import Header from "./components/shop/Header";
import Icons from "./components/icons/Icons";
import Page from "./components/Imagenav/Page";



export default function page() {
  
  return (
    <div>
     <Page/>
      <span> 
        <Header />
      </span>
      <div className="containers">
        {Object.values(card.shoplist).map((item: any, id: number) => (
          <div key={id}>
            <a href={`/components/boutiques/${item.Company.replace(/\s/g, "")}`}>
              <img src={item.image} alt={`Produit`} className="image" />
            </a>
            <h6 className="h6">{item.Company}  </h6>
            <p>
              {item.Address},{item.PostalCode} {item.town}
            </p>
            <Icons/></div> 
         
        ))}
     </div>
      </div>
  );
}