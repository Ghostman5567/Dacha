import React, { useState } from 'react';
import { X, Star, ShoppingBag, ShieldCheck, AlertCircle, Sparkles, Check, ThumbsUp, Send } from 'lucide-react';

export default function ProductModal({ product, isOpen, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details'); // details, ritual, reviews
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });
  const [reviewsList, setReviewsList] = useState([
    { id: 1, name: 'Ananya Sharma', rating: 5, date: '2 days ago', comment: 'Absolutely loved the texture! Blends so smoothly with rosewater. My skin feels fresh and clean without that dry tight feeling.' },
    { id: 2, name: 'Rohan Mehta', rating: 5, date: '1 week ago', comment: 'The natural aroma is amazing. Zero artificial perfume. Definitely buying again!' }
  ]);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  if (!isOpen || !product) return null;

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;
    setReviewsList([
      { id: Date.now(), name: newReview.name, rating: Number(newReview.rating), date: 'Just now', comment: newReview.comment },
      ...reviewsList
    ]);
    setNewReview({ name: '', rating: 5, comment: '' });
    setReviewSubmitted(true);
    setTimeout(() => setReviewSubmitted(false), 4000);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 210,
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
        maxWidth: '900px',
        maxHeight: '92vh',
        overflowY: 'auto',
        boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
        border: '1px solid var(--color-border)',
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0'
      }}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 10,
            background: '#FFFFFF',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-dacha-brown)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <X size={20} />
        </button>

        {/* Left Column: Image */}
        <div style={{ background: 'var(--color-cream-bg)', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid var(--color-border)' }}>
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', marginBottom: '16px' }}>
            <img 
              src={product.image} 
              alt={product.name}
              style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
            />
            <span style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              background: 'var(--color-dark-accent)',
              color: '#ffffff',
              padding: '6px 12px',
              borderRadius: '12px',
              fontSize: '0.8rem',
              fontWeight: '700'
            }}>
              Variant #{product.variantNo}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
            {product.approvedClaims.slice(0, 2).map((claim, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', padding: '8px 12px', borderRadius: '10px', fontSize: '0.75rem', color: 'var(--color-text-subtle)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={12} color="var(--color-terracotta)" />
                <span>{claim}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Product Content & Tabs */}
        <div style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge-tag">{product.concern}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem' }}>
              <Star size={14} fill="#F59E0B" color="#F59E0B" />
              <span style={{ fontWeight: '700', color: 'var(--color-dacha-brown)' }}>{product.rating}</span>
              <span style={{ color: 'var(--color-text-subtle)' }}>({product.reviewsCount} reviews)</span>
            </div>
          </div>

          <h2 style={{ fontSize: '2rem', color: 'var(--color-dacha-brown)', marginBottom: '4px' }}>
            {product.name}
          </h2>

          <p style={{ fontSize: '0.95rem', color: 'var(--color-terracotta)', fontWeight: '600', marginBottom: '16px' }}>
            {product.tagline}
          </p>

          <div style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--color-dacha-brown)', marginBottom: '20px' }}>
            ₹{product.price}
            {product.originalPrice && (
              <span style={{ fontSize: '1rem', textDecoration: 'line-through', color: 'var(--color-text-subtle)', marginLeft: '8px' }}>
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* Navigation Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid var(--color-border)', marginBottom: '16px' }}>
            {['details', 'ritual', 'reviews'].map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                style={{
                  padding: '8px 16px',
                  fontWeight: activeTab === t ? '700' : '500',
                  color: activeTab === t ? 'var(--color-terracotta)' : 'var(--color-text-subtle)',
                  borderBottom: activeTab === t ? '2px solid var(--color-terracotta)' : 'none',
                  textTransform: 'capitalize',
                  fontSize: '0.9rem'
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* TAB 1: DETAILS & INGREDIENTS */}
          {activeTab === 'details' && (
            <div style={{ fontSize: '0.88rem', color: 'var(--color-text-main)', lineHeight: 1.6, flex: 1, overflowY: 'auto' }}>
              <p style={{ marginBottom: '16px' }}>{product.description}</p>
              
              <h4 style={{ color: 'var(--color-dacha-brown)', marginBottom: '8px', fontSize: '0.95rem' }}>Active Ingredients:</h4>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                {product.ingredients.map((ing, i) => (
                  <li key={i} style={{ marginBottom: '4px' }}>{ing}</li>
                ))}
              </ul>

              <div style={{ background: 'rgba(194, 97, 58, 0.06)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(194, 97, 58, 0.2)', fontSize: '0.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-terracotta)', fontWeight: '700', marginBottom: '4px' }}>
                  <AlertCircle size={14} />
                  <span>Patch Test & Safety Guidance</span>
                </div>
                <div>{product.warning}</div>
              </div>
            </div>
          )}

          {/* TAB 2: RITUAL GUIDE */}
          {activeTab === 'ritual' && (
            <div style={{ fontSize: '0.88rem', color: 'var(--color-text-main)', lineHeight: 1.6, flex: 1, overflowY: 'auto' }}>
              <h4 style={{ color: 'var(--color-dacha-brown)', marginBottom: '12px', fontSize: '1rem' }}>How to Mix & Apply:</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {product.ritual.map((step, idx) => (
                  <div key={idx} style={{ background: '#FFFFFF', padding: '12px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: REVIEWS */}
          {activeTab === 'reviews' && (
            <div style={{ fontSize: '0.88rem', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {reviewSubmitted && (
                <div style={{ background: '#D1FAE5', color: '#065F46', padding: '10px', borderRadius: '10px', fontSize: '0.82rem', fontWeight: '600' }}>
                  ✓ Thank you! Your review has been submitted for moderation.
                </div>
              )}

              {/* Review List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '180px', overflowY: 'auto' }}>
                {reviewsList.map((rev) => (
                  <div key={rev.id} style={{ background: '#FFFFFF', padding: '12px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontWeight: '700', color: 'var(--color-dacha-brown)' }}>{rev.name}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-subtle)' }}>{rev.date}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '2px', marginBottom: '6px' }}>
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />
                      ))}
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--color-text-subtle)' }}>{rev.comment}</p>
                  </div>
                ))}
              </div>

              {/* Add Review Form */}
              <form onSubmit={handleAddReview} style={{ background: '#FFFFFF', padding: '12px', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <h5 style={{ fontSize: '0.85rem', color: 'var(--color-dacha-brown)', marginBottom: '8px' }}>Write a Review</h5>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
                  <input 
                    type="text"
                    placeholder="Your Name"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.8rem' }}
                    required
                  />
                  <select 
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.8rem' }}
                  >
                    <option value={5}>5 Stars ★★★★★</option>
                    <option value={4}>4 Stars ★★★★☆</option>
                    <option value={3}>3 Stars ★★★☆☆</option>
                  </select>
                </div>
                <textarea
                  placeholder="Share your experience with this Dacha blend..."
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.8rem', minHeight: '50px', marginBottom: '8px' }}
                  required
                />
                <button type="submit" style={{ background: 'var(--color-dacha-brown)', color: '#ffffff', padding: '6px 14px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Send size={12} /> Submit Review
                </button>
              </form>
            </div>
          )}

          {/* Add to Cart Footer */}
          <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-border)', borderRadius: '12px', background: '#FFFFFF' }}>
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ padding: '8px 12px', fontWeight: '700', color: 'var(--color-dacha-brown)' }}
              >
                -
              </button>
              <span style={{ padding: '0 8px', fontWeight: '700', fontSize: '0.9rem' }}>{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                style={{ padding: '8px 12px', fontWeight: '700', color: 'var(--color-dacha-brown)' }}
              >
                +
              </button>
            </div>

            <button 
              onClick={() => {
                onAddToCart(product, quantity);
                onClose();
              }}
              className="btn-primary" 
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <ShoppingBag size={18} />
              <span>Add to Cart (₹{product.price * quantity})</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
