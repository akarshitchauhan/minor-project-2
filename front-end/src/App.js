import "./App.css";
import CoursePage from "./pages/CoursePage";
import CreateCourse from "./pages/CreateCourse";
import HomePage from "./pages/HomePage";
import InstructorPage from "./pages/InstructorPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/user", element: <UserPage /> },
  { path: "/course", element: <CoursePage /> },
  { path: "/teach", element: <InstructorPage /> },
  { path: "/teach/create-course", element: <CreateCourse /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
