import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}
