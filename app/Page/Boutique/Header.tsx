import Icons from '@/app/components/Icons/Icons';
import ImgHeader from '@/app/components/ImgHeader'
import store from '@/app/components/store';
import { card } from '@/app/constants/constants'
import React from 'react'
import { useSnapshot } from 'valtio/react';
import ModalInfo from '../modal/ModalInfo';
import { Card } from '@nextui-org/react';

function Header() {
    const [showModal, setShowModal] = React.useState(false);
    const {id}= useSnapshot(store)  
    const companyToShow:any = Object.values(card.shoplist)[id];
  return (
    <div className='img' style={{ position: 'relative' }}> 
    <ImgHeader/>
    <Card>
    <div className="containers" style={{
        position: 'absolute',
        top: '50%',
        height:'14rem',
        width:'30%',
        left: '20%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>        
        
      <p>
        {`${companyToShow.Company.replace(/\s/g, "")}`}  </p>
          <p>ouvert de {companyToShow.openingTime1 } à {companyToShow.closingTime1} et de {companyToShow.openingTime2}  à {companyToShow.closingTime2}</p>
          <p>
            {" "}
            {companyToShow.Address},{companyToShow.PostalCode} {companyToShow.town}   
          </p>
          <p role="button" onClick={() => setShowModal(true)}>Informations utiles</p>
          <ModalInfo setShowModal={setShowModal} showModal={showModal} />
          <Icons />        
        </div> 
        </Card>
        </div>
     
    
  )
}
export default Header
