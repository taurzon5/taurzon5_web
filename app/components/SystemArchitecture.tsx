'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center" id="projects">
					System Architecture & Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Smart Irrigation System using Raspberry Pico',
							description: 'Designed and implemented a smart irrigation system that records data and provides prediction.',
							details: [
								'Stores sensor data like humidity, temperature',
								'Procures predicted weather data from Openweather.org',
								'Host a local web app to give real-time data',
								'Compiled Android 10 ROM for a device on Android 9',
							],
							tech: ['Scripting', 'Git', 'C/C++', 'Python', 'Java', 'Raspberry Pi', 'HTML', 'CSS'],
						},
						{
							title: 'Android Open Source Project for Samsung Galaxy A7 2018',
							description: 'Designed and implemented an AOSP ROM for the device to bring newer OS to outdated device.',
							details: [
								'Designed and optimized device tree for the device',
								'Upstreamed device kernel for optimal performance and security',
								'Selection of Vendor BLOBs for device drivers',
								'Compiled Android 10 ROM for a device on Android 9',
							],
							tech: ['Scripting', 'Git', 'C/C++', 'Python', 'Java'],
							link: 'https://github.com/taurzon5/android_device_samsung_a7y18lte',
						},
						{
							title: 'MacOS Opencore Implementation for HP OMEN 15-EK0018TX',
							description: 'Built a config the system allowing it to run Apple Mac OS natively on non-Apple Hardware as a tinkering project.',
							details: [
								'Examined specifications of ACPI to create patches for compatibility with target OS design',
								'Identified hardware devices and compatibility to target OS',
								'Procured and modified kernel extensions to allow device identification by target OS ',
								'Organized EFI structure of Opencore to allow booting target OS',
							],
							tech: ['ACPI', 'Scripting', 'Kernel', 'EFI'],
						},
						{
							title: 'Text based Emoji Predictor',
							description: 'Built a translation model that utilized machine learning to convert text into Emojis',
							details: [
								'Selected the best ML model for optimal performance and reliability.',
								'Gather appropriate training and test data for the model.',
								'Find the required hardware to run the models for adequate performance.',
							],
							tech: ['Machine Learning', 'Python', 'practical hardware upgrades'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
