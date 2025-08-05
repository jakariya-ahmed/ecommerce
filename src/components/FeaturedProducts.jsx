// src/components/FeaturedProducts.jsx
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=12') // Limit to 12 featured items
      .then(res => res.json())
      .then(data => setFeatured(data.products))
      .catch(err => console.error('Failed to fetch featured products:', err));
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featured.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
