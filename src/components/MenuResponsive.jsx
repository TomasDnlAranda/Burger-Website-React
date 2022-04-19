import React from 'react';
import '../css/menuresponsive.css';

const MenuResponsive = ({ clickMenu }) => {
	return (
		<div className={clickMenu ? 'menu-responsive__appear' : 'menu-responsive__esconde'}>
			<span className="menu-responsive__home">
				<a href="#home" className="navbar__link">
					Home
				</a>
			</span>
			<span className="menu-responsive__menu">
				<a href="#menu" className="navbar__link">
					Menu
				</a>
			</span>
			<span className="menu-responsive__about">
				<a href="#about" className="navbar__link">
					About
				</a>
			</span>
			<span className="menu-responsive__reviews">
				<a href="#review" className="navbar__link">
					Reviews
				</a>
			</span>
			<span className="menu-responsive__contact">
				<a href="#contact" className="navbar__link">
					Contact
				</a>
			</span>
			<span className="menu-responsive__blogs">
				<a href="#blog" className="navbar__link">
					Blogs
				</a>
			</span>
		</div>
	);
};

export default MenuResponsive;
