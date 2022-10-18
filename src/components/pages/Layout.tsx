import React, { FC, memo, useEffect } from 'react';
import Header from '../molecules/Header';
import Timer from '../organisms/Timer';

const Layout: FC = memo(() => {
  useEffect(() => {
    document.title = 'Countdown Timer';
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Timer />
    </div>
  );
});

export default Layout;
