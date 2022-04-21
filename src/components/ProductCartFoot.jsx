import React from 'react';
import '../css/productcartfoot.css';
import { FiDelete as IconDelete } from 'react-icons/fi';

const ProductCartFoot = ({ item, deleteAmountProduct, filterProduct }) => {
	const { name, price, img, id, amount } = item;
	return (
		<div className="product-cart-foot">
			<div className="product-cart-foot__container-img">
				<img className="product-cart-foot__img" src={img} alt={name + id} />
			</div>
			<h4 className="product-cart-foot__name">
				<span>{amount === 0 ? filterProduct() : amount + ' '}</span> x {' ' + name}
			</h4>
			<p className="product-cart-foot__price">{'$ ' + price * amount}</p>
			<IconDelete className="product-cart-foot__del" onClick={() => deleteAmountProduct(id)} />
		</div>
	);
};

export default ProductCartFoot;
