export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  school: string;
  degree: string;
  degreeLevel: string;
  gpa: string;
  period: string;
  details: string[];
}

export interface Achievement {
  title: string;
  event: string;
  year: string;
  award: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Software' | 'Analysis' | 'Core' | 'Office';
}