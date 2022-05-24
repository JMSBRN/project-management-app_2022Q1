import React from 'react';
import * as Styled from './Button.style';

interface ButtonProps {
  className?: string;
  textButton: string;
  linkPath?: string;
  onClick?: () => void;
  id?: string;
}
const Button = ({ className, linkPath, textButton, onClick, id }: ButtonProps) => {
  return (
    <Styled.Button onClick={onClick} className={className}>
      <Styled.Link role="button" to={linkPath || ''} id={id}>
        {textButton}
      </Styled.Link>
    </Styled.Button>
  );
};

export default Button;
