'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>

			<div className="relative z-10 max-w-4xl w-full mx-4">
				<motion.div
					id="profile"
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
						<p className="text-green-500">$ whoami</p>
						<h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Khushpreet Taur</h1>
						<p className="text-gray-400 mb-2">Junior Cloud Technician / Software Developer</p>
						<p className="text-gray-400 mb-2">A Computer Science Graduate with specialization within many aspects including but not limited to computer hardware, networking, cyber security and cloud computing.</p>
						<p className="text-green-500">$ specializations</p>
						<div className="flex flex-wrap gap-2 mt-2">
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Excellent troubleshooting skills among both hardware and software as IT Technician.</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Aptitude for planning and agile execution, required in Sales and Warehouse roles.</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Acumen for working on production-based software development, as an AOSP developer.</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Absolute tinkering skills to determine and recognize the capabilities of any type of product.</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Establishing procedure as utilized across every organization to standardize performance.</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Experience of hosting services on-premises, cloud as well as hybrid.</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
