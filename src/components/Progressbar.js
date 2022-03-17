import React, {useState} from 'react';

const Progressbar = ({
  completedStep,
  currentStep
}) => {

  const genClassName = (base) => {
    let result = ""
    if (completedStep >= base) result += " active"
    if (currentStep > base) result += " passed"
  }

  return (
    <div className="bar">
      {/* <img src={process.env.PUBLIC_URL + "/Images/bar.svg"} alt="" /> */}
      <div className="w-100">
        <ul className="progressbar">
          <li className={`${completedStep >= 1 ? "active": ""} ${currentStep > 1? "passed": ""}`} style={{zIndex:22}}></li>
          <li className={`${completedStep >= 2 ? "active": ""} ${currentStep > 2? "passed": ""}`} style={{zIndex:11}}></li>
          <li className={`${completedStep >= 3 ? "active": ""} ${currentStep > 3? "passed": ""}`}></li>
        </ul>
      </div>
    </div>
  )
}

export default Progressbar;