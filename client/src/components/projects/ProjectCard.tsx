import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { Link } from "react-router"
type Props = {
	project: IProject;
};


export default function ProjectCard({ project }: Props) {
  return (
    <Card className="w-full max-w-md  m-2 overflow-hidden bg-[#26233a] border-[#c4a7e7]">
      <CardHeader className="">
			  <CardTitle className="text-xl font-bold text-[#e0def4]">{ project.title}</CardTitle>
        <CardDescription className="text-sm  text-gray-400">
				  { project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
			  <div className="flex flex-wrap gap-1">
				  {project.tools.map((tool) => (
					  <Badge key={tool._id} className="text-xs bg-[#433753d2] text-gray-300">
					  {tool.text}
					</Badge>
				  ))}
                </div>
        <div className="flex flex-col sm:flex-row gap-8">
				  {project.live_link && (<Button asChild className="flex-1">
					  <Link to={project.live_link} target="_blank" rel="noopener noreferrer">
						  <ExternalLink className="w-4 h-4 mr-2" />
						  Live Demo
					  </Link>
				  </Button>)}
				  {project.github_link && (<Button  asChild className="flex-1">
					  <Link to={project.github_link} target="_blank" rel="noopener noreferrer">
						  <Github className="w-4 h-4 mr-2" />
						  GitHub
					  </Link>
				  </Button>)}
        </div>
      </CardContent>
    </Card>
  )
}
