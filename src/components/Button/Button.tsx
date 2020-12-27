import React from 'react';
import './Button.css';

type ButtonType = 'math-operations' | 'numbers' | 'functions' | 'button-long-text';

interface ButtonProps {
  text: string;
  type: ButtonType;
  clickHandler: (textNumber: string) => void;
}

const Button: React.FC<ButtonProps> = ({type, text, clickHandler}) => {
  return (
    <button className={type} onClick={() => {
      console.log('Clin en el boton dentro de button', text);
      clickHandler(text);
    }}>
      <samp>
        {text}
      </samp>
    </button>
  );
};

export default Button;
