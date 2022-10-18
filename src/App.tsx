import React from 'react';
import Layout from './components/pages/Layout';
import { AppContextProvider } from './context/AppContext';

const App: React.FunctionComponent = () => (
  <div className="App w-screen h-screen flex flex-col justify-center items-center">
    <AppContextProvider>
      <Layout />
    </AppContextProvider>
  </div>
);

export default App;
