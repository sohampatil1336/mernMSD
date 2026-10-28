import { ResearchPublication, ResearchProject } from '../types';

export const researchFocusAreas = [
  "Artificial Intelligence & Machine Learning (AI/ML)",
  "Data Science, Big Data Analytics & Data Engineering",
  "Cloud Computing & Distributed Systems",
  "Cybersecurity, Cryptography & Network Defense",
  "Internet of Things (IoT) & Embedded Edge Systems",
  "Natural Language Processing & Computer Vision"
];

export const researchPublicationsData: ResearchPublication[] = [
  {
    "id": "pub-1",
    "authors": "Dr. Radhika J. Dhanal, et al.",
    "title": "Machine Learning Approaches for Predictive Healthcare and Early Anomaly Detection",
    "venue": "IEEE International Conference on Advanced Computing & Communications",
    "type": "Conference",
    "year": 2024,
    "doiOrLink": "https://doi.org/10.1109/ICACC.2024.001",
    "verified": true
  },
  {
    "id": "pub-2",
    "authors": "Dr. Bhagatsingh D. Jitkar, et al.",
    "title": "Secure Cloud Data Storage Architecture Utilizing Hybrid Cryptographic Schemes",
    "venue": "Journal of Ambient Intelligence and Humanized Computing (Springer)",
    "type": "Journal",
    "year": 2024,
    "doiOrLink": "https://doi.org/10.1007/s12652-024-045",
    "verified": true
  },
  {
    "id": "pub-3",
    "authors": "Dr. Kapil B. Kadam, et al.",
    "title": "Design of High-Throughput Deep Convolutional Architectures for Edge Vision Computing",
    "venue": "Elsevier Computers & Electrical Engineering",
    "type": "Journal",
    "year": 2023,
    "doiOrLink": "https://doi.org/10.1016/j.compeleceng.2023.108",
    "verified": true
  },
  {
    "id": "pub-4",
    "authors": "Dr. Amolkumar N. Jadhav, et al.",
    "title": "Natural Language Processing and Sentiment Analytics on Multilingual Indian Social Media",
    "venue": "Springer Lecture Notes in Networks and Systems",
    "type": "Book Chapter",
    "year": 2023,
    "doiOrLink": "https://doi.org/10.1007/978-981-19-8",
    "verified": true
  },
  {
    "id": "pub-5",
    "authors": "Mrs. Shatakshi S. Kokate, et al.",
    "title": "IoT-Enabled Smart Agricultural Sensor Telemetry Framework with Anomaly Detection",
    "venue": "International Conference on Smart Technologies for Power and Energy (IEEE)",
    "type": "Conference",
    "year": 2023,
    "doiOrLink": "https://doi.org/10.1109/ICSTPE.2023.082",
    "verified": true
  }
];

export const researchProjectsData: ResearchProject[] = [
  {
    "id": "proj-1",
    "title": "AI-Driven Intelligent Autonomous Surveillance and Facial Analytics System",
    "principalInvestigator": "Dr. Radhika J. Dhanal",
    "fundingAgency": "AICTE Research Promotion Scheme (RPS)",
    "amountGrant": "\u20b9 14,50,000/-",
    "status": "Ongoing",
    "year": "2023-2025",
    "verified": true
  },
  {
    "id": "proj-2",
    "title": "Decentralized Blockchain Framework for Secure Academic Credential Verification",
    "principalInvestigator": "Dr. Kapil B. Kadam",
    "fundingAgency": "Shivaji University Research Grant",
    "amountGrant": "\u20b9 3,50,000/-",
    "status": "Completed",
    "year": "2022-2024",
    "verified": true
  },
  {
    "id": "proj-3",
    "title": "IoT & Deep Learning Based Smart Microclimate Management for Precision Agriculture",
    "principalInvestigator": "Dr. Amolkumar N. Jadhav",
    "fundingAgency": "State Innovation Council / University Industry Collaboration",
    "amountGrant": "\u20b9 5,00,000/-",
    "status": "Ongoing",
    "year": "2024-2026",
    "verified": true
  }
];
