import React, { useState } from 'react';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import CustomersReviews from './components/CustomersReviews';
import Main from './components/Main';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DailyPosts from './components/DailyPosts';
import Footer from './components/Footer';

AOS.init({
	duration: 800,
});

function App() {
	const [badge, setBadge] = useState(0);
	const [cartFood, setCartFood] = useState([]);

	const handleClickAddCart = (item, id) => {
		setBadge(badge + 1);
		const find = cartFood.findIndex((item) => item.id === id);

		if (find === -1) {
			setCartFood((old) => [...old, item]);
		} else {
			const toUpdate = cartFood.map((item) =>
				item.id === id ? { ...item, amount: item.amount + 1 } : item
			);
			setCartFood(toUpdate);
		}
	};
	return (
		<>
			<div className="app__container">
				<Navbar badge={badge} cartFood={cartFood} />
				<Main />
				<Menu handleClickAddCart={handleClickAddCart} />
				<AboutUs />
				<CustomersReviews />
				<ContactUs />
				<DailyPosts />
				<Footer />
			</div>
		</>
	);
}

export default App;
