import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);
  function increaseStep() {
    setStep((step) => step + 1);
  }
  function increaseCount() {
    setCount((count) => count + step);
  }
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <>
      <button onClick={() => setStep((step) => step - 1)}>-</button>
      <span>Step: {step}</span>
      <button onClick={increaseStep}>+</button>
      <br />
      <button onClick={() => setCount((c) => c - step)}>-</button>
      Count:{count}
      <button onClick={increaseCount}>+</button>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
