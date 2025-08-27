import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

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
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${imageOnRight ? "lg:grid-flow-col-dense" : ""}`}
    >
      {/* Image Section - separate card */}
      <div className={`${imageOnRight ? "lg:col-start-2" : ""}`}>
        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs bg-background/90 backdrop-blur-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Information Section - separate card */}
      <div className={`${imageOnRight ? "lg:col-start-1" : ""}`}>
        <Card className="h-full">
          <CardContent className="p-6 flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-card-foreground mb-4 text-balance">{title}</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-6">{description}</p>

            <div className="flex gap-3">
              {liveUrl && (
                <Button asChild className="flex-1">
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button>
              )}
              {codeUrl && (
                <Button variant="outline" asChild className="flex-1 bg-transparent">
                  <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}