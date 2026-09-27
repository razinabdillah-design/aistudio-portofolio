import { projects } from '../data/projects';
import { journeyExperiences } from '../data/journey';
import { professionalExperiences } from '../data/professional';
import type { Project, JourneyExperience, ProfessionalExperience, DiscoveryLens } from '../types';

export interface DiscoveryLensConfig {
  id: DiscoveryLens;
  title: string;
  tagline: string;
  description: string;
  primaryRoute: string;
  routeLabel: string;
  sampleKeywords: string[];
}

export const DISCOVERY_LENSES: DiscoveryLensConfig[] = [
  {
    id: 'technical-projects',
    title: 'Technical & Projects',
    tagline: 'Engineering & Modeling',
    description: 'Numerical grid simulation, parametric CAD enclosures, and multi-agent workflow experiments.',
    primaryRoute: '/projects',
    routeLabel: 'Explore Technical Projects',
    sampleKeywords: ['ETAP', 'MATLAB', 'CAD', 'Fusion 360', 'CrewAI', 'Load Flow'],
  },
  {
    id: 'events-operations',
    title: 'Events & Operations',
    tagline: 'Coordination & Execution',
    description: 'Division leadership, vendor commercial regulations, procurement, and high-volume campus operations.',
    primaryRoute: '/journey',
    routeLabel: 'Explore Event Operations',
    sampleKeywords: ['Fundraising', 'J-Fest', 'PKKMB', 'Operations', 'Procurement'],
  },
  {
    id: 'data-systems',
    title: 'Data & Systems',
    tagline: 'Spreadsheets & Automated Pipelines',
    description: 'Centralized participant registries, automated validation formulas, and real-time operational recap dashboards.',
    primaryRoute: '/journey',
    routeLabel: 'Explore Data Work',
    sampleKeywords: ['Data Center', 'Registries', 'Automated Recaps', 'Formulas', 'ASFERA'],
  },
  {
    id: 'professional-partnership',
    title: 'Professional & Partnership',
    tagline: 'Ventures & External Strategy',
    description: 'Clean-air venture positioning, strategic partnership proposals, market research, and technopreneurship cohort support.',
    primaryRoute: '/experience',
    routeLabel: 'View Work Experience',
    sampleKeywords: ['Aither', 'Clean Air', 'Partnerships', 'TDC ITS', 'Proposals'],
  },
  {
    id: 'international-communication',
    title: 'International & Communication',
    tagline: 'Exchange & Public Presentation',
    description: 'Cross-border symposium presentations in Singapore & Malaysia, award-winning research defense, and public agency engagement.',
    primaryRoute: '/journey',
    routeLabel: 'Explore International Journey',
    sampleKeywords: ['International Future Leaders', 'NUS', 'Presentation Award', 'Humas', 'DLH'],
  },
];

export interface UnifiedDiscoveryItem {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  organization?: string;
  role: string;
  type: 'project' | 'journey' | 'professional';
  claimLevel?: 'project' | 'experience' | 'training' | 'interest';
  summary: string;
  route: string;
  period?: string;
  location?: string;
  topics: string[];
  skills: string[];
  tools: string[];
  contexts: string[];
  aliases: string[];
  lenses: DiscoveryLens[];
  scaleMetric?: {
    value: string;
    label: string;
    context: string;
  };
}

/**
 * Normalizes all portfolio records into a unified searchable index
 */
export function getUnifiedDiscoveryItems(): UnifiedDiscoveryItem[] {
  const items: UnifiedDiscoveryItem[] = [];

  // 1. Projects
  projects.forEach((p) => {
    items.push({
      id: `project-${p.slug}`,
      slug: p.slug,
      title: p.title,
      subtitle: p.subtitle,
      organization: 'ITS / Independent Project',
      role: p.role || 'Lead / Developer',
      type: 'project',
      claimLevel: p.claimLevel || 'project',
      summary: p.summary,
      route: `/projects/${p.slug}`,
      topics: p.discovery?.topics || [],
      skills: p.discovery?.skills || [],
      tools: [...(p.tools || []), ...(p.discovery?.tools || [])],
      contexts: p.discovery?.contexts || [],
      aliases: p.discovery?.aliases || [],
      lenses: p.discovery?.lenses || ['technical-projects'],
    });
  });

  // 2. Professional Experiences
  professionalExperiences.forEach((e) => {
    items.push({
      id: `prof-${e.slug}`,
      slug: e.slug,
      title: `${e.organization} — ${e.role}`,
      subtitle: e.orgContext,
      organization: e.organization,
      role: e.role,
      type: 'professional',
      claimLevel: e.claimLevel || 'experience',
      summary: e.summary,
      route: `/experience/${e.slug}`,
      period: e.period,
      location: e.location,
      topics: e.discovery?.topics || e.areas || [],
      skills: e.discovery?.skills || [],
      tools: e.discovery?.tools || [],
      contexts: e.discovery?.contexts || [],
      aliases: e.discovery?.aliases || [],
      lenses: e.discovery?.lenses || ['professional-partnership'],
    });
  });

  // 3. Journey Experiences
  journeyExperiences.forEach((j) => {
    items.push({
      id: `journey-${j.slug}`,
      slug: j.slug,
      title: j.title,
      subtitle: j.whatWasThis,
      organization: j.organization,
      role: j.role,
      type: 'journey',
      claimLevel: j.claimLevel || 'experience',
      summary: j.summary,
      route: `/journey/${j.slug}`,
      period: j.period,
      location: j.location,
      topics: j.discovery?.topics || [],
      skills: j.discovery?.skills || [],
      tools: j.discovery?.tools || [],
      contexts: j.discovery?.contexts || [],
      aliases: j.discovery?.aliases || [],
      lenses: j.discovery?.lenses || ['events-operations'],
      scaleMetric: j.scaleMetric,
    });
  });

  return items;
}

