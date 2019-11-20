import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"; // use state or call an action

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

// Check Type
Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

// Get state from store
const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
