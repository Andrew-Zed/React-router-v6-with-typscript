import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TabNav=() => {

  const location = useLocation();

  return <div className='tabNav'>
          <Link to="/tabs/tabs1" className={location.pathname==='/tabs/tab1'?'tab_active':''}> Tab 1 </Link>
          <Link to="/tabs/tabs2" className={location.pathname==='/tabs/tab2'?'tab_active':''}> Tab 2 </Link>
          <Link to="/tabs/tabs3" className={location.pathname==='/tabs/tab3'?'tab_active':''}> Tab 3 </Link>
    
      </div>;
};

export default TabNav;
