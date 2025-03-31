import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import "./Gallery.css";
import "./Detail.css";

const Detail = () => {
  return (
    <div className="homeg">
      <div className="nav1">
        <nav id="menu">
          <ul>
            <li>
              <a href="#">Categorías ▼</a>
              <ul>
                <li>
                  <Link to="/Gallery">Ver todas</Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Ofertas</a>
            </li>
            <li>
              <a href="#">Noticias</a>
            </li>
          </ul>
        </nav>
        <div className="buscar">
          <input
            type="search"
            id="site-search"
            name="q"
            placeholder="Buscar por nombre de juego..."
          />

          <button>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="notde">
        <img
          src="https://i.postimg.cc/T2VqwqHs/detalle-juego.jpg"
          alt="Detalle"
        />
        <div className="textde">
          <h1>Diablo IV</h1>
          <h3>Precio: $24.990 Rank: 86/100</h3>
          <p>
            Explora Santuario en solitario o en compañía mientras avanzas en la
            fascinante campaña de Diablo IV, aceptando misiones, liberando
            ciudades y luchando contra jefes épicos. Al más puro estilo Diablo,
            te aguarda un juego avanzado y expansivo, en el que podrás reunirte
            con otros jugadores en el mundo compartido del juego para
            intercambiar, formar un equipo o probar tu poder en zonas JcJ sin
            sala. El juego cruzado, la progresión cruzada y el cooperativo de
            sofá te permiten continuar la aventura cuando quieras y desde donde
            sea.
          </p>
          <div className="butde">
            <button>Comprar</button>
            <button>Añadir al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
