// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 font-poppins">
      <img
        src={product.thumbnail || (product.images?.[0] ?? '/placeholder.jpg')}
        alt={product.title}
        className="w-full h-48 object-contain p-4"
      />

      <div className="px-4 pb-4">
        <Link 
          to={`/product/${product.id}`}
          key={product.id}
        >
          <h3 className="text-md font-semibold text-gray-800 line-clamp-2">{product.title}</h3>
        </Link>
        <p className="text-primary font-bold text-md mt-1">${product.price.toFixed(2)}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full hover:bg-orange-500 cursor-pointer text-white py-2 px-4 rounded bg-blue-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
