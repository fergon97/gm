import { useState } from "react";
import "./RegistroForm.css";

const RegistroForm = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    clave: "",
    repetirClave: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.clave !== form.repetirClave) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log("Formulario enviado:", form);
  };

  const handleGoogleSignup = () => {
    console.log("Registrarse con Google");
  };

  const handleCancel = () => {
    setForm({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      clave: "",
      repetirClave: "",
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="grid-container">
          <div className="input-group">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Apellido</label>
            <input
              type="text"
              name="apellido"
              value={form.apellido}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Clave</label>
            <input
              type="password"
              name="clave"
              value={form.clave}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Repetir Clave</label>
            <input
              type="password"
              name="repetirClave"
              value={form.repetirClave}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <img
          src="https://i.postimg.cc/cH3zH5Kz/separador.png"
          alt=""
          className="sep"
        />
        <button className="btn btn-link" onClick={handleGoogleSignup}>
          <img
            src="https://i.postimg.cc/VL3v3JqW/boton-google.png"
            alt="Google"
          />
        </button>
        <div className="button-container">
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancelar
          </button>
          <button type="submit" className="reg-btn">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistroForm;
