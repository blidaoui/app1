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
            <p>{item.Company}  </p>
            <p>
              {" "}
              {item.Address},{item.PostalCode} {item.town}
            </p>
            
            
            <a href="pg">
              <img
                src="https://static.vecteezy.com/ti/vecteur-libre/p1/32222460-en-especes-paiement-vecteur-icone-vectoriel.jpg"
                style={{ height: "40px", backgroundColor: "#24A451" }}
                className="rounded-circle"
                alt="no data"
              />
            </a>
            <a href="/nomDossier">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0h2C15VPNVMWxosiKh__iI3v9dLDrlUZdCQ&usqp=CAU"
                style={{ height: "40px", backgroundColor: "#24A451" }}
                className="rounded-circle"
                // className="rounded-circle"
                alt="no data"
              />
            </a>

            <a href="/nomDossier">
              <img
                src="https://images.squarespace-cdn.com/content/v1/6127b214067d690b48359e03/9acacf88-f8fc-4de6-8226-fd8bee969746/TR+%2810%292.png"
                style={{ height: "40px", backgroundColor: "#3a3c3b" }}
                className="rounded-circle"
                // className="rounded-circle"
                alt="no data"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}