import React, { useState } from 'react';
import { MediaPlaceholder } from '../ui/MediaPlaceholder';

interface ResponsiveImageProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: '16:9' | '4:3' | '3:4' | '1:1' | 'auto';
  className?: string;
  priority?: boolean;
  fallbackType?: 'portrait' | 'work' | 'experience' | 'journey' | 'systems' | 'cad' | 'circuit' | 'grid';
  fallbackLabel?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  width,
  height,
  aspectRatio = '16:9',
  className = '',
  priority = false,
  fallbackType = 'journey',
  fallbackLabel,
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // If no source provided or failed to load, show structural architectural MediaPlaceholder
  if (!src || error) {
    return (
      <MediaPlaceholder
        type={fallbackType}
        label={fallbackLabel || alt}
        sublabel={alt}
        aspectRatio={aspectRatio}
        className={className}
      />
    );
  }

  const aspectStyles = {
    '16:9': 'aspect-[16/9]',
    '4:3': 'aspect-[4/3]',
    '3:4': 'aspect-[3/4]',
    '1:1': 'aspect-square',
    'auto': 'h-full min-h-[220px]',
  }[aspectRatio];

  return (
    <div className={`relative overflow-hidden rounded-lg bg-[#EBE8DF] ${aspectStyles} ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => setError(true)}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
