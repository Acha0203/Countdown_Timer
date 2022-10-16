import React, { FC, useCallback, useEffect, useState } from 'react';
import PrimaryButton from '../atoms/button/PrimaryButton';
import CircleAnimation from '../atoms/CircleAnimation';

const Timer: FC = () => {
  const [count, setCount] = useState(5);
  let intervalID = 0;

  const countStart = useCallback((): void => {
    // if (count <= 0) {
    //   return;
    // }
    intervalID = window.setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(count);
    if (count <= 0) countStop();
  }, [count]);

  const countStop = useCallback((): void => {
    // if (count <= 0) {
    //   return;
    // }
    window.clearInterval(intervalID);
    console.log(intervalID);
    console.log(count);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <CircleAnimation count={count} />
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
