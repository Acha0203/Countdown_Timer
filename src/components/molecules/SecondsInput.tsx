import { FC, memo, useCallback } from 'react';
import { useAppContext } from '../../context/AppContext';
import PrimaryButton from '../atoms/button/PrimaryButton';
import NumberInput from '../atoms/input/NumberInput';

const SecondsInput: FC = memo(() => {
  const { secondsSetting, setSecondsSetting } = useAppContext();

  const handleMinusBtn = useCallback(() => {
    setSecondsSetting(((prevSecondsSetting: number) => prevSecondsSetting - 1) as unknown as number);
  }, []);

  const handlePlusBtn = useCallback(() => {
    setSecondsSetting(((prevSecondsSetting: number) => prevSecondsSetting + 1) as unknown as number);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <PrimaryButton
        onClick={() => handleMinusBtn()}
        className="cyan-button"
        size="sm"
        rounded={true}
        disabled={secondsSetting <= 0}
      >
        &nbsp;-&nbsp;
      </PrimaryButton>
      <NumberInput inputValue={secondsSetting} label="Seconds" />
      <PrimaryButton
        onClick={() => handlePlusBtn()}
        className="red-button"
        size="sm"
        rounded={true}
        disabled={secondsSetting >= 60}
      >
        &nbsp;+&nbsp;
      </PrimaryButton>
    </div>
  );
});

export default SecondsInput;
