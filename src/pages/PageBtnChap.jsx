

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../scss/PageBtnChap.scss';


import { Link, NavLink } from "react-router-dom";
function PageBtnChap({ IdLivre }) {


    // alert(IdLivre);


    const LivreChap = [
        { id: 1, nom: "Genèse", Testament: "AT", codelivre: 'genesis', chapitres: 5 },
        { id: 2, nom: "Exode", Testament: "AT", codelivre: 'genesis', chapitres: 5 },
        { id: 3, nom: "Levitique", Testament: "AT", codelivre: 'genesis', chapitres: 17 },
        { id: 4, nom: "Nombre", Testament: "AT", codelivre: 'genesis', chapitres: 13 },
        { id: 5, nom: "Deuteronome", Testament: "AT", codelivre: 'genesis', chapitres: 11 },
        { id: 6, nom: "Josue", Testament: "AT", codelivre: 'genesis', chapitres: 17 },
        { id: 7, nom: "Juges", Testament: "AT", codelivre: 'genesis', chapitres: 11 },
        { id: 8, nom: "1 Samuel", Testament: "AT", codelivre: 'genesis', chapitres: 17 },
        { id: 9, nom: "2 Samuel", Testament: "AT", codelivre: 'genesis', chapitres: 17 },

        { id: 10, nom: "1 Rois", Testament: "AT", codelivre: 'genesis', chapitres: 17 },
        { id: 11, nom: "2 Rois", Testament: "AT", codelivre: 'genesis', chapitres: 17 },
        { id: 12, nom: "1 Chroniques", Testament: "AT", codelivre: 'genesis', chapitres: 17 },
        { id: 13, nom: "2 Chroniques", Testament: "AT", codelivre: 'genesis', chapitres: 17 },
    ];

    const LectureLivre = LivreChap.find(function (element) {
        return element.id === IdLivre;
    });

    //   console.log(LectureLivre.nom);

    const LivreBtnCree = [];

    for (let i = 1; i < LectureLivre.chapitres; i++) {

        LivreBtnCree.push(<NavLink to="chapitre[i]" class="Btnchap"  >{i}</NavLink>);
    };





    console.log(LivreBtnCree);
    return (

        <>
            <div className="pagechapcontainer">
                <h1>{LectureLivre.nom}</h1>

                <div className="btncontainer">

                    <NavLink to="chapitre1" class="Btnchap">12</NavLink>

                    {/* {apprenants.map(function (element) {
                return (
                    <NavLink to="genesis-2-en_amplified" class="Btnchap"  ShowChapfromchild={GetIdlivre}>{element.age}</NavLink>
                );
              })} */}


                    {LivreBtnCree.map(function (element) {
                        return (
                            element

                        );
                    })}







                </div>

            </div>
        </>

    );
}
export default PageBtnChap;

