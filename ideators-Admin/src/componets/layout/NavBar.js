import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/actions/auth";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({ auth: { isAuthenticated }, logout }) => {
  const classes = useStyles();

  return (
    <Fragment className={classes.root}>
      {isAuthenticated && (
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h5"
              noWrap
              onClick={() => console.log("click")}
            >
              Ideators
            </Typography>

            <Button edge="end" color="inherit" onClick={logout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      )}
    </Fragment>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavBar);
