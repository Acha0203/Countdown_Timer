import React from 'react';
import Top from './components/pages/Top';
import { AppContextProvider } from './context/AppContext';

const App: React.FunctionComponent = () => (
  <div className="App w-screen h-screen flex flex-col justify-center items-center">
    <AppContextProvider>
      <Top />
    </AppContextProvider>
  </div>
);

export default App;
