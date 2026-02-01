import { Experience, Education, Achievement, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Dimas B. Setiawan",
  title: "Process Quality & Materials Engineer",
  location: "Tangerang, Indonesia",
  email: "dbsetiawan95@gmail.com",
  phone: "+62 896 22 24 23 25",
  linkedin: "https://www.linkedin.com/in/dbstwn/",
  grabcad: "https://grabcad.com/dbstwn-1/",
  github: "https://github.com/dbstwn",
  summary: "Versatile and detail-oriented engineer with 4+ years of hands-on experience in manufacturing, research & development, and metallurgical fields. Proven success in New Product Introduction (NPI), quality engineering, and technical issue analysis."
};

export const EXPERIENCES: Experience[] = [
  {
    id: "vivo",
    company: "vivo Indonesia",
    role: "Process Quality Engineer",
    location: "Tangerang, Indonesia",
    period: "2022/07 – Present",
    description: [
      "Spearheaded New Product Introduction (NPI) for 13 new manufactured models.",
      "Mitigated 20+ quality issues during each trial-phase, boosting efficiency by 11% after mass-production.",
      "Successfully transferred trial phase to mass-production, cutting production delays by avg. 29%.",
      "Optimized quality control planning, increasing quality monitoring accuracy by 23% of leakage defects.",
      "Coordinated across departments, maintaining first-pass yields up to 99.98% monthly."
    ]
  },
  {
    id: "gesits",
    company: "Hyundai Kefico EV Project",
    role: "Research Staff Engineer",
    location: "Jakarta, Indonesia",
    period: "2021/12 – 2022/06",
    description: [
      "Supported NPI for 2 new electric vehicles development, resolving 17 design flaws during prototyping.",
      "Standardized 3 technical documentations fully compliance with ISO 9001 standards.",
      "Identified and resolved 10+ durability issues by technical assessments, improving lifecycle by 35%."
    ]
  },
  {
    id: "gec",
    company: "Global Ecocentric Consultant",
    role: "Mechanical Engineer",
    location: "Bekasi, Indonesia",
    period: "2021/09 – 2022/07",
    description: [
      "Designed 7 mechanical and infrastructure systems for waste management and mineral processing plants.",
      "Performed 15+ FEA simulations, settling-out 25+ critical issues related with durability and design safety.",
      "Optimized 50+ structure and mechanical parts, saving production cost up to 19% (Approx. USD30k)."
    ]
  },
  {
    id: "agc",
    company: "Artisanal Gold Council",
    role: "Mineral Processing Engineer",
    location: "Sampit & Kotamobagu, Indonesia",
    period: "2020/08 – 2021/10",
    description: [
      "Improved Parenggean Gold Plant operation, reducing maintenance time up to 66% monthly.",
      "Successfully commissioned Tobongon Gold Plant after deactivated during COVID.",
      "Introduced gravimetric method, boosting production rate up to 29% per tonnage ores."
    ]
  },
  {
    id: "its",
    company: "Materials Laboratory for Defense Technology ITS",
    role: "Materials Engineer",
    location: "Surabaya, Indonesia",
    period: "2018/03 – 2020/07",
    description: [
      "Led research on military frangible ammunition, converting pilot project into mini-industrial plant.",
      "Analyzed 50+ experimental datasets to validate material behaviors under impact and thermal stress.",
      "Successfully optimized and pushed 2 designs into semi mass-production after 2+ years of research."
    ]
  }
];

export const EDUCATION: Education = {
  school: "Sepuluh Nopember Institute of Technology (ITS)",
  degree: "Materials and Metallurgical Engineering",
  degreeLevel: "Bachelor of Engineering",
  gpa: "3.46 / 4.00",
  period: "2015/08-2020/02",
  details: [
    "Final Project: FEA-based Mathematical Approach Comparison of CZM and VCCT Method on GFRP and CFRP Material Composites.",
    "Goal: Compare mathematical approaches for composite analysis accuracy."
  ]
};

export const ACHIEVEMENTS: Achievement[] = [
  { title: "3rd Position", event: "Shell Eco-marathon Asia (Urban-class)", year: "2019", award: "Bronze" },
  { title: "Bronze Medal", event: "International Young Inventors Award", year: "2018", award: "Bronze" },
  { title: "Merit Award", event: "Malaysia Technology Expo", year: "2018", award: "Merit" },
  { title: "Gold Medal", event: "International Young Inventors Award", year: "2016", award: "Gold" }
];

export const SKILLS: Skill[] = [
  { name: "SolidWorks", level: 90, category: "Software" },
  { name: "AutoCAD", level: 85, category: "Software" },
  { name: "ANSYS", level: 80, category: "Software" },
  { name: "Abaqus", level: 75, category: "Software" },
  { name: "Minitab", level: 70, category: "Software" },
  { name: "Quality Planning", level: 95, category: "Core" },
  { name: "Root Cause Analysis", level: 90, category: "Core" },
  { name: "NPI", level: 85, category: "Core" },
  { name: "FEA Simulation", level: 80, category: "Analysis" },
  { name: "Word", level: 95, category: "Office" },
  { name: "Excel", level: 90, category: "Office" },
  { name: "PowerPoint", level: 95, category: "Office" },
  { name: "Windows", level: 95, category: "Office" },
  { name: "Ubuntu", level: 80, category: "Office" },
];