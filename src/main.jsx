import React from 'react'
import { useEffect } from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Details",
    element: <portfolio-details />,
  },
]);

function Main() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./src/assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);