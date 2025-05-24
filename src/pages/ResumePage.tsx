
import { useEffect } from "react";
import Header from "../components/Header";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import AIChat from "../components/AIChat";

const ResumePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="h1 mb-4">Resume & Experience</h1>
            <p className="text-lg text-apple-dark-gray">
              A comprehensive overview of my professional experience, education, skills, and projects.
            </p>
            <div className="mt-6">
              <a 
                href="/resume.pdf" 
                className="inline-flex items-center btn-primary"
                download="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Full Resume
              </a>
            </div>
          </div>
        </div>
        <Resume />
      </div>
      <Footer />
      <AIChat />
    </div>
  );
};

export default ResumePage;
