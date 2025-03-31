import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Login from "./views/Login";
import Cart from "./views/Cart";
import Register from "./views/Register";
import NotFound from "./views/NotFound";
import Gallery from "./views/Gallery";
import Detail from "./views/Detail";

const App = () => {
  return (
    <div>
      <Navigation />
      <header>
        <h1>Game Masters</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
      <footer>
        <div className="foot">
          <h2>CONTÁCTANOS</h2>
          <div className="footb">
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
          </div>
          <p>
            Copyright ©2025 GameMasters. Todos los derechos reservados. SA “Game
            Masters”.{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};
export default App;
