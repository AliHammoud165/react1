import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './component/pages/home';
import Login from './component/pages/login';
import More from './component/pages/more';
import Notfoundpage from './component/pages/notfound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Nameprovider } from './component/usecontext/context'; // Import Nameprovider
import Singup from './component/pages/singup';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Notfoundpage />,
  },
  {
    path: '/login',
    element: (
      <Nameprovider>
        <Login />
      </Nameprovider>
    ),
  },
  {
    path: '/more',
    element: (
      <Nameprovider>
        <More />
      </Nameprovider>
    ),
  },
    {
    path: '/singup',
    element: (
      <Nameprovider>
        <Singup />
      </Nameprovider>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
