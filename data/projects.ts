export type CaseStudy = {
  overview: string;
  challenge: string;
  solution: string;
  keyOutcomes: string[];
  architectureDetails: string[];
};

export type Project = {
  id: string;
  title: string;
  category: string;
  badgeType: "featured" | "ml" | "cv" | "fullstack";
  period: string;
  description: string;
  tags: string[];
  actionText: string;
  featured: boolean;
  caseStudy: CaseStudy;
  // Housing project specific
  metrics?: {
    value: string;
    label: string;
    color: "blue" | "teal" | "purple" | "amber";
  }[];
  featureImportance?: {
    label: string;
    percentage: number;
    color: string;
  }[];
  // Crypto project specific
  cryptoTickers?: {
    symbol: string;
    name: string;
    change: string;
    positive: boolean;
    icon: string;
  }[];
  highlights?: string[];
  // Generic stats for other cards
  summaryStats?: {
    label: string;
    value: string;
  }[];
};

export const projects: Project[] = [
  {
    id: "ontario-housing",
    title: "Ontario Affordable Housing Delivery Analysis",
    category: "Featured Project",
    badgeType: "featured",
    period: "Jan 2024 – Apr 2024",
    description:
      "An analysis of 13 years of Service Manager Annual Information Returns (SMAIR) data across 47 municipal managers to understand RGI assistance delivery methods using regression and machine learning models.",
    caseStudy: {
      overview:
        "A quantitative public policy data science study analyzing 13 continuous years of Service Manager Annual Information Returns (SMAIR) across 47 municipal districts in Ontario, Canada.",
      challenge:
        "Municipal administrators face conflicting fiscal and structural constraints when allocating Rent-Geared-to-Income (RGI) subsidies, lacking quantitative empirical models to forecast long-term delivery efficacy.",
      solution:
        "Preprocessed 610 municipal observation records, performed feature engineering to isolate municipal budget capacity versus existing physical housing stock, and evaluated multiple regression algorithms using 5-fold cross-validation.",
      keyOutcomes: [
        "Achieved a 0.803 R² cross-validated predictive accuracy with Random Forest and XGBoost regressors.",
        "Demonstrated that physical structural housing size represents 41.6% of predictive power, while operating budget capacity accounts for 40.0%.",
        "Formulated empirical recommendations for provincial housing policy and municipal subsidy allocations.",
      ],
      architectureDetails: [
        "Dataset: Ontario Ministry of Municipal Affairs and Housing (SMAIR 2010–2023).",
        "Pipeline: Missing data imputation, standard feature scaling, multicollinearity diagnostics (VIF).",
        "Modeling: Ridge/Lasso Regression, Random Forest, Gradient Boosted Decision Trees.",
      ],
    },
    metrics: [
      { value: "13", label: "Years of Data Analyzed", color: "blue" },
      { value: "47", label: "Municipal Managers", color: "teal" },
      { value: "610", label: "Observations Processed", color: "purple" },
      { value: "0.803", label: "Best Model R² (5-Fold CV)", color: "amber" },
    ],
    featureImportance: [
      { label: "Structural Housing Stock Size", percentage: 41.6, color: "#3b82f6" },
      { label: "Budget Capacity", percentage: 40.0, color: "#14b8a6" },
      { label: "Temporal Trends", percentage: 2.0, color: "#a5f3fc" },
    ],
    tags: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Data Analysis"],
    actionText: "View Case Study",
    featured: true,
  },
  {
    id: "crypto-prediction",
    title: "Cryptocurrency Prediction & Recommendation System",
    category: "Machine Learning",
    badgeType: "ml",
    period: "Oct 2023 – Apr 2024",
    description:
      "Engineered a trade recommendation system using time-series models and machine learning algorithms on real-time market data to predict price trends and suggest optimal trading strategies.",
    caseStudy: {
      overview:
        "An algorithmic trading and time-series forecasting engine designed to predict price action trends and generate risk-calibrated trading signals across major crypto assets.",
      challenge:
        "Cryptocurrency markets exhibit extreme non-linear volatility, noisy order book data, and rapid regime shifts that degrade standard moving average models.",
      solution:
        "Built a dual-tier analytical pipeline combining Long Short-Term Memory (LSTM) recurrent networks with ARIMA econometric models, layered with dynamic momentum signals (RSI, MACD, Bollinger Bands).",
      keyOutcomes: [
        "Reduced maximum portfolio drawdown by 28% across historical simulation backtests.",
        "Delivered continuous signal scoring for BTC, ETH, and SOL pairs with automated risk-level alerts.",
        "Integrated a backtesting harness to validate trading rules against historical tick and candlestick data.",
      ],
      architectureDetails: [
        "Data Ingestion: REST APIs and WebSocket streams for real-time market order-books.",
        "Feature Engineering: Exponential Moving Averages, Volatility ATR, Volume-Weighted Average Price.",
        "Architecture: PyTorch LSTM with Dropout regularization and sliding-window sequence training.",
      ],
    },
    cryptoTickers: [
      { symbol: "BTC", name: "Bitcoin", change: "+12.4%", positive: true, icon: "btc" },
      { symbol: "ETH", name: "Ethereum", change: "+8.7%", positive: true, icon: "eth" },
      { symbol: "SOL", name: "Solana", change: "+15.3%", positive: true, icon: "sol" },
    ],
    highlights: [
      "Implemented LSTM and ARIMA models for price prediction",
      "Built a recommendation engine with risk-based strategy suggestions",
      "Backtested strategies using historical market data",
    ],
    tags: ["Python", "Machine Learning", "Time-Series", "Data Analysis"],
    actionText: "View Case Study",
    featured: true,
  },
  {
    id: "covid-detection",
    title: "COVID-19 Detection Using X-Ray Imagery",
    category: "Computer Vision",
    badgeType: "cv",
    period: "Jan 2023 – May 2023",
    description:
      "Trained and fine-tuned a CNN image-classification pipeline with OpenCV preprocessing for chest X-ray diagnostics, achieving high clinical classification precision.",
    caseStudy: {
      overview:
        "A clinical computer vision research project implementing deep learning Convolutional Neural Networks to detect pulmonary COVID-19 and viral pneumonia manifestations from thoracic radiography.",
      challenge:
        "Diagnostic delays and subtle radiological patterns in chest X-rays require automated, high-precision visual screening tools with explainable visual attention maps.",
      solution:
        "Engineered an image processing pipeline utilizing Contrast Limited Adaptive Histogram Equalization (CLAHE) for artifact suppression, combined with Transfer Learning (VGG16 and ResNet50 architectures) and Grad-CAM interpretability heatmaps.",
      keyOutcomes: [
        "Achieved 94.8% test classification accuracy with an overall 0.96 ROC-AUC metric.",
        "Generated visual Grad-CAM saliency heatmaps allowing clinicians to inspect activated lung lobes.",
        "Published reproducible image augmentation and tensor normalization workflows in Python and OpenCV.",
      ],
      architectureDetails: [
        "Preprocessing: OpenCV CLAHE contrast enhancement, 224×224 tensor resizing, spatial augmentations.",
        "Model: VGG16 / ResNet-50 backbone fine-tuned with custom dense classification heads.",
        "Explainability: Gradient-weighted Class Activation Mapping (Grad-CAM) visualization layer.",
      ],
    },
    highlights: [
      "Applied VGG16 and ResNet transfer learning architectures with CLAHE contrast enhancement",
      "Achieved 94.8% diagnostic accuracy and 0.96 ROC-AUC score on multi-class lung scans",
      "Engineered automated Grad-CAM heatmaps for visual explainability of infected regions",
    ],
    summaryStats: [
      { label: "Diagnostic Accuracy", value: "94.8%" },
      { label: "ROC-AUC Score", value: "0.96" },
      { label: "Scan Classes", value: "3-Class" },
    ],
    tags: ["Python", "OpenCV", "CNN", "Transfer Learning", "PyTorch"],
    actionText: "View Case Study",
    featured: true,
  },
  {
    id: "attendance-system",
    title: "Online Student Attendance & Grading Management System",
    category: "Full Stack",
    badgeType: "fullstack",
    period: "Aug 2022 – Dec 2022",
    description:
      "Designed a responsive web portal to automate manual paper-based attendance tracking and streamline academic administrative workflows with automated reporting.",
    caseStudy: {
      overview:
        "An enterprise academic management portal engineered to digitize paper-based classroom attendance logs, gradebook evaluations, and student progress tracking.",
      challenge:
        "Educational departments suffered from slow administrative reporting, error-prone manual attendance registries, and lack of real-time student performance analytics.",
      solution:
        "Architected a responsive full-stack platform featuring role-based access control (Faculty, Student, Admin), automated attendance calculation algorithms, and dynamic CSV reporting dashboards.",
      keyOutcomes: [
        "Eliminated manual paperwork, reducing administrative evaluation overhead by over 65%.",
        "Supported 1,200+ active student records with sub-85ms API response latency.",
        "Integrated automated attendance threshold notifications and dynamic grade calculations.",
      ],
      architectureDetails: [
        "Frontend: Responsive React interface with real-time tabular analytics and data visualizations.",
        "Backend: Express.js & Node.js RESTful API architecture with JWT authentication.",
        "Database: PostgreSQL with normalized relational schemas, indexing, and transactional integrity.",
      ],
    },
    highlights: [
      "Built responsive portal automating attendance tracking and student record administration",
      "Integrated secure authentication with role-based access control for faculty and students",
      "Designed normalized database schema supporting real-time grade analytics and CSV export",
    ],
    summaryStats: [
      { label: "Active Student Records", value: "1,200+" },
      { label: "Workflow Efficiency", value: "+65%" },
      { label: "API Response Time", value: "<85ms" },
    ],
    tags: ["Full Stack", "React", "Node.js", "Express", "PostgreSQL"],
    actionText: "View Case Study",
    featured: true,
  },
];


