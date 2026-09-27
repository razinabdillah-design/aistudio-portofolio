import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, Navigate, useParams } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { HomePage } from '../pages/HomePage';

// Route-level lazy loading for subpages and detail pages
const RolesPage = lazy(() => import('../pages/RolesPage').then((m) => ({ default: m.RolesPage })));
const ProfessionalExperiencePage = lazy(() => import('../pages/ProfessionalExperiencePage').then((m) => ({ default: m.ProfessionalExperiencePage })));
const ExperiencesPage = lazy(() => import('../pages/ExperiencesPage').then((m) => ({ default: m.ExperiencesPage })));
const JourneyDetailPage = lazy(() => import('../pages/JourneyDetailPage').then((m) => ({ default: m.JourneyDetailPage })));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('../pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage })));
const AboutPage = lazy(() => import('../pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const CvPage = lazy(() => import('../pages/CvPage').then((m) => ({ default: m.CvPage })));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

const RouteLoadingFallback: React.FC = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-[#15181D]/20 border-t-[#3157D5] rounded-full animate-spin" />
  </div>
);

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<RouteLoadingFallback />}>
    <Component />
  </Suspense>
);

// Compatibility redirect helpers for legacy URLs
const JourneySlugRedirect: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  if (slug === 'aither') return <Navigate to="/roles/aither" replace />;
  return <Navigate to={slug ? `/experiences/${slug}` : '/experiences'} replace />;
};

const ExperienceSlugRedirect: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={slug ? `/roles/${slug}` : '/roles'} replace />;
};

const WorkSlugRedirect: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  if (slug === 'aither') return <Navigate to="/roles/aither" replace />;
  return <Navigate to={slug ? `/projects/${slug}` : '/projects'} replace />;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // Canonical: Roles
      {
        path: 'roles',
        element: withSuspense(RolesPage),
      },
      {
        path: 'roles/:slug',
        element: withSuspense(ProfessionalExperiencePage),
      },
      // Canonical: Experiences
      {
        path: 'experiences',
        element: withSuspense(ExperiencesPage),
      },
      {
        path: 'experiences/:slug',
        element: withSuspense(JourneyDetailPage),
      },
      // Canonical: Projects
      {
        path: 'projects',
        element: withSuspense(ProjectsPage),
      },
      {
        path: 'projects/:slug',
        element: withSuspense(ProjectDetailPage),
      },
      // Canonical: About
      {
        path: 'about',
        element: withSuspense(AboutPage),
      },
      // Canonical: Resume (CV)
      {
        path: 'cv',
        element: withSuspense(CvPage),
      },
      // Legacy redirects
      {
        path: 'experience',
        element: <Navigate to="/roles" replace />,
      },
      {
        path: 'experience/:slug',
        element: <ExperienceSlugRedirect />,
      },
      {
        path: 'journey',
        element: <Navigate to="/experiences" replace />,
      },
      {
        path: 'journey/:slug',
        element: <JourneySlugRedirect />,
      },
      {
        path: 'work',
        element: <Navigate to="/projects" replace />,
      },
      {
        path: 'work/:slug',
        element: <WorkSlugRedirect />,
      },
      {
        path: 'resume',
        element: <Navigate to="/cv" replace />,
      },
      {
        path: '*',
        element: withSuspense(NotFoundPage),
      },
    ],
  },
]);
