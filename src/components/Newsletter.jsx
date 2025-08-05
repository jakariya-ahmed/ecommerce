// src/components/Newsletter.jsx
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            <Mail className="inline-block w-8 h-8 mr-2 mb-1" />
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg mb-8">
            Get the latest updates, offers, and exclusive deals delivered to your inbox.
          </p>
        </motion.div>

        <motion.form
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-4 py-3 rounded-md text-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </div>
  );
}
