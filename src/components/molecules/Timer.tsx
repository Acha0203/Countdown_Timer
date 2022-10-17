import React, { FC, useCallback, useEffect, useState } from 'react';
import PrimaryButton from '../atoms/button/PrimaryButton';
import CircleAnimation from '../atoms/CircleAnimation';

const Timer: FC = () => {
  const TIME_SETTING = 10;
  const RADIUS = 120;
  const STROKE_WIDTH = 50;

  const [count, setCount] = useState(TIME_SETTING);
  // const [showAnimation, setShowAnimation] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  let intervalID = 0;

  const countStart = useCallback((): void => {
    setIsRunning(true);
    intervalID = window.setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (count <= 0) countStop();
  }, [count]);

  const countStop = useCallback((): void => {
    setIsRunning(false);
    window.clearInterval(intervalID);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <CircleAnimation
        timeSetting={TIME_SETTING}
        count={count}
        isRunning={isRunning}
        color={'blue'}
        r={RADIUS}
        strokeWidth={STROKE_WIDTH}
      />
      <div className="flex m-5 justify-around items-center">
        <PrimaryButton
          onClick={() => countStart()}
          className="blue-button"
          size="md"
          disabled={count <= 0}
          rounded={true}
        >
          Start
        </PrimaryButton>
        <PrimaryButton
          onClick={() => countStop()}
          className="red-button"
          size="md"
          disabled={count <= 0}
          rounded={true}
        >
          Stop
        </PrimaryButton>
        <PrimaryButton
          onClick={() => countStop()}
          className="green-button"
          size="md"
          disabled={count <= 0}
          rounded={true}
        >
          Reset
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Timer;
