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
}
const Portfolios = () => {
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
      github: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking application with real-time transactions.",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg",
      category: "Mobile App",
      technologies: ["React Native", "Firebase", "TypeScript"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Comprehensive business intelligence dashboard with interactive data visualization.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
      category: "Dashboard",
      technologies: ["Vue.js", "D3.js", "Python"],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Healthcare Management",
      description: "Complete healthcare management system for hospitals and clinics.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg",
      category: "Enterprise",
      technologies: ["Angular", "Spring Boot", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: "Next-generation social networking platform with advanced privacy features.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      category: "Social",
      technologies: ["Next.js", "GraphQL", "Redis"],
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Comprehensive LMS for educational institutions with interactive learning tools.",
      image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg",
      category: "Education",
      technologies: ["React", "Express", "MySQL"],
      link: "#",
      github: "#"
    },
    {
      id: 7,
      title: "Real Estate Portal",
      description: "Modern real estate platform with virtual tours and advanced search capabilities.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      category: "Real Estate",
      technologies: ["Vue.js", "Laravel", "AWS"],
      link: "#",
      github: "#"
    },
    {
      id: 8,
      title: "Inventory Management",
      description: "Smart inventory tracking system with automated alerts and reporting.",
      image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg",
      category: "Enterprise",
      technologies: ["React", "Django", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    {
      id: 9,
      title: "Food Delivery App",
      description: "Complete food delivery solution with real-time tracking and payment integration.",
      image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg",
      category: "Mobile App",
      technologies: ["Flutter", "Node.js", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      id: 10,
      title: "Project Management Tool",
      description: "Collaborative project management platform with team communication features.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      category: "Productivity",
      technologies: ["React", "Socket.io", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      id: 11,
      title: "Fitness Tracking App",
      description: "Comprehensive fitness application with workout plans and progress tracking.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      category: "Health & Fitness",
      technologies: ["React Native", "Firebase", "ML Kit"],
      link: "#",
      github: "#"
    },
    {
      id: 12,
      title: "Financial Dashboard",
      description: "Advanced financial analytics platform with portfolio management capabilities.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
      category: "Finance",
      technologies: ["Angular", "Spring", "Oracle"],
      link: "#",
      github: "#"
    },
    {
      id: 13,
      title: "Travel Booking Platform",
      description: "Complete travel booking solution with hotel, flight, and activity reservations.",
      image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg",
      category: "Travel",
      technologies: ["Next.js", "Prisma", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      id: 14,
      title: "CRM System",
      description: "Customer relationship management system with sales pipeline and automation.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      category: "Enterprise",
      technologies: ["Vue.js", "Ruby on Rails", "Redis"],
      link: "#",
      github: "#"
    },
    {
      id: 15,
      title: "Event Management App",
      description: "Complete event planning and management platform with ticketing system.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
      category: "Events",
      technologies: ["React", "Node.js", "PayPal"],
      link: "#",
      github: "#"
    },
    {
      id: 16,
      title: "IoT Dashboard",
      description: "Internet of Things monitoring dashboard with real-time sensor data visualization.",
      image: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg",
      category: "IoT",
      technologies: ["React", "MQTT", "InfluxDB"],
      link: "#",
      github: "#"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

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

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Showcasing our latest projects and innovative solutions across various industries
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 transition-all duration-500 ${
          showAll ? 'grid-rows-4' : 'grid-rows-2'
        }`}>
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                      <FiEye className="w-5 h-5" />
                    </button>
                    {project.github && (
                      <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                        <FiGithub className="w-5 h-5" />
                      </button>
                    )}
                    {project.link && (
                      <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                        <FiExternalLink className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center space-x-1 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
                    View Details
                  </button>
                  <div className="flex space-x-2">
                    {project.github && (
                      <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                        <FiGithub className="w-4 h-4" />
                      </button>
                    )}
                    {project.link && (
                      <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
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
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-2"
          >
            <BiGridAlt className="w-5 h-5" />
            <span>{showAll ? 'Show Less Projects' : 'More Projects'}</span>
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">16+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
            <div className="text-gray-600 font-medium">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolios;