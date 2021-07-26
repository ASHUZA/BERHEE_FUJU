import './../scss/PageLivreBible.scss';

import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import livreItem from '../components/livreItem';


function PageLivreBible({ShowChap}) {


    const Livres = [
    
        { id: 1, nom: "Genèse", Testament: "AT", codelivre: 'genesis', chapitres: 7 },
        { id: 2, nom: "Exode", Testament: "AT", codelivre: 'genesis', chapitres: 5 },
        { id: 3, nom: "Levitique", Testament: "AT", codelivre: 'genesis', chapitres: 17 },
        { id: 4, nom: "Nombre", Testament: "AT", codelivre: 'genesis', chapitres: 13 },
        { id: 5, nom: "Deuteronome", Testament: "AT", codelivre: 'genesis', chapitres: 11 },
        { id: 6, nom: "Josue", Testament: "AT", codelivre: 'genesis', chapitres: 17 },
        { id: 7, nom: "Juges", Testament: "AT", codelivre: 'genesis', chapitres: 11 },
        { id: 8, nom: "1 Samuel", Testament: "AT", codelivre: 'genesis', chapitres: 17 },
        { id: 9, nom: "2 Samuel", Testament: "NT", codelivre: 'genesis', chapitres: 17 },

        { id: 10, nom: "1 Rois", Testament: "NT", codelivre: 'genesis', chapitres: 17 },
        { id: 11, nom: "2 Rois", Testament: "AT", codelivre: 'genesis', chapitres: 17 },
        { id: 12, nom: "1 Chroniques", Testament: "AT", codelivre: 'genesis', chapitres: 17 },
        { id: 13, nom: "2 Chroniques", Testament: "AT", codelivre: 'genesis', chapitres: 17 },
    
    
    ];


    const LivresNT = Livres.filter(function (element) {
        return element.Testament === "NT";
    });

    const LivresAT = Livres.filter(function (element) {
        return element.Testament === "AT";
    });



 
   
    const [livresTestament, setlivresTestament] = useState([])


    const changeAT = (e) => {

            setlivresTestament(e)
    }





    // let livresTestament =[];
    // livresTestament = LivresAT



  
    return (

        <>
            <div className="liste_livre">

                <div className="liste_livre_title">

                    <div className="liste_livre_profile">
                    </div>
                    <div className="liste_livre_testament">

                        <button  className="btntestament activebtn" onClick={() => changeAT(LivresAT)}> Ancien Testament </button>
                        <button className="btntestament" onClick={() => changeAT(LivresNT)}> Nouveau Testament </button>
                        
                        {/* <NavLink to="PageMovies" className="btntestament activebtn" >Nouveau Testament</NavLink>
                        <NavLink to="PageMovies" className="btntestament" >Ancien Testament</NavLink> */}
                    </div>
                </div>

                <div className="liste_livre_body">
                    <ul>
                        {livresTestament.map(function (element) {
                            return (
                                <>
                                    <li><NavLink to="PageBtnChap" className="btnlivre" onClick={() => ShowChap(element.id)} >{element.nom}</NavLink></li>
                                </>
                            );
                        })}
                    </ul>
                </div>

            </div>


        </>

    );
}
export default PageLivreBible;

