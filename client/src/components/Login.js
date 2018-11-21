import React from "react";
import logo from "/images/page-of-clubs.jpg";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "User",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

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
              name="password"
              value={this.state.password}
              onChange={this.onChange}
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
