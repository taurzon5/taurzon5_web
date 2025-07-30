'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center" id="achev">
					Education & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* Education */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Education</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-bold text-gray-300">Post Graduate Diploma, Cloud Computing (2025)</h4>
								<h4 className="text-lg text-gray-400">George Brown College, Toronto, Ontario, Canada</h4>
								<ul className="mt-2 space-y-2 text-gray-500">
									<li>• Revised the foundations that Cloud Computing utilizes, learning unexamined sections.</li>
									<li>• Learnt working principles of Microsoft 365, Microsoft Azure.</li>
									<li>• Utilized the knowledge acquired for a Work-Integrated Project.</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Post Graduate Diploma, Wireless Networking Infrastructure (2024)</h4>
								<h4 className="text-lg font-semibold text-gray-400">Conestoga College, Cambridge, Ontario, Canada</h4>
								<ul className="mt-2 space-y-2 text-gray-500">
									<li>• Studied principles of Networking, EM waves, Electronics and other foundational resources.</li>
									<li>• Based on the understructure, assimilated Wireless Communication, Designing Wireless Antenna and properties of their wave propagation.</li>
									<li>• Created a project of Wireless Weather & Irrigation Mangement System, accessible across Internet.</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Bachelor of Technology, Computer Science Engineering (2019-2023)</h4>
								<h4 className="text-lg font-semibold text-gray-400">Dr Bhim Rao Ambedkar National Institute of Technology, Jalandhar, Punjab, India</h4>
								<ul className="mt-2 space-y-2 text-gray-500">
									<li>• Formed a basis of understanding various branches of engineering (Chemical, Architecture, Welding and many others)</li>
									<li>• Grasped and fabricated the cornerstone of all things Computer Science, ranging from Basic Programming, databases, Machine Learning, Networking, Cyber Security principles and other significant bits.</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Certifications */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Certifications</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Linux System Administration (2023)</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>College of Computer & Information Technology, Ludhiana, Punjab, India</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">CCNA Preparation (2023)</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>College of Computer & Information Technology, Ludhiana, Punjab, India</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Introduction to AutoCAD (2020)</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>National Institute of Technology, Jalandhar, Punjab, India</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">CyberSecurity Expo (2019)</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>Indian Institute of Technology, Ropar, Punjab, India</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
