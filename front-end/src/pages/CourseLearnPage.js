import React, { useState } from "react";

const CourseLearnPage = () => {
  const sections = [
    {
      id: 1,
      title: "Section 1",
      subsections: ["Subsection 1.1", "Subsection 1.2", "Subsection 1.3"],
    },
    {
      id: 2,
      title: "Section 2",
      subsections: ["Subsection 2.1", "Subsection 2.2"],
    },
    {
      id: 3,
      title: "Section 3",
      subsections: ["Subsection 3.1", "Subsection 3.2"],
    },
    {
      id: 4,
      title: "Section 4",
      subsections: ["Subsection 4.1", "Subsection 4.2"],
    },
    {
      id: 5,
      title: "Section 5",
      subsections: ["Subsection 5.1", "Subsection 5.2"],
    },
  ];

  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSubsection, setSelectedSubsection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setSelectedSubsection(null); // Reset selected subsection when a section is clicked
  };

  const handleSubsectionClick = (subsection) => {
    setSelectedSubsection(subsection);
  };

  return (
    <div className="flex h-screen">
      {/* Side Navbar for Sections and Subsections */}
      <div className="w-1/4 bg-blue-900 text-white p-4">
        <h2 className="text-xl font-semibold mb-4">Course Content</h2>
        {sections.map((section, index) => (
          <div key={section.id}>
            <div
              className={`cursor-pointer mb-2 ${
                selectedSection === section.id ? "font-semibold" : ""
              }`}
              onClick={() => handleSectionClick(section.id)}
            >
              {section.title}
            </div>
            {selectedSection === section.id && (
              <ul className="ml-4">
                {section.subsections.map((subsection, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer ${
                      selectedSubsection === subsection ? "font-semibold" : ""
                    }`}
                    onClick={() => handleSubsectionClick(subsection)}
                  >
                    {subsection}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Video Component */}
      <div className="flex-1 bg-black text-white p-4">
        <h2 className="text-xl font-semibold mb-4">{selectedSubsection}</h2>
        {selectedSubsection && (
          <div>
            <video
              controls
              controlsList="nodownload"
              className="max-w-screen max-h-3/4 mx-auto"
            >
              <source src="/images/temp.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseLearnPage;
