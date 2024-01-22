// App.js

import React from "react";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"; // Import your CSS file for styling

const router = createBrowserRouter ([
  {path: '/', element: <HomePage />},
  {path: '/login', element: <HomePage />},
]);

function App() {
  return(
    <RouterProvider router={router}/>
  );
}
export default App;
