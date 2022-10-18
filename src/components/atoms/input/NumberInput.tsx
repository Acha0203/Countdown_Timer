import { FC, memo } from 'react';

interface NumberInputProps {
  inputValue: number;
  label: string;
}

const NumberInput: FC<NumberInputProps> = memo((props) => (
  <>
    <div className="mx-3 w-28 block text-center bg-black border-black text-white text-xl">
      {props.label}&nbsp;:&nbsp;{props.inputValue}
    </div>
  </>
));

export default NumberInput;
