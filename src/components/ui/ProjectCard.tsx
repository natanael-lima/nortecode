import Image from "next/image"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

import Badge from "./Badge"
import Button2 from "./Button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  techStack: string[]
  liveUrl?: string
  codeUrl?: string
  index: number
}

export function ProjectCard({ title, description, image, techStack, liveUrl, codeUrl, index }: ProjectCardProps) {
  const imageOnRight = index % 2 === 1

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className={`${imageOnRight ? "lg:order-2" : "lg:order-1"}`}>
        <div className="relative group">
          <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-r from-background/20 to-background/5 backdrop-blur-sm border border-border/50 shadow-lg">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-${imageOnRight ? "l" : "r"} from-transparent via-transparent to-background/30 pointer-events-none`}
            />

            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} color="blue">
                    {tech}
                  </Badge>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${imageOnRight ? "lg:order-1" : "lg:order-2"} space-y-6`}>
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-4 text-balance">{title}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{description}</p>
        </div>

        <div className="flex gap-4">
          {liveUrl && (
            <Button2  className="flex-1">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                View Project
              </a>
            </Button2>
          )}
          {codeUrl && (
            <Button2 className="flex-1 bg-transparent">
              <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button2>
          )}
        </div>
      </div>
    </div>
  )
}