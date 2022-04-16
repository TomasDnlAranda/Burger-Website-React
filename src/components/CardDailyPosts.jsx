import React from 'react';

const CardDailyPosts = ({ item }) => {
	const { name, description, img } = item;
	return (
		<div className="card-daily-post">
			<div className="card-daily-post__container-img">
				<img className="card-daily-post__img" src={img} alt="card_daily-post" />
			</div>
			<h3 className="card-daily-post__name">{name}</h3>
			<p className="card-daily-post__description">{description}</p>
			<button className="card-daily-post__btn">Read More</button>
		</div>
	);
};

export default CardDailyPosts;
