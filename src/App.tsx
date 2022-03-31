import React from 'react';

import MainRoutes from './Routes';
import Sidebar from './components/sidebar/Sidebar';
import './style.css';

function App() {
  return (
    <div className="app">
      
      {/** Sidebar */}
      <Sidebar />
      
      {/** Inner container */}
      <MainRoutes />
    </div>
  );
}

export default App;
