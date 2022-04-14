import React from 'react';
import '../css/main.css';
import burgerMain from '../image/burger-baner.png';
import CardMain from './CardMain';
import { FaHamburger, FaHeadset, FaTruck } from 'react-icons/fa';

const Main = () => {
	const DATA_CARD_MAIN = [
		{
			name: 'BEST QUALITY',
			icon: <FaHamburger />,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
			id: 1,
		},
		{
			name: '24/7 SERVICE',
			icon: <FaHeadset />,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
			id: 2,
		},
		{
			name: 'FREE DELIVERY',
			icon: <FaTruck />,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
			id: 3,
		},
	];

	return (
		<main className="main">
			<div className="main__container-img">
				<img className="main__img" src={burgerMain} />
			</div>
			<div className="main__container-text">
				<h1 className="main__title">SO MEATY YOU'LL GO CRAZY</h1>
				<p className="main__subtitle">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua.
				</p>
				<button className="main__btn">Our Menu</button>
			</div>
			<div className="main__container-card"></div>
			<div className="main__container-cards">
				{DATA_CARD_MAIN.map((item) => (
					<CardMain item={item} key={item.id} />
				))}
			</div>
		</main>
	);
};

export default Main;
