'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/taurzon5_web/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>

			<div className="relative z-10 max-w-4xl w-full mx-4">
				<motion.div
					id="skills"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
				>
					<div className="flex items-center gap-2 mb-4">
						<div className="w-3 h-3 rounded-full bg-red-500" />
						<div className="w-3 h-3 rounded-full bg-yellow-500" />
						<div className="w-3 h-3 rounded-full bg-green-500" />
					</div>
					<div className="font-mono">
						<p className="text-green-500">$ skills</p>
						<div className="flex flex-wrap gap-2 mt-2">
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Cloud Computing: AWS, Microsoft Azure</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Virtualization: Proxmox</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Containerization & Orchestration: Kubernetes, Docker</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Networking: Wireless expertise, CCNA-certified</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">IT Administration: Microsoft 365 management</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Server Management: Linux & Windows servers</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Security & Compliance: IAM, encryption, regulatory standards</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Database Management: SQL, NoSQL</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Monitoring & Logging: System performance analysis</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Programming: C/C++, Python, Java, R, JavaScript</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
