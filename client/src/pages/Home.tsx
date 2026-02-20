import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Database,
  Globe,
  Layout,
  Server,
  Terminal,
  Code
} from "lucide-react";
import { insertMessageSchema } from "@shared/schema";
import { api } from "@shared/routes";

import Navigation from "@/components/Navigation";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import SkillBadge from "@/components/SkillBadge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateMessage } from "@/hooks/use-messages";
import { useToast } from "@/hooks/use-toast";

// === DATA ===
const EXPERIENCE = [
  {
    company: "Sumato Solutions, Lahore",
    role: "Associate Software Engineer",
    date: "Feb 2026 – Present",
    description: "Contributing to enterprise-level ASP.NET Core projects, ensuring code quality through reviews, and implementing robust features while maintaining high performance standards."
  },
  {
    company: "nFinity Solutions, Lahore",
    role: "Associate Software Engineer",
    date: "Nov 2025 – Feb 2026",
    description: "Contributed to enterprise-level Laravel projects, ensuring code quality through reviews, and implementing robust features while maintaining high performance standards."
  },
  {
    company: "InovoTech, Lahore",
    role: "Trainee Software Engineer",
    date: "Mar 2024 – Jun 2024",
    description: "Developed and optimized RESTful APIs using ASP.NET Core, collaborated with frontend teams for seamless integration, and improved database query performance."
  }
];

const PROJECTS = [
  {
    title: "Used Laptop Marketplace",
    description: "A comprehensive e-commerce platform for buying and selling used laptops. Features AI-powered product descriptions, user authentication, and advanced search filtering.",
    tags: ["ASP.NET Core MVC", "SQL Server", "Bootstrap", "AI Integration"],
    github: "https://https://github.com/mabdullah7527/fyp-used-laptop-buying-and-selling-store.com/placeholder"
  },
  {
    title: "Admin Dashboard Suite",
    description: "High-performance administrative dashboard managing over 500+ daily records. Includes interactive Google Maps integration for location tracking and real-time analytics visualization.",
    tags: ["ASP.NET Web API", "Angular", "Google Maps API", "SQL Server"],
    github: "https://github.com/mabdullah7527/fyp-used-laptop-buying-and-selling-store"
  }
];

const SKILLS = [
  { name: "C#", icon: <Terminal className="w-4 h-4" /> },
  { name: "ASP.NET Core", icon: <Server className="w-4 h-4" /> },
  { name: "Angular", icon: <Globe className="w-4 h-4" /> },
  { name: "Abp", icon: <Code className="w-4 h-4" /> },
  { name: "Laravel", icon: <Layout className="w-4 h-4" /> },
  { name: "Python", icon: <Terminal className="w-4 h-4" /> },
  { name: "TypeScript", icon: <Code className="w-4 h-4" /> },
  { name: "SQL Server", icon: <Database className="w-4 h-4" /> },
  { name: "MySQL", icon: <Database className="w-4 h-4" /> },
];

const EDUCATION = [
  {
    degree: "BS Computer Science",
    school: "Virtual University of Pakistan",
    year: "2021-2025"
  },
  {
    degree: "ICS (Statistics)",
    school: "Govt Islamia Degree College",
    year: "2019-2021"
  }
];

