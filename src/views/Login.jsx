import "../index.css";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="regg">
      <h1>Inicia Sesión</h1>
      <div className="reg">
        <div className="regd">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
export default Login;
