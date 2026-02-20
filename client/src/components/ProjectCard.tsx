import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  index: number;
}

export default function ProjectCard({ title, description, tags, link, github, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group">
        <CardHeader>
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <div className="flex gap-2">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-white/5 rounded-full">
                  <Github className="w-5 h-5" />
                </a>
              )}
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-full">
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-secondary/50 hover:bg-secondary text-secondary-foreground/90">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
