export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: "Easy" | "Medium" | "Hard";
  branch?: string;
  degree?: string;
}

export const quantitativeQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "If a train travels at 60 km/h, how long will it take to cover 180 km?",
    options: ["2 hours", "3 hours", "4 hours", "5 hours"],
    correctAnswer: 1,
    explanation: "Time = Distance/Speed = 180 km / 60 km/h = 3 hours",
    difficulty: "Easy"
  },
  {
    id: 2,
    question: "What is the probability of rolling a 6 on a fair six-sided die?",
    options: ["1/6", "1/3", "1/2", "2/3"],
    correctAnswer: 0,
    explanation: "A fair die has 6 faces, so probability of any specific number is 1/6",
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "If the ratio of boys to girls in a class is 3:2 and there are 25 students, how many boys are there?",
    options: ["10", "12", "15", "18"],
    correctAnswer: 2,
    explanation: "Total parts = 3 + 2 = 5. Boys = (3/5) × 25 = 15",
    difficulty: "Medium"
  },
  {
    id: 4,
    question: "A man buys a shirt for $40 and sells it for $50. What is his profit percentage?",
    options: ["20%", "25%", "30%", "35%"],
    correctAnswer: 1,
    explanation: "Profit = $50 - $40 = $10. Profit % = (10/40) × 100 = 25%",
    difficulty: "Medium"
  },
  {
    id: 5,
    question: "The average of 5 numbers is 20. If one number is 10, what is the average of the remaining 4 numbers?",
    options: ["15", "20", "22.5", "25"],
    correctAnswer: 2,
    explanation: "Sum of 5 numbers = 5 × 20 = 100. Sum of remaining 4 = 100 - 10 = 90. Average = 90/4 = 22.5",
    difficulty: "Hard"
  }
];

export const qualitativeQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Complete the series: 2, 4, 8, 16, __",
    options: ["24", "32", "28", "30"],
    correctAnswer: 1,
    explanation: "Each number is double the previous: 2×2=4, 4×2=8, 8×2=16, 16×2=32",
    difficulty: "Easy"
  },
  {
    id: 2,
    question: "Which word does NOT belong with the others?",
    options: ["Apple", "Orange", "Banana", "Carrot"],
    correctAnswer: 3,
    explanation: "Apple, Orange, and Banana are fruits, while Carrot is a vegetable",
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "If PENCIL is coded as LICNEP, how is TABLE coded?",
    options: ["ELBAT", "ELTAB", "BLETA", "ALBET"],
    correctAnswer: 0,
    explanation: "PENCIL reversed is LICNEP, so TABLE reversed is ELBAT",
    difficulty: "Medium"
  },
  {
    id: 4,
    question: "Find the odd one out: Square, Circle, Triangle, Rectangle, Pentagon",
    options: ["Square", "Circle", "Triangle", "Pentagon"],
    correctAnswer: 1,
    explanation: "Circle is the only shape that doesn't have straight sides",
    difficulty: "Medium"
  },
  {
    id: 5,
    question: "If A=1, B=2, C=3, ..., what is the value of APPLE?",
    options: ["50", "55", "60", "65"],
    correctAnswer: 1,
    explanation: "A=1, P=16, P=16, L=12, E=5. Sum = 1+16+16+12+5 = 50",
    difficulty: "Hard"
  }
];

