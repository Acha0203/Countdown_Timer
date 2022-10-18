import { FC, memo, useCallback } from 'react';
import { useAppContext } from '../../context/AppContext';
import PrimaryButton from '../atoms/button/PrimaryButton';
import NumberInput from '../atoms/input/NumberInput';

const HoursInput: FC = memo(() => {
  const { hoursSetting, setHoursSetting } = useAppContext();

  const handleMinusBtn = useCallback(() => {
    setHoursSetting(((prevHoursSetting: number) => prevHoursSetting - 1) as unknown as number);
  }, []);

  const handlePlusBtn = useCallback(() => {
    setHoursSetting(((prevHoursSetting: number) => prevHoursSetting + 1) as unknown as number);
  }, []);

  return (
    <div className="flex justify-center items-center mb-5">
      <PrimaryButton
        onClick={() => handleMinusBtn()}
        className="cyan-button"
        size="sm"
        rounded={true}
        disabled={hoursSetting <= 0}
      >
        &nbsp;-&nbsp;
      </PrimaryButton>
      <NumberInput inputValue={hoursSetting} label="Hours" />
      <PrimaryButton
        onClick={() => handlePlusBtn()}
        className="red-button"
        size="sm"
        rounded={true}
        disabled={hoursSetting >= 99}
      >
        &nbsp;+&nbsp;
      </PrimaryButton>
    </div>
  );
});

export default HoursInput;
