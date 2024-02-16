import React from 'react';
import Image from "next/image";
import imgheader from '../../../img/imgheader.jpg';
import { card } from "../../../components/constants";

export default function page() {
  const companyIndexToShow = 2; 

  if (companyIndexToShow < 0 || companyIndexToShow >= Object.values(card.shoplist).length) {
    return <p>Index d'entreprise invalide</p>;
  }

  const companyToShow = Object.values(card.shoplist)[companyIndexToShow];

  return (
    <div className='img'> 
      <Image  
        src={imgheader}
        style={{
          width: '100%',
          height: '250', 
        }}
        className="hidden md:block"
        alt="pizza"
      />
      <div className="containers">
        <div>
          <p>{`${companyToShow.Company.replace(/\s/g, "")}`} </p>
          <p>
            {" "}
            {companyToShow.Address},{companyToShow.PostalCode} {companyToShow.town}
          </p>
        </div>
      </div>
    </div>   
  );
}
