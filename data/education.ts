export type EducationEntry = {
  institution: string;
  location: string;
  degree: string;
  gpa: string;
  period: string;
  highlights: string[];
};

export const education: EducationEntry[] = [
  {
    institution: "Trent University",
    location: "Peterborough, ON, Canada",
    degree:
      "Master of Science in Applied Modelling & Quantitative Methods: Big Data Analytics",
    gpa: "GPA: 3.9",
    period: "Jan 2025 – Apr 2026",
    highlights: [
      "Enrolled in a fully accredited program by the Council of Ontario Universities (COU), Universities Canada, and the Association of Commonwealth Universities (ACU).",
    ],
  },
  {
    institution:
      "Potti Sri Ramulu Chalavadi Mallikarjuna Rao College of Engineering",
    location: "Vijayawada, India",
    degree:
      "Bachelor of Computer Science in Artificial Intelligence and Machine Learning",
    gpa: "CGPA: 7.97",
    period: "Jan 2020 – May 2024",
    highlights: [
      "Completed undergraduate degree under JNTU Kakinada University with specialization in AI and Machine Learning.",
    ],
  },
];
