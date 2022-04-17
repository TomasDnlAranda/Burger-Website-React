import React from 'react';
import '../css/footer.css';
import { FaReact } from 'react-icons/fa';
const Footer = () => {
	return (
		<>
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
			<div className="footer__creator">
				<p className="footer__text">
					Create By <span className="footer__name">Tomas Aranda</span> with{' '}
					<FaReact className="footer__icon-react" />
				</p>
			</div>
		</>
	);
};

export default Footer;
