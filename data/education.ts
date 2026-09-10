export type EducationEntry = {
  institution: string;
  location: string;
  degree: string;
  shortDegree: string;
  gpa: string;
  period: string;
  status: "In Progress" | "Completed";
  badge: string;
  highlights: string[];
  keyFocus: string[];
  accreditation?: string;
  color: "blue" | "teal";
};

export const education: EducationEntry[] = [
  {
    institution: "Trent University",
    location: "Peterborough, ON, Canada",
    degree:
      "Master of Science in Applied Modelling & Quantitative Methods: Big Data Analytics",
    shortDegree: "M.Sc. in Applied Modelling & Big Data Analytics",
    gpa: "GPA: 3.9 / 4.0",
    period: "Jan 2025 – Apr 2026",
    status: "Completed",
    badge: "Degree Conferred • High Honors",
    highlights: [
      "Rigorous quantitative research combining statistical modelling, deep learning, and scalable big data analytics.",
      "Developed high-performance machine learning workflows and predictive analytics pipelines for municipal and real-world datasets.",
    ],
    keyFocus: [
      "Big Data Analytics",
      "Predictive Machine Learning",
      "Statistical Modelling",
      "Quantitative Methods",
      "Distributed Data Systems",
    ],
    accreditation:
      "Fully accredited by the Council of Ontario Universities (COU), Universities Canada & ACU",
    color: "blue",
  },
  {
    institution:
      "Potti Sri Ramulu Chalavadi Mallikarjuna Rao College of Engineering",
    location: "Vijayawada, India",
    degree:
      "Bachelor of Computer Science in Artificial Intelligence and Machine Learning",
    shortDegree: "B.Tech in Artificial Intelligence & Machine Learning",
    gpa: "CGPA: 7.97 / 10",
    period: "Jan 2020 – May 2024",
    status: "Completed",
    badge: "First Class with Distinction",
    highlights: [
      "Specialized in Artificial Intelligence, Deep Neural Networks, Computer Vision, and Full-Stack Web Development.",
      "Graduated under Jawaharlal Nehru Technological University (JNTU) Kakinada with hands-on capstone projects.",
    ],
    keyFocus: [
      "Deep Learning & CNNs",
      "Computer Vision (OpenCV)",
      "Algorithms & Data Structures",
      "Full-Stack Web Engineering",
      "Database Systems (SQL / NoSQL)",
    ],
    accreditation: "Affiliated to JNTU Kakinada, Approved by AICTE",
    color: "teal",
  },
];
