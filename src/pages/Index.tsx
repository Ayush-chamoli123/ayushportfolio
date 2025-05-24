
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import VideoGallery from "../components/VideoGallery";
import Footer from "../components/Footer";
import AIChat from "../components/AIChat";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Resume />
      <VideoGallery />
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
