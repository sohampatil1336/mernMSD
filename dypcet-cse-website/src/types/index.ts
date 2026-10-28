export interface FacultyMember {
  id: string;
  name: string;
  designation: 'Professor' | 'Associate Professor' | 'Assistant Professor' | 'Head of Department' | string;
  qualification: string;
  specialization: string[];
  email: string;
  photoUrl?: string;
  bio?: string;
  experience?: string;
  order?: number;
  areaOfInterest?: string;
  verified: boolean;
}

export interface LabInfo {
  id: string;
  name: string;
  description?: string;
  inchargeFaculty?: string;
  technicalAssistant?: string;
  majorEquipment?: string[];
  softwareDetails?: string[];
  cost?: string;
  area?: string;
  capacity?: number;
  photoUrl?: string;
  verified: boolean;
}

export interface PlacementYearRecord {
  year: string;
  companiesVisited: number;
  studentsRegistered?: number;
  studentsPlaced: number;
  placementPercentage: number;
  highestPackageLPA: number;
  averagePackageLPA: number;
  topOfferCompany?: string;
  verified: boolean;
}

export interface Recruiter {
  name: string;
  logoUrl?: string;
  tier: 'Dream' | 'Super Dream' | 'Core' | 'Regular';
  verified: boolean;
}

export interface StudentPlacementDetail {
  studentName: string;
  companyName: string;
  packageLPA: number;
  batch: string;
  verified: boolean;
}

export interface SyllabusItem {
  id: string;
  title: string;
  program: string;
  academicYear: string;
  yearLevel: 'First Year' | 'Second Year' | 'Third Year' | 'Final Year' | 'All Years';
  semester?: string;
  scheme: string; // e.g. "Autonomous Choice Based Credit System"
  pdfUrl: string;
  verified: boolean;
}

export interface BoardOfStudiesMember {
  id: string;
  name: string;
  role: string; // "Chairman", "Member", "Subject Expert", "Industry Expert"
  designation: string;
  organization: string;
  verified: boolean;
}

export interface ResearchPublication {
  id: string;
  authors: string;
  title: string;
  venue: string; // Journal / Conference name
  type: 'Journal' | 'Conference' | 'Book Chapter' | 'Patent';
  year: number;
  doiOrLink?: string;
  verified: boolean;
}

export interface ResearchProject {
  id: string;
  title: string;
  principalInvestigator: string;
  fundingAgency: string;
  amountGrant: string;
  status: 'Ongoing' | 'Completed';
  year: string;
  verified: boolean;
}

export interface StudentClub {
  id: string;
  name: string;
  acronym?: string;
  facultyCoordinator?: string;
  studentLead?: string;
  description: string;
  logoUrl?: string;
  activitiesCount?: number;
  verified: boolean;
}

export interface DepartmentActivity {
  id: string;
  title: string;
  category: 'Workshop' | 'Guest Lecture' | 'FDP' | 'Industrial Visit' | 'Hackathon' | 'Competition';
  date: string;
  speakerOrExpert?: string;
  participantsCount?: number;
  description: string;
  imageUrl?: string;
  verified: boolean;
}

export interface NewsNoticeItem {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Events' | 'Achievements' | 'Placements' | 'General';
  description: string;
  fileUrl?: string;
  isImportant?: boolean;
  verified: boolean;
}

export interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  venue: string;
  organizer: string;
  description: string;
  registrationLink?: string;
  verified: boolean;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Labs' | 'Events' | 'Fests' | 'Campus' | 'Achievements';
  imageUrl: string;
  date?: string;
  verified: boolean;
}

export interface DownloadDoc {
  id: string;
  title: string;
  category: 'Syllabus' | 'Timetable' | 'Academic Calendar' | 'NBA/NAAC' | 'Forms' | 'Brochures';
  academicYear?: string;
  fileUrl: string;
  size?: string;
  verified: boolean;
}

export interface CommitteeMember {
  name: string;
  designation: string;
  role: string;
  contact?: string;
  verified: boolean;
}

export interface DepartmentCommittee {
  id: string;
  name: string;
  description: string;
  coordinator: string;
  members: CommitteeMember[];
  verified: boolean;
}

export interface DepartmentOverview {
  name: string;
  institute: string;
  establishedYear: number;
  affiliatedTo: string;
  accreditations: {
    nba: { status: string; validity: string };
    naac: { grade: string; cycle: string };
    aicte: { approvalStatus: string };
    autonomy: { status: string };
  };
  intake: number;
  hod: {
    name: string;
    designation: string;
    qualification: string;
    photoUrl: string;
    message: string;
    deskTitle: string;
  };
  vision: string;
  mission: string[];
  peos: { id: string; title: string; description: string }[];
  pos: { id: string; title: string; description: string }[];
  psos: { id: string; title: string; description: string }[];
  quickStats: {
    label: string;
    value: number;
    prefix?: string;
    suffix?: string;
    description: string;
  }[];
  verified: boolean;
}
