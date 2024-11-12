import React from 'react';
import ReactDOM from 'react-dom/client';
import Schedule from './pages/Schedule';
import Campus from './pages/Campus';
import Professors from './pages/Professors';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Schedule />,
    // TODO: Create error page
  },
  {
    path: "campus-plan",
    element: <Campus />,
  },
  {
    path: "professors",
    element: <Professors />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
