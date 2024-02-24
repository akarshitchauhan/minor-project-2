import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import BottomCont from "../components/BottomCont";
import CPFirst from "../components/coursepage/CPFirst";
import Content from "../components/coursepage/Content";

const CoursePage = () => {
  const location = useLocation();
  const { courseData } = location.state || {};
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TopNavbar />
      <div className="pt-16"></div>
      <CPFirst courseData={courseData} />
      <Content />
      <div className="bg-black max-w-screen h-96"></div>
      <BottomCont />
    </div>
  );
};

export default CoursePage;
