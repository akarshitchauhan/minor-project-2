import React from "react";
import TopNavbar from "../components/TopNavbar";
import Photo from "../components/Photo";
import BottomComponent from "../components/BottomComponent";
import AIAssistant from "../components/AIAssistant";
import CourseCard from "../components/CourseCard";
import CategoryCard from "../components/CategoryCard";
import TextDisplay from "../components/TextDisplay";

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
    {
      title: "Graphic Design Fundamentals",
      description:
        "Master the basics of graphic design and create visually appealing content.",
      instructor: "Alex Turner",
      image: "/images/course5.jpg",
    },
    {
      title: "Graphic Design Fundamentals",
      description:
        "Master the basics of graphic design and create visually appealing content.",
      instructor: "Alex Turner",
      image: "/images/course5.jpg",
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
      <div className="pt-16">
        <TopNavbar />
      </div>
      <TextDisplay />
      <AIAssistant />
      <Photo photos={photos} />
      <div className="flex flex-wrap justify-center items-center mt-12 mb-1 ml-4 sm:ml-10 font-sans">
        <h1 className="font-serif tracking-wide text-2xl font-bold text-gray-800">
          Get yourself enrolled in some of our trending courses!
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center ml-4 sm:ml-8 mr-4 sm:mr-8 p-">
        {dummyCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center mt-12 mb-1 ml-4 sm:ml-10 font-sans">
        <h1 className="font-serif tracking-wide text-2xl font-bold text-gray-800">
          Browse courses from specific categories
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center ml-4 sm:ml-8 mr-4 sm:mr-8">
        {dummyCategories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
      <div className="mt-8 flex justify-center font-sans">
        <h1 className="font-serif tracking-wide text-2xl font-bold text-black">
          Get yourself job ready 👀
        </h1>
      </div>
      <BottomComponent />
    </div>
  );
};

export default HomePage;
