import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

const images = [
  {
    src: "https://i.postimg.cc/kMzty7c0/D-S-3.jpg",
    description:
      "Dark Souls continúa redefiniendo los límites con el nuevo y ambicioso capítulo de esta serie revolucionaria, tan aclamada por la crítica. ¡Prepárate para sumergirte en la oscuridad!",
    rank: "89/100",
    name: "Dark Souls III",
  },
  {
    src: "https://i.postimg.cc/KYGKYjGM/R-E-2.jpg",
    description:
      "Publicado originalmente en 1998, Resident Evil 2, uno de los juegos más icónicos de todos los tiempos, regresa completamente reinventado para las consolas de nueva generación.",
    rank: "91/100",
    name: "RE 2 Remake",
  },
  {
    src: "https://i.postimg.cc/DyG4jRp8/H-I.jpg",
    description:
      "Halo, una de las sagas más icónicas de los videojuegos, es ahora más grande que nunca e incluye una amplia campaña de mundo abierto y una dinámica experiencia multijugador gratuita.",
    rank: "87/100",
    name: "Halo Infinite",
  },
  {
    src: "https://i.postimg.cc/6pN2DzFz/H-L.jpg",
    description:
      "Hogwarts Legacy es un RPG inmersivo de acción en mundo abierto. Ahora puedes tomar el control de la acción y ser el centro de tu propia aventura en el mundo mágico.",
    rank: "84/100",
    name: "Hogwarts Legacy",
  },
  {
    src: "https://i.postimg.cc/B6tXxz1Z/WH.jpg",
    description:
      "Usa las habilidades y brutalidad sobrehumanas de los marines espaciales. Usa habilidades letales y armamento devastador para aniquilar a los incesantes enjambres tiránidos. Defiende el Imperium en el modo solitario o multijugador en tercera persona.",
    rank: "82/100",
    name: "Space Marine 2",
  },
  {
    src: "https://i.postimg.cc/2ybLftz9/C-O-D-B-O.jpg",
    description:
      "Call of Duty®: Black Ops 6 es el Black Ops auténtico, con una campaña cinemática individual, la mejor experiencia Multijugador de su clase y el épico regreso de Zombis por rondas.",
    rank: "82/100",
    name: "COD: Black Ops 6",
  },
  {
    src: "https://i.postimg.cc/mrmP14k6/T-L-O-U.jpg",
    description:
      "Descubre el galardonado juego que inspiró la aclamada serie de televisión. Guía a Joel y Ellie por unos Estados Unidos postapocalípticos y encuentra aliados y enemigos inolvidables en The Last of Us™.",
    rank: "84/100",
    name: "The Last of Us",
  },
  {
    src: "https://i.postimg.cc/nryjV1rF/D-IV.jpg",
    description:
      "Explora Santuario en solitario o en compañía mientras avanzas en la fascinante campaña de Diablo IV, aceptando misiones, liberando ciudades y luchando contra jefes épicos. Al más puro estilo Diablo, te aguarda un juego avanzado y expansivo, en el que podrás reunirte con otros jugadores en el mundo compartido del juego para intercambiar, formar un equipo o probar tu poder en zonas JcJ sin sala. El juego cruzado, la progresión cruzada y el cooperativo de sofá te permiten continuar la aventura cuando quieras y desde donde sea.",
    rank: "86/100",
    name: "Diablo IV",
  },
  {
    src: "https://i.postimg.cc/2SFbmhDY/IK.jpg",
    description:
      "Juega en 3.ª persona y vive una historia ambientada en una Rusia alternativa de finales del siglo XIX en la que las visiones religiosas colisionan con la dura realidad. INDIKA narra el viaje de autodescubrimiento de una joven monja con un compañero de lo más inusual: el diablo.",
    rank: "80/100",
    name: "Indika",
  },
  {
    src: "https://i.postimg.cc/tTmnwbHV/A-V.jpg",
    description:
      "Assassin's Creed Valhalla es un videojuego de rol de acción desarrollado por Ubisoft Montreal y publicado por Ubisoft. Es el decimosegundo en importancia y el vigesimosegundo lanzado dentro de la saga de Assassin Creed, y sucesor al juego del 2018 Assassin's Creed Odyssey.",
    rank: "80/100",
    name: "AC Valhalla",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full p-4">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="cg p-2">
            <img
              src={image.src}
              alt={image.description}
              className="w-auto h-40 object-cover rounded-lg"
            />
            <h2 className="gbt text-center">{image.name}</h2>
            <p className="pc">{image.description}</p>
            <p className="text-center mt-2">
              <i className="fa fa-star" aria-hidden="true"></i>
              {image.rank}
            </p>
            <button className="cbb block mx-auto mt-2 bg-blue-500 px-4 py-1 rounded">
              Ver más
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
