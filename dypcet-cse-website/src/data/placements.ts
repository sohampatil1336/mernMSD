import { PlacementYearRecord, Recruiter, StudentPlacementDetail } from '../types';

export const placementStatistics: PlacementYearRecord[] = [
  {
    "year": "2024-25",
    "companiesVisited": 105,
    "studentsRegistered": 320,
    "studentsPlaced": 278,
    "placementPercentage": 86.8,
    "highestPackageLPA": 64.0,
    "averagePackageLPA": 6.3,
    "topOfferCompany": "Adobe",
    "verified": true
  },
  {
    "year": "2023-24",
    "companiesVisited": 120,
    "studentsRegistered": 310,
    "studentsPlaced": 282,
    "placementPercentage": 90.9,
    "highestPackageLPA": 44.0,
    "averagePackageLPA": 5.8,
    "topOfferCompany": "Amazon",
    "verified": true
  },
  {
    "year": "2022-23",
    "companiesVisited": 115,
    "studentsRegistered": 290,
    "studentsPlaced": 265,
    "placementPercentage": 91.3,
    "highestPackageLPA": 32.0,
    "averagePackageLPA": 5.4,
    "topOfferCompany": "Walmart",
    "verified": true
  },
  {
    "year": "2021-22",
    "companiesVisited": 98,
    "studentsRegistered": 270,
    "studentsPlaced": 240,
    "placementPercentage": 88.8,
    "highestPackageLPA": 28.0,
    "averagePackageLPA": 5.1,
    "topOfferCompany": "TCS Digital",
    "verified": true
  },
  {
    "year": "2020-21",
    "companiesVisited": 85,
    "studentsRegistered": 250,
    "studentsPlaced": 218,
    "placementPercentage": 87.2,
    "highestPackageLPA": 20.0,
    "averagePackageLPA": 4.6,
    "topOfferCompany": "Cognizant",
    "verified": true
  }
];

export const topRecruiters: Recruiter[] = [
  {
    "name": "Adobe",
    "tier": "Super Dream",
    "verified": true
  },
  {
    "name": "Amazon",
    "tier": "Super Dream",
    "verified": true
  },
  {
    "name": "Walmart Global Tech",
    "tier": "Super Dream",
    "verified": true
  },
  {
    "name": "TCS (Tata Consultancy Services)",
    "tier": "Dream",
    "verified": true
  },
  {
    "name": "Infosys",
    "tier": "Dream",
    "verified": true
  },
  {
    "name": "Cognizant",
    "tier": "Dream",
    "verified": true
  },
  {
    "name": "Wipro",
    "tier": "Core",
    "verified": true
  },
  {
    "name": "Capgemini",
    "tier": "Core",
    "verified": true
  },
  {
    "name": "Accenture",
    "tier": "Dream",
    "verified": true
  },
  {
    "name": "Persistent Systems",
    "tier": "Dream",
    "verified": true
  },
  {
    "name": "KPIT Technologies",
    "tier": "Core",
    "verified": true
  },
  {
    "name": "LTI Mindtree",
    "tier": "Dream",
    "verified": true
  }
];

export const notablePlacements: StudentPlacementDetail[] = [
  {
    "studentName": "Ms. Anamika Dakare",
    "companyName": "Adobe",
    "packageLPA": 64.0,
    "batch": "2024-25",
    "verified": true
  },
  {
    "studentName": "Mr. Rohit Deshmukh",
    "companyName": "Amazon",
    "packageLPA": 44.0,
    "batch": "2023-24",
    "verified": true
  },
  {
    "studentName": "Ms. Sneha Patil",
    "companyName": "Walmart Global Tech",
    "packageLPA": 32.0,
    "batch": "2022-23",
    "verified": true
  },
  {
    "studentName": "Mr. Aditya Kulkarni",
    "companyName": "TCS Digital",
    "packageLPA": 12.5,
    "batch": "2024-25",
    "verified": true
  },
  {
    "studentName": "Ms. Pooja Shinde",
    "companyName": "Persistent Systems",
    "packageLPA": 10.0,
    "batch": "2024-25",
    "verified": true
  }
];

export const placementReportPdf = "https://pub-c398185b3af042318383473fdcadf890.r2.dev/Departments/CSE/Placement/Placement%20list/Placement%20website%20upload/CSE%20Dept%20placed%20students%20list%20for%20A.Y%202024-25.pdf";
