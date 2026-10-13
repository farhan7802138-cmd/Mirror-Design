import React from 'react';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import ServiceAreas from './pages/ServiceAreas.jsx';
import Aluminium from './pages/Aluminium.jsx';
import Mirrors from './pages/Mirrors.jsx';
import Gallery from './pages/Gallery.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import NotFound from './pages/NotFound.jsx';

import ProductPage from './templates/ProductPage.jsx';
import BlogPostPage from './templates/BlogPostPage.jsx';
import ServicePage from './templates/ServicePage.jsx';
import ServiceAreaPage from './templates/ServiceAreaPage.jsx';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/service-areas', element: <ServiceAreas /> },
  { path: '/aluminium', element: <Aluminium /> },
  { path: '/mirrors', element: <Mirrors /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/blog', element: <Blog /> },
  { path: '/contact', element: <Contact /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: <Terms /> },

  // Template routes
  { path: '/services/:slug', element: <ServicePage /> },
  { path: '/service-areas/:slug', element: <ServiceAreaPage /> },
  { path: '/blog/:slug', element: <BlogPostPage /> },
  { path: '/products/:slug', element: <ProductPage /> },

  // 404
  { path: '/404', element: <NotFound /> },
  { path: '*', element: <NotFound /> }
];

export default routes;
