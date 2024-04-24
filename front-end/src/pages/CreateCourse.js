import React, { useState } from "react";
import Step1 from "../components/createcoursepage/Step1";
import Step2 from "../components/createcoursepage/Step2";
import Step3 from "../components/createcoursepage/Step3";
import Step4 from "../components/createcoursepage/Step4";
import Step5 from "../components/createcoursepage/Step5";

const CreateCourse = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseInfo, setCourseInfo] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleNextStep = () => {
    setCourseTitle(courseTitle);
    setCourseInfo(courseInfo);
    setCoursePrice(coursePrice);
    setImagePreview(imagePreview);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      {currentStep === 1 && <Step1 onNextStep={handleNextStep} />}
      {currentStep === 2 && <Step2 onNextStep={handleNextStep} onPrevStep={handlePrevStep}/>}
      {currentStep === 3 && <Step3 onNextStep={handleNextStep} onPrevStep={handlePrevStep}/>}
      {currentStep === 4 && <Step4 onNextStep={handleNextStep} onPrevStep={handlePrevStep}/>}
      {currentStep === 5 && <Step5 courseTitle={courseTitle} courseInfo={courseInfo} coursePrice={coursePrice} imagePreview={imagePreview} onNextStep={handleNextStep} />} 
    </div>
  );
};

export default CreateCourse;
