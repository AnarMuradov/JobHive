import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { UserContext } from "../../Context/UserContext";
const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");
  const { addToken } = useContext(UserContext);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username,email: email, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        addToken(data);
        navigate("/");
      });
  }
  return (
    <section className="register">
      <div className="register_container">
        <div className="register_container_content">
          <div className="register_container_content_title">Register</div>
          <form action="" onClick={handleSubmit}>
          <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button>Sign up</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
