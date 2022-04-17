import React from 'react';
import '../css/footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__col-one">
				<button className="footer__home">Home</button>
				<button className="footer__about">About</button>
				<button className="footer__contact">Contact</button>
			</div>
			<div className="footer__col-two">
				<button className="footer__menu">Menu</button>
				<button className="footer__reviews">Reviews</button>
				<button className="footer__blogs">Blogs</button>
			</div>
		</div>
	);
};

export default Footer;
