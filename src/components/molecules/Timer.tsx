import React, { FC, useCallback, useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import PrimaryButton from '../atoms/button/PrimaryButton';
import CircleAnimation from '../atoms/CircleAnimation';

const Timer: FC = () => {
  const TIME_SETTING = 10;
  const RADIUS = 120;
  const STROKE_WIDTH = 50;
  const { setIsRunning, count, setCount, showTimer, setShowTimer } = useAppContext();
  let intervalID = 0;

  const countStart = useCallback((): void => {
    setShowTimer(true);
    setIsRunning(true);
    intervalID = window.setInterval(() => {
      setCount((prevCount: number) => prevCount - 1);
    }, 1000);
  }, []);

  const countPause = useCallback((): void => {
    setIsRunning(false);
    window.clearInterval(intervalID);
  }, []);

  const countReset = useCallback((): void => {
    setShowTimer(false);
    setIsRunning(true);
    window.clearInterval(intervalID);
    setCount(TIME_SETTING);
  }, []);

  useEffect(() => {
    if (count <= 0) {
      countPause();
    }
  }, [count]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center h-80">
        {showTimer && <CircleAnimation color={'blue'} r={RADIUS} strokeWidth={STROKE_WIDTH} />}
      </div>
      <div className="flex m-5 justify-around items-center">
        <PrimaryButton onClick={() => countReset()} className="cyan-button" size="md" rounded={true}>
          Reset
        </PrimaryButton>
        <PrimaryButton
          onClick={() => countStart()}
          className="blue-button"
          size="md"
          disabled={count <= 0}
          rounded={true}
        >
          {showTimer ? 'Resume' : 'Start'}
        </PrimaryButton>
        <PrimaryButton
          onClick={() => countPause()}
          className="red-button"
          size="md"
          disabled={count <= 0 || !showTimer}
          rounded={true}
        >
          Pause
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Timer;
