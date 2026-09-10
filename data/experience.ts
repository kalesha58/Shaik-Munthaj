export type ExperienceEntry = {
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Smart Bridge Educational Services",
    location: "Andhra Pradesh, India",
    role: "Artificial Intelligence and Machine Learning Intern",
    period: "Oct 2023 – Apr 2024",
    highlights: [
      "Executed a 6-month hands-on internship focusing on real-world AI/ML pipeline workflows.",
      "Preprocessed multi-modal datasets, developed predictive algorithms, and evaluated model performance metrics to optimize accuracy.",
    ],
  },
  {
    company: "Indian Servers",
    location: "Vijayawada, India",
    role: "Machine Learning Intern",
    period: "Oct 2022 – Dec 2022",
    highlights: [
      "Built a deep learning diagnostic model using Convolutional Neural Networks (CNN) and Transfer Learning for COVID-19 detection from X-ray imagery.",
      "Converted lung X-ray image scans into numerical array format using OpenCV to extract key visual features for classification algorithms.",
    ],
  },
  {
    company: "Brainovision",
    location: "Vijayawada, India",
    role: "MEAN Stack Technologies Intern",
    period: "Jun 2023 – Jul 2023",
    highlights: [
      "Developed full-stack web applications using MongoDB, Express.js, Angular, and Node.js.",
      "Architected RESTful API endpoints and integrated NoSQL databases to support dynamic user interfaces.",
    ],
  },
];
