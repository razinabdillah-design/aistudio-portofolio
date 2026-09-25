import React from 'react';
import { HeroSection } from '../sections/home/HeroSection';
import { AtAGlanceSection } from '../sections/home/AtAGlanceSection';
import { ResearchProjectsSection } from '../sections/home/ResearchProjectsSection';
import { ProfessionalExperienceSection } from '../sections/home/ProfessionalExperienceSection';
import { InternationalExperienceSection } from '../sections/home/InternationalExperienceSection';
import { OrganizationsSection } from '../sections/home/OrganizationsSection';
import { CommitteeVolunteerSection } from '../sections/home/CommitteeVolunteerSection';
import { SystemsOperationsSection } from '../sections/home/SystemsOperationsSection';
import { CurrentlyExploringSection } from '../sections/home/CurrentlyExploringSection';
import { FinalGatewaySection } from '../sections/home/FinalGatewaySection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* SECTION 01: HERO */}
      <HeroSection />

      {/* SECTION 02: RAZIN AT A GLANCE */}
      <AtAGlanceSection />

      {/* SECTION 03: RESEARCH & PROJECTS */}
      <ResearchProjectsSection />

      {/* SECTION 04: PROFESSIONAL EXPERIENCE */}
      <ProfessionalExperienceSection />

      {/* SECTION 05: INTERNATIONAL EXPERIENCE */}
      <InternationalExperienceSection />

      {/* SECTION 06: ORGANIZATIONS & COMMUNITIES */}
      <OrganizationsSection />

      {/* SECTION 07: COMMITTEE & VOLUNTEER */}
      <CommitteeVolunteerSection />

      {/* SECTION 08: SYSTEMS & OPERATIONS PATTERN */}
      <SystemsOperationsSection />

      {/* SECTION 09: CURRENTLY EXPLORING */}
      <CurrentlyExploringSection />

      {/* SECTION 10: FINAL GATEWAY */}
      <FinalGatewaySection />
    </div>
  );
};
