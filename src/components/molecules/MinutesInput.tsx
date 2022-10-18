import { FC, memo, useCallback } from 'react';
import { useAppContext } from '../../context/AppContext';
import PrimaryButton from '../atoms/button/PrimaryButton';
import NumberInput from '../atoms/input/NumberInput';

const MinutesInput: FC = memo(() => {
  const { minutesSetting, setMinutesSetting } = useAppContext();

  const handleMinusBtn = useCallback(() => {
    setMinutesSetting(((prevMinutesSetting: number) => prevMinutesSetting - 1) as unknown as number);
  }, []);

  const handlePlusBtn = useCallback(() => {
    setMinutesSetting(((prevMinutesSetting: number) => prevMinutesSetting + 1) as unknown as number);
  }, []);

  return (
    <div className="flex justify-center items-center mb-5">
      <PrimaryButton
        onClick={() => handleMinusBtn()}
        className="cyan-button"
        size="sm"
        rounded={true}
        disabled={minutesSetting <= 0}
      >
        &nbsp;-&nbsp;
      </PrimaryButton>
      <NumberInput inputValue={minutesSetting} label="Minutes" />
      <PrimaryButton
        onClick={() => handlePlusBtn()}
        className="red-button"
        size="sm"
        rounded={true}
        disabled={minutesSetting >= 60}
      >
        &nbsp;+&nbsp;
      </PrimaryButton>
    </div>
  );
});

export default MinutesInput;
