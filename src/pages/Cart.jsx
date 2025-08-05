import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react'; // ✅ Import icon
import { Link } from 'react-router-dom';

export default function CartPage() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart, // ✅ New method
    getTotalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="p-8 text-center font-poppins">
        <h2 className="text-xl font-semibold">Your cart is empty 🛒</h2>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto p-8 font-poppins">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

      <div className="grid gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center bg-white shadow rounded-lg p-4"
          >
            <img
               src={item.thumbnail || item.images?.[0] || 'https://via.placeholder.com/150'}
              alt={item.title}
              className="w-24 h-24 object-contain mr-4"
            />

            <div className="flex-1 w-full">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-primary font-semibold">${item.price.toFixed(2)}</p>
                </div>

                {/* 🗑 Delete icon */}
                <button
                  onClick={() => deleteFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                  title="Remove item"
                >
                  <Trash2 size={20} />
                </button>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center mt-3">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-3 py-1 bg-gray-200 text-black rounded hover:bg-gray-300"
                >
                  –
                </button>
                <span className="mx-4">{item.quantity}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="px-3 py-1 bg-gray-200 text-black rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="text-right mt-8 text-xl font-bold">
        Total: ${getTotalPrice().toFixed(2)}
      </div>

      
      <Link to="/checkout">
        <button className="mt-4 hover:bg-primary text-white py-2 px-4 rounded bg-blue-800">
          Proceed to Checkout
        </button>
      </Link>


    </div>
  );
}
