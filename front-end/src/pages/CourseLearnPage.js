import React, { useState, useRef, useEffect } from "react";

const CourseLearnPage = () => {
  const [videoLinks, setVideoLinks] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoPaused, setVideoPaused] = useState(false);

  const videoRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  useEffect(() => {
    // Fetch video links from the backend when component mounts
    fetchVideoLinks();
  }, []);

  const fetchVideoLinks = async () => {
    // Make a request to fetch video links based on the course
    try {
      // Example: const response = await axios.get(`http://localhost:4000/course/${courseId}/videos`);
      // Set the video links in state
      setVideoLinks(["video1.mp4", "video2.mp4", "video3.mp4"]);
    } catch (error) {
      console.error("Error fetching video links:", error);
    }
  };

  const handleVideoTimeUpdate = () => {
    const currentTime = Math.floor(videoRef.current.currentTime);
    if (currentTime === 10 && !videoPaused) {
      videoRef.current.pause();
      setVideoPaused(true);
    }
  };

  const handlePauseAndShowCard = () => {
    // Show card-like component or modal here
  };

  const handleContinue = () => {
    setVideoPaused(false);
    videoRef.current.play();
  };

  const handleSeeking = (e) => {
    // Prevent default seeking behavior
    e.preventDefault();
  };

  const handleSeeked = () => {
    // Reset the video's current time to prevent manual seeking
    alert("Manual seeking disabled.");
  };

  return (
    <div className="flex h-screen">
      {/* Video Component */}
      <div className="flex-1 bg-black text-white p-4">
        {videoLinks.length > 0 && (
          <div>
            <video
              ref={videoRef}
              controls
              controlsList="nodownload"
              className="max-w-screen max-h-3/4 mx-auto"
              src={videoLinks[currentVideoIndex]}
              onTimeUpdate={handleVideoTimeUpdate}
              onSeeking={handleSeeking} // Disable seeking
              onSeeked={handleSeeked}
            >
              Your browser does not support the video tag.
            </video>
            {videoPaused && (
              <div className="p-4 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="bg-gray-400 p-4 rounded-lg">
                  <p className="text-2xl">Quiz Time!</p>
                  <button
                    onClick={handleContinue}
                    className="bg-blue-900 text-white px-4 py-2 rounded-md ml-2"
                  >
                    Option 1
                  </button>
                  <button
                    onClick={handleContinue}
                    className="bg-blue-900 text-white px-4 py-2 rounded-md ml-2"
                  >
                    Option 2
                  </button>
                  <button
                    onClick={handleContinue}
                    className="bg-blue-900 text-white px-4 py-2 rounded-md ml-2"
                  >
                    Option 3
                  </button>
                  <button
                    onClick={handleContinue}
                    className="bg-blue-900 text-white px-4 py-2 rounded-md ml-2"
                  >
                    Option 4
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseLearnPage;
