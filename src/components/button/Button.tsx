import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

interface ButtonProps {
  className?: string;
  textButton: string;
  linkPath?: string;
  onClick?: () => void;
}
const Button = ({ className, linkPath, textButton, onClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick} className={className}>
        <Link role="button" to={linkPath ?? ''}>
          {textButton}
        </Link>
      </button>
    </div>
  );
};

export default Button;
