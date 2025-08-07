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
      <h2>Step Counter V2</h2>
      <div className='setter'>
        <input 
          type="range" 
          min="1" 
          max="10"
          value={step}
          onChange={e=> setStep(Number(e.target.value))}
        /> 
        <span>Step: {step}</span>
      </div>
      <div className='counter'>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input 
          type="text"
          value={count}
          onChange={e => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div className='date-wrapper'>
        <p>
          <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}</span>
          <span>{date.toDateString()}</span>
          </p>
      </div>
      {(count !== 0 || step !== 1) ? (
          <div className='clear'>
            <button onClick={clearHandler}>Clear</button>
          </div>
      ) : null}
    </div>
  )
}

export default StepCounter