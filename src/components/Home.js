import { Helmet } from "react-helmet";
import "./Home.scss";
import arrowDown from "../assets/arrow_down.svg";
import arrowRight from "../assets/arrow_right.svg";

function Home() {

  return (
    <div className="landing_page">
      <Helmet>
        <title>Laser Zone Hospitalet | El mejor centro de Laser Tag</title>
      </Helmet>

      <section>
        <div className="landing_container">
          <img
            className="logo_landing"
            src={require("../assets/logo_landing.png")}
          />
          <a href="#tarifas" className="arrow_down">
            <img src={arrowDown} />
          </a>
        </div>
        <div className="divider_1"></div>
      </section>
      <section>
        <div className="tarifas" id="tarifas">
          <h2>TARIFAS</h2>
          <div className="tarifas_content">
            <div>
              <h3>1</h3>
              <h5>SESIÓN</h5>
              <h4>9,50€</h4>
            </div>
            <div>
              <h3>2</h3>
              <h5>SESIONES</h5>
              <h4>18,00€</h4>
            </div>
          </div>
          <div className="discount">
            <h3>-10% DESCUENTO</h3>
            <p>DE LUNES A JUEVES ESCOLARES</p>
          </div>
          <a href="/" className="reserva_btn_parent">
            <a className="reserva_btn" >
              RESERVAR AHORA
            </a>
            <img src={arrowRight} className="arrow_right"/>
          </a>
        </div>
        <div className="divider_2"></div>
      </section>
      <section>
        <div className="fiestas" id="fiestas">
          <h2>FIESTAS DE CUMPLEAÑOS</h2>
        </div>
      </section>
    </div>
  );
}

export default Home;
