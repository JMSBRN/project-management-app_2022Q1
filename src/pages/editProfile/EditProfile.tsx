import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Confirmation from '../../components/confirmation/Confirmation';
import Modal from '../../components/modal/Modal';
import { setIsOpen } from '../../store/actions/actionCreators';
import { State } from '../../store/utils';

const EditProfile = () => {
  const { isOpen } = useSelector((state: State) => state.modal);
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(setIsOpen(true));
  };

  const handleClose = () => {
    dispatch(setIsOpen(false));
  };

  return (
    <div>
      EditProfile
      <button onClick={handleOpen}>delete user</button>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <Confirmation />
      </Modal>
    </div>
  );
};

export default EditProfile;
