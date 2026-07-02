///Describes the content and data types to be expected within the cards
export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  questionCount: number;
  iconBg: string;
  iconColor: string;
}

///Descibes the structure of the category selector cards , Eslint ommited will be added
const categories: Category[] = [
  {
    id: "git",
    title: "Git & GitHub",
    description:
      "Test your knowledge of Git commands, branching, and GitHub workflows.",
    icon: "bi-git",
    questionCount: 4,
    iconBg: "#FDECE2",
    iconColor: "#F97316",
  },
  {
    id: "react",
    title: "React",
    description: "Components, props, state, hooks, and JSX fundamentals.",
    icon: "bi-diagram-3",
    questionCount: 4,
    iconBg: "#E0F2FE",
    iconColor: "#0EA5E9",
  },
  {
    id: "typescript",
    title: "TypeScript",
    description: "Type system, interfaces, and type annotations.",
    icon: "bi-code-square",
    questionCount: 4,
    iconBg: "#DBEAFE",
    iconColor: "#2563EB",
  },
  {
    id: "devtools",
    title: "Dev Tools",
    description: "npm, package.json, ESLint, Prettier, Vite, and node_modules.",
    icon: "bi-tools",
    questionCount: 4,
    iconBg: "#F3E8FF",
    iconColor: "#9333EA",
  },
  {
    id: "deployment",
    title: "Deployment",
    description: "Vercel, CI/CD, build processes, and environment variables.",
    icon: "bi-cloud-arrow-up",
    questionCount: 4,
    iconBg: "#DCFCE7",
    iconColor: "#16A34A",
  },
  {
    id: "htmlcss",
    title: "HTML & CSS",
    description:
      "Semantic HTML, flexbox, responsive design, and CSS selectors.",
    icon: "bi-filetype-html",
    questionCount: 4,
    iconBg: "#FEE2E2",
    iconColor: "#DC2626",
  },
];

export default categories;
