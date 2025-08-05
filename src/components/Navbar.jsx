import { NavLink } from 'react-router-dom';
import { ShoppingCart, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-primary text-white font-poppins shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left - Logo */}
          <div className="flex-shrink-0 text-xl font-bold">
            <NavLink to="/">MyShop</NavLink>
          </div>

          {/* Center - Menu + Search */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 px-4">
            {/* Menu Links */}
            <div className="flex gap-6 text-sm md:text-base">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'font-bold underline' : 'hover:underline'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive ? 'font-bold underline' : 'hover:underline'
                }
              >
                Product
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? 'font-bold underline' : 'hover:underline'
                }
              >
                Cart
              </NavLink>
            </div>

            {/* Search */}
            <div className="w-full max-w-md relative hidden md:block">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full py-2 pl-4 pr-10 rounded-md text-black focus:outline-none"
              />
              <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
            </div>
          </div>

          {/* Right - Cart Icon & Avatar */}
          <div className="flex items-center space-x-4">
            <NavLink to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </NavLink>
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          </div>

        </div>
      </div>
    </nav>
  );
}
