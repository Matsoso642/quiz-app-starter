import type { Question } from "../types/quiz";

// 24 questions spanning: git, react, typescript, devtools, deployment, htmlcss
// NOTE: category strings below assume the same style as the original example
// ("git"). If your Question type defines different literal values for
// category, update the strings accordingly.

const questions: Question[] = [
  // ---------- Git & GitHub ----------
  {
    id: 1,
    question: "What does `git clone` do?",
    options: [
      "Creates a new branch",
      "Downloads a repository from GitHub to your machine",
      "Uploads your code to GitHub",
      "Deletes a repository",
    ],
    correctAnswer: 1,
    category: "git",
    explanation:
      "git clone creates a local copy of a remote repository, including its full commit history.",
  },
  {
    id: 2,
    question: "What is the purpose of a `.gitignore` file?",
    options: [
      "Lists commit messages for the project",
      "Specifies files and folders Git should not track",
      "Stores your GitHub login credentials",
      "Configures branch permissions",
    ],
    correctAnswer: 1,
    category: "git",
    explanation:
      ".gitignore tells Git which files or directories to exclude from version control, like node_modules or .env files.",
  },
  {
    id: 3,
    question: "What does `git commit` do?",
    options: [
      "Uploads changes to GitHub",
      "Saves a snapshot of staged changes to your local history",
      "Downloads the latest changes from a remote",
      "Creates a brand new repository",
    ],
    correctAnswer: 1,
    category: "git",
    explanation:
      "A commit records a snapshot of the staged changes in the local repository's history, along with a message describing the change.",
  },
  {
    id: 4,
    question: "What is a pull request used for?",
    options: [
      "Deleting a remote branch",
      "Proposing changes so they can be reviewed and merged into another branch",
      "Downloading files from GitHub",
      "Renaming a repository",
    ],
    correctAnswer: 1,
    category: "git",
    explanation:
      "A pull request lets you propose changes from one branch (or fork) and have them reviewed and discussed before merging into another branch.",
  },

  // ---------- React ----------
  {
    id: 5,
    question: "What is a React component?",
    options: [
      "A CSS stylesheet",
      "A reusable piece of UI, typically a function that returns JSX",
      "A type of npm package",
      "A database table",
    ],
    correctAnswer: 1,
    category: "react",
    explanation:
      "Components are the building blocks of a React app — reusable functions (or classes) that return UI described in JSX.",
  },
  {
    id: 6,
    question: 'What are "props" in React?',
    options: [
      "Internal component variables that change over time",
      "Data passed from a parent component to a child component",
      "CSS properties applied to elements",
      "Built-in browser APIs",
    ],
    correctAnswer: 1,
    category: "react",
    explanation:
      "Props (short for properties) are read-only data passed from a parent component into a child component.",
  },
  {
    id: 7,
    question: "What does the `useState` hook do?",
    options: [
      "Fetches data from an API",
      "Adds and manages state within a functional component",
      "Applies styles to a component",
      "Connects a component to a database",
    ],
    correctAnswer: 1,
    category: "react",
    explanation:
      "useState lets a functional component hold and update local state, triggering a re-render when the state changes.",
  },
  {
    id: 8,
    question: "When does `useEffect` typically run?",
    options: [
      "Only once, when the app first loads and never again",
      "After render, in response to changes in its dependency array",
      "Only during the build step",
      "Only when the browser tab is closed",
    ],
    correctAnswer: 1,
    category: "react",
    explanation:
      "useEffect runs after the component renders, and re-runs whenever a value in its dependency array changes.",
  },

  // ---------- TypeScript ----------
  {
    id: 9,
    question: "What is TypeScript primarily used for?",
    options: [
      "Styling web pages",
      "Adding static type checking on top of JavaScript",
      "Managing databases",
      "Compiling CSS",
    ],
    correctAnswer: 1,
    category: "typescript",
    explanation:
      "TypeScript is a superset of JavaScript that adds optional static types, catching type-related errors before runtime.",
  },
  {
    id: 10,
    question:
      "Which of the following is a valid type annotation in TypeScript?",
    options: [
      "let age = number;",
      "let age: number = 25;",
      "number age = 25;",
      "let age = int(25);",
    ],
    correctAnswer: 1,
    category: "typescript",
    explanation:
      "TypeScript type annotations use a colon after the variable name, like `let age: number = 25;`.",
  },
  {
    id: 11,
    question: "What is an interface used for in TypeScript?",
    options: [
      "Connecting to an external API",
      "Defining the shape or structure of an object",
      "Styling React components",
      "Running unit tests",
    ],
    correctAnswer: 1,
    category: "typescript",
    explanation:
      "An interface describes the expected structure of an object, including property names and their types.",
  },
  {
    id: 12,
    question: "Which of these is a valid TypeScript primitive type?",
    options: ["list", "boolean", "array()", "object{}"],
    correctAnswer: 1,
    category: "typescript",
    explanation:
      "boolean, string, and number are core TypeScript primitive types. Arrays and lists use different syntax, like string[].",
  },

  // ---------- Dev Tools ----------
  {
    id: 13,
    question: "What is `package.json` used for?",
    options: [
      "Storing compiled JavaScript output",
      "Listing a project's dependencies, scripts, and metadata",
      "Storing environment variables only",
      "Holding CSS styles",
    ],
    correctAnswer: 1,
    category: "devtools",
    explanation:
      "package.json defines a project's metadata, dependencies, and npm scripts used to run, build, or test the app.",
  },
  {
    id: 14,
    question: "What is the purpose of `node_modules`?",
    options: [
      "It stores your application's source code",
      "It holds installed npm packages and their dependencies",
      "It stores compiled production builds",
      "It contains browser settings",
    ],
    correctAnswer: 1,
    category: "devtools",
    explanation:
      "node_modules is the folder where npm installs all the packages your project depends on.",
  },
  {
    id: 15,
    question: "What does ESLint do?",
    options: [
      "Compiles TypeScript into JavaScript",
      "Analyzes code to catch errors and enforce coding standards",
      "Formats CSS files",
      "Runs unit tests",
    ],
    correctAnswer: 1,
    category: "devtools",
    explanation:
      "ESLint is a static analysis tool that flags problematic patterns and enforces consistent code style.",
  },
  {
    id: 16,
    question: "What is Vite primarily used for?",
    options: [
      "Version control",
      "A fast build tool and dev server for modern web projects",
      "Managing databases",
      "Deploying to production only",
    ],
    correctAnswer: 1,
    category: "devtools",
    explanation:
      "Vite provides a fast development server with hot module replacement and an optimized build process for production.",
  },

  // ---------- Deployment ----------
  {
    id: 17,
    question: "What is Vercel commonly used for?",
    options: [
      "Writing application code",
      "Hosting and deploying web applications",
      "Managing Git branches",
      "Styling components",
    ],
    correctAnswer: 1,
    category: "deployment",
    explanation:
      "Vercel is a cloud platform for hosting and deploying web apps, often integrating directly with GitHub repositories.",
  },
  {
    id: 18,
    question: "What does CI/CD stand for?",
    options: [
      "Code Integration / Code Deployment",
      "Continuous Integration / Continuous Deployment",
      "Component Import / Component Design",
      "Coding Interface / Coding Development",
    ],
    correctAnswer: 1,
    category: "deployment",
    explanation:
      "CI/CD stands for Continuous Integration and Continuous Deployment, automating testing and releasing of code changes.",
  },
  {
    id: 19,
    question: "What is an environment variable typically used for?",
    options: [
      "Storing HTML markup",
      "Storing configuration values, like API keys, outside your codebase",
      "Defining CSS classes",
      "Naming React components",
    ],
    correctAnswer: 1,
    category: "deployment",
    explanation:
      "Environment variables keep sensitive or environment-specific configuration (like API keys) out of source code.",
  },
  {
    id: 20,
    question: 'What generally happens during a "build" process?',
    options: [
      "Code is deleted",
      "Source code is compiled and bundled into optimized files for production",
      "A new Git branch is created",
      "Tests are permanently disabled",
    ],
    correctAnswer: 1,
    category: "deployment",
    explanation:
      "A build step transforms and bundles source code into optimized, production-ready files, often minified and compiled.",
  },

  // ---------- HTML / CSS ----------
  {
    id: 21,
    question: "Which of these is an example of semantic HTML?",
    options: ['<div class="header">', "<header>", '<span id="top">', "<b>"],
    correctAnswer: 1,
    category: "htmlcss",
    explanation:
      "Semantic elements like <header>, <nav>, and <footer> describe their meaning to both the browser and developer, unlike generic <div>s.",
  },
  {
    id: 22,
    question: "What does `display: flex` do?",
    options: [
      "Hides an element",
      "Enables a flexible box layout for arranging child elements",
      "Adds a border to an element",
      "Changes the text color",
    ],
    correctAnswer: 1,
    category: "htmlcss",
    explanation:
      "Flexbox (display: flex) lets you align and distribute space among items in a container, even when sizes are unknown.",
  },
  {
    id: 23,
    question: "What is the purpose of responsive design?",
    options: [
      "Making a website load faster",
      "Making a layout adapt properly across different screen sizes",
      "Reducing the number of CSS files",
      "Increasing the default font size only",
    ],
    correctAnswer: 1,
    category: "htmlcss",
    explanation:
      "Responsive design ensures a layout adjusts and looks good across different devices and screen sizes, often using media queries.",
  },
  {
    id: 24,
    question: 'Which CSS selector targets an element with `id="nav"`?',
    options: [".nav", "#nav", "*nav", "nav*"],
    correctAnswer: 1,
    category: "htmlcss",
    explanation:
      "The # symbol targets an element by its id attribute, while . targets elements by class.",
  },
];

export default questions;
