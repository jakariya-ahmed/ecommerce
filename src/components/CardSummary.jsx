import { useCart } from '../context/CartContext';

function CartSummary() {
  const { cartItems, getTotalPrice } = useCart();

  return (
    <div>
      <h2>Items: {cartItems.length}</h2>
      <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
    </div>
  );
}
