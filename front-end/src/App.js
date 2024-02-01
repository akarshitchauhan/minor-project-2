import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"; 
import UserPage from "./pages/UserPage";

const router = createBrowserRouter ([
  {path: '/', element: <HomePage />},
  {path: '/login', element: <LoginPage />},
  {path: '/user', element: <UserPage />},
]);

function App() {
  return(
    <RouterProvider router={router}/>
  );
}
export default App;