export const technicalQuestions = {
  cse: [
    {
      id: 1,
      question: "What does CPU stand for?",
      options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Control Processing Unit"],
      correctAnswer: 0,
      explanation: "CPU stands for Central Processing Unit, the main processor of a computer",
      difficulty: "Easy" as const,
      branch: "CSE",
      degree: "B.Tech"
    },
    {
      id: 2,
      question: "Which data structure uses LIFO (Last In, First Out) principle?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      correctAnswer: 1,
      explanation: "Stack follows LIFO principle - last element added is first to be removed",
      difficulty: "Easy" as const,
      branch: "CSE",
      degree: "B.Tech"
    },
    {
      id: 3,
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correctAnswer: 1,
      explanation: "Binary search divides the search space in half each time, giving O(log n) complexity",
      difficulty: "Medium" as const,
      branch: "CSE",
      degree: "B.Tech"
    },
    {
      id: 4,
      question: "Which of the following is NOT a programming paradigm?",
      options: ["Object-oriented", "Functional", "Procedural", "Algorithmic"],
      correctAnswer: 3,
      explanation: "Algorithmic is not a programming paradigm; the others are established paradigms",
      difficulty: "Medium" as const,
      branch: "CSE",
      degree: "B.Tech"
    },
    {
      id: 5,
      question: "What does SQL stand for?",
      options: ["Simple Query Language", "Structured Query Language", "Standard Query Language", "System Query Language"],
      correctAnswer: 1,
      explanation: "SQL stands for Structured Query Language, used for managing relational databases",
      difficulty: "Easy" as const,
      branch: "CSE",
      degree: "B.Tech"
    }
  ],
  ece: [
    {
      id: 1,
      question: "What is the unit of electrical resistance?",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
      correctAnswer: 2,
      explanation: "The unit of electrical resistance is Ohm (Ω)",
      difficulty: "Easy" as const,
      branch: "ECE",
      degree: "B.Tech"
    },
    {
      id: 2,
      question: "Which modulation technique is used in AM radio?",
      options: ["Frequency Modulation", "Amplitude Modulation", "Phase Modulation", "Pulse Modulation"],
      correctAnswer: 1,
      explanation: "AM radio uses Amplitude Modulation to transmit signals",
      difficulty: "Medium" as const,
      branch: "ECE",
      degree: "B.Tech"
    },
    {
      id: 3,
      question: "What is the frequency range of visible light?",
      options: ["10^6 - 10^9 Hz", "10^12 - 10^15 Hz", "4×10^14 - 7.5×10^14 Hz", "10^18 - 10^21 Hz"],
      correctAnswer: 2,
      explanation: "Visible light has frequencies from approximately 4×10^14 to 7.5×10^14 Hz",
      difficulty: "Hard" as const,
      branch: "ECE",
      degree: "B.Tech"
    }
  ],
  mechanical: [
    {
      id: 1,
      question: "What is the SI unit of force?",
      options: ["Joule", "Newton", "Pascal", "Watt"],
      correctAnswer: 1,
      explanation: "The SI unit of force is Newton (N)",
      difficulty: "Easy" as const,
      branch: "Mechanical",
      degree: "B.Tech"
    },
    {
      id: 2,
      question: "Which law states that 'Energy can neither be created nor destroyed'?",
      options: ["First Law of Thermodynamics", "Second Law of Thermodynamics", "Law of Conservation of Energy", "Zeroth Law of Thermodynamics"],
      correctAnswer: 2,
      explanation: "The Law of Conservation of Energy states that energy cannot be created or destroyed, only transformed",
      difficulty: "Medium" as const,
      branch: "Mechanical",
      degree: "B.Tech"
    }
  ]
};

export const generalInterviewQuestions = [
  {
    id: 1,
    question: "Tell me about yourself.",
    tips: [
      "Keep it professional and concise (1-2 minutes)",
      "Focus on relevant experience and skills",
      "Highlight achievements and career goals",
      "Avoid personal details unless relevant"
    ],
    commonAnswers: [
      "Start with your current role and recent achievements",
      "Mention key skills and experiences",
      "Connect your background to the job requirements",
      "End with your career objectives"
    ]
  },
  {
    id: 2,
    question: "What are your strengths?",
    tips: [
      "Choose 2-3 relevant strengths",
      "Provide specific examples",
      "Connect strengths to job requirements",
      "Be honest and authentic"
    ],
    commonAnswers: [
      "Communication skills with examples",
      "Problem-solving abilities",
      "Leadership experience",
      "Technical expertise"
    ]
  },
  {
    id: 3,
    question: "What are your weaknesses?",
    tips: [
      "Choose a real weakness",
      "Show how you're improving",
      "Turn it into a positive",
      "Avoid cliché answers"
    ],
    commonAnswers: [
      "Being too detail-oriented (with improvement plan)",
      "Public speaking (taking courses)",
      "Perfectionism (learning to delegate)"
    ]
  },
  {
    id: 4,
    question: "Why do you want to work here?",
    tips: [
      "Research the company thoroughly",
      "Connect your goals with company values",
      "Show enthusiasm for the role",
      "Be specific about what attracts you"
    ],
    commonAnswers: [
      "Company culture and values",
      "Growth opportunities",
      "Company's products/services",
      "Team and work environment"
    ]
  },
  {
    id: 5,
    question: "Where do you see yourself in 5 years?",
    tips: [
      "Show ambition and planning",
      "Align with company growth",
      "Be realistic but aspirational",
      "Focus on learning and development"
    ],
    commonAnswers: [
      "Taking on more responsibility",
      "Developing expertise in the field",
      "Leadership roles",
      "Continuous learning and growth"
    ]
  }
];

export const branches = [
  { id: "cse", name: "Computer Science", short: "CSE" },
  { id: "ece", name: "Electronics & Communication", short: "ECE" },
  { id: "mechanical", name: "Mechanical Engineering", short: "ME" },
  { id: "civil", name: "Civil Engineering", short: "CE" },
  { id: "electrical", name: "Electrical Engineering", short: "EE" },
  { id: "chemical", name: "Chemical Engineering", short: "CHE" }
];

export const degrees = [
  { id: "btech", name: "B.Tech/B.E." },
  { id: "mtech", name: "M.Tech/M.E." },
  { id: "mca", name: "MCA" },
  { id: "msc", name: "M.Sc." },
  { id: "phd", name: "Ph.D." }
];