import React from 'react';
import { Outlet } from 'react-router-dom';

import TabNav from './TabNav';

const Tabs=() => {
  return <div className='tabs'>
      <h1>Tabs Demo Page</h1>

      {/** Tab navigation */}
      <TabNav/>
      {/** Tab inner Conntent */}
      <Outlet/>
      </div>;
};

export default Tabs;