export default function Home() {
  const { mutate, isPending } = useCreateMessage();
  const form = useForm({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: any) {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Hi, I'm <br />
              <span className="text-gradient">Muhammad Abdullah</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Software Engineer specializing in building exceptional digital experiences with .NET Core, Angular, and Laravel.
            </p>

            <div className="mt-12 flex gap-6 text-muted-foreground">
              <a href="https://github.com/mabdullah7527#" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-abdullah-7121512a3/" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:mabdullah8041@gmail.com" className="hover:text-primary transition-colors hover:scale-110 transform duration-200">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-primary/10 animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Image Placeholder */}
              <div className="absolute inset-8 rounded-full overflow-hidden bg-muted border-2 border-primary/20 shadow-2xl">
                 {/* 
                    NOTE: Using your actual profile image.
                  */}
                 <img 
                   src="/abdul.jpeg" 
                   alt="Muhammad Abdullah" 
                   className="w-full h-full object-cover"
                 />
                 {/* Overlay gradient */}
                 <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>

              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 -right-4 bg-card border border-border p-3 rounded-xl shadow-xl flex items-center gap-3"
              >
                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-500">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Web</div>
                  <div className="font-bold text-sm">Development</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -left-4 bg-card border border-border p-3 rounded-xl shadow-xl flex items-center gap-3"
              >
                <div className="bg-green-500/20 p-2 rounded-lg text-green-500">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Backend</div>
                  <div className="font-bold text-sm">Architecture</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ABOUT / SKILLS SECTION */}
      <section id="skills" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="My Skills & Tech Stack" subtitle="Expertise" />
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-16">
            {SKILLS.map((skill, index) => (
              <SkillBadge key={skill.name} {...skill} index={index} />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg"
             >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="p-2 bg-primary/10 rounded-lg text-primary"><Code className="w-5 h-5"/></span>
                  Frontend Development
                </h3>
                <p className="text-muted-foreground mb-6">
                  Creating responsive, interactive user interfaces with modern frameworks. I focus on performance, accessibility, and pixel-perfect implementation.
                </p>
                <ul className="space-y-3">
                  {["Angular Ecosystems", "Tailwind CSS & Shadcn UI", "Responsive Design", "State Management"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
             </motion.div>

             <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg"
             >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="p-2 bg-primary/10 rounded-lg text-primary"><Server className="w-5 h-5"/></span>
                  Backend Development
                </h3>
                <p className="text-muted-foreground mb-6">
                  Architecting robust server-side solutions, RESTful APIs, and database structures that scale securely and efficiently.
                </p>
                <ul className="space-y-3">
                  {["ASP.NET Core Web API", "Laravel Framework", "SQL Server & MySQL", "Cloud Integration"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
             </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading title="Work Experience" subtitle="My Journey" />
          
          <div className="max-w-4xl mx-auto space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <ExperienceCard key={index} {...exp} index={index} />
            ))}
          </div>

          {/* Education Mini-Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <h3 className="text-2xl font-bold text-center mb-8 font-display">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {EDUCATION.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-secondary/30 border border-border p-6 rounded-xl flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-bold text-lg text-foreground">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm">{edu.school}</p>
                  </div>
                  <div className="text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full">
                    {edu.year}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Featured Projects" subtitle="Portfolio" />
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
              <a href="https://github.com/mabdullah7527" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="rounded-full border-primary/20 text-foreground hover:text-primary hover:bg-primary/10">
              <Github className="mr-2 w-4 h-4" />
              View More on GitHub
            </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Contact" />
          
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-lg h-full">
                <h3 className="text-2xl font-bold mb-6 text-white font-display">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  I believe software should solve real problems, not just exist.
                  If you’re building something interesting or thinking about it — let’s talk.
                </p>
                
                <div className="space-y-6">
                  <a href="mailto:mabdullah8041@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform">mabdullah8041@gmail.com</span>
                  </a>
                  
                  <div className="flex items-center gap-4 text-muted-foreground group">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>+92 309 0241705</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-muted-foreground group">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span>Lahore, Pakistan</span>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-border/50">
                   <p className="text-sm font-medium mb-4 text-foreground/80">Socials</p>
                   <div className="flex gap-4">
                        <a href="https://github.com/mabdullah7527#" target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="ghost" className="rounded-full bg-secondary/50 hover:bg-primary hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </Button>
                      </a>
                      <a href="https://www.linkedin.com/in/muhammad-abdullah-7121512a3/" target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="ghost" className="rounded-full bg-secondary/50 hover:bg-primary hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </Button>
                      </a>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-lg">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground/80">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground/80">Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Hi, Let's Connect! " className="bg-secondary/50 border-border/50 focus:border-primary/50 min-h-[150px] resize-none" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      disabled={isPending}
                      className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20"
                    >
                      {isPending ? (
                        "Sending..."
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message <Send className="w-4 h-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Muhammad Abdullah. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
