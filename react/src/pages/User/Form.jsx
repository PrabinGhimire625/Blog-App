import React, { useState, useContext } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Form.css";
import { AuthContext } from "../../context/AuthContext";

function Form({ type }) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;  
  const {flag, setFlag}=useContext(AuthContext)
  
  axios.defaults.withCredentials = true; 
  const handleSubmit = (e) => {
    e.preventDefault();

    const url = type === "Signup" ? "http://localhost:3000/user/signup" : "http://localhost:3000/user/login";
    const data = type === "Signup" ? { username, email, password } : { email, password };

    axios.post(url, data)
    .then((res) => {
      if (type === "Login") {
        if (res.status === 200) {
          if (res.data.data === "visitor") {
            setFlag(flag + 1);
            navigate("/profile");
          } else {
            setFlag(flag + 1);
            navigate("/dashboard");
          }
        }
      } else {
        alert("User successfully registered");
        setErrorMessage("");
        setFlag(flag + 1);
        navigate("/login");
      }
    })
      .catch((err) => {
        console.error("Error:", err);
        setErrorMessage("Email and password do not match!");
      });
  };

  const errorMessageStyle = {
    color: "red",
    marginLeft: "50px",
    marginTop: "10px"
  };

  return (
    <div className="container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>{type === "Signup" ? "Signup" : "Login"}</h1>

          {type === "Signup" && (
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <FaUser className="icon" />
            </div>
          )}

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MdEmail className="icon" />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="/forgotPassword">Forgot Password?</Link>
          </div>

          <button type="submit">{type === "Signup" ? "Signup" : "Login"}</button>

          {errorMessage && <p className="error-message" style={errorMessageStyle}>{errorMessage}</p>}

          <div className="register-link">
            {type === "Signup" ? (
              <Link to="/login" className="signup-btn">
                Already have an account? Login
              </Link>
            ) : (
              <Link to="/signup" className="signup-btn">
                Don't have an account? Signup
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
