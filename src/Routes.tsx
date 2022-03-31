import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import InnerContent from './components/innerContent/InnerContent';
import Dashboard from './components/dashboard/Dashboard';
import Tabs from './components/tabs/Tabs';
import Settings from './components/settings/Settings';
import Tabs1 from './components/tabs/Tabs1';
import Tabs2 from './components/tabs/Tabs2';
import Tabs3 from './components/tabs/Tabs3';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<InnerContent />}>
      <Route path="/" element={<Navigate replace to="dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tabs" element={<Tabs />}>
        <Route path="/tabs" element={<Navigate replace to="tabs1" />} />
        <Route path="tabs1" element={<Tabs1 />} />
        <Route path="tabs2" element={<Tabs2 />} />
        <Route path="tabs3" element={<Tabs3 />} />
      </Route>
      <Route path="/settings" element={<Settings />} />
    </Route>
  </Routes>
);

export default MainRoutes;
