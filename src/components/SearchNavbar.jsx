import React from 'react';
import { FaSearch as IconSearch } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import '../css/searchnavbar.css';
import SearchProduct from './SearchProduct';
import '../css/searchproduct.css';

const SearchNavbar = ({ clickSearch, totalProduct }) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const handleChange = (e) => {
		let search = e.target.value;
		search ? setSearchParams({ search }) : setSearchParams({});
	};

	return (
		<>
			<div className={clickSearch ? 'search-navbar__appear' : 'search-navbar__esconde'}>
				<div className="search-navbar__container-input">
					<input
						className="search-navbar__input"
						placeholder="search here..."
						value={searchParams.get('search') || ''}
						onChange={handleChange}
					/>
				</div>
				<div className="search-navbar__container-icon">
					<IconSearch className="search-navbar__icon" />
				</div>
			</div>
			<div className="search-navbar__container-search">
				{clickSearch
					? totalProduct
							.filter((item) => {
								let search = searchParams.get('search');
								if (!search) return false;

								let product = item.name.toLowerCase();
								return product.includes(search.toLowerCase());
							})
							.map((item) => <SearchProduct key={item.id} item={item} />)
					: null}
			</div>
		</>
	);
};

export default SearchNavbar;
