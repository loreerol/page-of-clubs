import React from "react";
import logo from "/images/page-of-clubs.jpg";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";

// import { withRouter } from "react-router-dom";

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/app");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      name: this.state.name,
      password: this.state.password
    };

    this.props.loginUser(userData, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="login-page">
        <div className="login-page-logo">
          <img src={logo} alt={"Logo"} />
        </div>

        <div className="login-feild input-text">
          <form className="form-group" onSubmit={this.onSubmit}>
            <input
              id="passwordinput"
              name="passwordinput"
              type="password"
              className={classnames("form-control", "input-md", {
                "is-invalid": errors.password
              })}
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
