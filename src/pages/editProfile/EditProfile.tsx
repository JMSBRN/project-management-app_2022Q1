import React from 'react';
import ProfileForm from '../../components/profileForm/ProfileForm';
import * as Styled from './EditProfile.style';

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
      <ProfileForm
        handleSumit={handleSumit}
        handleChangeName={handleChangeName}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
      />
    </div>
  );
};

export default EditProfile;
