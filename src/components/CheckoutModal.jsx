import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard, Smartphone, Truck, ArrowRight, Package } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose, cart, summary, onClearCart }) {
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Confirmation
  const [formData, setFormData] = useState({
    name: 'Charul Sharma',
    email: 'charulk0303@gmail.com',
    phone: '9987447541',
    address: 'Flat 402, Lotus Heights, Bandra West',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050',
    paymentMethod: 'upi'
  });
  const [orderId, setOrderId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      const generatedId = 'DACHA-' + Math.floor(100000 + Math.random() * 900000);
      setOrderId(generatedId);
      setIsProcessing(false);
      setStep(3);
      onClearCart();
    }, 1500);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 260,
      background: 'rgba(30, 20, 18, 0.75)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: '#FAF5EF',
        borderRadius: '24px',
        width: '100%',
        maxWidth: '640px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
        border: '1px solid var(--color-border)',
        position: 'relative',
        padding: '36px'
      }}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(134, 61, 40, 0.08)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-dacha-brown)'
          }}
        >
          <X size={20} />
        </button>

        {/* STEP 1: SHIPPING ADDRESS */}
        {step === 1 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }} className="badge-tag">
              <Truck size={12} /> Step 1 of 2: Shipping Details
            </div>
            <h2 style={{ fontSize: '2rem', color: 'var(--color-dacha-brown)', marginBottom: '20px' }}>
              Shipping Address
            </h2>

            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-dacha-brown)' }}>Full Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--color-border)', fontSize: '0.9rem', marginTop: '4px' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-dacha-brown)' }}>Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone} 
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--color-border)', fontSize: '0.9rem', marginTop: '4px' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-dacha-brown)' }}>Email Address</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email} 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--color-border)', fontSize: '0.9rem', marginTop: '4px' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-dacha-brown)' }}>Street Address</label>
                <input 
                  type="text" 
                  required 
                  value={formData.address} 
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--color-border)', fontSize: '0.9rem', marginTop: '4px' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-dacha-brown)' }}>City</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.city} 
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--color-border)', fontSize: '0.9rem', marginTop: '4px' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-dacha-brown)' }}>State</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.state} 
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--color-border)', fontSize: '0.9rem', marginTop: '4px' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-dacha-brown)' }}>Pincode</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.pincode} 
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--color-border)', fontSize: '0.9rem', marginTop: '4px' }}
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '16px', justifyContent: 'center' }}>
                <span>Continue to Payment</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        )}

        {/* STEP 2: PAYMENT METHOD */}
        {step === 2 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }} className="badge-tag">
              <ShieldCheck size={12} /> Step 2 of 2: Secure Payment
            </div>
            <h2 style={{ fontSize: '2rem', color: 'var(--color-dacha-brown)', marginBottom: '16px' }}>
              Select Payment Method
            </h2>

            <div style={{ background: '#FFFFFF', padding: '16px', borderRadius: '14px', border: '1px solid var(--color-border)', marginBottom: '20px' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-subtle)' }}>Order Total:</div>
              <div style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--color-dacha-brown)' }}>
                ₹{summary?.total || 499}
              </div>
            </div>

            <form onSubmit={handlePlaceOrder} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { id: 'upi', name: 'Instant UPI / GPay / PhonePe / Paytm', desc: 'Fastest 1-click payment', icon: <Smartphone size={20} /> },
                { id: 'card', name: 'Credit / Debit Card (Visa, Mastercard, RuPay)', desc: 'Encrypted PCI-DSS payment', icon: <CreditCard size={20} /> },
                { id: 'cod', name: 'Cash on Delivery (COD)', desc: 'Pay when your package arrives', icon: <Truck size={20} /> }
              ].map((pm) => (
                <label 
                  key={pm.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px',
                    borderRadius: '14px',
                    border: formData.paymentMethod === pm.id ? '2px solid var(--color-terracotta)' : '1px solid var(--color-border)',
                    background: formData.paymentMethod === pm.id ? 'rgba(194, 97, 58, 0.06)' : '#FFFFFF',
                    cursor: 'pointer'
                  }}
                >
                  <input 
                    type="radio"
                    name="payment"
                    value={pm.id}
                    checked={formData.paymentMethod === pm.id}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                  />
                  <div style={{ color: 'var(--color-dacha-brown)' }}>{pm.icon}</div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--color-dacha-brown)' }}>{pm.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)' }}>{pm.desc}</div>
                  </div>
                </label>
              ))}

              <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                <button type="button" onClick={() => setStep(1)} className="btn-secondary">
                  Back
                </button>
                <button type="submit" disabled={isProcessing} className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                  {isProcessing ? 'Processing Order...' : `Pay ₹${summary?.total || 499} & Place Order`}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 3: ORDER CONFIRMATION */}
        {step === 3 && (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ width: '64px', height: '64px', background: '#D1FAE5', color: '#065F46', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <CheckCircle size={36} />
            </div>

            <h2 style={{ fontSize: '2.2rem', color: 'var(--color-dacha-brown)', marginBottom: '8px' }}>
              Order Confirmed!
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-terracotta)', fontWeight: '700', marginBottom: '20px' }}>
              Order Reference: {orderId}
            </p>

            <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--color-border)', textAlign: 'left', marginBottom: '24px', fontSize: '0.88rem' }}>
              <div style={{ fontWeight: '700', color: 'var(--color-dacha-brown)', marginBottom: '8px' }}>Delivery Details:</div>
              <div>{formData.name}</div>
              <div>{formData.address}, {formData.city}, {formData.state} - {formData.pincode}</div>
              <div style={{ marginTop: '8px', color: 'var(--color-text-subtle)' }}>Confirmation SMS & Email sent to: {formData.phone}</div>
              <div style={{ marginTop: '12px', padding: '8px 12px', background: 'var(--color-cream-bg)', borderRadius: '8px', fontWeight: '600', color: 'var(--color-dacha-brown)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Package size={16} /> Estimated Delivery: 2-3 Business Days
              </div>
            </div>

            <button onClick={onClose} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Continue Shopping
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
