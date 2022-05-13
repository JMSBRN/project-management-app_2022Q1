import React, { Component, useState } from 'react';
import Button from '../../components/button/Button';
import './authForm.css';
import Modal from '../../components/modal/Modal';
import Confirmation from '../../components/confirmation/Confirmation';

const AuthForm = () =>  {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  } 

  console.log(isOpen)
    return (
      <div>
        AuthForm
        <div>User state</div>
        <Button textButton="Log-in" />
        <Button textButton="Log-out" />
        <br/>
        <br/>
        <br/>
        <button onClick={handleOpen}>delete user</button>
          <Modal isOpen={isOpen} handleClose={handleClose}>
            <Confirmation param="User"/>
          </Modal>
        </div>
    );
}

export default AuthForm;