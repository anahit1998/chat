import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'routes/Routes';

export const App = () => (
  <BrowserRouter>
    <div className="app">
      <Routes />
    </div>
  </BrowserRouter>
);
export default App;
