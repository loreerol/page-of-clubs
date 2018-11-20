import React from "react";
import logo from "/images/page-of-clubs.jpg";

class Login extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-page-logo">
          <img src={logo} alt={"Logo"} />
        </div>

        <div className="login-feild input-text">
          <form className="login-form">
            <input
              type="text"
              name="search"
              required=""
              className="input-text-textarea"
            />
            <button
              type="submit"
              className="login-page-submit input-text-submit"
            >
              🔒
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
