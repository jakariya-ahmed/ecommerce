import { Link } from 'react-router-dom';
import cat1 from '../assets/cat/cat.jpg';
import cat2 from '../assets/cat/cat2.jpg';
import cat3 from '../assets/cat/cat3.jpg';
import cat4 from '../assets/cat/cat4.jpg';

const categories = [
  { name: 'smartphones', label: 'Smartphones', image: cat1 },
  { name: 'laptops', label: 'Laptops', image: cat2 },
  { name: 'fragrances', label: 'Fragrances', image: cat3 },
  { name: 'home-decoration', label: 'Home Decor', image: cat4 },
];

export default function ShopSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12 font-poppins">
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/products/${encodeURIComponent(cat.name)}`}
            className="block text-center group hover:shadow-lg transition"
          >
            <img
              src={cat.image}
              alt={cat.label}
              className="w-full h-40 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform"
            />
            <p className="capitalize font-medium text-lg group-hover:text-primary">{cat.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
