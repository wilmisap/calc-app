 import React from 'react';
import './App.css';
import Result from "./components/Result";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Functions from "./components/Functions";

const mathOperationsArray: string[] = ['+', '-', '*', '/', '='] as string[];

const App = () => {

  const [value, setValue] = React.useState('0');

  const isOperationAtTheEnd = () => {
    return mathOperationsArray.findIndex((operation) => (operation === value[value.length - 1])) > 0;
  };

  const arrayResults = () => {
    let resultTemp: Array<string> = [];
    mathOperationsArray.forEach((operation) => {
      const splitTemp = value.split(operation);
      if (splitTemp.length === 2) {
        resultTemp = splitTemp;
        resultTemp.push(operation);
        return resultTemp as string[];
      }
    });
    return resultTemp as string[];
  };

  const performOperation = (operator: string, numberOne: number, numberTwo: number) => {
    let result: number = 0;
    switch (operator) {
      case '+':
        result = numberOne + numberTwo;
        break;
      case '-':
        result = numberOne - numberTwo;
        break;
      case '*':
        result = numberOne * numberTwo;
        break;
      case '/':
        result = numberOne / numberTwo;
        break;
    }
    return result.toString();
  };

  const onClickNumberHandler = (text: string) => {
    setValue(`${value}${text}`);
  };

  const onClickOperationHandler = (text: string) => {
    let numberOne: number = 0;
    let numberTwo: number = 0;
    if (value.length > 0 && !isOperationAtTheEnd()) {
      let resultTemp = arrayResults();
      if (resultTemp.length === 3) {
        numberOne = parseInt(resultTemp[0]);
        numberTwo = parseInt(resultTemp[1]);
        const operator = resultTemp[2];
        let result = performOperation(operator, numberOne, numberTwo);
        setValue(result + text);
      } else setValue(`${value}${text}`);
    }
  };
  const onClickEqualHandler = (text: string) => {
    let numberOne: number = 0;
    let numberTwo: number = 0;
    if (value.length > 0 && !isOperationAtTheEnd()) {
      let resultTemp = arrayResults();
      if (resultTemp.length === 3) {
        numberOne = parseInt(resultTemp[0]);
        numberTwo = parseInt(resultTemp[1]);
        const operator = resultTemp[2];
        let result: string = performOperation(operator, numberOne, numberTwo) as string;
        setValue(result);
      }
    }
  };
  const onContentClearHandler = () => {
    setValue('');
  };
  const onDeletedHandler = () => {
    let valueTemp = value;
    setValue(valueTemp.slice(0, -1));
  };
  return (
    <main className='react-calculator'>
      <Result value={value}/>
      <Numbers
        onClickNumber={onClickNumberHandler}
      />
      <Functions
        onContentClear={onContentClearHandler}
        onDeleted={onDeletedHandler}
      />
      <MathOperations
        onClickOperation={onClickOperationHandler}
        onClickEqual={onClickEqualHandler}
      />
    </main>
  );
};


export default App;
