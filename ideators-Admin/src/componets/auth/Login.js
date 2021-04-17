import { Grid, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { login } from "../../redux/actions/auth";
import image from "../../assets/images/SignIn.png";
import { Redirect } from "react-router-dom";

const Login = ({ login, isAuthenticated }) => {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formdata;

  const onChangeHandler = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    login(email, password);
  };

  // redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <Grid container alignItems="center" style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6} justify="center">
          <img
            src={image}
            style={{ width: "100%", objectFit: "cover" }}
            alt="cover image"
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justify="space-between"
          style={{ padding: 10 }}
        >
          <div />

          <div>
            <form
              className="form"
              action="create-profile.html"
              onSubmit={(e) => onSubmitHandler(e)}
              style={{ display: "flex", flexDirection: "column", width: 400 }}
            >
              <TextField
                label="Email"
                margin="normal"
                variant="filled"
                type="email"
                value={email}
                onChange={(e) => onChangeHandler(e)}
                name="email"
                required
              />
              <TextField
                label="Password"
                margin="normal"
                variant="filled"
                type="password"
                name="password"
                minLength="6"
                value={password}
                onChange={(e) => onChangeHandler(e)}
                required
              />
              <Button
                style={{ backgroundColor: "#64fcd9" }}
                variant="contained"
                type="submit"
                value="Register"
              >
                Login
              </Button>
            </form>
            <div style={{ height: 20 }} />
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
};

Login.propTypes = {
  login: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
