import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import CustomersReviews from './components/CustomersReviews';
import Main from './components/Main';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DailyPosts from './components/DailyPosts';
AOS.init({
	duration: 800,
});

function App() {
	return (
		<>
			<div className="app__container">
				<Navbar />
				<Main />
				<Menu />
				<AboutUs />
				<CustomersReviews />
				<ContactUs />
				<DailyPosts />
			</div>
		</>
	);
}

export default App;
