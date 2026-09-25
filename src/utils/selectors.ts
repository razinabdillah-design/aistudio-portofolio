import { projects } from '../data/projects';
import { journeyExperiences } from '../data/journey';
import { professionalExperiences } from '../data/professional';
import type { Project, JourneyExperience, ProfessionalExperience } from '../types';

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getJourneyBySlug = (slug: string): JourneyExperience | undefined => {
  return journeyExperiences.find((j) => j.slug === slug);
};

export const getProfessionalExperienceBySlug = (slug: string): ProfessionalExperience | undefined => {
  return professionalExperiences.find((e) => e.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured || p.homepage);
};

export const getFeaturedJourney = (): JourneyExperience[] => {
  return journeyExperiences.filter((j) => j.featured);
};

export const getRelatedProjects = (slugs?: string[]): Project[] => {
  if (!slugs || slugs.length === 0) return [];
  return projects.filter((p) => slugs.includes(p.slug));
};

export const getRelatedExperiences = (slugs?: string[]): ProfessionalExperience[] => {
  if (!slugs || slugs.length === 0) return [];
  return professionalExperiences.filter((e) => slugs.includes(e.slug));
};

export const getRelatedJourneys = (slugs?: string[]): JourneyExperience[] => {
  if (!slugs || slugs.length === 0) return [];
  return journeyExperiences.filter((j) => slugs.includes(j.slug));
};
