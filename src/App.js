import AboutUs from './components/AboutUs';
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
			</div>
		</>
	);
}

export default App;
