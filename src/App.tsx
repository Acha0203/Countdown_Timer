import React from 'react';
import Timer from './components/molecules/Timer';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-white">Countdown Timer</h1>
      <Timer />
    </div>
  );
};

export default App;
