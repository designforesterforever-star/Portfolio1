export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link: string;
  bgColor: string;
  figmaLink?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: 'linkedin' | 'dribbble' | 'behance' | 'instagram' | 'github' | 'twitter' | 'globe';
  url: string;
}

export interface SiteContent {
  navItems: NavItem[];
  projects: Project[];
  socialLinks: SocialLink[];
  email: string;
  logoUrl?: string;
  showLogo?: boolean;
  showNav?: boolean;
}