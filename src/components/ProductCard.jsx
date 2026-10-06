import React from 'react';
import { Star, ShoppingBag, Eye, Heart } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onViewDetails, isWishlisted, onToggleWishlist }) {
  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '20px',
      overflow: 'hidden',
      border: '1px solid var(--color-border)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'var(--transition)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}
    className="product-card"
    >
      {/* Top Badge */}
      <div style={{
        position: 'absolute',
        top: '12px',
        left: '12px',
        zIndex: 10,
        display: 'flex',
        gap: '6px'
      }}>
        {product.badge && (
          <span className="badge-tag">
            {product.badge}
          </span>
        )}
        <span style={{
          background: 'var(--color-dark-accent)',
          color: '#ffffff',
          fontSize: '0.7rem',
          fontWeight: '700',
          padding: '4px 8px',
          borderRadius: '12px'
        }}>
          #{product.variantNo}
        </span>
      </div>

      {/* Wishlist Button */}
      <button 
        onClick={() => onToggleWishlist(product)}
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(4px)',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <Heart size={16} fill={isWishlisted ? "var(--color-terracotta)" : "none"} color="var(--color-terracotta)" />
      </button>

      {/* Image Showcase */}
      <div 
        onClick={() => onViewDetails(product)}
        style={{
          position: 'relative',
          height: '240px',
          background: 'var(--color-cream-bg)',
          cursor: 'pointer',
          overflow: 'hidden'
        }}
      >
        <img 
          src={product.image} 
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(30,20,18,0.3) 0%, transparent 50%)',
          opacity: 0,
          transition: 'opacity 0.3s ease'
        }} className="card-hover-overlay" />
      </div>

      {/* Details */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
          <Star size={14} fill="#F59E0B" color="#F59E0B" />
          <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-dacha-brown)' }}>
            {product.rating}
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)' }}>
            ({product.reviewsCount})
          </span>
        </div>

        <h3 
          onClick={() => onViewDetails(product)}
          style={{ 
            fontSize: '1.25rem', 
            color: 'var(--color-dacha-brown)', 
            marginBottom: '4px',
            cursor: 'pointer'
          }}
        >
          {product.name}
        </h3>

        <p style={{ 
          fontSize: '0.82rem', 
          color: 'var(--color-terracotta)', 
          fontWeight: '600',
          marginBottom: '12px' 
        }}>
          {product.tagline}
        </p>

        {/* Skin Type Chips */}
        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '16px' }}>
          {product.skinType.slice(0, 2).map(st => (
            <span key={st} style={{
              background: 'var(--color-cream-bg)',
              color: 'var(--color-text-subtle)',
              fontSize: '0.7rem',
              padding: '2px 8px',
              borderRadius: '8px'
            }}>
              {st}
            </span>
          ))}
        </div>

        {/* Price & Add to Cart Footer */}
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid var(--color-border)' }}>
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--color-dacha-brown)' }}>
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span style={{ fontSize: '0.85rem', textDecoration: 'line-through', color: 'var(--color-text-subtle)', marginLeft: '6px' }}>
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            <button 
              onClick={() => onViewDetails(product)}
              style={{
                background: 'var(--color-cream-bg)',
                color: 'var(--color-dacha-brown)',
                padding: '8px 12px',
                borderRadius: '16px',
                fontSize: '0.8rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Eye size={14} />
            </button>

            <button 
              onClick={() => onAddToCart(product)}
              style={{
                background: 'var(--color-terracotta)',
                color: '#ffffff',
                padding: '8px 16px',
                borderRadius: '16px',
                fontSize: '0.82rem',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 8px rgba(194,97,58,0.25)'
              }}
            >
              <ShoppingBag size={14} />
              <span>Add</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
