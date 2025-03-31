import { useState } from "react";
import { Link } from "react-router-dom";
import Detail from "./Detail";
import "./Gallery.css";
import "../index.css";

const images = [
  {
    id: 1,
    title: "Space Marine 2",
    description:
      "Usa las habilidades y brutalidad sobrehumanas de los marines espaciales. Usa habilidades letales y armamento devastador para aniquilar a los incesantes enjambres tiránidos. Defiende el Imperium en el modo solitario o multijugador en tercera persona.",
    price: "$10",
    imgSrc: "https://i.postimg.cc/B6tXxz1Z/WH.jpg",
  },
  {
    id: 2,
    title: "Dark Souls III",
    description:
      "Dark Souls continúa redefiniendo los límites con el nuevo y ambicioso capítulo de esta serie revolucionaria, tan aclamada por la crítica. ¡Prepárate para sumergirte en la oscuridad!",
    price: "$15",
    imgSrc: "https://i.postimg.cc/kMzty7c0/D-S-3.jpg",
  },
  {
    id: 3,
    title: "RE 2 Remake",
    description:
      "Publicado originalmente en 1998, Resident Evil 2, uno de los juegos más icónicos de todos los tiempos, regresa completamente reinventado para las consolas de nueva generación.",
    price: "$20",
    imgSrc: "https://i.postimg.cc/KYGKYjGM/R-E-2.jpg",
  },
  {
    id: 4,
    title: "Halo Infinite",
    description:
      "Halo, una de las sagas más icónicas de los videojuegos, es ahora más grande que nunca e incluye una amplia campaña de mundo abierto y una dinámica experiencia multijugador gratuita.",
    price: "$25",
    imgSrc: "https://i.postimg.cc/DyG4jRp8/H-I.jpg",
  },
  {
    id: 5,
    title: "Hogwarts Legacy",
    description:
      "Hogwarts Legacy es un RPG inmersivo de acción en mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico.",
    price: "$30",
    imgSrc: "https://i.postimg.cc/6pN2DzFz/H-L.jpg",
  },
  {
    id: 6,
    title: "COD: Black Ops 6",
    description:
      "Call of Duty®: Black Ops 6 es el Black Ops auténtico, con una campaña cinemática individual, la mejor experiencia Multijugador de su clase y el épico regreso de Zombis por rondas.",
    price: "$35",
    imgSrc: "https://i.postimg.cc/2ybLftz9/C-O-D-B-O.jpg",
  },
  {
    id: 7,
    title: "The last of Us",
    description:
      "Descubre el galardonado juego que inspiró la aclamada serie de televisión. Guía a Joel y Ellie por unos Estados Unidos postapocalípticos y encuentra aliados y enemigos inolvidables en The Last of Us",
    price: "$40",
    imgSrc: "https://i.postimg.cc/mrmP14k6/T-L-O-U.jpg",
  },
  {
    id: 8,
    title: "Diablo IV",
    description:
      "Explora Santuario en solitario o en compañía mientras avanzas en la fascinante campaña de Diablo IV, aceptando misiones, liberando ciudades y luchando contra jefes épicos. Al más puro estilo Diablo, te aguarda un juego avanzado y expansivo, en el que podrás reunirte con otros jugadores en el mundo compartido del juego para intercambiar, formar un equipo o probar tu poder en zonas JcJ sin sala. El juego cruzado, la progresión cruzada y el cooperativo de sofá te permiten continuar la aventura cuando quieras y desde donde sea.",
    price: "$24.990",
    imgSrc: "https://i.postimg.cc/nryjV1rF/D-IV.jpg",
  },
  {
    id: 9,
    title: "Indika",
    description:
      "Juega en 3.ª persona y vive una historia ambientada en una Rusia alternativa de finales del siglo XIX en la que las visiones religiosas colisionan con la dura realidad. INDIKA narra el viaje de autodescubrimiento de una joven monja con un compañero de lo más inusual: el diablo.",
    price: "$45",
    imgSrc: "https://i.postimg.cc/2SFbmhDY/IK.jpg",
  },
  {
    id: 10,
    title: "AC Valhalla",
    description:
      "Assassin's Creed Valhalla es un videojuego de rol de acción desarrollado por Ubisoft Montreal y publicado por Ubisoft. Es el decimosegundo en importancia y el vigesimosegundo lanzado dentro de la saga de Assassin Creed, y sucesor al juego del 2018 Assassin's Creed Odyssey.",
    price: "$45",
    imgSrc: "https://i.postimg.cc/tTmnwbHV/A-V.jpg",
  },
];

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="containerg mt-5">
      <h1>Galería</h1>
      <div className="row">
        {currentItems.map((image) => (
          <div className="col-3" key={image.id}>
            <div className="card">
              <img
                src={image.imgSrc}
                className="card-img-top"
                alt={image.title}
              />
              <div className="card-body">
                <h5 className="card-title">{image.title}</h5>
                <p className="card-textd">{image.description}</p>
                <p className="card-text">
                  <strong>{image.price}</strong>
                </p>

                <Link to="/Detail" className="btncg">
                  Ver más
                </Link>

                <button className="btn btn-success ml-2">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagi">
        <ul className="pagination justify-content-center">
          {[...Array(Math.ceil(images.length / itemsPerPage)).keys()].map(
            (number) => (
              <li
                className={`page-item ${
                  currentPage === number + 1 ? "active" : ""
                }`}
                key={number}
              >
                <button
                  className="page-link"
                  onClick={() => paginate(number + 1)}
                >
                  {number + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
