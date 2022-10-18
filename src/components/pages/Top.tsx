import React, { FC } from 'react';
import Header from '../molecules/Header';
import Timer from '../molecules/Timer';

const Top: FC = () => (
  <div className="flex flex-col justify-center items-center">
    <Header />
    <Timer />
  </div>
);

export default Top;
