
import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";

// Mock video data
const videoData = [
  {
    id: 1,
    title: "Introduction ",
    date: "2025-05-20",
    thumbnail: "/thumbnails/Unknown.jpg",
    duration: "1:10",
    category: "MYSELF",
    views: 1243,
    description: "Learn the basics of React Hooks and how they can simplify your functional components.",
    videoUrl: "/videos/introduction.mp4"
  },
  {
    id: 2,
    title: "Building Neural Networks with TensorFlow",
    date: "2025-01-28",
    thumbnail: "/thumbnails/neural.jpg",
    duration: "1:07",
    category: "AI & Machine Learning",
    views: 856,
    description: "A step-by-step guide to creating neural networks using TensorFlow and Keras.",
    videoUrl: "/videos/driver_drowsiness_project.mp4"
  },
  {
    id: 3,
    title: "OPERATING SYSTEM",
    date: "2025-02-10",
    thumbnail: "/thumbnails/Unknown-1.jpg",
    duration: "1:05",
    category: "CSS",
    views: 752,
    description: "Master complex CSS animations and transitions for modern web interfaces.",
    videoUrl: "/videos/compiler_design_project.mp4" 
  },
  {
    id: 4,
    title: "DEEP LEARNING",
    date: "2023-08-22",
    thumbnail: "/thumbnails/Unknown-3.jpg",
    duration: "0:58",
    category: "Backend",
    views: 645,
    description: "Learn how to build efficient APIs using GraphQL for your web applications.",
    videoUrl:"/videos/self_driving_car_simulation_project.mp4" 
  },
  {
    id: 5,
    title: "PROGRAMMING",
    date: "2023-08-05",
    thumbnail: "/thumbnails/Unknown-2.jpg",
    duration: "1:02",
    category: "CSS",
    views: 935,
    description: "Essential principles for creating responsive websites that work on all devices.",
    videoUrl:"/videos/leetcode_experience_review.mp4" 
  },
  
];


// Get unique categories
const categories = ["All", ...new Set(videoData.map(video => video.category))];

const VideoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredVideos, setFilteredVideos] = useState(videoData);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Filter videos based on category and search query
    const filtered = videoData.filter(video => {
      const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
      const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           video.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    
    setFilteredVideos(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              className={`h2 mb-4 transition-opacity duration-700 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              Learning Journey Gallery
            </h2>
            <p 
              className={`text-lg text-apple-dark-gray max-w-xl mx-auto transition-opacity duration-700 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Explore my daily learning videos and tutorials on various tech topics
            </p>
          </div>
          
          {/* Search and Filter */}
          <div 
            className={`mb-10 transition-opacity duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="w-full md:w-auto flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search videos..."
                    className="w-full px-4 py-3 pl-10 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-apple-blue/30 transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <svg 
                    className="absolute left-3 top-3.5 w-5 h-5 text-apple-dark-gray" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              
              <div className="w-full md:w-auto flex flex-wrap gap-2 justify-center md:justify-end">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-apple-blue text-white shadow-md"
                        : "bg-gray-100 text-apple-dark-gray hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Video Grid */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {filteredVideos.length > 0 ? (
              filteredVideos.map((video, index) => (
                <VideoCard 
                  key={video.id} 
                  video={video}
                  delay={index}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <svg 
                  className="w-16 h-16 mx-auto text-apple-dark-gray/30 mb-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
                </svg>
                <h3 className="text-xl font-medium text-apple-black mb-2">No videos found</h3>
                <p className="text-apple-dark-gray">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
