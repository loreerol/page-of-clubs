import React from "react";
import logo from "/images/page-of-clubs.jpg";
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "User",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userLogin = {
      name: this.state.name,
      password: this.state.password
    };

    axios
      .post("http://localhost:5000/api/auth/login", userLogin)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-page-logo">
          <img src={logo} alt={"Logo"} />
        </div>

        <div className="login-feild input-text">
          <form className="login-form" onSubmit={this.onSubmit}>
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
