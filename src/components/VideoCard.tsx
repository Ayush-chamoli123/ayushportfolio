import { useState, useEffect } from "react";

interface VideoProps {
  video: {
    id: number;
    title: string;
    date: string;
    thumbnail: string;
    duration: string;
    category: string;
    views: number;
    description: string;
    videoUrl?: string;  // add optional videoUrl field
  };
  delay: number;
}

const VideoCard = ({ video, delay }: VideoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);  // new state for toggling video player

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 100);

    return () => clearTimeout(timer);
  }, [delay]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const placeholderThumbnail = (
    <div className="w-full h-48 bg-gradient-to-r from-apple-blue/10 to-apple-blue/30 rounded-t-xl flex items-center justify-center">
      {/* Play icon */}
      <svg
        className="w-16 h-16 text-white/50"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
  );

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 bg-white transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${isHovered ? "scale-[1.02]" : "scale-100"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* If playing, show video tag, else show placeholder */}
        {!isPlaying && video.thumbnail ? (
  <img
    src={video.thumbnail}
    alt={video.title}
    className="w-full h-48 object-cover rounded-t-xl"
  />
) : isPlaying && video.videoUrl ? (
  <video
    className="w-full rounded-t-xl"
    controls
    autoPlay
    src={video.videoUrl}
  />
) : (
  placeholderThumbnail
)}
        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-md">
          {video.duration}
        </div>
        <div className="absolute bottom-3 left-3 bg-apple-blue text-white text-xs font-medium px-2 py-1 rounded-md">
          {video.category}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-apple-black mb-2 line-clamp-2">{video.title}</h3>
        <p className="text-apple-dark-gray text-sm mb-3 line-clamp-2">{video.description}</p>

        <div className="flex items-center justify-between text-xs text-apple-dark-gray">
          <span>{formatDate(video.date)}</span>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            {video.views.toLocaleString()}
          </span>
        </div>

        <div
          className={`mt-4 overflow-hidden transition-all duration-300 ${isHovered ? "max-h-12 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-full py-2 text-sm font-medium text-apple-blue border border-apple-blue/30 rounded-lg hover:bg-apple-blue/5 transition-colors"
          >
            {isPlaying ? "Hide Video" : "Watch Video"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
