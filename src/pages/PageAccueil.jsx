
import './../scss/PageAccueil.scss';


import { Link, NavLink } from "react-router-dom";
function PageAccueil() {

    return (

        <>

            <div className="accueil">
                <div className="accueil_title">
                    <div className="accueil_img_profil">

                        <div></div>
                    </div>

                    <h1 className="accueil_main_title">Welcome to <span>ESB APP</span></h1>
                </div>
                <div className="accueil_button_box">



                    <NavLink to="pageLivreBible" class="btnAT">Lecture de la bible</NavLink>
                    <NavLink to="SectionFooter" class="btnNV">Quiz</NavLink>
                    <NavLink to="chapitre1" class="btnNV">Citations Hommes de Dieu</NavLink>
                    <NavLink to="Chapitre" class="btnNV">Verser par théme</NavLink>
                    <NavLink to="PageBtnChap" class="btnNV">Blog</NavLink>


                </div>
                <div className="accueil_footer">
                    <div className="social-links mt-3">
                        <a className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="./../src/BfAmplifierAT.html" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>

                </div>
            </div>



        </>

    );
}
export default PageAccueil;