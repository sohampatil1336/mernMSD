import { DepartmentOverview } from '../types';

export const departmentData: DepartmentOverview = {
  name: "Department of Computer Science & Engineering",
  institute: "D. Y. Patil College of Engineering and Technology (DYPCET), Kolhapur",
  establishedYear: 1984,
  affiliatedTo: "Shivaji University, Kolhapur (Autonomous Institute)",
  accreditations: {
    nba: {
      status: "Accredited",
      validity: "Tier-II Autonomous Accreditation Valid up to 30-06-2026",
    },
    naac: {
      grade: "A Grade",
      cycle: "Accredited with 'A' Grade by NAAC",
    },
    aicte: {
      approvalStatus: "Approved by AICTE, New Delhi & DTE Maharashtra (Govt. of Maharashtra)",
    },
    autonomy: {
      status: "UGC Autonomous Institute affiliated to Shivaji University",
    },
  },
  intake: 360,
  hod: {
    name: "Dr. Radhika J. Dhanal",
    designation: "Associate Professor & Head of Department",
    qualification: "M.E. (CSE), Ph.D. (CSE)",
    photoUrl: "https://pub-c398185b3af042318383473fdcadf890.r2.dev/Departments/CSE/Faculty/Images/RJDhanal.jpg",
    deskTitle: "Message from the Head of Department",
    message: "Welcome to the Department of Computer Science and Engineering at D. Y. Patil College of Engineering & Technology (Autonomous), Kolhapur. Since its establishment in 1984, our department has been committed to fostering academic excellence, research innovation, and holistic student development. With an intake of 360 ambitious learners and NBA accreditation, our autonomous curriculum is benchmarked with global technological frontiers—from Artificial Intelligence, Cloud Infrastructure, and Cybersecurity to Modern Software Engineering.\n\nOur cutting-edge computing laboratories, faculty mentors with doctoral degrees from premier institutes, and deep industry partnerships empower our students to achieve remarkable milestones, including our highest placement package of 64 LPA at Adobe. We encourage our students to think critically, innovate fearlessly, and uphold the highest professional ethics to solve societal challenges.",
  },
  vision: "To create technocrats with a flair of advanced technology in Computer Science and Engineering so as to satisfy the Industrial and Societal needs.",
  mission: [
    "To facilitate students with latest hardware, software technologies and technical expertise.",
    "To inspire and nurture creativity amongst the students.",
    "To make the students industry ready and inculcate entrepreneurship skills.",
    "To enrich students’ technical skills for finding innovative solutions to societal needs."
  ],
  peos: [
    {
      "id": "PEO1",
      "title": "PEO 1",
      "description": "To apply the knowledge of mathematics and computer science and engineering to provide realistic solutions to the problems in their domain."
    },
    {
      "id": "PEO2",
      "title": "PEO 2",
      "description": "To exhibit technical skills to analyze, design and develop solutions for engineering issues by using innovative methods, cutting edge tools and techniques."
    },
    {
      "id": "PEO3",
      "title": "PEO 3",
      "description": "To apply professional practices, ethical principles and improve communication skills to enhance the career avenues."
    },
    {
      "id": "PEO4",
      "title": "PEO 4",
      "description": "To display thirst for emerging technologies and inquisitiveness to tackle societal and environmental needs."
    }
  ],
  pos: [
    {
        "id": "PO1",
        "title": "Engineering Knowledge",
        "description": "Apply knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems."
    },
    {
        "id": "PO2",
        "title": "Problem Analysis",
        "description": "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences."
    },
    {
        "id": "PO3",
        "title": "Design/Development of Solutions",
        "description": "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, and cultural, societal, and environmental considerations."
    },
    {
        "id": "PO4",
        "title": "Conduct Investigations of Complex Problems",
        "description": "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions."
    },
    {
        "id": "PO5",
        "title": "Modern Tool Usage",
        "description": "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations."
    },
    {
        "id": "PO6",
        "title": "The Engineer and Society",
        "description": "Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice."
    },
    {
        "id": "PO7",
        "title": "Environment and Sustainability",
        "description": "Understand the impact of professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development."
    },
    {
        "id": "PO8",
        "title": "Ethics",
        "description": "Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice."
    },
    {
        "id": "PO9",
        "title": "Individual and Team Work",
        "description": "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings."
    },
    {
        "id": "PO10",
        "title": "Communication",
        "description": "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions."
    },
    {
        "id": "PO11",
        "title": "Project Management and Finance",
        "description": "Demonstrate knowledge and understanding of engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments."
    },
    {
        "id": "PO12",
        "title": "Life-long Learning",
        "description": "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
    }
],
  psos: [],
  quickStats: [
    { label: "Established", value: 1984, description: "Decades of engineering excellence" },
    { label: "Annual Intake", value: 360, suffix: "+", description: "UG B.Tech CSE students per year" },
    { label: "Faculty Strength", value: 28, description: "Ph.D. & specialized researchers" },
    { label: "High-Tech Labs", value: 12, description: "Air-conditioned computing laboratories" },
    { label: "Highest Package", value: 64, prefix: "₹", suffix: " LPA", description: "Adobe Dream Offer" },
    { label: "Campus Recruiters", value: 100, suffix: "+", description: "Top global & Indian MNCs" }
  ],
  verified: true,
};
