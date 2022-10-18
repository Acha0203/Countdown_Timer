import React, { FC, memo } from 'react';
import HoursInput from '../molecules/HoursInput';
import MinutesInput from '../molecules/MinutesInput';
import SecondsInput from '../molecules/SecondsInput';

const TimeInputFroms: FC = memo(() => (
  <div className="flex flex-col justify-center items-center">
    <HoursInput />
    <MinutesInput />
    <SecondsInput />
  </div>
));

export default TimeInputFroms;
