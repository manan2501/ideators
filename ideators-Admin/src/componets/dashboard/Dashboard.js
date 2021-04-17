import { Button, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import NavBar from "../layout/NavBar";
import NotFound from "../layout/NotFound";
import Spinner from "../layout/Spinner";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import store from "../../redux/store";
import { logout } from "../../redux/actions/auth";
import { getCurrentProfile } from "../../redux/actions/profile";
import Tabs from "./Tabs";
import { useDispatch } from "react-redux";

const Dashboard = ({
  logout,
  auth: { isAuthenticated },
  profile: { profile, loading },
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);

  const onLogout = (e) => {
    e.preventDefault();
    logout();
  };
  if (loading && profile === null) {
    return <Spinner />;
  } else if (isAuthenticated && profile.isAdmin) {
    return (
      <div>
        <Grid
          container
          alignItems="center"
          direction="column"
          style={{ minHeight: "100vh" }}
        >
          <NavBar />
          <Tabs />
        </Grid>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { logout })(Dashboard);
