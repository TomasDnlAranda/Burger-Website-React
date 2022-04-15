import React from 'react';
import '../css/menu.css';
import TITLE from '../image/title-img.png';
import BURGER_1 from '../image/product-1.png';
import BURGER_2 from '../image/product-2.png';
import BURGER_3 from '../image/product-3.png';
import BURGER_4 from '../image/product-4.png';
import BURGER_5 from '../image/product-5.png';
import BURGER_6 from '../image/product-6.png';
import CardMenu from './CardMenu';

const Menu = () => {
	const CARD_MENU = [
		{
			name: 'CHEESE DOUBLE HAMBURGER',
			price: 31.99,
			img: BURGER_1,
			stars: 5,
			id: 1,
		},
		{
			name: 'BACON EGG HAMBURGER',
			price: 25.99,
			img: BURGER_2,
			stars: 3,
			id: 2,
		},
		{
			name: 'VEGETARIAN HAMBURGER',
			price: 29.99,
			img: BURGER_3,
			stars: 4,
			id: 3,
		},
		{
			name: 'BIG HAMBURGER DOUBLE',
			price: 37.99,
			img: BURGER_4,
			stars: 5,
			id: 4,
		},
		{
			name: 'HAMBURGER CHEESE FISH',
			price: 32.99,
			img: BURGER_5,
			stars: 5,
			id: 5,
		},
		{
			name: 'CUCUMBER HAMBURGER',
			price: 23.99,
			img: BURGER_6,
			stars: 3,
			id: 6,
		},
	];

	return (
		<section className="menu">
			<div className="menu__container-text">
				<img src={TITLE} className="menu__img" />
				<h2 className="menu__title">OUR MENU</h2>
			</div>
			<div className="menu__container-cards">
				{CARD_MENU.map((item) => (
					<CardMenu item={item} key={item.id} />
				))}
			</div>
		</section>
	);
};

export default Menu;
