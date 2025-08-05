import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Search, ShoppingCart, User2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartItems } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap">
        {/* Left Section - Logo + Nav Links */}
        <div className="flex items-center justify-center gap-8">
          <Link to="/" className="text-xl font-bold text-blue-800">
            MyShop
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-blue-800 focus:outline-none"
          >
            ☰
          </button>
        </div>

        <div className={`w-full md:flex md:items-center md:gap-6 md:w-auto ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row gap-4 text-gray-700 font-medium mt-4 md:mt-0">
            <Link to="/" className="hover:text-blue-800">Home</Link>
            <Link to="/products" className="hover:text-blue-800">Products</Link>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="relative  max-w-sm sm:w-full sm:max-w-md mx-4 mt-4 md:mt-0">
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

        {/* Right Section - Cart & Account */}
        <div className="flex items-center gap-6 relative mt-4 md:mt-0">
          <Link to="/cart" className="relative">
            <ShoppingCart className="text-blue-800" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1.5 text-xs">
                {cartItems.length}
              </span>
            )}
          </Link>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-blue-800 hover:text-blue-600 focus:outline-none"
            >
              <User2 />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-50">
                <Link
                  to="/login"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
