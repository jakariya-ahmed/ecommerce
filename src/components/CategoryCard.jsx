import { Link } from 'react-router-dom';
import cat1 from '../assets/cat/cat.jpg';
import cat2 from '../assets/cat/cat2.jpg';
import cat3 from '../assets/cat/cat3.jpg';
import cat4 from '../assets/cat/cat4.jpg';

const categories = [
  { name: 'electronics', image: cat1 },
  { name: 'jewelery', image: cat2 },
  { name: "men's clothing", image: cat3 },
  { name: "women's clothing", image: cat4 },
];

export default function CategorySection() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/products/${encodeURIComponent(cat.name)}`}
            className="block text-center group"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-40 object-cover rounded-lg mb-2 group-hover:scale-105 transition"
            />
            <p className="capitalize font-medium">{cat.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
