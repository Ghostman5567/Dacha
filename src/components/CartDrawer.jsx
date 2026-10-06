import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, CheckCircle, Truck } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, updateQuantity, removeFromCart, onProceedToCheckout }) {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 799;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingFee = subtotal >= freeShippingThreshold || cart.length === 0 ? 0 : 79;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'UNFILTERED10') {
      setDiscountPercent(10);
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code. Try UNFILTERED10');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 250,
      background: 'rgba(30, 20, 18, 0.65)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      <div style={{
        background: '#FAF5EF',
        width: '100%',
        maxWidth: '460px',
        height: '100%',
        boxShadow: '-8px 0 32px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        animation: 'slideInRight 0.3s ease-out'
      }}>
        
        {/* Drawer Header */}
        <div style={{
          padding: '24px',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#FFFFFF'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={22} color="var(--color-dacha-brown)" />
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-dacha-brown)' }}>
              Your Dacha Bag ({cart.reduce((a, c) => a + c.quantity, 0)})
            </h3>
          </div>
          <button onClick={onClose} style={{ color: 'var(--color-dacha-brown)' }}>
            <X size={24} />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div style={{ background: 'var(--color-soft-peach)', padding: '12px 24px', fontSize: '0.85rem' }}>
          {amountToFreeShipping > 0 ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-dacha-brown)' }}>
              <Truck size={16} />
              <span>Add <strong>₹{amountToFreeShipping}</strong> more for <strong>FREE Express Shipping</strong></span>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#065F46', fontWeight: '700' }}>
              <CheckCircle size={16} />
              <span>🎉 You unlocked FREE Express Shipping!</span>
            </div>
          )}
          <div style={{ width: '100%', height: '4px', background: 'rgba(134,61,40,0.15)', borderRadius: '2px', marginTop: '6px' }}>
            <div style={{
              height: '100%',
              borderRadius: '2px',
              background: 'var(--color-terracotta)',
              width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
              transition: 'width 0.4s ease'
            }} />
          </div>
        </div>

        {/* Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--color-text-subtle)' }}>
              <ShoppingBag size={48} color="var(--color-warm-clay)" style={{ marginBottom: '16px' }} />
              <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--color-dacha-brown)' }}>Your bag is empty</p>
              <p style={{ fontSize: '0.88rem', marginTop: '4px' }}>Discover your personalized blend using our quiz or explore shop.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '16px',
                display: 'flex',
                gap: '14px',
                border: '1px solid var(--color-border)',
                alignItems: 'center'
              }}>
                <img src={item.image} alt={item.name} style={{ width: '64px', height: '64px', borderRadius: '12px', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--color-dacha-brown)', marginBottom: '2px' }}>{item.name}</h4>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-terracotta)', fontWeight: '600', marginBottom: '8px' }}>₹{item.price} each</div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ padding: '2px 8px', fontWeight: '700' }}>-</button>
                      <span style={{ padding: '0 6px', fontSize: '0.85rem', fontWeight: '700' }}>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ padding: '2px 8px', fontWeight: '700' }}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} style={{ color: '#EF4444', marginLeft: 'auto' }}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div style={{
            padding: '24px',
            background: '#FFFFFF',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {/* Coupon Code Input */}
            <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '8px' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <input 
                  type="text" 
                  placeholder="Coupon Code (e.g. UNFILTERED10)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px 8px 32px',
                    borderRadius: '10px',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.82rem',
                    textTransform: 'uppercase'
                  }}
                />
                <Tag size={14} style={{ position: 'absolute', left: '10px', top: '10px', color: 'var(--color-text-subtle)' }} />
              </div>
              <button type="submit" style={{ background: 'var(--color-dacha-brown)', color: '#ffffff', padding: '8px 16px', borderRadius: '10px', fontSize: '0.82rem', fontWeight: '700' }}>
                Apply
              </button>
            </form>

            {couponApplied && (
              <div style={{ fontSize: '0.78rem', color: '#065F46', fontWeight: '600' }}>
                ✓ Code UNFILTERED10 applied (10% Off)
              </div>
            )}
            {couponError && (
              <div style={{ fontSize: '0.78rem', color: '#EF4444' }}>{couponError}</div>
            )}

            <div style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '6px', paddingTop: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-subtle)' }}>
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#065F46', fontWeight: '600' }}>
                  <span>Discount</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-subtle)' }}>
                <span>Shipping</span>
                <span>{shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-dacha-brown)', paddingTop: '8px', borderTop: '1px solid var(--color-border)' }}>
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <button 
              onClick={() => {
                onProceedToCheckout({ subtotal, discountAmount, shippingFee, total });
                onClose();
              }}
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
