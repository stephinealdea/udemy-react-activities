import React, { use, useState } from 'react'

function StepCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("July 3 2025");
  date.setDate(date.getDate() + count);

  const clearHandler = () => {
    setStep(1);
    setCount(0);
  }

  return (
    <div className='step-counter-wrapper'>
      <h2>Step Counter</h2>
      <div className='setter'>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div className='counter'>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div className='clear'>
        <button onClick={clearHandler}>Clear</button>
      </div>
      <div className='date-wrapper'>
        <p>
          <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}</span>
          <span>{date.toDateString()}</span>
          </p>
      </div>
    </div>
  )
}

export default StepCounter