import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";

import { registerWithFB } from "../../actions/auth";

const Landing = ({ isAuthenticated, registerWithFB }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  const responseFacebook = response => {
    console.log(response);
    //email, id, name, picture.data.url
    const { name, email, id } = response;
    const avatar = `https://graph.facebook.com/${id}/picture?type=large`;

    registerWithFB({ name, email, password: id, avatar });
  };

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>POPO文</h1>
          <p className='lead'>用聯絡改變關係，用行動改變人生。</p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              註冊
            </Link>
            <Link to='/login' className='btn btn-light'>
              登入
            </Link>
          </div>
          <br></br>
          <FacebookLogin
            appId='222851361688028'
            fields='name,email,picture'
            callback={responseFacebook}
            textButton='Login With FB'
          />
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
  registerWithFB: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { registerWithFB })(Landing);
