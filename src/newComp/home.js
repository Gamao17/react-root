import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
return ( 
    <div className="container mt-4">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <h1 className="display-4">Bienvenue sur notre site de films</h1>
        <p className="lead">
          Découvrez une sélection de films de qualité pour tous les goûts. Profitez de nos recommandations personnalisées et de nos critiques d'experts pour trouver votre prochain coup de cœur.
        </p>
        <p>
          Installez-vous confortablement et laissez-nous vous transporter dans l'univers magique du cinéma. Bon film !
        </p>
      </div>
    </div>
  </div>
             );
        }
 
export default Home;