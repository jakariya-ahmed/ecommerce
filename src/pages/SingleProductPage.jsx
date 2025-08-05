// src/pages/ProductDetailPage.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setSelectedColor(data.brand);            // simple default
      setSelectedSize(data.stock > 10 ? 'M' : 'S'); // mock logic

      const all = await fetch('https://dummyjson.com/products').then(r => r.json());
      const relatedItems = all.products.filter(p => p.category === data.category && p.id !== data.id);
      setRelated(relatedItems.slice(0, 4));
    }
    fetchProduct();
  }, [id]);

  if (!product) return <div className="text-center p-10">Loading...</div>;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12 font-poppins">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="bg-white p-4 rounded shadow">
          <img
            src={product.thumbnail || product.images[0]}
            alt={product.title}
            className="w-full h-96 object-contain"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <p className="mb-2">
            <span className="font-semibold">Brand:</span> {product.brand}
          </p>

          <p className="mb-4">
            <span className="font-semibold">Category:</span> {product.category}
          </p>

          <div className="mb-4">
            <span className="font-semibold">Discount:</span> {product.discountPercentage}%
          </div>

          <div className="mb-4">
            <span className="font-semibold">Choose Color:</span>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="ml-2 border rounded p-1"
            >
              {[product.brand, 'Red', 'Blue', 'Black'].map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <span className="font-semibold">Size:</span>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="ml-2 border rounded p-1"
            >
              {['S', 'M', 'L', 'XL'].map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          <p className="text-xl font-bold text-primary mb-4">
            ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
            <span className="text-gray-500 line-through ml-2">${product.price}</span>
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-blue-800 text-white py-2 px-6 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
