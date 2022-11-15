import React from "react";
import { useState } from "react";
import Products from "./Products";

function AppProducts() {
	const [showProducts, setShowProducts] = useState(true);
	return (
		<div>
			{showProducts && <Products />}
			<button onClick={() => setShowProducts(!showProducts)}>Toggle</button>
		</div>
	);
}

export default AppProducts;
