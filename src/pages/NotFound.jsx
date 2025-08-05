// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 hover:bg-orange-500 text-white font-semibold rounded bg-blue-800 transition"
        >
          ← Go to Homepage
        </Link>
      </div>
    </div>
  );
}
