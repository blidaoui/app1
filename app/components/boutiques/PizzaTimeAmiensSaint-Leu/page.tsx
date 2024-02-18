import React from 'react';
import { card } from "../../../components/constants";
import Icons from '../../icons/Icons';
import Page from '../../Imagenav/Page';

export default function page() {
  
  const companyIndexToShow = 3; 
  if (companyIndexToShow < 0 || companyIndexToShow >= Object.values(card.shoplist).length) {
    return <p>Index d'entreprise invalide</p>;
  }

  const companyToShow = Object.values(card.shoplist)[companyIndexToShow];

  return ( <>
    <div className='img' style={{ position: 'relative' }}> 
 <Page/>
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
         <Icons/>
        
        </div>
      </div>
    </div>   
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">{companyToShow.produit}</a>
            </li>
            <select className="max-w-xs nav-link"> 
                  {companyToShow.autreproduit.map((produit, index) => (
                    <option key={index} value={produit}> {produit}</option>
                  ))}
                 
                </select>
          </ul>
        </div>
      </nav>
    </div>
 </> );
}
