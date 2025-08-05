import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // adjust path as needed
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar'; // if you have one
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;