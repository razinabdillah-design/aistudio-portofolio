import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, Navigate, useParams } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { HomePage } from '../pages/HomePage';

// Route-level lazy loading for subpages and detail pages
const JourneyPage = lazy(() => import('../pages/JourneyPage').then((m) => ({ default: m.JourneyPage })));
const JourneyDetailPage = lazy(() => import('../pages/JourneyDetailPage').then((m) => ({ default: m.JourneyDetailPage })));
const WorkExperiencePage = lazy(() => import('../pages/WorkExperiencePage').then((m) => ({ default: m.WorkExperiencePage })));
const ProfessionalExperiencePage = lazy(() => import('../pages/ProfessionalExperiencePage').then((m) => ({ default: m.ProfessionalExperiencePage })));
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

const WorkSlugRedirect: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
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
      {
        path: 'journey',
        element: withSuspense(JourneyPage),
      },
      {
        path: 'journey/:slug',
        element: withSuspense(JourneyDetailPage),
      },
      {
        path: 'experience',
        element: withSuspense(WorkExperiencePage),
      },
      {
        path: 'experience/:slug',
        element: withSuspense(ProfessionalExperiencePage),
      },
      {
        path: 'projects',
        element: withSuspense(ProjectsPage),
      },
      {
        path: 'projects/:slug',
        element: withSuspense(ProjectDetailPage),
      },
      // Compatibility redirects for /work and /work/:slug -> /projects and /projects/:slug
      {
        path: 'work',
        element: <Navigate to="/projects" replace />,
      },
      {
        path: 'work/:slug',
        element: <WorkSlugRedirect />,
      },
      {
        path: 'about',
        element: withSuspense(AboutPage),
      },
      {
        path: 'cv',
        element: withSuspense(CvPage),
      },
      {
        path: '*',
        element: withSuspense(NotFoundPage),
      },
    ],
  },
]);
