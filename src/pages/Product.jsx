// src/pages/Product.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function ProductPage() {
  const { category: categoryParam } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [rating, setRating] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const endpoint = 'https://fakestoreapi.com/products';
        const res = await fetch(endpoint);
        const data = await res.json();
        setProducts(data);
        setCategory(decodeURIComponent(categoryParam || ''));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, [categoryParam]);

  useEffect(() => {
    const filtered = products.filter(product => {
      const inCategory = category ? product.category === category : true;
      const inBrand = brand ? product.title.toLowerCase().includes(brand.toLowerCase()) : true;
      const inColor = color ? product.title.toLowerCase().includes(color.toLowerCase()) : true;
      const inSearch = product.title.toLowerCase().includes(search.toLowerCase());
      const inRating = rating ? product.rating?.rate >= parseFloat(rating) : true;
      const inPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return inCategory && inBrand && inColor && inSearch && inRating && inPrice;
    });
    setFilteredProducts(filtered);
  }, [search, brand, color, rating, priceRange, category, products]);

  return (
    <div className="flex flex-col lg:flex-row p-6 gap-6 font-poppins">
      {/* Filter Section */}
      <aside className="w-full lg:w-1/4 bg-white p-4 shadow rounded-lg space-y-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <select onChange={(e) => setCategory(e.target.value)} value={category} className="w-full border p-2 rounded">
          <option value="">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
        <input
          type="text"
          placeholder="Filter by Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Filter by Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <select onChange={(e) => setRating(e.target.value)} className="w-full border p-2 rounded">
          <option value="">All Ratings</option>
          <option value="4">4★ & up</option>
          <option value="3">3★ & up</option>
          <option value="2">2★ & up</option>
        </select>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Max"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
            className="w-full border p-2 rounded"
          />
        </div>
      </aside>

      {/* Product List */}
      <main className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}
