import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import ProfileGithub from "./ProfileGithub";
import Spinner from "../layout/Spinner";
import { getProfileById } from "../../actions/profile";

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  let content;

  if (loading) content = <Spinner />;
  else if (profile !== null) {
    content = (
      <Fragment>
        <Link to='/profiles' className='btn btn-light'>
          返回
        </Link>
        {auth.isAuthenticated &&
          auth.loading === false &&
          auth.user._id === profile.user._id && (
            <Link to='/edit-profile' className='btn btn-dark'>
              編輯個人頁面
            </Link>
          )}
        <div className='profile-grid my-1'>
          <ProfileTop profile={profile} />
          <ProfileAbout profile={profile} />
          <div className='profile-exp bg-white p-2'>
            <h2 className='text-primary'>工作經驗</h2>
            {profile.experience.length > 0 ? (
              <Fragment>
                {profile.experience.map(experience => (
                  <ProfileExperience
                    key={experience._id}
                    experience={experience}
                  />
                ))}
              </Fragment>
            ) : (
              <h4>尚無工作經驗</h4>
            )}
          </div>

          <div className='profile-edu bg-white p-2'>
            <h2 className='text-primary'>教育程度</h2>
            {profile.education.length > 0 ? (
              <Fragment>
                {profile.education.map(education => (
                  <ProfileEducation key={education._id} education={education} />
                ))}
              </Fragment>
            ) : (
              <h4>尚未填寫任何教育程度資料</h4>
            )}
          </div>

          {profile.githubusername && (
            <ProfileGithub username={profile.githubusername} />
          )}
        </div>
      </Fragment>
    );
  } else content = <Spinner />;

  return <Fragment>{content}</Fragment>;
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
