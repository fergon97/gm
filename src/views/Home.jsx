import React from "react";
import "../index.css";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";

const Home = () => {
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
      <div className="noticia">
        <img
          src="https://i.postimg.cc/C5tXNrrG/juego-noticia.jpg"
          alt="Noticia"
        />
        <div className="text-noti">
          <h1>Silent Hill 2 Remake</h1>
          <p>
            Bloober Team y la editora Konami han anunciado que el remake de
            Silent Hill 2 ha vendido más de dos millones de copias en todo el
            mundo, tanto en formato digital como físico. Tras su lanzamiento
            para PC y PlayStation 5 en octubre de 2024, Silent Hill 2 vendió más
            de un millón de copias en sus primeros tres días, convirtiéndose en
            el título con mayor venta de la longeva franquicia.
          </p>
          <button>Ir a la noticia</button>
        </div>
      </div>
      <div className="gal">
        <h1 className="text-left text-2xl font-bold mb-4">Ranking Estelar</h1>
        <Carousel />
      </div>
    </div>
  );
};
export default Home;
