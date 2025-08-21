import React, { useState } from 'react';
import { FiExternalLink, FiGithub, FiEye, FiCode, FiSmartphone, FiGlobe } from 'react-icons/fi';
import { BiGridAlt } from 'react-icons/bi';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
  github?: string;
  size: 'small' | 'medium' | 'large' | 'wide' | 'tall';
}

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern online shopping platform with advanced features and seamless user experience.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
      github: "#",
      size: "large"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking application.",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg",
      category: "Mobile App",
      technologies: ["React Native", "Firebase"],
      link: "#",
      github: "#",
      size: "medium"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Business intelligence dashboard with data visualization.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
      category: "Dashboard",
      technologies: ["Vue.js", "D3.js"],
      link: "#",
      github: "#",
      size: "wide"
    },
    {
      id: 4,
      title: "Healthcare Management",
      description: "Complete healthcare management system.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
      category: "Enterprise",
      technologies: ["Angular", "Spring Boot"],
      link: "#",
      github: "#",
      size: "small"
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: "Next-generation social networking platform.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      category: "Social",
      technologies: ["Next.js", "GraphQL"],
      link: "#",
      github: "#",
      size: "tall"
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Comprehensive LMS for educational institutions.",
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg",
      category: "Education",
      technologies: ["React", "Express"],
      link: "#",
      github: "#",
      size: "medium"
    },
    {
      id: 7,
      title: "Real Estate Portal",
      description: "Modern real estate platform with virtual tours.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      category: "Real Estate",
      technologies: ["Vue.js", "Laravel"],
      link: "#",
      github: "#",
      size: "small"
    },
    {
      id: 8,
      title: "Inventory Management",
      description: "Smart inventory tracking system.",
      image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",
      category: "Enterprise",
      technologies: ["React", "Django"],
      link: "#",
      github: "#",
      size: "wide"
    },
    {
      id: 9,
      title: "Food Delivery App",
      description: "Complete food delivery solution with real-time tracking.",
      image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg",
      category: "Mobile App",
      technologies: ["Flutter", "Node.js"],
      link: "#",
      github: "#",
      size: "large"
    },
    {
      id: 10,
      title: "Project Management Tool",
      description: "Collaborative project management platform.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      category: "Productivity",
      technologies: ["React", "Socket.io"],
      link: "#",
      github: "#",
      size: "medium"
    },
    {
      id: 11,
      title: "Fitness Tracking App",
      description: "Comprehensive fitness application.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      category: "Health & Fitness",
      technologies: ["React Native", "Firebase"],
      link: "#",
      github: "#",
      size: "small"
    },
    {
      id: 12,
      title: "Financial Dashboard",
      description: "Advanced financial analytics platform.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
      category: "Finance",
      technologies: ["Angular", "Spring"],
      link: "#",
      github: "#",
      size: "tall"
    },
    {
      id: 13,
      title: "Travel Booking Platform",
      description: "Complete travel booking solution.",
      image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg",
      category: "Travel",
      technologies: ["Next.js", "Prisma"],
      link: "#",
      github: "#",
      size: "wide"
    },
    {
      id: 14,
      title: "CRM System",
      description: "Customer relationship management system.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      category: "Enterprise",
      technologies: ["Vue.js", "Ruby on Rails"],
      link: "#",
      github: "#",
      size: "medium"
    },
    {
      id: 15,
      title: "Event Management App",
      description: "Complete event planning platform.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
      category: "Events",
      technologies: ["React", "Node.js"],
      link: "#",
      github: "#",
      size: "small"
    },
    {
      id: 16,
      title: "IoT Dashboard",
      description: "Internet of Things monitoring dashboard.",
      image: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg",
      category: "IoT",
      technologies: ["React", "MQTT"],
      link: "#",
      github: "#",
      size: "large"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 8);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'mobile app':
        return <FiSmartphone className="w-4 h-4" />;
      case 'web development':
        return <FiGlobe className="w-4 h-4" />;
      case 'dashboard':
        return <BiGridAlt className="w-4 h-4" />;
      default:
        return <FiCode className="w-4 h-4" />;
    }
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'wide':
        return 'col-span-2 row-span-1';
      case 'tall':
        return 'col-span-1 row-span-2';
      case 'medium':
        return 'col-span-1 row-span-1';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const getImageHeight = (size: string) => {
    switch (size) {
      case 'large':
        return 'h-64';
      case 'tall':
        return 'h-48';
      case 'wide':
        return 'h-32';
      default:
        return 'h-40';
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Our Portfolio
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our innovative solutions crafted with precision and creativity
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 auto-rows-fr">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden border border-gray-100 ${getSizeClasses(project.size)}`}
            >
              {/* Image Container */}
              <div className={`relative overflow-hidden ${getImageHeight(project.size)}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <button className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-2.5 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                    <FiEye className="w-4 h-4" />
                  </button>
                  {project.github && (
                    <button className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-2.5 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                      <FiGithub className="w-4 h-4" />
                    </button>
                  )}
                  {project.link && (
                    <button className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-2.5 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                      <FiExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </span>
                </div>

                {/* Bottom Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold mb-1 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200 mb-3 line-clamp-2 opacity-90">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 px-2.5 py-1 rounded-lg text-xs font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-2.5 py-1 rounded-lg text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Footer */}
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200 hover:underline">
                    View Project
                  </button>
                  <div className="flex space-x-2">
                    {project.github && (
                      <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200 hover:scale-110 transform">
                        <FiGithub className="w-4 h-4" />
                      </button>
                    )}
                    {project.link && (
                      <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200 hover:scale-110 transform">
                        <FiExternalLink className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center space-x-3"
          >
            <BiGridAlt className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
            <span>{showAll ? 'Show Less Projects' : 'Explore More Projects'}</span>
          </button>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gradient-to-r from-transparent via-gray-200 to-transparent">
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
              16+
            </div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
              8+
            </div>
            <div className="text-gray-600 font-medium">Industries Served</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-gray-600 font-medium">Support Availables</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;