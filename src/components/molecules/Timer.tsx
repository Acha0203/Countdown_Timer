import React, { FC, useCallback, useEffect, useState } from 'react';
import PrimaryButton from '../atoms/button/PrimaryButton';
import CircleAnimation from '../atoms/CircleAnimation';

const Timer: FC = () => {
  const TIME_SETTING = 60;
  const [count, setCount] = useState(TIME_SETTING);
  const [showAnimation, setShowAnimation] = useState(false);
  let intervalID = 0;

  const countStart = useCallback((): void => {
    setShowAnimation(true);
    intervalID = window.setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (count <= 0) countStop();
  }, [count]);

  const countStop = useCallback((): void => {
    setShowAnimation(false);
    window.clearInterval(intervalID);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <CircleAnimation
        timeSetting={TIME_SETTING}
        count={count}
        showAnimation={showAnimation}
        color={'blue'}
        r={50}
        strokeWidth={50}
      />
      <div className="flex">
        <PrimaryButton
          onClick={() => countStart()}
          className="blue-button"
          color="blue"
          size="md"
          disabled={count <= 0}
          rounded={true}
        >
          Start
        </PrimaryButton>
        <PrimaryButton
          onClick={() => countStop()}
          className="blue-button"
          color="blue"
          size="md"
          disabled={count <= 0}
          rounded={true}
        >
          stop
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Timer;
