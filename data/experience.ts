export type ExperienceStat = {
  label: string;
  value: string;
  iconName: "database" | "trending" | "shield" | "image" | "layers" | "code";
};

export type ExperienceEntry = {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  duration: string;
  type: string;
  color: "blue" | "teal" | "purple";
  summary: string;
  highlights: string[];
  techTags: string[];
  preview: {
    titlePrefix: string;
    titleAccent: string;
    imagePath: string;
    imageAlt: string;
    stats: ExperienceStat[];
    certificateUrl?: string;
  };
};

export const experience: ExperienceEntry[] = [
  {
    id: "smart-bridge",
    company: "Smart Bridge Educational Services",
    location: "Andhra Pradesh, India",
    role: "Artificial Intelligence & Machine Learning Intern",
    period: "Oct 2023 – Apr 2024",
    duration: "6 months",
    type: "AI / ML Internship",
    color: "blue",
    summary:
      "Executed a 6-month hands-on internship focusing on real-world AI/ML pipeline workflows and statistical evaluations.",
    highlights: [
      "Preprocessed multi-modal datasets, developed predictive algorithms, and evaluated performance metrics (precision, recall, F1-score) to optimize accuracy.",
      "Engineered tabular features and implemented hyperparameter tuning to ensure robust cross-validation across production datasets.",
      "Built end-to-end predictive pipelines, data preprocessing workflows, and model evaluation benchmarks.",
    ],
    techTags: [
      "Python",
      "Scikit-learn",
      "Predictive Modeling",
      "Feature Engineering",
      "Data Preprocessing",
    ],
    preview: {
      titlePrefix: "Turning Education Data into",
      titleAccent: "Actionable Insights",
      imagePath: "/images/experience/chart-preview.jpg",
      imageAlt: "Data analytics bar chart visualization",
      stats: [
        { label: "Datasets Used", value: "6+", iconName: "database" },
        { label: "Model Accuracy ↑", value: "15%", iconName: "trending" },
      ],
      certificateUrl: "#certifications",
    },
  },
  {
    id: "indian-servers",
    company: "Indian Servers",
    location: "Vijayawada, India",
    role: "Machine Learning Intern",
    period: "Oct 2022 – Dec 2022",
    duration: "3 months",
    type: "Computer Vision Internship",
    color: "teal",
    summary:
      "Built a deep learning diagnostic model using CNN and Transfer Learning for COVID-19 detection from X-ray imagery.",
    highlights: [
      "Converted lung X-ray scans into numerical arrays using OpenCV for feature extraction.",
      "Implemented CNN architectures with transfer learning for improved classification.",
      "Streamlined image normalization and data augmentation pipelines for better generalizability.",
    ],
    techTags: [
      "CNNs",
      "Transfer Learning",
      "OpenCV",
      "Medical Radiography",
      "Image Processing",
    ],
    preview: {
      titlePrefix: "Using AI for Faster, Accurate",
      titleAccent: "Medical Diagnostics",
      imagePath: "/images/experience/xray-preview.jpg",
      imageAlt: "Chest radiography medical scan",
      stats: [
        { label: "Classification Accuracy", value: "95%", iconName: "shield" },
        { label: "X-Ray Images Processed", value: "2,500+", iconName: "image" },
      ],
      certificateUrl: "#certifications",
    },
  },
  {
    id: "brainovision",
    company: "MEAN Stack Technologies",
    location: "Remote / Vijayawada, India",
    role: "MEAN Stack Technologies Intern",
    period: "Jun 2023 – Jul 2023",
    duration: "2 months",
    type: "Full-Stack Internship",
    color: "purple",
    summary:
      "Developed full-stack web applications using MongoDB, Express.js, Angular, and Node.js.",
    highlights: [
      "Built and deployed responsive web applications with RESTful APIs.",
      "Implemented secure authentication and database management.",
      "Collaborated in an agile environment to deliver production-ready features.",
    ],
    techTags: [
      "MongoDB",
      "Express.js",
      "Angular",
      "Node.js",
      "Full-Stack Development",
    ],
    preview: {
      titlePrefix: "Building Scalable Web Solutions for",
      titleAccent: "Real-World Use",
      imagePath: "/images/experience/dashboard-preview.jpg",
      imageAlt: "Full stack SaaS dashboard UI preview",
      stats: [
        { label: "Applications Built", value: "1+", iconName: "layers" },
        { label: "Development", value: "Full-Stack", iconName: "code" },
      ],
      certificateUrl: "#certifications",
    },
  },
];
