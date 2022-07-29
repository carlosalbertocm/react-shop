import axios from "axios";
import { useEffect, useState } from "react";

export const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		const response = await axios(API);
		setProducts(response.data);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return products;
};
