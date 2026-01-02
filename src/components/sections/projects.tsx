import { ExternalLink, Github } from "lucide-react";
import { FaArrowTrendUp } from "react-icons/fa6";

import { PROJECTS } from "@/components/constants/data";
import Carousel from "@/components/ui/carousel";
import Divider from "@/components/ui/divider";

const slides = ["/byb.png", "/spass.png", "/ms.png", "/byb.png", "/spass.png", "/ms.png"];

export default function Projects() {
  return (
    <section className="animate-section">
      <h2 className="text-xl font-semibold mb-4">featured projects.</h2>
      <Carousel slides={slides} speed={0.5} />
      <div className="space-y-8 mt-6">
        {PROJECTS.map((project) => (
          <div key={project.name} className="relative">
            <div className="space-y-2 border-l-1 border-muted pl-4">
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col flex-1">
                  <h3 className="font-medium text-base text-left">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        {project.name}
                        <FaArrowTrendUp className="inline-block w-5 h-5 ml-2 align-text-bottom" />
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <p className="text-xs text-muted-foreground">Click to know more...</p>
                </div>
                <div className="flex gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 btn hover:scale-95 transition-transform"
                      aria-label="View project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 btn hover:scale-95 transition-transform"
                      aria-label="View source code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs badge text-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Divider />
    </section>
  );
}
