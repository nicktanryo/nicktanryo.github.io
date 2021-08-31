import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<>
			<Header />
			<Home />
			<About />
			<Projects />
			<Contact />
			<Footer />
			<ScrollToTop />
		</>
	);
}

export default App;
