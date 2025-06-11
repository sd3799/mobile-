import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../utils/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [err, setErr] = useState('');

  useEffect(() => {
    fetchProducts()
      .then((res) => setProducts(res.data))
      .catch(() => setErr('Failed to load products'));
  }, []);

  return (
    <section className="products">
      <h1>Our Products</h1>
      {err && <p>{err}</p>}
      <div className="products__grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <h3>{p.name}</h3>
            <p>₹{Number(p.price).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
