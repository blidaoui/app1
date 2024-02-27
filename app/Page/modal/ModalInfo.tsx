import { useState } from "react";
import "@/app/Page/modal/modal.css";
import { Button } from "@nextui-org/react";
import "@/app/Page/modal/modal.css"
const App = ({ showModal, setShowModal }: any) => {
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="modal">
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2> Modes de retrait</h2>
            <Button className="button">valider</Button>
          </div>
        </div>
      )}
      <style jsx>{`
        .modal {
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 50%;
          left: 50%;
          width: 250%;
          height: 250%;
        }

        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          width: 30%;
          height: 70%;
        }
        .close {
          float: none; 
          cursor: pointer;
          background-color: red;
          width: 5%;
          height: 5%;
        }  
      `}</style>
    </div>
  );
};

export default App; 