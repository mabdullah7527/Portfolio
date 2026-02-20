import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceProps {
  company: string;
  role: string;
  date: string;
  description: string;
  index: number;
}

export default function ExperienceCard({ company, role, date, description, index }: ExperienceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
      
      <div className={`md:flex items-center justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
        <div className="md:w-5/12 mb-8 md:mb-0">
          <div className="glass-card p-6 rounded-2xl relative">
            <div className={`absolute top-6 w-4 h-4 rounded-full bg-primary border-4 border-background 
              ${index % 2 === 0 ? "md:-left-[calc(8.33%+1rem)]" : "md:-right-[calc(8.33%+1rem)]"} 
              left-[-2.5rem] md:left-auto transform translate-y-1 md:translate-y-0`}
            />
            
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-2">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
            <h3 className="text-xl font-bold text-foreground mb-1">{role}</h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Briefcase className="w-4 h-4" />
              <span>{company}</span>
            </div>
            <p className="text-muted-foreground/80 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="md:w-5/12" />
      </div>
    </motion.div>
  );
}
