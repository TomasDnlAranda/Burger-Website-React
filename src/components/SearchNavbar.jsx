import React from 'react';
import { FaSearch as IconSearch } from 'react-icons/fa';
import '../css/searchnavbar.css';

const SearchNavbar = ({ clickSearch }) => {
	return (
		<>
			<div className={clickSearch ? 'search-navbar__appear' : 'search-navbar__esconde'}>
				<div className="search-navbar__container-input">
					<input className="search-navbar__input" placeholder="search here..." />
				</div>
				<div className="search-navbar__container-icon">
					<IconSearch className="search-navbar__icon" />
				</div>
			</div>
		</>
	);
};

export default SearchNavbar;
