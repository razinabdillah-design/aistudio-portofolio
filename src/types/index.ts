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

export type ClaimLevel = 'project' | 'experience' | 'training' | 'interest';

export type DiscoveryLens = 
  | 'technical-projects'
  | 'events-operations'
  | 'data-systems'
  | 'professional-partnership'
  | 'international-communication';

export interface DiscoveryMetadata {
  topics?: string[];
  skills?: string[];
  tools?: string[];
  roles?: string[];
  contexts?: string[];
  aliases?: string[];
  lenses?: DiscoveryLens[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  categories: string[];
  status?: string;
  claimLevel?: ClaimLevel;
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
  discovery?: DiscoveryMetadata;
  seo?: SEOData;
}

export interface JourneyExperience {
  slug: string;
  title: string;
  organization?: string;
  role: string;
  claimLevel?: ClaimLevel;
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
  discovery?: DiscoveryMetadata;
}

export interface ProfessionalExperience {
  slug: string;
  organization: string;
  role: string;
  claimLevel?: ClaimLevel;
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
  discovery?: DiscoveryMetadata;
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
  instagram?: string;
  statusExploring: string[];
}
