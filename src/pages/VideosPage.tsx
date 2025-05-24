
import { useEffect } from "react";
import Header from "../components/Header";
import VideoGallery from "../components/VideoGallery";
import Footer from "../components/Footer";
import AIChat from "../components/AIChat";

const VideosPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="h1 mb-4">Learning Video Gallery</h1>
            <p className="text-lg text-apple-dark-gray">
              Explore my collection of daily learning videos covering a wide range of tech topics
              from web development to artificial intelligence.
            </p>
          </div>
        </div>
        <VideoGallery />
      </div>
      <Footer />
      <AIChat />
    </div>
  );
};

export default VideosPage;
