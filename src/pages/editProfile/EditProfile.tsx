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
    <Styled.Edit>
      <div className="edit-wrapper">
        <ProfileForm
          handleSumit={handleSumit}
          handleChangeName={handleChangeName}
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
        />
      </div>
      <Styled.Delete_Button textButton="Delete User" />
    </Styled.Edit>
  );
};

export default EditProfile;
