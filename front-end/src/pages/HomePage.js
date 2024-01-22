import React from "react";
import TopNavbar from "../components/TopNavbar";
import Photo from "../components/Photo";
import BottomComponent from "../components/BottomComponent";
import AIAssistant from "../components/AIAssistant";
import CourseCard from "../components/CourseCard";
import CategoryCard from "../components/CategoryCard";
import "./HomePage.css";

const HomePage = () => {
  const photos = [
    "/images/photo1.png",
    "/images/photo2.png",
    // Add more photo paths as needed
  ];

  const dummyCourses = [
    {
      title: "Web Development Bootcamp",
      description:
        "Learn the essentials of web development and build real-world projects.",
      instructor: "John Doe",
      image: "/images/course1.png",
    },
    {
      title: "Data Science Foundations",
      description:
        "Explore the world of data science and enhance your analytical skills.",
      instructor: "Jane Smith",
      image: "/images/course2.jpg",
    },
    {
      title: "Mobile App Development",
      description:
        "Create mobile applications for iOS and Android platforms from scratch.",
      instructor: "Sam Wilson",
      image: "/images/course3.jpg",
    },
    {
      title: "Digital Marketing Strategies",
      description:
        "Learn effective digital marketing techniques to boost online presence.",
      instructor: "Emily Davis",
      image: "/images/course4.jpg",
    },
    {
      title: "Graphic Design Fundamentals",
      description:
        "Master the basics of graphic design and create visually appealing content.",
      instructor: "Alex Turner",
      image: "/images/course5.jpg",
    },
  ];

  const dummyCategories = [
    {
      name: "Development",
      image: "/images/category1.jpg",
    },
    {
      name: "Photography",
      image: "/images/category2.jpg",
    },
    {
      name: "Marketing",
      image: "/images/category3.jpg",
    },
    {
      name: "Business",
      image: "/images/category4.jpg",
    },
    {
      name: "PD",
      image: "/images/category5.jpg",
    },
    {
      name: "Music",
      image: "/images/category6.jpg",
    },
    {
      name: "IT & Software",
      image: "/images/category7.jpg",
    },
    {
      name: "Design",
      image: "/images/category8.jpg",
    },
    // Add more categories as needed
  ];

  return (
    <div>
      <TopNavbar />
      <AIAssistant />
      <Photo photos={photos} />
      <div className="text1">
        <h1>Get yourself enrolled in some of our trending courses!</h1>
      </div>
      <div className="course-card-div">
        {dummyCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <div className="text1">
        <h1>Browse courses from specific categories</h1>
      </div>
      <div className="category-card-div">
        {dummyCategories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
      <div className="text2">
        <h1>Get yourself job ready 👀</h1>
      </div>
      <BottomComponent />
    </div>
  );
};

export default HomePage;
