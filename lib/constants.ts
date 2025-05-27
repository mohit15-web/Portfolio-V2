interface Contribution {
  project: string;
  repo: string;
  link:string,
  description: string;
  tech?: string[];
  status?: "active" | "completed" | "maintained";
}

export const SocialLinks = {
  github: "https://github.com/mohit15-web",
  linkedin: "https://www.linkedin.com/in/mohit-chaudhary-615972238/",
  x: "https://x.com/moxhit143",
  instagram: "https://www.instagram.com/_.moxhit._/",
};

export const contributions: Contribution[] = [
  {
    project: "Mvpblocks",
    repo: "https://github.com/subhadeeproy3902/mvpblocks",
    link:"https://blocks.mvp-subha.me/",
    description:
      "Contributed to bug fixes and added new Contribution Page. Improved UI responsiveness and added new features.",
    tech: [
      "Nextjs",
      "TypeScript",
      "TailwindCSS",
      "ui-components",
      "shadcn-ui",
      "Acertinity-ui",
      "framer-motion",
    ],
    status: "active",
  },
];

export const getStatusColor = (status: string): string => {
  switch (status) {
    case "active":
      return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
    case "completed":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "maintained":
      return "bg-amber-500/20 text-amber-400 border-amber-500/30";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};

export const getStatusIcon = (status: string): string => {
  switch (status) {
    case "active":
      return "⚡";
    case "completed":
      return "✅";
    case "maintained":
      return "🔧";
    default:
      return "📦";
  }
};
