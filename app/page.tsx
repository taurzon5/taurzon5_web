'use client';

import HeroSection from './components/HeroSection';
import ContentSection from './components/contentSection';
import SkillSection from './components/SkillSection';
import SystemArchitecture from './components/SystemArchitecture';
import TechnicalMetrics from './components/TechnicalMetrics';
import ContactSection from './components/ContactSection';

export default function BackendPortfolio() {
	return (
		<main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
			<HeroSection />
			<ContentSection />
			<SkillSection />
			<SystemArchitecture />
			<TechnicalMetrics />
			<ContactSection />
		</main>
	);
}
