import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const LoginHelp = () => {
  return (
    <section className="help">
      <div className="help_container">
        <div className="help_container_content">
          <p>
            Forgot your password? Write the email you entered during
            registration and username. A password will be sent to your email
            shortly!
          </p>
          <Link to={`mailto:anarmurado2004@gmail.com`}>
            anarmurado2004@gmail.com
          </Link>
          <Link to={'/login'}>Back to Login</Link>
        </div>
      </div>
    </section>
  );
};

export default LoginHelp;
