

import './../scss/PageVersionBible.scss';


import { Link, NavLink } from "react-router-dom";
function PageVersionBible() {

    return (

        <>

            <div className="liste_version">
                <div className="liste_version_box">
                    <NavLink to="PageMovies" className="btnversion" >Nouveau Testament</NavLink>
                </div>

                <div className="liste_version_box">
                    <NavLink to="PageMovies" className="btnversion" >Ancien Testament</NavLink>
                </div>


                <div className="liste_version_box">
                    <NavLink to="PageMovies" className="btnversion" >Ancien Testament</NavLink>
                </div>


                <div className="liste_version_box">
                    <NavLink to="PageMovies" className="btnversion" >Ancien Testament</NavLink>
                </div>


                <div className="liste_version_box">
                    <NavLink to="PageMovies" className="btnversion" >Ancien Testament</NavLink>
                </div>

                <div className="liste_version_box">
                    <NavLink to="PageMovies" className="btnversion" >Ancien Testament</NavLink>
                </div>
            </div>

        </>

    );
}
export default PageVersionBible;

