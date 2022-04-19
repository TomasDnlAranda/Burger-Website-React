import React, { useState } from 'react';
import logo from '../image/logo.png';
import '../css/navbar.css';
import SearchNavbar from './SearchNavbar';

import { FaSearch as IconSearch, FaShoppingCart as IconCartShopping } from 'react-icons/fa';
import { HiMenu as IconMenu } from 'react-icons/hi';
import { MdClear as IconClear } from 'react-icons/md';
import MenuResponsive from './MenuResponsive';

const Navbar = () => {
	const [clickSearch, setClickSearch] = useState(false);
	const [clickMenu, setClickMenu] = useState(false);

	const showNavbarSearch = () => {
		setClickSearch(!clickSearch);

		if (clickMenu === true) {
			setClickMenu(false);
		}
	};

	const showNavbarMenu = () => {
		setClickMenu(!clickMenu);

		if (clickSearch === true) {
			setClickSearch(false);
		}
	};

	return (
		<>
			<header className={clickSearch ? 'navbar__container-border' : 'navbar__container'}>
				<nav className="navbar__row">
					<div className="navbar__responsive-logo">
						<img src={logo} className="navbar__responsive-menu-logo" alt="logo-navbar" />
					</div>
					<div className="navbar__responsive-icon-menu">
						{clickMenu ? (
							<IconClear className="navbar__icon-clear" onClick={showNavbarMenu} />
						) : (
							<IconMenu className="navbar__icon-menu" onClick={showNavbarMenu} />
						)}
					</div>
					<div className="navbar__container-icon-search">
						{clickSearch ? (
							<IconClear className="navbar__icon-clear" onClick={showNavbarSearch} />
						) : (
							<IconSearch className="navbar__icon-search" onClick={showNavbarSearch} />
						)}
					</div>
					<div className="navbar__menu">
						<span className="navbar__menu-home">
							<a href="#home" className="navbar__link">
								Home
							</a>
						</span>
						<span className="navbar__menu-menu">
							<a href="#menu" className="navbar__link">
								Menu
							</a>
						</span>
						<span className="navbar__menu-about">
							<a href="#about" className="navbar__link">
								About
							</a>
						</span>
						<a href="#home" className="navbar__link">
							<img src={logo} className="navbar__menu-logo" alt="logo-navbar" />
						</a>
						<span className="navbar__menu-reviews">
							<a href="#review" className="navbar__link">
								Reviews
							</a>
						</span>
						<span className="navbar__menu-contact">
							<a href="#contact" className="navbar__link">
								Contact
							</a>
						</span>
						<span className="navbar__menu-blogs">
							<a href="#blog" className="navbar__link">
								Blogs
							</a>
						</span>
					</div>
					<div className="navbar__container-icon-cart">
						<IconCartShopping className="navbar__icon-cart" />
					</div>
				</nav>
			</header>
			<SearchNavbar clickSearch={clickSearch} clickMenu={clickMenu} />
			<MenuResponsive clickMenu={clickMenu} clickSearch={clickSearch} />
		</>
	);
};

export default Navbar;
