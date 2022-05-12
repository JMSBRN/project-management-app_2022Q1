import React from 'react';
import Form from '../../components/form/Form';
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
      <Form
        handleSumit={handleSumit}
        handleChangeName={handleChangeName}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
      />
    </div>
  );
};

export default EditProfile;
