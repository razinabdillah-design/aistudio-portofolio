import React from 'react';
import { HeroMediaSection } from '../sections/home/HeroMediaSection';
import { ActivityReelSection } from '../sections/home/ActivityReelSection';
import { MeetRazinSection } from '../sections/home/MeetRazinSection';
import { SelectedRecordsSection } from '../sections/home/SelectedRecordsSection';
import { WorkedAcrossSection } from '../sections/home/WorkedAcrossSection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* 01. HERO (Preserved user layout: RAZIN top-right, ABDILLAH bottom-right, full slide background layer) */}
      <HeroMediaSection />

      {/* 02. ACTIVITY REEL (Scalable rail supporting all verified activities with touch swipe on mobile) */}
      <ActivityReelSection />

      {/* 03. PERSONAL INTRODUCTION (Image-first: large photo before text, grounded human hook) */}
      <MeetRazinSection />

      {/* 04. SELECTED RECORDS (Two core stories: Aither & IFL + quiet inline directory for Roles, Experiences, Projects, About) */}
      <SelectedRecordsSection />

      {/* 05. WHAT I'VE WORKED ACROSS (Clean, compact indexed exposure rows) */}
      <WorkedAcrossSection />
    </div>
  );
};
