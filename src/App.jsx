import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes.jsx';

export default function App() {
  return (
    <Routes>
      {routes.map((route, idx) => (
        <Route key={idx} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