/**
 * Filter items by specific discovery lens
 */
export function getItemsByLens(lens: DiscoveryLens): UnifiedDiscoveryItem[] {
  return getUnifiedDiscoveryItems().filter((item) => item.lenses.includes(lens));
}

/**
 * Lightweight client-side multi-entity search
 * Matches across title, organization, role, summary, topics, skills, tools, contexts, aliases.
 * Does NOT require exact category match.
 */
export function searchDiscoveryItems(query: string): UnifiedDiscoveryItem[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return getUnifiedDiscoveryItems();

  const queryTerms = trimmed.split(/\s+/).filter(Boolean);
  const allItems = getUnifiedDiscoveryItems();

  return allItems.filter((item) => {
    const searchableText = [
      item.title,
      item.subtitle || '',
      item.organization || '',
      item.role,
      item.summary,
      ...item.topics,
      ...item.skills,
      ...item.tools,
      ...item.contexts,
      ...item.aliases,
    ]
      .join(' ')
      .toLowerCase();

    // Match if all search terms appear anywhere in the metadata
    return queryTerms.every((term) => searchableText.includes(term));
  });
}

/**
 * 6 Selected Representative Evidence Items for Home
 * Exactly aligns with requirement #9:
 * 1. Aither (Professional & Partnership)
 * 2. International Future Leaders (International & Communication)
 * 3. Multi-Bus Power Grid Load Flow (Technical & Projects)
 * 4. ASFERA (Data & Systems)
 * 5. PKKMB ITS Camp (Events & Operations / Data)
 * 6. J-Fest 37 (Events & Operations / Commercial)
 */
export interface SelectedHomeEvidence {
  id: string;
  whatItWas: string;
  razinRole: string;
  oneImportantContribution: string;
  factualResultScale?: string;
  deepLink: string;
  linkText: string;
  categoryTag: string;
}

export const SELECTED_HOME_EVIDENCE: SelectedHomeEvidence[] = [
  {
    id: 'aither',
    whatItWas: 'Clean-air technology venture developing institutional air quality solutions.',
    razinRole: 'Project & Partnership Development',
    oneImportantContribution: 'Formulated strategic partnership documentation and shaped product positioning to transition the organization toward solution delivery.',
    factualResultScale: 'Institutional stakeholder decks and clean-air positioning materials',
    deepLink: '/experience/aither',
    linkText: 'Inspect Aither Role',
    categoryTag: 'Professional & Partnership',
  },
  {
    id: 'international-future-leaders',
    whatItWas: 'Southeast Asia academic student leadership symposium in Singapore & Malaysia.',
    razinRole: 'Student Delegate',
    oneImportantContribution: 'Presented environmental technology research before international evaluation panels during academic exchange visits at NUS and IIUM.',
    factualResultScale: '1st Best Presentation & 2nd Best Paper Award',
    deepLink: '/journey/international-future-leaders',
    linkText: 'Inspect IFL Delegation',
    categoryTag: 'International & Communication',
  },
  {
    id: 'load-flow-analysis',
    whatItWas: 'Multi-bus electrical power distribution grid modeling and simulation study.',
    razinRole: 'Electrical Engineering Student / Researcher',
    oneImportantContribution: 'Derived admittance matrices [Ybus] and executed iterative Newton-Raphson load flow simulations to quantify voltage profiles and reactive losses.',
    factualResultScale: 'Validated across analytical MATLAB computational scripts & ETAP models',
    deepLink: '/projects/load-flow-analysis',
    linkText: 'Inspect Power Flow Study',
    categoryTag: 'Technical & Projects',
  },
  {
    id: 'asfera',
    whatItWas: 'Regional student festival and academic competition hosting 40 competitive categories.',
    razinRole: 'Administrative & Data Management Lead',
    oneImportantContribution: 'Architected centralized participant database and automated verification formulas, eliminating manual registration bottlenecks.',
    factualResultScale: '2,800+ registered participants with zero lost entries',
    deepLink: '/journey/asfera',
    linkText: 'Inspect ASFERA Architecture',
    categoryTag: 'Data & Systems',
  },
  {
    id: 'pkkmb-its',
    whatItWas: 'University-wide undergraduate orientation program at Institut Teknologi Sepuluh Nopember.',
    razinRole: 'Staff Data Center',
    oneImportantContribution: 'Built automated registration recaps, task verification formulas, and distributed live operational rosters to field committees in real time.',
    factualResultScale: 'Centralized registry & real-time operational roster distribution',
    deepLink: '/journey/pkkmb-its',
    linkText: 'Inspect PKKMB Data Role',
    categoryTag: 'Events & Operations / Data',
  },
  {
    id: 'j-fest-its',
    whatItWas: 'Flagship annual campus cultural festival with extensive commercial and vendor zones.',
    razinRole: 'Head of Fundraise',
    oneImportantContribution: 'Formulated tenant operational regulations, established payment tracking sheets, and managed procurement workflows across sales channels.',
    factualResultScale: 'Division leadership managing commercial regulations & multi-stream revenues',
    deepLink: '/journey/j-fest-its',
    linkText: 'Inspect J-Fest Fundraise',
    categoryTag: 'Events & Operations / Commercial',
  },
];
