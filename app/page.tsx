"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { card } from "./constants/constants";
import Navbar from "./components/Navbar";
import ImgHeader from "./components/ImgHeader";
import Icons from "./components/Icons/Icons";
import { setId } from "./components/store";
import Link from "next/link";
import Header from "./components/Navbar/Header";

export default function Home() {
  const router = useRouter();

  // Fonction pour vérifier si le magasin est ouvert en fonction de son ID
  const isShopOpen = (id: number) => {
    // Si l'ID est 0 ou 1, considérez le magasin comme ouvert, sinon considérez-le comme fermé
    if (id === 0 || id === 2) {
      return true;
    } else {
      return false;
    }
  };

  // Fonction pour naviguer vers une autre page avec l'ID du magasin sélectionné
  const navigateToOtherPage = (id: number) => {
    setId(id);
    localStorage.setItem("id", id.toString());
    router.push("/components/Boutiques");
  };

  return (
    <div>
      <Header />
      <ImgHeader />
      <Navbar />
      {/* container ya3ni el contenue elkol  */}
      <div className="container " role="button">
        {/* row bech ngasem el pg  */}
        <div className="row ">
          {/* récupère toutes les valeurs de la liste  et map itère sur chaque élément de cette liste */}
          {Object.values(card.shoplist).map((item: any, id: number) => {
            // Vérifier si le magasin est ouvert ou fermé en fonction de son ID
            const isOpen = isShopOpen(id);
            return (
              <div
                key={id}
                onClick={() => navigateToOtherPage(id)}
                className="col-sm-3 my-3"
              >
                <div className="card" style={{ width: "18rem" }}>
                  <Link href="/components/Boutiques">
                    <img
                      src={item.image}
                      alt="Card image cap"
                      className="card-img-top"
                    />
                  </Link>
                  <div className="card-body">
                    <p className="card-title">{item.Company}</p>
                    {/* Utilisation de la valeur de isOpen pour déterminer le texte et la couleur */}
                    <p
                      style={{
                        display: "inline",
                        color: isOpen ? "green" : "red",
                      }}
                    >
                      {isOpen ? "Ouvert" : "Fermé"}
                    </p>
                    <p>
                      {item.Address}, {item.PostalCode} {item.town}
                    </p>
                    <Icons />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}