// src/components/DealsOfTheDay.jsx
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function DealsOfTheDay() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=400')
      .then(res => res.json())
      .then(data => {
        // Shuffle products and pick 6
        const shuffled = [...data.products].sort(() => 0.5 - Math.random());
        const selectedDeals = shuffled.slice(0, 6).map(product => ({
          ...product,
          oldPrice: (product.price * 1.2).toFixed(2), // Simulate old price
        }));
        setDeals(selectedDeals);
      })
      .catch(err => console.error('Failed to fetch deals:', err));
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12 font-poppins">
      <h2 className="text-3xl font-bold text-center mb-8">Deals of the Day</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {deals.map(product => (
          <div key={product.id} className="relative">
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
              20% OFF
            </span>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
