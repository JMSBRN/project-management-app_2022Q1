import Button from '../button/Button';
import * as Styled from './Modal.styled';

interface IModal {
  handleClose?: () => void;
  children?: JSX.Element;
  isOpen?: boolean;
}

const Modal = ({children, handleClose, isOpen}: IModal) => {
  return (
    <Styled.Open>
      <Styled.Wrapper>
        <Styled.Body>
          {children}
          <Styled.Btn>
            <Button className={Styled.Btn} onClick={handleClose} textButton='✖' />
          </Styled.Btn>
        </Styled.Body>
      </Styled.Wrapper>
    </Styled.Open>
  );
};

export default Modal;
