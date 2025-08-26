import { 
  FaGlobe, 
  FaDesktop, 
  FaLaptop, 
  FaShoppingCart, 
  FaCreditCard, 
  FaCog, 
  FaFileAlt, 
  FaBolt, 
  FaWrench 
} from "react-icons/fa";

export const servicesList = [
  {
    title: "Landing Page",
    icon: FaGlobe,
    description: "Páginas de aterrizaje optimizadas para conversión. Diseños atractivos que convierten visitantes en clientes",
  },
  {
    title: "Aplicaciones Web",
    icon: FaDesktop,
    description: "Soluciones web modernas y escalables. Aplicaciones web responsivas con tecnología de vanguardia",
  },
  {
    title: "Aplicaciones de Escritorio",
    icon: FaLaptop,
    description: "Software nativo para Windows, Mac y Linux. Aplicaciones de escritorio potentes y multiplataforma",
  },
  {
    title: "E-Commerce",
    icon: FaShoppingCart,
    description: "Tiendas online completas y seguras. Plataformas de comercio electrónico con gestión integral",
  },
  {
    title: "POS (Punto de Venta)",
    icon: FaCreditCard,
    description: "Sistemas de punto de venta inteligentes. Soluciones POS modernas para tu negocio",
  },
  {
    title: "Sistemas de Gestión",
    icon: FaCog,
    description: "ERP y CRM personalizados para tu empresa. Sistemas de gestión empresarial a medida",
  },
  {
    title: "CMS & Blogs",
    icon: FaFileAlt,
    description: "Gestores de contenido fáciles de usar. Plataformas de contenido intuitivas y potentes",
  },
  {
    title: "Integraciones con APIs",
    icon: FaBolt,
    description: "Conecta tus sistemas y automatiza procesos. Integraciones seamless con servicios externos",
  },
  {
    title: "Soporte & Mantenimiento",
    icon: FaWrench,
    description: "Mantenimiento continuo y soporte técnico. Soporte 24/7 y mantenimiento preventivo",
  },
]

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
export const projects: Project[] = [
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
      size: "tall"
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
      size: "tall"
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