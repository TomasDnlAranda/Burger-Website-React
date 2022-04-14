import React from 'react';
import '../css/menuresponsive.css';

const MenuResponsive = ({ clickMenu }) => {
	return (
		<div className={clickMenu ? 'menu-responsive__appear' : 'menu-responsive__esconde'}>
			<span className="menu-responsive__home">Home</span>
			<span className="menu-responsive__menu">Menu</span>
			<span className="menu-responsive__about">About</span>
			<span className="menu-responsive__reviews">Reviews</span>
			<span className="menu-responsive__contact">Contact</span>
			<span className="menu-responsive__blogs">Blogs</span>
		</div>
	);
};

export default MenuResponsive;
