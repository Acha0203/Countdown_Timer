import React, { FC } from 'react';

interface CountProps {
  count: number;
}

const CircleAnimation: FC<CountProps> = (props) => {
  return (
    <>
      <div className="progress-circle">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" className="base" />
          <circle cx="50" cy="50" r="25" className="circle" />
          <circle cx="50" cy="50" r="38" className="front" />
        </svg>
        <div className="seconds">
          <span className="second">{props.count}</span>
        </div>
      </div>
    </>
  );
};

export default CircleAnimation;
