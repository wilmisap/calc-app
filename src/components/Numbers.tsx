import React from 'react';
import Button from "./Button/Button";

const Numbers = ({onClickNumber}: { onClickNumber: (textNumber: string) => void }) => {
  const numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  return (
    <section className="numbers">
      {numbers.map((number) =>  <Button key={number} type={"numbers"} text={number} clickHandler={onClickNumber}/>
      )}
    </section>
  );
};


export default Numbers;
