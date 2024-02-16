import React from 'react';
import Image from "next/image";
import imgheader from '../../../img/imgheader.jpg';
import { card } from "../../../components/constants";

export default function page() {
  
  const companyIndexToShow = 1; 
  if (companyIndexToShow < 0 || companyIndexToShow >= Object.values(card.shoplist).length) {
    return <p>Index d'entreprise invalide</p>;
  }

  const companyToShow = Object.values(card.shoplist)[companyIndexToShow];

  return (
    <div className='img' style={{ position: 'relative' }}> 
      <Image  
        src={imgheader}
        style={{
          width: '100%',
          height: '250', 
        }}
        className="hidden md:block"
        alt="pizza"
      />
      <div className="containers" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div>
          <p>{`${companyToShow.Company.replace(/\s/g, "")}`}  </p>
          <p>fermé</p>
          <p>
            {" "}
            {companyToShow.Address},{companyToShow.PostalCode} {companyToShow.town}   
          </p>
          <a href=''>Informations utiles</a>
            <div></div>
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
      </div>
    </div>   
  );
}
