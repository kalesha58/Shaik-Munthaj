export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issuerShort: string;
  date: string;
  category: "AI & Data Science" | "Computer Science" | "Professional & Leadership";
  skills: string[];
  theme: "blue" | "teal" | "purple" | "amber" | "emerald" | "indigo" | "sky" | "slate";
  credentialType: string;
  credentialCode?: string;
};

export const certifications: Certification[] = [
  {
    id: "umich-comp-thinking",
    title: "Problem Solving Using Computational Thinking",
    issuer: "University of Michigan",
    issuerShort: "U-Michigan",
    date: "Mar 2022",
    category: "Computer Science",
    skills: ["Algorithmic Design", "Decomposition", "Computational Logic", "Pattern Modeling"],
    theme: "blue",
    credentialType: "Academic Certification",
    credentialCode: "UMICH-CT-2022",
  },
  {
    id: "guvi-chatgpt",
    title: "ChatGPT for Everyone: Generative AI",
    issuer: "GUVI (ISO 9001:2015 Certified)",
    issuerShort: "GUVI Tech",
    date: "Oct 2023",
    category: "AI & Data Science",
    skills: ["Prompt Engineering", "Generative AI", "LLM Workflows", "AI Automation"],
    theme: "emerald",
    credentialType: "GenAI Masterclass",
    credentialCode: "GUVI-GPT-9001",
  },
  {
    id: "gl-data-science",
    title: "Introduction to Data Science",
    issuer: "Great Learning Academy",
    issuerShort: "Great Learning",
    date: "Apr 2022",
    category: "AI & Data Science",
    skills: ["Exploratory Data Analysis", "Statistical Methods", "Data Pipelines", "Python Analytics"],
    theme: "teal",
    credentialType: "Professional Certificate",
    credentialCode: "GL-DS-4412",
  },
  {
    id: "guvi-pygame",
    title: "Game Development using PyGame",
    issuer: "GUVI (ISO 9001:2015 Certified)",
    issuerShort: "GUVI Tech",
    date: "Oct 2023",
    category: "Computer Science",
    skills: ["Python", "PyGame Engine", "Game Loop Architecture", "Collision Mechanics"],
    theme: "indigo",
    credentialType: "Applied Engineering",
    credentialCode: "GUVI-PYG-8821",
  },
  {
    id: "gl-cyber-security",
    title: "Introduction to Cyber Security",
    issuer: "Great Learning Academy",
    issuerShort: "Great Learning",
    date: "Mar 2022",
    category: "Computer Science",
    skills: ["Network Security", "Threat Detection", "Information Security", "Defense Principles"],
    theme: "purple",
    credentialType: "Security Credential",
    credentialCode: "GL-CYBER-3190",
  },
  {
    id: "infosys-comp-thinking",
    title: "Problem Solving Using Computational Thinking",
    issuer: "Infosys Springboard",
    issuerShort: "Infosys",
    date: "Mar 2022",
    category: "Computer Science",
    skills: ["Problem Structuring", "Algorithmic Efficiency", "Logic Formulations"],
    theme: "sky",
    credentialType: "Enterprise Credential",
    credentialCode: "INFY-SP-7712",
  },
  {
    id: "tcs-career-edge",
    title: "TCS iON Career Edge: Young Professional Course",
    issuer: "TCS iON · Tata Consultancy Services",
    issuerShort: "TCS iON",
    date: "Dec 2021",
    category: "Professional & Leadership",
    skills: ["Corporate Analytics", "Business Communication", "Professional Ethics"],
    theme: "slate",
    credentialType: "Industry Readiness",
    credentialCode: "TCS-ION-0994",
  },
  {
    id: "gl-management",
    title: "Introduction to Management",
    issuer: "Great Learning Academy",
    issuerShort: "Great Learning",
    date: "Apr 2022",
    category: "Professional & Leadership",
    skills: ["Strategic Planning", "Project Execution", "Operational Leadership"],
    theme: "amber",
    credentialType: "Executive Certificate",
    credentialCode: "GL-MGMT-1833",
  },
];

