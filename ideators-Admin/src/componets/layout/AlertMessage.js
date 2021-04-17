import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Alert from "@material-ui/lab/Alert";

const AlertMessage = ({ alerts }) =>
  alerts.map((alert) => (
    <Alert key={alert.id} severity={alert.alertType}>
      {alert.msg}
    </Alert>
  ));

AlertMessage.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(AlertMessage);
