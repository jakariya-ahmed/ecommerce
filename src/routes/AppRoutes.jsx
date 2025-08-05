import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import CheckoutPage from '../pages/Checkout';
import OrderSuccess from '../pages/OrderSuccess';
import NotFound from '../pages/NotFound';
import SingleProductPage from '../pages/SingleProductPage'; //


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="*" element={<NotFound />} /> 
      <Route path="/products/:category" element={<Product />} />
      <Route path="/product/:id" element={<SingleProductPage />} />

    </Routes>
  );
}



