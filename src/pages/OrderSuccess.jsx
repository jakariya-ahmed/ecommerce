// src/pages/OrderSuccess.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function OrderSuccess() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('lastOrder');
    if (stored) {
      setOrder(JSON.parse(stored));
    }
  }, []);

  if (!order) {
    return (
      <div className="text-center p-10 font-poppins">
        <h2 className="text-xl font-semibold">No order found!</h2>
        <Link to="/" className="text-primary underline">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-poppins">
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-md w-full text-center">
        <div className="text-green-600 text-5xl mb-4">✔</div>
        <h2 className="text-2xl font-bold mb-2">Order Placed Successfully!</h2>
        <p className="text-gray-600 mb-4">Thank you, <strong>{order.customer.name}</strong>!</p>

        <div className="text-left text-sm bg-gray-50 p-4 rounded mb-4">
          <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
          <p><strong>Payment Method:</strong> {order.paymentMethod.toUpperCase()}</p>
          <p><strong>Shipping Address:</strong></p>
          <p>{order.customer.address}</p>
        </div>

        <Link
          to="/"
          className="inline-block bg-primary text-white py-2 px-4 rounded hover:bg-blue-800"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
