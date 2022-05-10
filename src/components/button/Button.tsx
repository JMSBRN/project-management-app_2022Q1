import React from 'react';
import './button.css';

interface ButtonProps {
  className: string;
  textButton: string;
  onClick?: () => void;
}
const Button = ({ className, textButton, onClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick} className={className}>
        {textButton}
      </button>
    </div>
  );
};

export default Button;
