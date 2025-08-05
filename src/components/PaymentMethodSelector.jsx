// src/components/PaymentMethodSelector.jsx
import { DollarSign, Smartphone, CreditCard } from 'lucide-react';

export default function PaymentMethodSelector({ selected, onChange }) {
  return (
    <div className="space-y-3">
      {/* COD */}
      <label className="flex items-center gap-3 p-3 border rounded cursor-pointer hover:bg-gray-50">
        <input
          type="radio"
          name="payment"
          value="cod"
          checked={selected === 'cod'}
          onChange={(e) => onChange(e.target.value)}
          className="accent-primary"
        />
        <DollarSign className="text-primary" size={20} />
        <span>Cash on Delivery</span>
      </label>

      {/* Bkash */}
      <label className="flex items-center gap-3 p-3 border rounded cursor-pointer hover:bg-gray-50">
        <input
          type="radio"
          name="payment"
          value="bkash"
          checked={selected === 'bkash'}
          onChange={(e) => onChange(e.target.value)}
          className="accent-primary"
        />
        <Smartphone className="text-primary" size={20} />
        <span>Bkash (Mobile Payment)</span>
      </label>

      {/* Stripe */}
      <label className="flex items-center gap-3 p-3 border rounded cursor-pointer hover:bg-gray-50">
        <input
          type="radio"
          name="payment"
          value="stripe"
          checked={selected === 'stripe'}
          onChange={(e) => onChange(e.target.value)}
          className="accent-primary"
        />
        <CreditCard className="text-primary" size={20} />
        <span>Stripe (Card Payment)</span>
      </label>
    </div>
  );
}
