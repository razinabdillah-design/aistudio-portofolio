import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

export const WorkDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={slug ? `/projects/${slug}` : '/projects'} replace />;
};
