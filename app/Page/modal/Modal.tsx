import Image from "next/image";
import moto from "@/app/image/moto.png";
import panierrepas from "@/app/image/panierrepas.png";
import { useState } from "react";
import "@/app/Page/modal/modal.css";
import { Button } from "@nextui-org/react";

const App = ({ showModal, setShowModal }: any) => {
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeChange = (event: any) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="modal1">
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2> Modes de retrait</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="container">
                <a href="">
                  <Image
                    src={moto}
                    alt="moto"
                    style={{
                      width: "30%",
                      height: "30%",
                    }}
                    className="hidden md:block"
                  />{" "}
                </a>
                <div>a importer</div>
              </div>
              <div>
                <a href="">
                  <Image
                    src={panierrepas}
                    alt="pizza"
                    className="hidden md:block"
                    style={{
                      width: "30%",
                      height: "30%",
                    }}
                  />
                </a>
                <div> en livraison</div>
              </div>
            </div>
            <div className="text">
              {" "}
              <p> Aujourd hui</p>
            </div>
            <div>
              <label htmlFor="timeInput"></label>
              <input
                type="time"
                id="timeInput"
                className="timeInput"
                value={selectedTime}
                onChange={handleTimeChange}
              />
            </div>
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
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .modal-content {
          background-color: white;
          align-items: center;
          justify-content: center;
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
          left:20%
          
        }
        
        
      `}</style>
    </div>
  );
};

export default App; 