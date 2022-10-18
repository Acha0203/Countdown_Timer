import React, { FC, memo, useCallback, useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import PrimaryButton from '../atoms/button/PrimaryButton';
import CircleAnimation from '../atoms/CircleAnimation';
import TimeInputFroms from './TimeInputForms';

const Timer: FC = memo(() => {
  const RADIUS = 120;
  const STROKE_WIDTH = 50;
  const {
    isRunning,
    setIsRunning,
    showTimer,
    setShowTimer,
    hoursSetting,
    minutesSetting,
    secondsSetting,
    setHoursSetting,
    setMinutesSetting,
    setSecondsSetting,
  } = useAppContext();
  let intervalID = 0;

  const countStart = useCallback((): void => {
    setShowTimer(true);
    setIsRunning(true);
    intervalID = window.setInterval(() => {
      setSecondsSetting(((prevSecondsSetting: number) => prevSecondsSetting - 1) as unknown as number);
    }, 1000);
  }, []);

  const countPause = useCallback((): void => {
    setIsRunning(false);
    window.clearInterval(intervalID);
  }, []);

  const countReset = useCallback((): void => {
    window.clearInterval(intervalID);
    setIsRunning(false);
    setShowTimer(false);
    setHoursSetting(0);
    setMinutesSetting(0);
    setSecondsSetting(0);
  }, []);

  useEffect(() => {
    if (hoursSetting <= 0 && minutesSetting <= 0 && secondsSetting <= 0) {
      countPause();
    }
    if (secondsSetting < 0 && minutesSetting > 0) {
      setMinutesSetting(((prevMinutesSetting: number) => prevMinutesSetting - 1) as unknown as number);
      setSecondsSetting(59);
    }
    if (secondsSetting < 0 && minutesSetting <= 0 && hoursSetting > 0) {
      setHoursSetting(((prevHoursSetting: number) => prevHoursSetting - 1) as unknown as number);
      setMinutesSetting(59);
    }
  }, [hoursSetting, minutesSetting, secondsSetting]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center h-80">
        {showTimer ? <CircleAnimation color={'blue'} r={RADIUS} strokeWidth={STROKE_WIDTH} /> : <TimeInputFroms />}
      </div>
      <div className="flex m-5 justify-around items-center">
        <PrimaryButton onClick={() => countReset()} className="cyan-button" size="md" rounded={true}>
          Reset
        </PrimaryButton>

        <PrimaryButton
          onClick={() => countStart()}
          className="blue-button"
          size="md"
          disabled={(hoursSetting <= 0 && minutesSetting <= 0 && secondsSetting <= 0) || isRunning}
          rounded={true}
        >
          {showTimer ? 'Resume' : 'Start'}
        </PrimaryButton>

        <PrimaryButton
          onClick={() => countPause()}
          className="red-button"
          size="md"
          disabled={(hoursSetting <= 0 && minutesSetting <= 0 && secondsSetting <= 0) || !showTimer || !isRunning}
          rounded={true}
        >
          Pause
        </PrimaryButton>
      </div>
    </div>
  );
});

export default Timer;
