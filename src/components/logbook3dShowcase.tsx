import Logbook3D from "./logbook3d";
import "./logbook3dShowcase.scss";

function Logbook3DShowcase() {
	return (
		<div className="logbook-3d-showcase">
			<h2 className="logbook-showcase-title otto">Books, Logbooks & More</h2>
			<div className="logbook-group">
				<p>Download Now:</p>
				<Logbook3D color="orange" title="Toddlers w/ Audio" pageStyle="plain" link="files/little-kids-book-the-golden-rules-of-bjj.pdf" />
			</div>
			<div className="logbook-group">
				<p>Download Now:</p>
				<Logbook3D color="green" title="Kids Martial Arts" pageStyle="ruled" link="files/kids-logbook-my-warrior-journal.pdf" />
			</div>
			<div className="logbook-group">
				<p>Coming Soon:</p>
				<Logbook3D color="white" title="Adults: White Belts" pageStyle="squared" />
			</div>
			<div className="logbook-group">
				<p>Coming Soon:</p>
				<Logbook3D color="blue" title="Blue Belts" pageStyle="dotted" />
			</div>
		</div>
	);
}

export default Logbook3DShowcase;
