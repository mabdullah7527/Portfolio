import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  index: number;
}

export default function SkillBadge({ name, icon, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-2 px-5 py-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all cursor-default"
    >
      {icon && <span className="text-primary">{icon}</span>}
      <span className="font-medium text-foreground">{name}</span>
    </motion.div>
  );
}
