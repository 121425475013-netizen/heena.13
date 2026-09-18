import { SkillItem, StrengthItem, MilestoneItem, ExploringItem, LanguageItem } from '../types';

export const PERSONAL_INFO = {
  name: 'HEENA SULTANA',
  academicIdentity: 'B.Sc. Data Science (Honors) Student',
  college: 'St. Josephs Degree and PG College',
  sgpa: '8.76',
  location: 'Hyderabad, India',
  email: 'heenasultana024@gmail.com',
  phone: '7386960450',
  formattedPhone: '+91 73869 60450',
  concept: 'LEARNING • BUILDING • GROWING',
  heroIntro:
    'Motivated and enthusiastic Data Science student interested in technology, databases, and data science, with a passion for learning, teamwork, problem-solving, and building meaningful academic projects.',
  aboutBio1:
    'I am a B.Sc. Data Science (Honors) student at St. Josephs Degree and PG College, passionate about exploring technology, databases, and data science.',
  aboutBio2:
    'I enjoy learning new skills, working collaboratively with others, solving problems, and taking part in academic and technology-focused activities. My academic journey has given me opportunities to work on projects, participate in events, and develop my communication, teamwork, and problem-solving abilities.',
};

export const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'project', label: 'Project' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const TECHNICAL_SKILLS: SkillItem[] = [
  {
    name: 'Python',
    category: 'Programming',
    level: 'Basic',
    description: 'Foundational programming knowledge',
    iconName: 'Code',
  },
  {
    name: 'DBMS',
    category: 'Database',
    level: 'Basic',
    description: 'Foundational database knowledge',
    iconName: 'Database',
  },
  {
    name: 'Microsoft Excel',
    category: 'Productivity Tools',
    level: 'Working Knowledge',
    description: 'Productivity and spreadsheet tool',
    iconName: 'Table',
  },
  {
    name: 'Microsoft PowerPoint',
    category: 'Productivity Tools',
    level: 'Working Knowledge',
    description: 'Presentation and communication tool',
    iconName: 'Presentation',
  },
  {
    name: 'Microsoft Word',
    category: 'Productivity Tools',
    level: 'Working Knowledge',
    description: 'Document creation tool',
    iconName: 'FileText',
  },
];

export const STRENGTHS: StrengthItem[] = [
  {
    name: 'Teamwork & Collaboration',
    description: 'Enjoys coordinating seamlessly with peers to achieve collective academic milestones.',
    iconName: 'Users',
  },
  {
    name: 'Communication Skills',
    description: 'Clear, articulate expression of concepts, project findings, and ideas.',
    iconName: 'MessageSquare',
  },
  {
    name: 'Problem Solving',
    description: 'Analytical mindset focused on breaking down complex questions methodically.',
    iconName: 'Lightbulb',
  },
  {
    name: 'Time Management',
    description: 'Disciplined balancing of coursework, deadlines, events, and project deliverables.',
    iconName: 'Clock',
  },
  {
    name: 'Quick Learner',
    description: 'Agile absorption of new technical concepts, tools, and methodologies.',
    iconName: 'Zap',
  },
  {
    name: 'Responsible & Dedicated',
    description: 'Consistent commitment to academic integrity and project excellence.',
    iconName: 'ShieldCheck',
  },
  {
    name: 'Positive Attitude',
    description: 'Enthusiastic and constructive approach to challenges and collaborative feedback.',
    iconName: 'Smile',
  },
  {
    name: 'Willingness to Learn',
    description: 'Intrinsic curiosity to continuously expand knowledge across data science and tech.',
    iconName: 'Compass',
  },
  {
    name: 'Good Team Player',
    description: 'Reliable, supportive contributor fostering cooperative and productive team dynamics.',
    iconName: 'HeartHandshake',
  },
];

export const MILESTONES: MilestoneItem[] = [
  {
    id: 'sgpa',
    value: '8.76',
    label: 'SGPA',
    subtext: 'B.Sc. Data Science (Honors) Academic Result',
    accent: 'cyan',
  },
  {
    id: 'top10',
    value: 'TOP 10',
    label: 'Informative Exhibit Project',
    subtext: 'Selected among the top 10 competitive entries',
    accent: 'blue',
  },
  {
    id: 'round2',
    value: 'ROUND 2',
    label: 'Project Advancement',
    subtext: 'Advanced to Round 2 evaluation stage',
    accent: 'indigo',
  },
  {
    id: 'languages',
    value: '4',
    label: 'Languages',
    subtext: 'English, Hindi, Telugu, and Urdu',
    accent: 'emerald',
  },
];

export const LANGUAGES: LanguageItem[] = [
  { name: 'English', nativeScript: 'English' },
  { name: 'Hindi', nativeScript: 'हिन्दी' },
  { name: 'Telugu', nativeScript: 'తెలుగు' },
  { name: 'Urdu', nativeScript: 'اردو' },
];

export const EXPLORING_TOPICS: ExploringItem[] = [
  {
    id: 'data-science',
    title: 'DATA SCIENCE',
    description: 'Exploring the world of data and developing my understanding of data science.',
    iconName: 'LineChart',
  },
  {
    id: 'technology',
    title: 'TECHNOLOGY',
    description: 'Interested in technology and how it can be used to solve practical problems.',
    iconName: 'Cpu',
  },
  {
    id: 'databases',
    title: 'DATABASES',
    description: 'Developing foundational knowledge of databases and DBMS.',
    iconName: 'Database',
  },
  {
    id: 'continuous-learning',
    title: 'CONTINUOUS LEARNING',
    description: 'Always willing to learn new skills and improve through projects and academic experiences.',
    iconName: 'TrendingUp',
  },
];

export const FEATURED_PROJECT = {
  name: 'Mental Health Detection',
  event: 'INFORMATIVE EXHIBIT',
  badges: ['TOP 10 ENTRY', 'ROUND 2'],
  description:
    'Developed a Mental Health Detection project as part of the INFORMATIVE EXHIBIT event. The project involved contributing to an application designed to help assess mental health based on user responses.',
  contribution:
    'Contributed to the development of the application and gained practical experience in teamwork, problem-solving, and project development.',
  tags: ['Problem Solving', 'Teamwork', 'Communication', 'Project Development'],
  timeline: [
    { step: '01', title: 'IDEA', desc: 'Conceptualizing an approachable user response assessment flow' },
    { step: '02', title: 'DEVELOPMENT', desc: 'Collaborative development and interface workflow creation' },
    { step: '03', title: 'EXHIBITION', desc: 'Presentation at the college Informative Exhibit event' },
    { step: '04', title: 'TOP 10', desc: 'Recognized and selected among the Top 10 entries' },
    { step: '05', title: 'ROUND 2', desc: 'Successfully advanced to the next competitive round' },
  ],
};
