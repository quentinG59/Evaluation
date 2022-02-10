import { React, useState } from "react";

const BtnCounter = () => {
  const [counter, setCounter] = useState(0);

  //incrémente counter
  const increm = () => {
    setCounter((counter) => counter + 1);
  };

  //deincrémente counter
  const deincrem = () => {
    setCounter((counter) => counter - 1);
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1>Counter</h1>
      <span>{counter}</span>
      <div>
        <button onClick={increm}>+</button>
        <button onClick={deincrem}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default BtnCounter;
