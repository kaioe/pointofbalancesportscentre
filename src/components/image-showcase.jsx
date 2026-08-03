// components/ui/photo-stack-card.tsx

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"; // Your shadcn utility for merging class names
import "./image-showcase.scss";

// --- FRAMER MOTION VARIANTS ---
// For the image stack within the card
const imageContainerVariants = {
	initial: {},
	hover: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const imageVariants = {
	initial: (i) => ({
		scale: 1,
		rotate: (i - 1) * 3 - 2, // Slight scrambled rotation: -2deg, 1deg, 4deg
		y: 0,
		transition: { type: "spring", stiffness: 300, damping: 20 },
	}),
	hover: (i) => ({
		scale: 1.05,
		rotate: (i - 1) * 10,
		y: -20,
		boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
		transition: { type: "spring", stiffness: 300, damping: 20 },
	}),
};

// For the card itself (click interaction)
const cardVariants = {
	inactive: {
		scale: 1,
		y: 0,
		zIndex: 0,
		transition: { type: "spring", stiffness: 300, damping: 20 },
	},
	active: {
		scale: 1.05,
		y: -15,
		zIndex: 10,
		transition: { type: "spring", stiffness: 300, damping: 20 },
	},
};

export const PhotoStackCard = React.forwardRef(({ className, images, category, title, subtitle, logo, website, pills, isActive, onDescriptionClick, onPillClick, ...props }, ref) => {
	const displayImages = images.slice(0, 3);
	const [isStackHovered, setIsStackHovered] = React.useState(false);

	const handleDescriptionClick = (e) => {
		e.stopPropagation(); // Prevent card click event
		if (onDescriptionClick) {
			onDescriptionClick();
		}
	};

	const handleWebsiteClick = (e) => {
		e.stopPropagation(); // Prevent card click event
		if (website) {
			window.open(website, "_blank", "noopener,noreferrer");
		}
	};

	return (
		<motion.div
			ref={ref}
			className={cn("group relative flex h-72 w-72 cursor-pointer flex-col justify-start rounded-xl bg-card p-6 shadow-xl showcase-card", "transition-colors duration-300 ease-in-out hover:bg-card/90", className)}
			variants={cardVariants}
			animate={isActive ? "active" : "inactive"}
			// The hover animation is now within a nested motion div to avoid conflicts
			{...props}
		>
			{/* Text Content */}
			<div className="z-10 showcase-card-header">
				<p className="text-xs font-semibold uppercase text-muted-foreground">{category}</p>
				<h2 className="mt-1 text-3xl font-bold text-card-title otto">{title}</h2>
				<div className="mt-2 flex flex-col items-start gap-2">
					<div className="flex gap-2">
						<button onClick={handleDescriptionClick} className="inline-block text-sm rounded-full cursor-pointer description-link-pill" type="button">
							Description
						</button>
						{website && (
							<button onClick={handleWebsiteClick} className="inline-block text-sm rounded-full cursor-pointer description-link-pill" type="button">
								Website
							</button>
						)}
					</div>
					{pills && pills.map((pill, i) => (
						<button key={i} onClick={(e) => { e.stopPropagation(); if (onPillClick) onPillClick(pill); }} className="inline-block text-sm rounded-full cursor-pointer description-link-pill" type="button">
							{pill.label}
						</button>
					))}
				</div>
				{logo && <motion.img src={logo} alt={`${title} logo`} className="showcase-card-logo absolute h-25 w-25 object-contain z-20 opacity-90" initial={{ opacity: 0.7 }} animate={{ rotate: 15, opacity: 1 }} whileHover={{ opacity: 1, scale: 1.1, rotate: 15 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} />}
			</div>
			{/* Image Stack Container */}
			<motion.div className="absolute bottom-0 right-0 h-48 w-full showcase-image-stack-container" variants={imageContainerVariants} initial="initial" animate={isStackHovered ? "hover" : "initial"}>
				{/* Logo - positioned at top of image stack area */}
				{/* Image Stack */}
				<AnimatePresence>
					{displayImages.map((src, i) => (
						<motion.img key={src} src={src} alt={`${title} memory image ${i + 1}`} custom={i} variants={imageVariants} initial="initial" animate={isStackHovered ? "hover" : "initial"} onMouseEnter={() => setIsStackHovered(true)} onMouseLeave={() => setIsStackHovered(false)} className="absolute bottom-[-20px] right-6 h-40 w-auto origin-bottom-center rounded-lg border-4 border-background object-cover shadow-lg" />
					))}
				</AnimatePresence>
			</motion.div>
		</motion.div>
	);
});
PhotoStackCard.displayName = "PhotoStackCard";
