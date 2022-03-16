import React, {useState} from 'react';

const Progressbar = ({
  completedStep
}) => {

  return (
    <div className="bar">
      {/* <img src={process.env.PUBLIC_URL + "/Images/bar.svg"} alt="" /> */}
      <div className="w-100">
        <ul className="progressbar">
          <li className={completedStep >= 1 ? "active" : ""} style={{zIndex:22}}></li>
          <li className={completedStep >= 2 ? "active" : ""} style={{zIndex:11}}></li>
          <li className={completedStep == 3 ? "active" : ""}></li>
        </ul>
      </div>
    </div>
  )
}

export default Progressbar;