import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 font-poppins">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Logo + Description */}
        <div>
          <h1 className="text-2xl font-bold mb-4">ShopEase</h1>
          <p className="text-gray-300">
            Discover the best deals and latest trends in fashion, electronics, and more. Shop with confidence at ShopEase.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-primary transition">Shop</Link></li>
            <li><Link to="/cart" className="hover:text-primary transition">Cart</Link></li>
            <li><Link to="/about" className="hover:text-primary transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-300">Email: support@shopease.com</p>
          <p className="text-gray-300">Phone: +1 (123) 456-7890</p>
          <p className="text-gray-300">Address: 123 Main St, New York, NY 10001</p>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}
