export type MediaType = 'image' | 'video' | 'document';

export interface MediaItem {
  type?: MediaType;
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  orientation?: 'landscape' | 'portrait' | 'square';
}

export interface SEOData {
  title?: string;
  description?: string;
  ogImage?: string;
  canonical?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  categories: string[];
  status?: string;
  featured: boolean;
  summary: string;
  problem?: string;
  objective?: string;
  role?: string;
  tools?: string[];
  cover?: string | MediaItem;
  gallery?: (string | MediaItem)[];
  context?: string;
  constraints?: string[];
  investigation?: string;
  approach?: string;
  importantDecisions?: string[];
  whatBuilt?: string;
  evidence?: string[];
  results?: string;
  limitations?: string;
  learnings?: string;
  whatWouldDoDifferently?: string;
  relatedJourney?: string[];
  relatedExperience?: string[];
  homepage?: boolean;
  seo?: SEOData;
}

export interface JourneyExperience {
  slug: string;
  title: string;
  organization?: string;
  role: string;
  categories: ('professional' | 'international' | 'organization' | 'committee' | 'volunteer' | 'research' | 'systems')[];
  location?: string;
  period?: string;
  summary: string;
  cover?: string | MediaItem;
  gallery?: (string | MediaItem)[];
  highlights?: string[];
  whatWasThis?: string;
  whyJoined?: string;
  whatActuallyDid?: string[];
  keyMoments?: string[];
  challenges?: string;
  outcome?: string;
  whatLearned?: string;
  relatedWork?: string[];
  relatedJourney?: string[];
  featured?: boolean;
  homepageSection?: 'international' | 'organizations' | 'committee' | 'systems';
  scaleMetric?: {
    value: string;
    label: string;
    context: string;
  };
}

export interface ProfessionalExperience {
  slug: string;
  organization: string;
  role: string;
  location?: string;
  period: string;
  summary: string;
  responsibilities: string[];
  areas: string[];
  cover?: string | MediaItem;
  gallery?: (string | MediaItem)[];
  orgContext?: string;
  scopeOfResponsibility?: string;
  whatWorkedOn?: string[];
  problemsEncountered?: string[];
  howContributed?: string;
  stakeholdersCollaboration?: string;
  selectedWork?: {
    title: string;
    description: string;
    slug?: string;
    link?: string;
  }[];
  outcomes?: string[];
  learnings?: string[];
  changedThinking?: string;
  relatedWork?: string[];
  featured: boolean;
}

export interface ProfileData {
  name: string;
  headline: string;
  bioIntro: string;
  degree: string;
  university: string;
  location: string;
  signals: string[];
  email: string;
  linkedin: string;
  github?: string;
  statusExploring: string[];
}
