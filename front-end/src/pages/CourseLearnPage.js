import React from "react";
import { useParams } from "react-router-dom";

const CourseLearnPage = () => {
    // Dummy data for sections and subsections
    const sections = [
        {
            id: 1,
            title: "Section 1",
            subsections: ["Subsection 1.1", "Subsection 1.2", "Subsection 1.3"]
        },
        {
            id: 2,
            title: "Section 2",
            subsections: ["Subsection 2.1", "Subsection 2.2"]
        }
    ];

    const { sectionId, subsectionId } = useParams();

    // Find the selected section and subsection
    const selectedSection = sections.find(section => section.id === parseInt(sectionId));
    const selectedSubsection = selectedSection ? selectedSection.subsections.find(subsection => subsection === subsectionId) : null;

    return (
        <div className="flex h-screen">
            {/* Left Side Navbar */}
            <div className="w-1/4 bg-blue-700 text-white">
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Course Content</h2>
                    {sections.map(section => (
                        <div key={section.id} className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                            <ul className="ml-4">
                                {section.subsections.map(subsection => (
                                    <li key={subsection}>
                                        <a href={`/${section.id}/${subsection}`} className={selectedSubsection === subsection ? "text-blue-500" : ""}>{subsection}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Right Side Content */}
            <div className="flex-1 p-4">
                {selectedSubsection ? (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">{selectedSubsection}</h2>
                        {/* Video Player Component */}
                        {/* You can replace the video player component with your own */}
                        <div className="aspect-w-16 aspect-h-9 bg-black">
                            <video controls className="w-full h-full">
                                <source src="temp.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                ) : (
                    <div>Please select a subsection to view content.</div>
                )}
            </div>
        </div>
    );
}

export default CourseLearnPage;
