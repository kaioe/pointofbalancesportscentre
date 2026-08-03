import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import "./App.scss";

function App() {
	return (
		<Router>
			<div className="app">
				{/* <MainMenu /> */}
				<main className="main-content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/privacy-policy" element={<PrivacyPolicy />} />
						<Route path="/terms-of-service" element={<TermsOfService />} />
						<Route path="/cookie-policy" element={<CookiePolicy />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
