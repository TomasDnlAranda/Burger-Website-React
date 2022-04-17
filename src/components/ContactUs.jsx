import React from 'react';
import { MdEmail as IconEmail } from 'react-icons/md';
import { BsFillPhoneFill as IconPhone } from 'react-icons/bs';
import { ImLocation as IconLocation } from 'react-icons/im';
import CardContactUs from './CardContactUs';
import TITLE from '../image/title-img.png';
import '../css/contactus.css';

const ContactUs = () => {
	const DATA_CONTACT = [
		{
			name: 'PHONE',
			icon: <IconPhone />,
			contact: '+123-456-789',
			contact_2: '+333-222-111',
			id: 1,
			scroll: 150,
		},
		{
			name: 'EMAIL',
			icon: <IconEmail />,
			contact: 'tomasdeveloperfrontend@gmail.com',
			contact_2: 'tomas_aranda@gmail.com',
			id: 2,
			scroll: 300,
		},
		{
			name: 'ADDRESS',
			icon: <IconLocation />,
			contact: 'Buenos Aires, Argentina',
			contact_2: null,
			id: 3,
			scroll: 450,
		},
	];

	return (
		<div className="contact-us">
			<div className="contact-us__container-text">
				<img alt="logo" className="contact-us__img" src={TITLE} />
				<h2 className="contact-us__title">CONTACT US</h2>
			</div>
			<div className="contact-us__responsive">
				<div className="contact-us__col-left" data-aos="flip-left" data-aos-delay="150">
					<div className="contact-us__container-imframe">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7809.302162904644!2d-58.3670212380798!3d-34.61915131851718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1650061127395!5m2!1ses-419!2sar"
							className="contact-us__imframe"
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="location"
						></iframe>
					</div>
				</div>
				<div className="contact-us__col-right">
					<div className="contact-us__container-cards">
						{DATA_CONTACT.map((item) => (
							<CardContactUs item={item} key={item.id} />
						))}
					</div>
					<div className="contact-us__container-form">
						<h3 className="contact-us__form-title">GET IN TOUCH</h3>
						<form className="contact-us__form">
							<input
								className="contact-us__input-full-name"
								data-aos="fade-up"
								data-aos-delay="150"
								placeholder="full name"
							/>
							<input
								className="contact-us__input-email"
								placeholder="email"
								data-aos="fade-up"
								data-aos-delay="300"
							/>
							<input
								className="contact-us__input-number"
								placeholder="number"
								data-aos="fade-up"
								data-aos-delay="450"
							/>
							<input
								className="contact-us__input-message"
								placeholder="message"
								data-aos="fade-up"
								data-aos-delay="600"
							/>
							<button
								className="contact-us__btn-send-message"
								data-aos="fade-up"
								data-aos-delay="750"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
