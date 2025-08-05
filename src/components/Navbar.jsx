import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Search, ShoppingCart, User2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartItems } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
     fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  return (
    <nav className="bg-white shadow p-4 font-poppins relative">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-800">
          MyShop
        </Link>

        <div className="relative w-full max-w-md mx-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border rounded pl-10 pr-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />

          {/* Search Result Dropdown */}
          {filteredProducts.length > 0 && (
            <div className="absolute top-12 left-0 w-full bg-white border rounded shadow z-50 max-h-96 overflow-y-auto">
              {filteredProducts.map(product => (
                <Link
                  onClick={() => setFilteredProducts([])}
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="flex items-center gap-4 p-3 hover:bg-gray-100 border-b"
                >
                  <img
                    src={product.thumbnail || (product.images?.[0] ?? '/placeholder.jpg')}
                    alt={product.title}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <p className="text-sm font-medium line-clamp-1">{product.title}</p>
                    <p className="text-xs text-gray-500">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-6">
          <Link to="/cart" className="relative">
            <ShoppingCart className="text-blue-800" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1.5 text-xs">
                {cartItems.length}
              </span>
            )}
          </Link>

          <Link to="/account" className="text-blue-800 hover:text-blue-600">
            <User2 />
          </Link>
        </div>
      </div>
    </nav>
  );
}
