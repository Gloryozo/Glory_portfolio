import React, { useState, useRef, useEffect } from 'react';
import {
  Heart,
  Sparkles,
  Code,
  Database,
  Cloud,
  Smartphone,
  TestTube,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Play,
  Pause,
  ArrowRight,
  Star,
  CheckCircle,
  ChevronDown,
  Users,
 } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const projects = [
    {
      id: 1,
      title: "Book-Keeper",
      description: "A native Android application built with Kotlin to help users organize, track, and manage their book collections.",
      technologies: ["Kotlin", "Android", "Node.js", "Express", "MongoDB", "Material Design"],
      github: "https://github.com/mobile-dev-2025/book-keeper",
      video: "https://placehold.co/800x450/667eea/ffffff?text=Book-Keeper+Demo+Video",
      image: "https://placehold.co/400x250/667eea/ffffff?text=Book-Keeper+Screenshot",
      type: "Mobile App",
      status: "Coming Soon"
    },
    {
      id: 2,
      title: "Quizzify Interactive Quiz Application",
      description: "An interactive quiz application that allows users to test their knowledge on various topics.",
      technologies: ["React.js", "PostgreSQL", "Bootstrap", "JavaScript"],
      github: "https://github.com/Gloryozo/Quizzify",
      video: "https://placehold.co/800x450/f093fb/ffffff?text=Quizzify+Demo+Video",
      image: "https://placehold.co/400x250/f093fb/ffffff?text=Quizzify+Screenshot",
      type: "Web App",
      status: "Live"
    },
    {
      id: 3,
      title: "Movie App Database",
      description: "A movie database application that enables users to search for and view details about movies and theatre schedules.",
      technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "TMDB API"],
      github: "https://github.com/Group-16-Movie-App/CineCat_movie_app",
      video: "https://placehold.co/800x450/4facfe/ffffff?text=Movie+App+Demo+Video",
      image: "https://placehold.co/400x250/4facfe/ffffff?text=Movie+App+Screenshot",
      type: "Web App",
      status: "Live"
    }
  ];

  const skills = [
    {
      category: "Frontend Technologies",
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
      icon: Code
    },
    {
      category: "Frontend Frameworks",
      items: ["React.js", "Bootstrap", "Tailwind CSS", "Material UI"],
      icon: Code
    },
    {
      category: "Backend Technologies",
      items: ["Node.js", "Express.js", "REST API", "GraphQL"],
      icon: Database
    },
    {
      category: "Mobile Technologies",
      items: ["Android", "Kotlin", "Java", "React Native", "Flutter"],
      icon: Smartphone
    },
    {
      category: "API Integration",
      items: ["REST API", "GraphQL", "TMDB API", "OpenWeather API"],
      icon: ExternalLink
    },
    {
      category: "Databases & Storages",
      items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Firebase"],
      icon: Database
    },
    {
      category: "Cloud & DevOps",
      items: ["Microsoft Azure", "AWS EC2/S3/Lambda", "Azure Functions", "Docker", "GitHub Actions", "CI/CD"],
      icon: Cloud
    },
    {
      category: "UI/UX Design",
      items: ["Figma", "Mockflow", "Material Design"],
      icon: Sparkles
    },
    {
      category: "Development Tools",
      items: ["VS Code", "Android Studio", "Git", "GitHub", "npm", "yarn"],
      icon: TestTube
    },
    {
      category: "Communication & Language Skills",
      items: ["English", "Finnish", "Teamwork", "Presentation", "Documentation"],
      icon: Users
    }
  ];

  const toggleVideo = (videoId: number) => {
    if (currentVideo === videoId) {
      setIsPlaying(!isPlaying);
      if (videoRefs.current[videoId]) {
        if (isPlaying) {
          videoRefs.current[videoId].pause();
        } else {
          videoRefs.current[videoId].play();
        }
      }
    } else {
      if (currentVideo && videoRefs.current[currentVideo]) {
        videoRefs.current[currentVideo].pause();
      }
      setCurrentVideo(videoId);
      setIsPlaying(true);
      if (videoRefs.current[videoId]) {
        videoRefs.current[videoId].play();
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom SVG Icons for Technologies
  const ReactIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
  );

  const NodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 8v8M8 12h8"></path>
    </svg>
  );

  const ExpressIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
  );

  const MongoDBIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
  );

  const PostgreSQLIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="3" x2="9" y2="21"></line>
    </svg>
  );

  const AWSIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
      <path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
    </svg>
  );

  const AzureIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
      <path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
    </svg>
  );

  const KotlinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
  );

  const AndroidIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
  );

  const MaterialDesignIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
  );


  const DockerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
  );

  const JestIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
  );

  const CypressIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Navigation */}
  <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/90 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-indigo-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                Glory Ozoji
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors duration-200 ${
                    activeSection === section
                      ? 'text-indigo-400 border-b-2 border-indigo-400'
                      : 'text-gray-400 hover:text-indigo-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a href="https://linkedin.com/in/gloryozoji" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:gloryozoji@gmail.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
  <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-100">
                    Glory Ifeoma Ozoji
                  </h1>
                  <p className="text-xl text-indigo-400 font-semibold">Full Stack Developer</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Enthusiastic second-year Information Technology student with experience in developing web applications 
                  and building interactive user interfaces. Passionate about leveraging technology to solve real-world problems.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Bright and joyful personality, team spirited, with excellent emotional intelligence and communication skills. 
                  A critical thinker, fast learner with strong interest in acquiring new knowledge.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:gloryozoji@gmail.com"
                  className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-medium rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Hire Me</span>
                </a>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                  className="px-6 py-3 border-2 border-amber-600 text-amber-600 font-medium rounded-full hover:bg-amber-600 hover:text-white transition-all duration-200 flex items-center space-x-2"
                >
                  <Code className="w-4 h-4" />
                  <span>View Projects</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-gray-800 text-indigo-400 rounded-full text-sm font-medium border border-gray-700">
                  React.js
                </span>
                <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium border border-amber-200">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium border border-amber-200">
                  AWS & Azure
                </span>
                <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium border border-amber-200">
                  Kotlin
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-700 p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <img 
                  src="https://placehold.co/400x500/667eea/ffffff?text=Glory+Ozoji+Photo" 
                  alt="Glory Ozoji" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="mt-6 text-center">
                  <p className="text-lg font-semibold text-gray-100">M.Sc Information Technology</p>
                  <p className="text-indigo-400">Oulu University of Applied Sciences</p>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center animate-pulse">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
  <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-amber-600 pl-4">
                    <h4 className="font-semibold text-lg">Bachelor of Engineering, Information Technology</h4>
                    <p className="text-gray-400">Oulu University of Applied Sciences (2023 - Present)</p>
                  </div>
                  <div className="border-l-4 border-amber-600 pl-4">
                    <h4 className="font-semibold text-lg">Master of Science</h4>
                    <p className="text-gray-600">University of Jos, Nigeria (2022)</p>
                  </div>
                  <div className="border-l-4 border-amber-600 pl-4">
                    <h4 className="font-semibold text-lg">Bachelor of Science</h4>
                    <p className="text-gray-600">University of Jos, Nigeria (CPGA 4.09/5) (2017)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Awards</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-300">Google Cloud Platform(GCP), Google Africa Developer Scholarship (2022)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>University of Jos Masters’ scholarship (2021)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200/50">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700">gloryozoji@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <PhoneIcon />
                    <span className="text-gray-700">(+358) 466367755</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <LocationIcon />
                    <span className="text-gray-700">Mylloja, Oulu, Finland</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-amber-600" />
                    <a href="https://linkedin.com/in/gloryozoji" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 transition-colors">
                      linkedin.com/in/gloryozoji
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-amber-200/50">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium border border-amber-200">
                    English
                  </span>
                  <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium border border-amber-200">
                    Finnish
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
  <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Technical Skills</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                {skillGroup.icon && <skillGroup.icon className="w-7 h-7 text-white" />}
              </div>
              <h3 className="text-xl font-bold text-gray-100">{skillGroup.category}</h3>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {skillGroup.items.map((item, itemIndex) => {
                let IconComponent;
                switch (item) {
                  case 'React.js':
                    IconComponent = ReactIcon;
                    break;
                  case 'Node.js':
                    IconComponent = NodeIcon;
                    break;
                  case 'Express':
                  case 'Express.js':
                    IconComponent = ExpressIcon;
                    break;
                  case 'MongoDB':
                    IconComponent = MongoDBIcon;
                    break;
                  case 'PostgreSQL':
                    IconComponent = PostgreSQLIcon;
                    break;
                  case 'AWS':
                  case 'AWS EC2/S3/Lambda':
                    IconComponent = AWSIcon;
                    break;
                  case 'Microsoft Azure':
                  case 'Azure':
                  case 'Azure Functions':
                    IconComponent = AzureIcon;
                    break;
                  case 'Kotlin':
                    IconComponent = KotlinIcon;
                    break;
                  case 'Android':
                    IconComponent = AndroidIcon;
                    break;
                  case 'Material Design':
                  case 'Material UI':
                    IconComponent = MaterialDesignIcon;
                    break;
                  case 'Docker':
                    IconComponent = DockerIcon;
                    break;
                  case 'Jest':
                    IconComponent = JestIcon;
                    break;
                  case 'Cypress':
                    IconComponent = CypressIcon;
                    break;
                  case 'GitHub':
                    IconComponent = Github;
                    break;
                  case 'VS Code':
                    IconComponent = Code;
                    break;
                  case 'Android Studio':
                    IconComponent = Smartphone;
                    break;
                  case 'npm':
                  case 'yarn':
                    IconComponent = TestTube;
                    break;
                  case 'Figma':
                  case 'Mockflow':
                    IconComponent = Sparkles;
                    break;
                  case 'MySQL':
                  case 'DynamoDB':
                  case 'Firebase':
                    IconComponent = Database;
                    break;
                  case 'REST API':
                  case 'GraphQL':
                  case 'TMDB API':
                  case 'OpenWeather API':
                    IconComponent = ExternalLink;
                    break;
                  case 'CI/CD':
                  case 'GitHub Actions':
                    IconComponent = TestTube;
                    break;
                  case 'English':
                  case 'Finnish':
                  case 'Teamwork':
                  case 'Presentation':
                  case 'Documentation':
                    IconComponent = Users;
                    break;
                  default:
                    IconComponent = Code;
                }
                return (
                  <span key={itemIndex} className="px-3 py-2 bg-gray-900 text-indigo-400 rounded-full text-sm font-medium border border-indigo-600 flex items-center space-x-2">
                    <IconComponent className="w-5 h-5 mr-1" />
                    <span>{item}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

      {/* Projects Section */}
  <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-400">Showcasing my best work with video demonstrations</p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={project.id} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-100">{project.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => {
                      let IconComponent;
                      switch (tech) {
                        case 'React.js':
                          IconComponent = ReactIcon;
                          break;
                        case 'Node.js':
                          IconComponent = NodeIcon;
                          break;
                        case 'Express':
                          IconComponent = ExpressIcon;
                          break;
                        case 'MongoDB':
                          IconComponent = MongoDBIcon;
                          break;
                        case 'PostgreSQL':
                          IconComponent = PostgreSQLIcon;
                          break;
                        case 'AWS':
                          IconComponent = AWSIcon;
                          break;
                        case 'Azure':
                          IconComponent = AzureIcon;
                          break;
                        case 'Kotlin':
                          IconComponent = KotlinIcon;
                          break;
                        case 'Android':
                          IconComponent = AndroidIcon;
                          break;
                        case 'Material Design':
                          IconComponent = MaterialDesignIcon;
                          break;
                        default:
                          IconComponent = Code;
                      }
                      
                      return (
                        <span key={techIndex} className="px-3 py-1 bg-gray-800 text-indigo-400 rounded-full text-sm font-medium border border-gray-700 flex items-center space-x-1">
                          <IconComponent className="w-4 h-4" />
                          <span>{tech}</span>
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <button
                      onClick={() => toggleVideo(project.id)}
                      className="flex items-center space-x-2 px-4 py-2 bg-indigo-800 text-white rounded-lg hover:bg-indigo-900 transition-colors"
                    >
                      {isPlaying && currentVideo === project.id ? (
                        <>
                          <Pause className="w-4 h-4" />
                          <span>Pause Demo</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          <span>Play Demo</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-700">
                    <div className="relative overflow-hidden rounded-xl">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => toggleVideo(project.id)}
                          className="w-16 h-16 bg-gray-800/90 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                        >
                          <Play className="w-8 h-8 text-indigo-400" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                        <span className="text-sm text-gray-400">{project.type}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
  <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {/* Current Position */}
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-100">Full Stack Developer</h3>
                  <p className="text-indigo-400 font-semibold">Microgate Computers Limited</p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="px-4 py-2 bg-gray-800 text-indigo-400 rounded-full text-sm font-medium">
                    2022 - Present
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300">
                  Perform end-to-end development of scalable and high-performance web applications using React.js, Node.js, and Express.js.
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div>
                    <h4 className="font-semibold text-gray-100 mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Design and implement RESTful APIs for user authentication and data retrieval</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Establish comprehensive test coverage using Jest and React Testing Library</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Utilize GitHub Actions to manage CI/CD workflows</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-100 mb-2">Achievements:</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Managed tasks efficiently using Kanban boards</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Collaborated effectively with cross-functional teams</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Position */}
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-100">Software Test Engineer</h3>
                  <p className="text-indigo-400 font-semibold">Microgate Computers Limited</p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="px-4 py-2 bg-gray-800 text-indigo-400 rounded-full text-sm font-medium">
                    2018 - 2022
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300">
                  Performed 60+ manual and automated tests for new products, enhancing efficiency and quality.
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div>
                    <h4 className="font-semibold text-gray-100 mb-2">Testing Expertise:</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Automated testing with Robot Framework, Selenium, Cypress, Appium</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Enhanced efficiency of 50+ test cases through optimization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>RESTful API testing using Postman</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-100 mb-2">Additional Skills:</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Debugged 120+ lines of Python and JavaScript code</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Created test reports using Microsoft Office and Confluence</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Experience */}
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-100">Academic Projects</h3>
                  <p className="text-indigo-400 font-semibold">Oulu University of Applied Sciences</p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="px-4 py-2 bg-gray-800 text-indigo-400 rounded-full text-sm font-medium">
                    2023 - Present
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300">
                  Hands-on experience building real-world applications during academic studies.
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div>
                    <h4 className="font-semibold text-gray-100 mb-2">Key Projects:</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Built movie app with React.js, Node.js, Express.js, PostgreSQL</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Developed serverless web app using AWS services</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Created mobile apps using Kotlin and Android Studio</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-100 mb-2">Technical Skills:</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Created and maintained RESTful APIs</span>
                      </li>
                      <li className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Automated system updates with shell scripting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="mailto:gloryozoji@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-bold text-lg rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Let's Work Together</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <p className="mt-4 text-gray-400">Available for internships and full-time opportunities</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-400 mb-4" style={{fontFamily: 'inherit', letterSpacing: '0.5px'}}>
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-300">Have a project in mind? Let's discuss how we can work together to bring your ideas to life.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-100 mb-8">Let's Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-gray-900 rounded-lg p-4">
                  <Mail className="w-7 h-7 text-indigo-400" />
                  <div>
                    <div className="text-lg font-bold font-mono text-white mb-1" style={{letterSpacing: '1px'}}> Email</div>
                    <div className="font-mono text-xl font-bold text-indigo-400 tracking-wide">gloryn4455@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-900 rounded-lg p-4">
                  <Mail className="w-7 h-7 text-indigo-400" />
                  <div>
                    <div className="text-lg font-bold font-mono text-white mb-1" style={{letterSpacing: '1px'}}>Personal Email</div>
                    <div className="font-mono text-xl font-bold text-indigo-400 tracking-wide">gloryozoji@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-gray-900 rounded-lg p-4">
                  <LocationIcon />
                  <div>
                    <div className="text-lg font-bold font-mono text-white mb-1" style={{letterSpacing: '1px'}}>Location</div>
                    <div className="font-mono text-xl font-bold text-indigo-400 tracking-wide">Oulu, Finland</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-gray-100 mb-8">Send Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 rounded-lg bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Subject</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 rounded-lg bg-gray-900 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
                </div>
                <div>
                  <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
  <footer className="bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="w-6 h-6 text-indigo-400" />
            <h3 className="text-2xl font-bold">Glory Ifeoma Ozoji</h3>
            <Sparkles className="w-6 h-6 text-indigo-400" />
          </div>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Full Stack Developer passionate about creating innovative solutions and delivering exceptional user experiences. 
            Let's connect and build something amazing together!
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.linkedin.com/in/glory-ozoji-a143b1114/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:gloryozoji@gmail.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2024 Glory Ozoji. All rights reserved. Designed with <Heart className="w-4 h-4 text-red-500 inline" /> in Finland.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => scrollToSection('home')}
          className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
        >
          <ChevronDown className="w-6 h-6 rotate-180" />
        </button>
      </div>

      {/* Video Modal */}
      {currentVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-gray-700">
            <div className="p-6 text-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">
                  {projects.find(p => p.id === currentVideo)?.title}
                </h3>
                <button
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentVideo(null);
                  }}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors text-gray-100"
                >
                  ×
                </button>
              </div>
              
              <div className="aspect-video bg-gray-900 rounded-lg mb-4">
                <img 
                  src={projects.find(p => p.id === currentVideo)?.video} 
                  alt="Project demo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => toggleVideo(currentVideo)}
                    className="w-16 h-16 bg-gray-800/90 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-indigo-400" />
                    ) : (
                      <Play className="w-8 h-8 text-indigo-400" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <a
                  href={projects.find(p => p.id === currentVideo)?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-indigo-800 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper components for icons
function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

export default App;