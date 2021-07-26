
import './scss/SectionFooter.scss';
import './boxicons/css/boxicons.min.css';

import PageAccueil from './pages/PageAccueil';


function SectionFooter() {

  return (

    <>


      {/* <PageAccueil></PageAccueil> */}
      <footer className="footerbg text-start text-white" id="footer">
        <div className="footer-top">


          {/* 
        <div className="container p-4 pb-0">

          <section className="">
            <form action="">

              <div className="row d-flex justify-content-center">


                <div className="col-md-5 col-12">
                  <form className="d-flex input-group w-auto">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search movies"
                      aria-label="Search"
                    />

                  </form>
                </div>



                <div className="col-auto">

                  <button type="submit" className="btn btn-outline-light mb-4">
                    search
           </button>
                </div>

              </div>

            </form>
          </section>

        </div> */}


          <div className="container p-4">




            <div className="container">
              <div className="row">

                <div className="col-lg-4 col-md-6">
                  <div className="footer-info">
                    <h3>ASH CINE</h3>
                    <p>
                      47 Budjala Kintamno<br />
        KINSHASA, RDC<br /><br />
                      <strong>Phone:</strong> +243 97 6347207<br />
                      <strong>Email:</strong> ashuzakasumbepascal19@gmail.com<br />
                    </p>
                    <div className="social-links mt-3">
                      <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                      <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                      <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                      <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                      <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Films</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Series</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Acteurs</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Contact</a></li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="#">Developpement web</a></li>
                  </ul>
                </div>

                <div className="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Our Newsletter</h4>
                  <p>Enregistrer vous pour toujours être mis au courant de nos nouvelles</p>
                  <form action="" method="post">
                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                  </form>

                </div>

              </div>
            </div>
          </div>





          <div className="text-center p-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2021 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">kinshasadigital.com</a>
          </div>
        </div>
      </footer>
    </>

  );
}
export default SectionFooter;