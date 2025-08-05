// src/components/TrendingProducts.jsx
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function TrendingProducts() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const trendingItems = data.filter(product => product.rating?.rate >= 4.5);
        setTrending(trendingItems);
      })
      .catch(err => console.error('Failed to fetch trending products:', err));
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {trending.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
