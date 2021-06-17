import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
        <button className="registerLoginButton">Login</button>
      </Link>
    </div>
  );
}

export default Register;
