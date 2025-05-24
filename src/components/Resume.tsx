
import { useState, useEffect } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { GraduationCap, Code, Briefcase, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Education data
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering (AI/ML)",
      institution: "Graphic Era Hill University",
      period: "2024 - Present",
      description: "Specialized in Artificial Intelligence and Machine Learning. Worked on real-world projects including drowsiness detection, facial recognition for secure logins, and diabetes prediction using deep learning. Actively building AI solutions for public transport optimization and proctoring systems.",
    },
  ];

  // Skills data
  const skills = {
    languages: ["Python", "JavaScript", "C++", "HTML/CSS", "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "OpenCV", "Pandas", "NumPy"],
    tools: ["Jupyter Notebook", "Google Colab", "Git", "VS Code", "Linux", "Streamlit", "Flask", "Django"],
    concepts: ["Deep Learning", "Computer Vision", "Natural Language Processing", "Neural Networks", "Data Preprocessing", "Model Evaluation"],
    soft: ["Problem Solving", "Team Collaboration", "Communication", "Research-Oriented Thinking", "Adaptability"],
  };

  // Projects data
  const projects = [
    {
      title: "AI-Powered Exam Proctoring System",
      description: "Built a real-time AI exam surveillance tool using face recognition and anti-cheating measures with OpenCV and Deep Learning (FaceNet/DeepFace).",
      technologies: ["Python", "OpenCV", "Flask", "Deep Learning"],
    },
    {
      title: "Driver Drowsiness Detection",
      description: "Developed a system to detect driver fatigue using real-time eye aspect ratio and alert mechanisms. Integrated with route optimization for safety.",
      technologies: ["Python", "OpenCV", "Dlib", "TensorFlow"],
    },
    {
      title: "Diabetes Prediction System (Non-Invasive)",
      description: "Created a deep learning model to predict diabetes using features like age, BMI, HbA1c, and family history without relying on glucose levels.",
      technologies: ["Keras", "Pandas", "Scikit-learn"],
    },
    {
      title: "Face Recognition Login System",
      description: "Implemented a secure login system using facial authentication via webcam, reducing password dependency.",
      technologies: ["Python", "OpenCV", "Flask"],
    },
    {
      title: "AI-Based Public Transport Optimizer",
      description: "Part of a team project to optimize city bus routes using AI and ML algorithms for faster, data-driven urban mobility.",
      technologies: ["Python", "Scikit-learn", "Google Maps API"],
    },
  ];

  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`h2 mb-4 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              My Experience
            </h2>
            <p className={`text-lg text-apple-dark-gray max-w-xl mx-auto transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`} style={{ transitionDelay: "100ms" }}>
              Explore My Experience, Education, Skills, and Projects
            </p>
          </div>
          
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="education" className="flex items-center space-x-2">
                <GraduationCap className="h-4 w-4" />
                <span>Education</span>
              </TabsTrigger>
              <TabsTrigger value="skills" className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>Skills</span>
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center space-x-2">
                <Code className="h-4 w-4" />
                <span>Projects</span>
              </TabsTrigger>
              <TabsTrigger value="resume" className="flex items-center space-x-2">
                <Briefcase className="h-4 w-4" />
                <span>Resume</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="education">
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className={`glass-card p-6 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-medium text-apple-black">{edu.degree}</h3>
                        <p className="text-apple-dark-gray">{edu.institution}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-apple-blue/10 text-apple-blue">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                    <p className="text-apple-black">{edu.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="skills">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div 
                      className={`transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: "100ms" }}
                    >
                      <h3 className="text-xl font-medium text-apple-black mb-4">Languages & Frameworks</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.languages.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="text-sm font-medium px-3 py-1 rounded-full bg-apple-blue/10 text-apple-blue"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div 
                      className={`transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: "200ms" }}
                    >
                      <h3 className="text-xl font-medium text-apple-black mb-4">Tools & Platforms</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.tools.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-apple-dark-gray"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div 
                      className={`transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: "300ms" }}
                    >
                      <h3 className="text-xl font-medium text-apple-black mb-4">ML & AI Concepts</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.concepts.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="text-sm font-medium px-3 py-1 rounded-full bg-apple-blue/10 text-apple-blue"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div 
                      className={`transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                      style={{ transitionDelay: "400ms" }}
                    >
                      <h3 className="text-xl font-medium text-apple-black mb-4">Soft Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.soft.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100/80 text-apple-dark-gray"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="projects">
              <div className="space-y-8">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className={`glass-card p-6 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <h3 className="text-xl font-medium text-apple-black mb-2">{project.title}</h3>
                    <p className="text-apple-black mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs font-medium px-2 py-1 rounded-full bg-apple-blue/10 text-apple-blue"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="resume">
              <Card>
                <CardHeader>
                  <CardTitle>Full Resume</CardTitle>
                  <CardDescription>
                    Download my complete resume with detailed information about my experience, education, skills, and projects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
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
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Resume;
