import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";

const responseFacebook = response => {
  console.log(response);
  //email, id, name, picture.data.url,
};

const fblogin = props => {
  return (
    <div>
      <FacebookLogin
        appId='222851361688028'
        autoLoad={true}
        fields='name,email,picture'
        callback={responseFacebook}
      />
    </div>
  );
};

fblogin.propTypes = {};

export default fblogin;
