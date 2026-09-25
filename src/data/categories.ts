export interface CategoryItem {
  id: string;
  label: string;
  description?: string;
}

export const journeyCategories: CategoryItem[] = [
  { id: 'all', label: 'All' },
  { id: 'professional', label: 'Professional' },
  { id: 'international', label: 'International' },
  { id: 'organization', label: 'Organization' },
  { id: 'committee', label: 'Committee' },
  { id: 'volunteer', label: 'Volunteer' },
];

export const projectCategories: CategoryItem[] = [
  { id: 'all', label: 'All' },
  { id: 'Electrical & Power Systems', label: 'Electrical & Power Systems' },
  { id: 'Hardware & Electronics', label: 'Hardware & Electronics' },
  { id: 'AI & Software', label: 'AI & Software' },
  { id: 'Data & Systems', label: 'Data & Systems' },
  { id: 'Research & Experiment', label: 'Research & Experiment' },
];

// Compatibility export
export const workCategories = projectCategories;
