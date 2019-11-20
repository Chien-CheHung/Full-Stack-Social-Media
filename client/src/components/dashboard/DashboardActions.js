import React from "react";
import { Link } from "react-router-dom";

const DashboardAction = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary'></i> 編輯個人頁面
      </Link>
      <Link to='/add-experience' className='btn btn-light'>
        <i className='fab fa-black-tie text-primary'></i> 新增工作經驗
      </Link>
      <Link to='/add-education' className='btn btn-light'>
        <i className='fas fa-graduation-cap text-primary'></i> 新增教育程度
      </Link>
    </div>
  );
};

export default DashboardAction;
