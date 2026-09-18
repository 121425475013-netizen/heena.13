export interface NavItem {
  id: string;
  label: string;
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Database' | 'Productivity Tools';
  level: 'Basic' | 'Working Knowledge' | 'Foundational';
  description: string;
  iconName: string;
}

export interface StrengthItem {
  name: string;
  description: string;
  iconName: string;
}

export interface MilestoneItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
  accent: string;
}

export interface ExploringItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface LanguageItem {
  name: string;
  nativeScript: string;
  subtext?: string;
}
