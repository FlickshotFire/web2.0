import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn("glass-morphism rounded-2xl", className)}
      {...props}
    >
      {children}
    </div>
  );
}
