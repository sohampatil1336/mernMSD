# Department of Computer Science & Engineering (DYPCET Kolhapur)
## Production-Grade Institutional Department Website

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.10-purple.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue.svg)](https://www.typescriptlang.org/)
[![MUI](https://img.shields.io/badge/MUI-v6.1.6-007fff.svg)](https://mui.com/)
[![Accreditation](https://img.shields.io/badge/NBA-Accredited%20Tier--II-green.svg)](https://www.nbaind.org/)
[![Accreditation](https://img.shields.io/badge/NAAC-'A'%20Grade-darkgreen.svg)](http://www.naac.gov.in/)

An institutional-quality, accreditation-aware department web portal built for the **Department of Computer Science & Engineering, D. Y. Patil College of Engineering and Technology (DYPCET), Kolhapur** — an autonomous institute affiliated to Shivaji University, accredited with 'A' Grade by NAAC and Tier-II accredited by NBA.

---

## 🏛️ Project Architecture & Features

- **Strict Data Integrity**: All 28 faculty records, 12 computing labs, autonomous CBCS syllabi, Board of Studies members, PEOs/POs, and placement statistics are sourced 1:1 from the live DYPCET department infrastructure (`coek.dypgroup.edu.in`).
- **Institutional Design System**: Custom MUI v6 theme in `src/theme/theme.ts` adhering to institutional colorways (Institutional Navy `#0b2850`, Maroon `#800020`, Gold `#d4af37`), distinct serif headings (`Merriweather`), shallow modern elevation, and full Light/Dark mode parity.
- **Audience-Aware Information Architecture**:
  1. **Home (`/`)**: Hero banner, animated count-up statistics, HOD desk, differentiators, news/events filters, and recruiter wall.
  2. **About Us (`/about`)**: 4-decade history, Vision & Mission callouts, PEOs, standard 12 NBA Graduate Attributes (POs), PSOs, Board of Studies table, and organizational hierarchy.
  3. **Academics (`/academics`)**: B.Tech CSE (360 intake), Honors/Minor degree tracks, CBCS syllabus archive with PDF downloads, and CIE/ESE examination schemes.
  4. **People (`/people`)**: Searchable/filterable faculty directory (28 members), seniority and alphabetical sorting, detailed profile modals, HOD spotlight, technical staff, and statutory committees.
  5. **Research (`/research`)**: AI/ML, Data Science, and Cloud focus groups, AICTE-funded RPS projects, and peer-reviewed faculty publications table.
  6. **Facilities (`/facilities`)**: 12 air-conditioned computing labs with hardware/software specifications, Central Computing Facility (CCF), and IEEE/ACM digital library resources.
  7. **Admissions (`/admissions`)**: Maharashtra State CAP process guidelines, Institute DTE Code **6282**, Course Choice Code **628224210**, approved fee structure links, and FAQs.
  8. **Placements (`/placements`)**: Historic ₹ 64 LPA Adobe milestone, interactive `@mui/x-charts` placement trends, year-wise audited placement records table, and top recruiter gallery.
  9. **Student Corner (`/student-corner`)**: CSI, ACM, GDSC, and Coding Club chapters, hackathon archives, student achievements, and 'TECH-PULSE' annual magazine download.
  10. **Gallery (`/gallery`)**: Categorized photo grid with interactive lightbox modal viewer.
  11. **Downloads (`/downloads`)**: Centralized filterable document repository for syllabi, timetables, academic calendars, and NBA compliance reports.
  12. **Contact Us (`/contact`)**: Department office hours, coordinator direct contacts, Google Map embed, and validated inquiry form (`react-hook-form` + `zod`).
- **Audit Print Stylesheet**: Dedicated `@media print` CSS in `src/index.css` formatting About, Faculty, and Placement pages for institutional file audits.
- **Accessibility & SEO**: WCAG 2.1 AA compliant contrast, keyboard navigation, skip-to-content anchor, and `react-helmet-async` for per-page meta tags.

---

## 📁 Directory Structure

```
dypcet-cse-website/
├── public/
├── src/
│   ├── theme/
│   │   ├── theme.ts               # Palette, typography scale, component overrides, style guide
│   │   └── ThemeProvider.tsx      # Dark/Light mode context & toggle
│   ├── types/
│   │   └── index.ts               # Strict TypeScript interfaces (FacultyMember, LabInfo, etc.)
│   ├── data/
│   │   ├── department.ts          # Vision, Mission, PEOs, POs, HOD Desk, Quick Stats
│   │   ├── faculty.ts             # 28 authentic faculty profiles
│   │   ├── labs.ts                # 12 computing laboratories
│   │   ├── placements.ts          # Audited placement records & recruiter list
│   │   ├── syllabus.ts            # Autonomous CBCS syllabus links
│   │   ├── bos.ts                 # Board of Studies members
│   │   ├── clubs.ts               # Student chapters (CSI, ACM, GDSC, Code-Hub)
│   │   ├── research.ts            # Research areas, funded grants & publications
│   │   ├── activities.ts          # Departmental workshops & hackathons
│   │   ├── news.ts                # Announcements & notices
│   │   ├── events.ts              # Upcoming academic events
│   │   ├── downloads.ts           # Central document repository
│   │   ├── gallery.ts             # Visual photo collection
│   │   └── committees.ts          # Statutory committees (Anti-ragging, Grievance)
│   ├── hooks/
│   │   ├── useDepartment.ts
│   │   ├── useFaculty.ts
│   │   ├── useLabs.ts
│   │   ├── usePlacements.ts
│   │   └── useNews.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Utility bar + Desktop dropdowns + Mobile drawer
│   │   │   ├── Footer.tsx          # Official credentials, sitemap, legal credits
│   │   │   ├── Breadcrumbs.tsx     # Breadcrumb trail
│   │   │   ├── PageHeader.tsx      # Page banner with gradient styling
│   │   │   ├── PlaceholderNotice.tsx # Visual flag for unverified compliance data
│   │   │   └── ScrollToTop.tsx     # Route change scroll reset
│   │   └── common/
│   │       ├── SectionContainer.tsx # Standardized spacing & section headers
│   │       ├── StatCard.tsx        # Animated count-up stat card
│   │       ├── FacultyCard.tsx     # Card with seniority badge & profile modal
│   │       ├── LabCard.tsx         # Lab equipment, capacity & in-charge
│   │       ├── NewsCard.tsx        # Categorized announcement card
│   │       ├── EventCard.tsx       # Date-block calendar card
│   │       ├── AccreditationBadge.tsx # NBA & NAAC chip badges
│   │       ├── ImageLightbox.tsx   # Modal image viewer
│   │       └── LoadingSkeleton.tsx # Reusable skeleton loaders
│   ├── pages/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Academics/
│   │   ├── People/
│   │   ├── Research/
│   │   ├── Facilities/
│   │   ├── Admissions/
│   │   ├── Placements/
│   │   ├── StudentCorner/
│   │   ├── Gallery/
│   │   ├── Downloads/
│   │   └── Contact/
│   ├── routes/
│   │   └── AppRouter.tsx           # Lazy-loaded route chunks with Suspense
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                   # Global CSS, font imports & print rules
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ How to Update `src/data/*` With Verified Department Content

All data is structured in static, typed TypeScript files located in `src/data/`. To update or add new department content:

1. **Faculty Roster (`src/data/faculty.ts`)**:
   - Add or modify a `FacultyMember` object adhering to `src/types/index.ts`.
   - Update `designation`, `qualification`, `email`, `areaOfInterest`, or `photoUrl`.
2. **Placements (`src/data/placements.ts`)**:
   - Append new academic year placement statistics into `placementStatistics`.
   - Update `notablePlacements` with new marquee student offers.
3. **Syllabus & Downloads (`src/data/syllabus.ts` & `src/data/downloads.ts`)**:
   - Add new syllabus documents with title, academic year, and PDF URL.
4. **Laboratories (`src/data/labs.ts`)**:
   - Update hardware equipment lists, faculty in-charge, and lab capacities.

---

## 🔄 How to Swap the Data Layer for a Future Headless CMS or REST/GraphQL API

The application employs dedicated data hooks (`useFaculty`, `useLabs`, `usePlacements`, `useDepartment`) that decouple the UI components from the static data layer.

To transition from static files to a live CMS (e.g. Strapi, Sanity, or Django/FastAPI):
1. Keep the UI components intact.
2. Update the custom hooks in `src/hooks/`:
   ```ts
   // Example swapping useFaculty.ts for an API call:
   export const useFaculty = () => {
     const [faculty, setFaculty] = useState<FacultyMember[]>([]);
     useEffect(() => {
       fetch('/api/v1/cse/faculty')
         .then((res) => res.json())
         .then((data) => setFaculty(data));
     }, []);
     return faculty;
   };
   ```
3. Because data models adhere to strict TypeScript interfaces in `src/types/index.ts`, backend API responses mapped to these types will immediately render across all pages without breaking component contracts.

---

## 📋 Institutional Compliance Checklist (`PlaceholderNotice`)

The following sections contain clearly marked `PlaceholderNotice` components awaiting gazette notifications or institutional verification:

- [ ] **External Nominees on Board of Studies (`src/data/bos.ts`)**: External university nominee and corporate advisory board member names pending final gazette notification from Shivaji University.
- [ ] **Admissions Exact Fee Breakdown PDF (`src/pages/Admissions/index.tsx`)**: Links directly to FRA official bank details PDF; pending current academic year finalized fee circular.
- [ ] **Student Council Representatives (`src/data/committees.ts`)**: General student representative names pending student council election notifications for the current academic session.

---

## 🚀 Getting Started

To run the project locally:

```bash
# 1. Navigate to the project directory
cd dypcet-cse-website

# 2. Install dependencies (if not already installed)
npm install

# 3. Start the development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
```
