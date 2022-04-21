import React from 'react';
import '../css/cartfoot.css';
import ProductCartFoot from './ProductCartFoot';

const CartFoot = ({ clickCartFood, cartFood }) => {
	return (
		<div className={clickCartFood ? 'cart-foot__appear' : 'cart-foot__hide'}>
			<div className="cart-foot__container-title">
				<h3 className="cart-foot__title">Cart</h3>
			</div>
			<div className="cart-foot__container-cart">
				{cartFood.map((item) => (
					<ProductCartFoot item={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default CartFoot;
