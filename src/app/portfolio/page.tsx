import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order processing capabilities.",
    image: "/modern-ecommerce-dashboard.png",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/example/ecommerce-dashboard",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with drag-and-drop functionality, team collaboration features, and progress tracking.",
    image: "/task-management-kanban.png",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Socket.io", "Vuetify"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/example/task-manager",
  },
  {
    title: "Weather Forecast App",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics for multiple cities.",
    image: "/weather-app-interface-with-maps-and-charts.png",
    techStack: ["React Native", "Redux", "OpenWeather API", "Maps SDK"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/example/weather-app",
  },
  {
    title: "Social Media Platform",
    description:
      "A full-featured social networking platform with real-time messaging, content sharing, and advanced privacy controls.",
    image: "/social-media-interface.png",
    techStack: ["React", "GraphQL", "PostgreSQL", "Redis", "AWS"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/example/social-platform",
  },
  {
    title: "AI Content Generator",
    description:
      "An intelligent content creation tool powered by machine learning that helps users generate high-quality written content for various purposes.",
    image: "/ai-content-generator.png",
    techStack: ["Python", "FastAPI", "OpenAI API", "React", "Docker"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/example/ai-content-generator",
  },
  {
    title: "Cryptocurrency Tracker",
    description:
      "A real-time cryptocurrency portfolio tracker with price alerts, market analysis, and comprehensive trading insights.",
    image: "/cryptocurrency-trading-dashboard-with-charts.png",
    techStack: ["Angular", "Node.js", "WebSocket", "Chart.js", "CoinGecko API"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/example/crypto-tracker",
  },
]

export function PortfolioGallery() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">My Project Portfolio</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          A collection of projects showcasing my skills in web development, mobile apps, and innovative solutions.
        </p>
      </div>

      <div className="flex flex-col gap-16 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            techStack={project.techStack}
            liveUrl={project.liveUrl}
            codeUrl={project.codeUrl}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
