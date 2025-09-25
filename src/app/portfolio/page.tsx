import { ProjectCard } from "../../components/ui/ProjectCard"
import React from 'react'

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order processing capabilities.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/example/ecommerce-dashboard",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with drag-and-drop functionality, team collaboration features, and progress tracking.",
    image: "https://static-cse.canva.com/blob/1105224/PORTFOLIO_IMG1.d532875c.PNG",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Socket.io", "Vuetify"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/example/task-manager",
  },
  {
    title: "Weather Forecast App",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics for multiple cities.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    techStack: ["React Native", "Redux", "OpenWeather API", "Maps SDK"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/example/weather-app",
  },
  {
    title: "Social Media Platform",
    description:
      "A full-featured social networking platform with real-time messaging, content sharing, and advanced privacy controls.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    techStack: ["React", "GraphQL", "PostgreSQL", "Redis", "AWS"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/example/social-platform",
  },
  {
    title: "AI Content Generator",
    description:
      "An intelligent content creation tool powered by machine learning that helps users generate high-quality written content for various purposes.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    techStack: ["Python", "FastAPI", "OpenAI API", "React", "Docker"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/example/ai-content-generator",
  },
  {
    title: "Cryptocurrency Tracker",
    description:
      "A real-time cryptocurrency portfolio tracker with price alerts, market analysis, and comprehensive trading insights.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    techStack: ["Angular", "Node.js", "WebSocket", "Chart.js", "CoinGecko API"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/example/crypto-tracker",
  },
]

export default function page() {
  return (
    <div className="container mx-auto px-4 py-12 bg-white">
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

