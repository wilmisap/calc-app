import React from 'react';
import Button from "./Button/Button";

interface FunctionsProps {
  onContentClear: (text: string) => void;
  onDeleted: (text: string) => void;
}

const Functions: React.FC<FunctionsProps> = ({onContentClear, onDeleted}) => {
  return (
    <section className={'functions'}>
      <Button type={"button-long-text"} text={"clear"} clickHandler={onContentClear}/>
      <Button type={"functions"} text={"r"} clickHandler={onDeleted}/>
    </section>
  );
};

export default Functions;

