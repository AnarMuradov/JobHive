import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { UserContext } from "../../Context/UserContext";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { addToken } = useContext(UserContext);
  const navigate =useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        addToken(data);
        navigate("/")
      });
  }
  return (
    <section className="login">
      <div className="login_container">
        <div className="login_container_content">
          <div className="login_container_content_title">Login</div>
          <form action="" onClick={handleSubmit}>
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
            <button>Sign in</button>
          </form>
          <Link>Lost your Password?</Link>
        </div>
      </div>
      <p>
        Don't have an account?<Link to={'/register'}>Sign up here!</Link>
      </p>
    </section>
  );
};

export default LoginPage;
