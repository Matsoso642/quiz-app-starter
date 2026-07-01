///Describes the content and data types to be expected within the cards
export interface Category {
    id: string;
    title: string;
    description: string;
    icon: string ;
    questionCount: number;
    iconBg: string;
    iconColor: string;
}



///Descibes the structure of the category selector cards , Eslint ommited will be added
const categories: Category[] = [
    {id: "git", title: "Git Basics", description: "Test your knowledge of Git basics and commands.", icon: "bi-git", questionCount: 8, iconBg: "#FDECE2", iconColor: "#F97316"},
    {id: "github", title: "GitHub", description: "Explore Github basics , features , workflow and general practices.", icon: "bi-github", questionCount: 8, iconBg: "#1F2937", iconColor: "#FFFFFF"},
    {id: "nodejs", title: "Node.js", description: "Server-side JavaScript, modules, and Node.js ecosystem.", icon: "bi-code-slash", questionCount: 8, iconBg: "#E0F2FE", iconColor: "#0EA5E9"},
    {id: "typescript", title: "TypeScript", description: "Type system, interfaces, generics, and advanced concepts.", icon: "bi-code-square", questionCount: 8, iconBg: "#1D4ED8", iconColor: "#16A34A"},

]

export default categories;