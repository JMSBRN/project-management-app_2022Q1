import React from 'react';
import * as Styled from './Button.style';

interface ButtonProps {
  className?: string;
  textButton: string;
  linkPath?: string;
  onClick?: () => void;
}
const Button = ({ className, linkPath, textButton, onClick }: ButtonProps) => {
  return (
    <Styled.Button onClick={onClick} className={className}>
      <Styled.Link role="button" to={linkPath || ''}>
        {textButton}
      </Styled.Link>
    </Styled.Button>
  );
};

export default Button;
