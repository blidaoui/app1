
import Image from 'next/image';
import moto from '../../public/icons/moto.png'
import panierrepas from '../../public/icons/panierrepas.png'
import { useState } from 'react';
import '@/app/pages/modal.css';
const App = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={toggleModal} className='button type1' type="button">
      <span className="btn-txt">Commander</span>
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2 > Modes de retrait</h2>
        <div  style={{ display: 'flex' , alignItems: 'center'}}>
      <div className='container'>
        <a href=''>
         <Image 
           src={moto} 
           alt="moto"
           style={{    
            width: '30%',
           height: '30%',}}
           className="hidden md:block"/>  </a>
         <div>a importer</div>
      
      </div>
      <div>
        <a href=''>
      <Image 
           src={panierrepas} 
           alt="pizza"
           className="hidden md:block"
           style={{    
            width: '30%',
           height: '30%',
           }}/> 
         </a>
      <div> en livraison</div>
      </div>
      </div>
     <div className='text'> <p> Aujourd'hui</p></div>
          </div>
        </div>
      )}
      <style jsx>{`
        .modal {
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          width: 30%;
          height: 70%;
        }

        .close {
          align-items: left;
          float: left;
          cursor: pointer;
          background-color:red;
          width: 5%;
          height: 5%;
        }
      `}</style>
    </div>
  );
};

export default App;
