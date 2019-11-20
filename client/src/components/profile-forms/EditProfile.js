import React, { useState, Fragment, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [disable, setDisable] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: ""
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? "" : profile.company,
      website: loading || !profile.website ? "" : profile.website,
      location: loading || !profile.location ? "" : profile.location,
      status: loading || !profile.status ? "" : profile.status,
      skills: loading || !profile.skills ? "" : profile.skills.join(","),
      githubusername:
        loading || !profile.githubusername ? "" : profile.githubusername,
      bio: loading || !profile.bio ? "" : profile.bio,
      twitter: loading || !profile.social ? "" : profile.social.twitter,
      facebook: loading || !profile.social ? "" : profile.social.facebook,
      linkedin: loading || !profile.social ? "" : profile.social.linkedin,
      youtube: loading || !profile.social ? "" : profile.social.youtube,
      instagram: loading || !profile.social ? "" : profile.social.instagram
    });
  }, [loading, getCurrentProfile]); // (empaty arrar -> no rerun, non empty array -> rerun)If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    setDisable(true);
    setTimeout(() => {
      setDisable(false);
    }, 5000);

    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>創建您的個人頁面</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> 創建屬於您個人的璀璨履歷吧
      </p>
      <small>* = 必填欄位</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <select name='status' value={status} onChange={e => onChange(e)}>
            <option value='0'>* 選取您目前職業狀態</option>
            <option value='Developer'>開發人員</option>
            <option value='Junior Developer'>初階開發人員</option>
            <option value='Senior Developer'>資深開發人員</option>
            <option value='Manager'>管理者</option>
            <option value='Student or Learning'>學生</option>
            <option value='Instructor'>教師/教授</option>
            <option value='Intern'>實習生</option>
            <option value='Other'>其他</option>
          </select>
          <small className='form-text'>偷偷告訴我 您現在的身分</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='公司名稱'
            name='company'
            value={company}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>可以是您的工作地或公司名稱</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='個人網站'
            name='website'
            value={website}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>您個人的網站或可以認識您的網站</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='所在城市'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>填入城市 (eg. Boston, MA)</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* 技能'
            name='skills'
            value={skills}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            記得用逗點分開喔 (eg. HTML,CSS,JavaScript,PHP) 否則程式不能跑
            我不管哦
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Github 使用者帳戶'
            name='githubusername'
            value={githubusername}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>大力放上來吧</small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='請至少填寫十個字的介紹'
            name='bio'
            value={bio}
            onChange={e => onChange(e)}
          ></textarea>
          <small className='form-text'>十個字就好 拜託</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            增加社群媒體連結
          </button>
          <span>非必填欄位</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input
                type='text'
                placeholder='Twitter 連結'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input
                type='text'
                placeholder='Facebook 連結'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x'></i>
              <input
                type='text'
                placeholder='YouTube 連結'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x'></i>
              <input
                type='text'
                placeholder='Linkedin 連結'
                name='linkedin'
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input
                type='text'
                placeholder='Instagram 連結'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input
          type='submit'
          className='btn btn-primary my-1'
          value='提交'
          disabled={disable}
        />
        <Link className='btn btn-light my-1' to='/dashboard'>
          返回
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
