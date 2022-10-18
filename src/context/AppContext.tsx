import React, { createContext, ReactElement, ReactNode, useContext, useState } from 'react';

interface AppContextValue {
  showTimer: boolean;
  setShowTimer: (showanimation: boolean) => void;
  isRunning: boolean;
  setIsRunning: (isRunning: boolean) => void;
  timeSetting: number;
  setTimeSetting: (timeSetting: number) => void;
  count: number;
  setCount: (count: any) => void;
}

const AppContext = createContext({} as AppContextValue);

export const useAppContext = (): AppContextValue => useContext(AppContext);

export const AppContextProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [showTimer, setShowTimer] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [timeSetting, setTimeSetting] = useState(10);
  const [count, setCount] = useState(timeSetting);

  const value = {
    showTimer,
    setShowTimer,
    isRunning,
    setIsRunning,
    timeSetting,
    setTimeSetting,
    count,
    setCount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
