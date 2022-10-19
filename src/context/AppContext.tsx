import React, { createContext, ReactElement, ReactNode, useContext, useState } from 'react';

interface AppContextValue {
  showTimer: boolean;
  setShowTimer: (showanimation: boolean) => void;
  isRunning: boolean;
  setIsRunning: (isRunning: boolean) => void;
  timeSetting: number;
  setTimeSetting: (timeSetting: number) => void;
  hoursSetting: number;
  setHoursSetting: (hoursSetting: number) => void;
  minutesSetting: number;
  setMinutesSetting: (minutesSetting: number) => void;
  secondsSetting: number;
  setSecondsSetting: (secondsSetting: number) => void;
  showAlert: boolean;
  setShowAlert: (showAlert: boolean) => void;
}

const AppContext = createContext({} as AppContextValue);

export const useAppContext = (): AppContextValue => useContext(AppContext);

export const AppContextProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [showTimer, setShowTimer] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [timeSetting, setTimeSetting] = useState(0);
  const [hoursSetting, setHoursSetting] = useState(0);
  const [minutesSetting, setMinutesSetting] = useState(0);
  const [secondsSetting, setSecondsSetting] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const value = {
    showTimer,
    setShowTimer,
    isRunning,
    setIsRunning,
    timeSetting,
    setTimeSetting,
    hoursSetting,
    setHoursSetting,
    minutesSetting,
    setMinutesSetting,
    secondsSetting,
    setSecondsSetting,
    showAlert,
    setShowAlert,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
