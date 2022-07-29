import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductItem from "@components/ProductItem";

import "@styles/ProductList.scss";

const API = "http://api.escuelajs.co/api/v1/products";

const ProductList = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		const response = await axios(API);
		setProducts(response.data);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map((product) => (
					<ProductItem key={product.id} />
				))}
			</div>
		</section>
	);
};

export default ProductList;
