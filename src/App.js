import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import CustomersReviews from './components/CustomersReviews';
import Main from './components/Main';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

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
			</div>
		</>
	);
}

export default App;
