import React from "react";
import "./logbook3d.scss";

interface Logbook3DProps {
	color?: string;
	title?: string;
	pageStyle?: "plain" | "ruled" | "squared" | "dotted";
	link?: string;
}

// Helper function to darken a color (works with hex, rgb, and named colors)
const darkenColor = (color: string, percent: number): string => {
	if (!color || typeof document === "undefined") return color;

	try {
		// Create a temporary element to use browser's color parsing
		const tempDiv = document.createElement("div");
		tempDiv.style.color = color;
		tempDiv.style.position = "absolute";
		tempDiv.style.visibility = "hidden";
		document.body.appendChild(tempDiv);
		const computedColor = window.getComputedStyle(tempDiv).color;
		document.body.removeChild(tempDiv);

		// Parse RGB values
		const rgbMatch = computedColor.match(/\d+/g);
		if (!rgbMatch || rgbMatch.length < 3) return color;

		const r = Math.max(0, Math.min(255, parseInt(rgbMatch[0]) * (1 - percent / 100)));
		const g = Math.max(0, Math.min(255, parseInt(rgbMatch[1]) * (1 - percent / 100)));
		const b = Math.max(0, Math.min(255, parseInt(rgbMatch[2]) * (1 - percent / 100)));

		return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
	} catch (error) {
		// Fallback to original color if parsing fails
		return color;
	}
};

const Logbook3D: React.FC<Logbook3DProps> = ({ color = "#cc4b48", title = "Plain", pageStyle = "plain", link }) => {
	const pageStyleClass = pageStyle === "plain" ? "" : pageStyle;

	// Determine if we should use CSS classes for predefined colors or custom color
	const predefinedColors: Record<string, string> = {
		blue: "#2e95aa",
		green: "#abc3b5",
		yellow: "#fed754",
		orange: "#cc4b48",
		gray: "#c1c1c1",
	};

	const isPredefined = Object.keys(predefinedColors).includes(color?.toLowerCase() || "");
	const colorClass = isPredefined && color ? color.toLowerCase() : "";
	const customColor = isPredefined ? undefined : color;
	const darkenedColor = customColor ? darkenColor(customColor, 15) : undefined;

	const coverStyle = customColor
		? ({
				"--notebook-color": customColor,
				"--notebook-color-dark": darkenedColor,
		  } as React.CSSProperties)
		: undefined;

	const notebookContent = (
		<div className="logbook-wrapper">
			<div className="logbook-notebook">
				<div className={`notebook-cover ${colorClass} ${customColor ? "custom-color" : ""}`} style={coverStyle}>
					<div className="notebook-skin">{title}</div>
				</div>
				<div className={`notebook-page ${pageStyleClass}`}></div>
			</div>
		</div>
	);

	if (link) {
		return (
			<a href={link} target="_blank" rel="noopener noreferrer" className="logbook-link" style={{ textDecoration: "none", display: "inline-block" }} aria-label={`${title} - Opens in a new tab`}>
				{notebookContent}
			</a>
		);
	}

	return notebookContent;
};

export default Logbook3D;
