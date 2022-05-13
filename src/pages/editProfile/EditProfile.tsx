import React from 'react';
import ProfileForm from '../../components/profileForm/ProfileForm';
import './editProfile.css';

const EditProfile = () => {
  const handleSumit = (e: React.ChangeEvent<HTMLFormElement>) => {
    console.log(e.target);
  };
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className="edit">
      <div className="edit-wrapper">
        <ProfileForm
          handleSumit={handleSumit}
          handleChangeName={handleChangeName}
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
        />
      </div>
      <button className="editForm-delete-btn">Delete User</button>
    </div>
  );
};

export default EditProfile;
