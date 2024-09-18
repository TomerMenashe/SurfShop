import React, { useEffect, useState } from 'react';
import productService from '../../services/productService';

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getAllProducts().then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPage;
