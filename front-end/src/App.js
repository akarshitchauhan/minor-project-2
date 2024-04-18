import "./App.css";
import CourseLearnPage from "./pages/CourseLearnPage";
import CoursePage from "./pages/CoursePage";
import CreateCourse from "./pages/CreateCourse";
import HomePage from "./pages/HomePage";
import InstructorDashboard from "./pages/InstructorDashboard";
import InstructorPage from "./pages/InstructorPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/user", element: <UserPage /> },
  { path: "/course", element: <CoursePage /> },
  { path: "/course/course-learn", element: <CourseLearnPage /> },
  { path: "/teach", element: <InstructorPage /> },
  { path: "/teach/create-course", element: <CreateCourse /> },
  { path: "/instructor-dashboard", element: <InstructorDashboard /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
