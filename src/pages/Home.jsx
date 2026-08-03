import ImageShowcase from "@/components/ImageShowcase";
import "./Home.scss";
import Logbook3DShowcase from "@/components/logbook3dShowcase";

function Home() {
	return (
		<div className="Entrance">
			<div className="home-hero">
				<h1>Welcome to Point of Balance Sports Centre</h1>
				<p>Your premier destination for fitness, sports, and wellness</p>
			</div>
			<ImageShowcase />
			<Logbook3DShowcase />
		</div>
	);
}

export default Home;
