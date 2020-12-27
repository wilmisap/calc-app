import React from 'react';
import Button from "./Button/Button";


interface MathOperationsProps {
  onClickOperation: (text: string) => void;
  onClickEqual: (text: string) => void;
}

const MathOperations: React.FC<MathOperationsProps> = ({onClickOperation, onClickEqual}) => (
  <section className="math-operations">
    <Button type={"math-operations"} text={"+"} clickHandler={onClickOperation}/>
    <Button type={"math-operations"} text={"-"} clickHandler={onClickOperation}/>
    <Button type={"math-operations"} text={"*"} clickHandler={onClickOperation}/>
    <Button type={"math-operations"} text={"/"} clickHandler={onClickOperation}/>
    <Button type={"math-operations"} text={"="} clickHandler={onClickEqual}/>
  </section>

);

export default MathOperations;
