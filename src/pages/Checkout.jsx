// src/pages/CheckoutPage.jsx
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import PaymentMethodSelector from '../components/PaymentMethodSelector';
import { Link, useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      customer: customerInfo,
      items: cartItems,
      total: getTotalPrice(),
      paymentMethod,
      date: new Date().toISOString(),
    };

    localStorage.setItem('lastOrder', JSON.stringify(order));
    clearCart(); // ✅ Clear cart
    navigate('/order-success');
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6 font-poppins">
      <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

      {/* Order Summary */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex items-center gap-4">
              <img
                 src={item.thumbnail || item.images?.[0] || 'https://via.placeholder.com/150'}
                alt={item.title}
                className="w-16 h-16 object-contain border rounded"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              </div>
              <span className="text-sm font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <div className="border-t mt-4 pt-4 text-right font-bold">
          Total: ${getTotalPrice().toFixed(2)}
        </div>
      </div>

      {/* Customer Info + Payment Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-4 space-y-4">
        <h3 className="text-lg font-semibold mb-2">Customer Information</h3>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={customerInfo.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={customerInfo.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          value={customerInfo.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          required
          value={customerInfo.address}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        ></textarea>

        <h3 className="text-lg font-semibold mt-4">Select Payment Method</h3>
        <PaymentMethodSelector
          selected={paymentMethod}
          onChange={setPaymentMethod}
        />

        <button
          type="submit"
          className="w-full hover:bg-orange-500 text-white py-2 rounded bg-blue-800 mt-4"
        >
          Confirm Order
        </button>

        <Link to="/cart" className="block text-center text-sm text-gray-500 mt-3 hover:underline">
          ← Back to Cart
        </Link>
      </form>
    </div>
  );
}
