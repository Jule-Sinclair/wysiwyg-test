import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ToastUI from './ToastUI';



const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ToastUI />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
