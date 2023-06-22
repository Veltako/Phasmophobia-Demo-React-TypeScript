import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Modal() {
  const [modal, setModal] = useState<boolean>();

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
    <nav>
        <button onClick={toggleModal} className="btn-modal">
          <span></span>
        </button>
    </nav>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div onClick={toggleModal} className="modal-content">
            <h1>Phasmophobia</h1>
            <ul>
              <li><NavLink to="/">Accueil</NavLink></li>
              <li><NavLink to="/cursed">Objets maudit</NavLink></li>
              <li><NavLink to="/">Matériels</NavLink></li>
              <li><NavLink to="/">Entités</NavLink></li>
              <li><NavLink to="/">Trophées</NavLink></li>
              <button>
                Connectez-vous
              </button>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}