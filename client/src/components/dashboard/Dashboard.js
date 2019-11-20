import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  let content;

  if (loading === false && profile !== null) {
    content = (
      <Fragment>
        <DashboardActions />
        <Experience experience={profile.experience} />
        <Education education={profile.education} />

        <div className='my-2'>
          <button className='btn btn-danger' onClick={() => deleteAccount()}>
            <i className='fas fa-user-minus'></i>刪除帳戶
          </button>
        </div>
      </Fragment>
    );
  } else if (loading === false && profile === null) {
    content = (
      <Fragment>
        <p>
          您還沒設定您的個人資料，請加入一些資訊吧(p.s.創建完才能進行其他互動哦)
        </p>
        <Link to='/create-profile' className='btn btn-primary my-1'>
          創建個人頁面
        </Link>
      </Fragment>
    );
  } else content = <Spinner />;

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>個人專區</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> 親愛的 {user && user.name} 歡迎您回來
      </p>
      {content}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const matStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(matStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
