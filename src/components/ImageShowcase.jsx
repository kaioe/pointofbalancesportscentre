import { useState } from "react";
import { PhotoStackCard } from "./image-showcase";
import DescriptionTooltip from "./DescriptionTooltip";
import "./ImageShowcase.css";

// Services data from https://pointofbalancesportscentre.com/
const showcaseData = [
	{
		category: "Martial Arts",
		title: "BRAZILIAN JIU JITSU",
		subtitle: "A martial art based on grappling. By applying principles of leverage attained through throws, takedowns, ground control positions, locks and holds, a smaller person can subdue a larger, more powerful opponent. And with its strong focus on mental strength, Brazilian Jiu-Jitsu goes beyond the physical by fostering qualities of calm, confidence and self-control.",
		images: ["/imgs/ui/bjj-adults-1.webp", "/imgs/ui/bjj-adults-2.webp", "/imgs/ui/bjj-adults-3.webp"],
		logo: "/imgs/ui/bjjlc-logo.png",
		website: "http://bjjlotusclub.com",
		pills: [
			{
				label: "Private Sessions",
				description: "Elevate your Jiu-Jitsu journey with our exclusive tailored sessions, allowing you to choose instructors from Purple, Brown, and Black Belts. Experience personalized coaching with in-depth insights, whether you're refining basics or perfecting advanced maneuvers. Invite up to three friends to join your session for a more engaging experience.",
			},
			{
				label: "Family Sessions",
				description: "One of our treasures is the Family Session, held every Saturday morning, offering families the chance to learn together and model discipline for children. These sessions focus on body coordination, fun and rewarding activities, engaging challenges, and strengthening family bonds through shared experiences.",
			},
			{
				label: "Kids Sessions",
				description: "Our kids' classes provide a secure and enjoyable environment for learning Brazilian Jiu-Jitsu, guided by highly skilled instructors. Children will gain essential life skills such as concentration, confidence, discipline, and personal growth. We instill values like respect, control, and discipline, setting the stage for a brighter future.",
			},
			{
				label: "Women Only",
				description: "Discover a welcoming haven for women at BJJ Lotus Club, where our female trainers lead empowering women's classes. These sessions provide a secure and enjoyable space for learning, fitness, and self-defense. Enjoy personalized programs, small class sizes, and transformative experiences designed specifically for women.",
			},
		],
	},
	{
		category: "Martial Arts",
		title: "KUDO",
		subtitle: "Kudo is a mixed Budo sport comprising full contact punches, kicks, throws, and submission techniques on the ground. It is a life-long sport, system for youth education, method of self-defense and health maintenance for adults. It stresses the 'Reigi' or respect and etiquette in its tradition.",
		images: ["/imgs/ui/kudo-hero.webp", "/imgs/ui/kudo-1.webp", "/imgs/ui/kudo-2.webp", "/imgs/ui/kudo-3.webp"],
		logo: "/imgs/ui/kudo-logo.webp",
		website: "http://bjjlotusclub.com/programs/striking",
	},
	{
		category: "Body Conditioning Training",
		title: "CALISTHENICS",
		subtitle: "Calisthenics is a bodyweight-based training discipline that enhances strength, flexibility, and endurance through natural movements such as push-ups, pull-ups, dips, and dynamic holds. Beyond physical fitness, calisthenics promotes mental resilience, discipline, and body awareness.",
		images: ["/imgs/ui/calisthenics-hero.webp", "/imgs/ui/calisthenics-1.webp", "/imgs/ui/calisthenics-2.webp", "/imgs/ui/calisthenics-3.webp"],
		logo: "/imgs/ui/terrain_training-logo.webp",
		website: "http://bjjlotusclub.com/programs/calisthenics",
	},
	{
		category: "Combat Fitness",
		title: "Boxing Fitness",
		subtitle: "Boxing Fitness is a high-energy training discipline that combines the fundamental techniques of boxing—such as punches, footwork, and defensive movements—with functional conditioning to improve strength, endurance, and agility. It builds mental toughness, discipline, and confidence.",
		images: ["/imgs/ui/boxing-fitness-hero.webp", "/imgs/ui/boxing-1.webp", "/imgs/ui/boxing-2.webp", "/imgs/ui/boxing-3.webp"],
		logo: "/imgs/ui/bjjlc-logo.png",
		website: "http://bjjlotusclub.com/programs/boxing-fitness",
	},
	{
		category: "Martial Arts",
		title: "KUNG FU",
		subtitle: "Kung Fu Hung Gar Australia teaches authentic traditional Hung Gar style of Kung Fu for children and adults in a disciplined and respectful training environment. The school is founded and led by Gam Bok Yin as an Australian branch of Hung Kuen Academy Hong Kong, which he established more than 30 years ago. We teach Hung Gar based on the Chiu Wai family style, with training designed to build strong foundations, coordination, discipline, respect, and character. Whether you are a parent looking for children's martial arts classes, an adult beginner, or an experienced practitioner seeking deeper traditional training, the school offers a clear and structured path into authentic Hung Gar.",
		images: ["/imgs/ui/kungfu-1.webp", "/imgs/ui/kungfu-2.webp", "/imgs/ui/kungfu-3.webp"],
		logo: "/imgs/ui/kungfu-logo.png",
		website: "https://kungfuhunggaraustralia.com",
	},
];

function ImageShowcase() {
	const [activeCard, setActiveCard] = useState(null);
	const [tooltipOpen, setTooltipOpen] = useState(null);
	const [pillTooltip, setPillTooltip] = useState(null);

	const handleDescriptionClick = (index) => {
		setTooltipOpen(index);
		setPillTooltip(null);
	};

	const handlePillClick = (index, pill) => {
		setTooltipOpen(index);
		setPillTooltip(pill);
	};

	const handleCloseTooltip = () => {
		setTooltipOpen(null);
		setPillTooltip(null);
	};

	return (
		<div className="image-showcase">
			<div className="showcase-container">
				<div className="showcase-grid">
					{showcaseData.map((item, index) => (
						<PhotoStackCard key={index} images={item.images} category={item.category} title={item.title} subtitle={item.subtitle} logo={item.logo} website={item.website} pills={item.pills} isActive={activeCard === index} onClick={() => setActiveCard(activeCard === index ? null : index)} onDescriptionClick={() => handleDescriptionClick(index)} onPillClick={(pill) => handlePillClick(index, pill)} />
					))}
				</div>
			</div>
			{showcaseData.map((item, index) => (
				<DescriptionTooltip key={index} isOpen={tooltipOpen === index} onClose={handleCloseTooltip} title={pillTooltip ? pillTooltip.label : item.title} description={pillTooltip ? pillTooltip.description : item.subtitle} />
			))}
		</div>
	);
}

export default ImageShowcase;
