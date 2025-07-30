'use client';

import { motion } from 'framer-motion';

export default function TableOfContents() {
    return (
        // The outer section now primarily acts as a container for the background
        // and ensures the TOC's fixed positioning works as expected relative to the viewport.
        <section className="relative overflow-hidden">
            {/* Background elements - these will stretch across the entire viewport if the parent page allows it */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/taurzon5_web/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            {/* Fixed Table of Contents on the RIGHT side, centered vertically */}
            <motion.nav
                initial={{ opacity: 0, x: 20 }} // Animate from right for this position
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="
                    fixed top-1/2 -translate-y-1/2 right-0 // Fixed position, right side, vertically centered
                    w-full max-w-[200px] lg:max-w-[240px] // Adjusted width for a floating box
                    mr-6 // Margin from the right edge
                    bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6 // Rounded box styling
                    z-20 // Ensures it's above other content
                    hidden lg:block // Hide on small screens, show on large (lg)
                    // overflow-y-auto // Add back if TOC content can exceed box height and needs scroll
                    // max-h-[80vh] // Optional: constrain max height if overflow-y-auto is added
                "
                aria-labelledby="toc-heading"
            >
                <h2 id="toc-heading" className="toc-title text-xl font-bold text-green-400 mb-4 pb-2 border-b border-green-500/10">
                    Table of Contents
                </h2>
                <ul className="toc-list list-none p-0 m-0">
                    <li className="toc-item mb-2">
                        <a href="#profile" className="toc-link text-gray-300 hover:text-green-400 block py-1 transition-colors">
                            $ whoami
                        </a>
                    </li>
                    <li className="toc-item mb-2">
                        <a href="#skills" className="toc-link text-gray-300 hover:text-green-400 block py-1 transition-colors">
                            $ skills
                        </a>
                    </li>
                    <li className="toc-item mb-2">
                        <a href="#projects" className="toc-link text-gray-300 hover:text-green-400 block py-1 transition-colors">
                            System Architecture & Projects
                        </a>
                    </li>
                    <li className="toc-item mb-2">
                        <a href="#achev" className="toc-link text-gray-300 hover:text-green-400 block py-1 transition-colors">
                            Education & Achievements
                        </a>
                    </li>
                    <li className="toc-item"> {/* Removed mb-2 on last item for cleaner spacing */}
                        <a href="#contact" className="toc-link text-gray-300 hover:text-green-400 block py-1 transition-colors">
                            $ contact --info
                        </a>
                    </li>
                    {/* Add more list items for other sections as needed */}
                </ul>
            </motion.nav>
        </section>
    );
}
