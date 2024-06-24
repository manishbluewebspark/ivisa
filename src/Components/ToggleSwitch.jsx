import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleClick = () => {
    setIsToggleOn(prevState => !prevState);
  };

  return (
    <div onClick={handleClick}  className={isToggleOn ? 'ToggleSwitch active-done' : 'ToggleSwitch'}>
      <div className={isToggleOn ? 'knob active active-done ' : 'knob'} />
      <span className={isToggleOn ? 'Express' : 'regular'}>{isToggleOn ? "Express" : "regular"}</span>
    </div>
  );
};

export default ToggleSwitch;