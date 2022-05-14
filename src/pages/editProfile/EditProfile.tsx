import React, { useState } from 'react';
import Confirmation from '../../components/confirmation/Confirmation';
import Modal from '../../components/modal/Modal';

const EditProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      EditProfile
      <button onClick={handleOpen}>delete user</button>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <Confirmation param="User" />
      </Modal>
    </div>
  );
};

export default EditProfile;
