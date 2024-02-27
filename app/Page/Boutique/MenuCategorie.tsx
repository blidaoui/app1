import store from '@/app/components/store';
import { card } from '@/app/constants/constants';
import { Card } from '@nextui-org/react';
import React, { useState } from 'react';
import { useSnapshot } from 'valtio';
import Modal from '../modal/Modal';

function MenuCategorie() {
  const [showModal, setShowModal] = useState(false);

  const { id } = useSnapshot(store);
  const categorieShop: any = Object.values(card.categories).filter((el: any) => el.shopid === id);

  return (
    <Card>
      <div className="d-flex justify-content-between" >
        <div className='mt-2'>
          <a onClick={() => setShowModal(true)}  role="button">
          <ul style={{ backgroundColor: "#FFFFFF" }} >
            {categorieShop.slice(0, 10).map((value: any, index: number) => (
              <li key={index} onClick={() => setShowModal(true)}>{value.title}</li>
          ))}
          </ul> </a>   
        </div>
        <div className='d-flex align-items-center '>
        <a onClick={() => setShowModal(true)}  role="button">
          <select className="max-w-xs nav-link mx-5">
            {categorieShop.slice(10, categorieShop.length).map((value: any, index: number) => (
              <option key={index} value={value.title} onClick={() => setShowModal(true)}>{value.title}</option>
            ))}
          </select>  </a>
          {showModal && (
            <>
              <div
                className="modal-background"
                onClick={() => setShowModal(false)}
              />
              <Modal setShowModal={setShowModal} showModal={showModal} />
            </>
          )}
      </div>
      </div>
    </Card>
  );
}

export default MenuCategorie;
