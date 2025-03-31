import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <Navbar>
      <Container>
        <div className="logo">
          <img
            src="https://i.postimg.cc/FRZ34ZCt/logo-blanco.png"
            alt="Logo Tienda"
          />
        </div>
        <div className="urls">
          <Link to="/" className="text-white ms-3 text-decoration-none">
            <i className="fa fa-home" aria-hidden="true"></i> Inicio
          </Link>
          <Link to="/Cart" className="text-white ms-3 text-decoration-none">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i> Carrito
          </Link>
          <Link to="/Register" className="text-white ms-3 text-decoration-none">
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>{" "}
            Registrarse
          </Link>
          <Link to="/Login" className="text-white ms-3 text-decoration-none">
            <i className="fa fa-sign-in" aria-hidden="true"></i> Iniciar Sesión
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};
export default Navigation;
