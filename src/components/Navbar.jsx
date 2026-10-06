import React from 'react';
import { ShoppingBag, Sparkles, Heart, UserCheck, ShieldCheck, Menu, X, Search } from 'lucide-react';

export default function Navbar({ 
  cartCount, 
  onOpenCart, 
  onOpenQuiz, 
  activeTab, 
  setActiveTab,
  isAdminMode,
  setIsAdminMode,
  wishlistCount 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#FAF5EF' }}>
      {/* Top Banner */}
      <div style={{ 
        background: 'linear-gradient(90deg, #863D28, #C2613A, #863D28)', 
        color: '#FAF5EF', 
        padding: '8px 16px', 
        fontSize: '0.82rem', 
        textAlign: 'center',
        fontWeight: '600',
        letterSpacing: '0.5px',
        display: 'flex',
        alignItems: 'center',
        justifyInBetween: 'center',
        gap: '8px'
      }}>
        <div style={{ margin: '0 auto', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={14} color="#CE9777" />
          <span>DACHA UNFILTERED: Free Express Shipping on orders over ₹799 | Use Code <strong>UNFILTERED10</strong></span>
        </div>

        {/* Admin Quick Switch Button */}
        <button 
          onClick={() => setIsAdminMode(!isAdminMode)}
          style={{
            background: isAdminMode ? '#FAF5EF' : 'rgba(255,255,255,0.2)',
            color: isAdminMode ? '#863D28' : '#FAF5EF',
            border: 'none',
            padding: '3px 10px',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer'
          }}
        >
          <ShieldCheck size={12} />
          {isAdminMode ? 'Exit Admin Mode' : 'Admin Demo'}
        </button>
      </div>

      {/* Main Header */}
      <div className="container" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        height: '80px',
        borderBottom: '1px solid var(--color-border)'
      }}>
        {/* Logo */}
        <div 
          onClick={() => setActiveTab('home')}
          style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
        >
          <span style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: '2.2rem', 
            fontWeight: '700', 
            letterSpacing: '2px',
            color: 'var(--color-dacha-brown)',
            lineHeight: 1
          }}>
            DACHA
          </span>
          <span style={{ 
            fontSize: '0.7rem', 
            letterSpacing: '3px', 
            textTransform: 'uppercase', 
            color: 'var(--color-terracotta)',
            fontWeight: '700'
          }}>
            Unfiltered.
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <button 
            onClick={() => setActiveTab('home')} 
            style={{ 
              fontWeight: activeTab === 'home' ? '700' : '500', 
              color: activeTab === 'home' ? 'var(--color-terracotta)' : 'var(--color-text-main)',
              fontSize: '0.95rem'
            }}
          >
            Home
          </button>
          
          <button 
            onClick={() => setActiveTab('shop')} 
            style={{ 
              fontWeight: activeTab === 'shop' ? '700' : '500', 
              color: activeTab === 'shop' ? 'var(--color-terracotta)' : 'var(--color-text-main)',
              fontSize: '0.95rem'
            }}
          >
            Shop Blends
          </button>

          <button 
            onClick={onOpenQuiz} 
            style={{ 
              background: 'rgba(194, 97, 58, 0.1)', 
              color: 'var(--color-terracotta)',
              padding: '6px 16px',
              borderRadius: '20px',
              fontWeight: '700', 
              fontSize: '0.88rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              border: '1px solid rgba(194, 97, 58, 0.3)'
            }}
          >
            <Sparkles size={14} />
            Find Your Dacha
          </button>

          <button 
            onClick={() => setActiveTab('journal')} 
            style={{ 
              fontWeight: activeTab === 'journal' ? '700' : '500', 
              color: activeTab === 'journal' ? 'var(--color-terracotta)' : 'var(--color-text-main)',
              fontSize: '0.95rem'
            }}
          >
            Journal
          </button>

          <button 
            onClick={() => setActiveTab('about')} 
            style={{ 
              fontWeight: activeTab === 'about' ? '700' : '500', 
              color: activeTab === 'about' ? 'var(--color-terracotta)' : 'var(--color-text-main)',
              fontSize: '0.95rem'
            }}
          >
            Our Story
          </button>

          <button 
            onClick={() => setActiveTab('faqs')} 
            style={{ 
              fontWeight: activeTab === 'faqs' ? '700' : '500', 
              color: activeTab === 'faqs' ? 'var(--color-terracotta)' : 'var(--color-text-main)',
              fontSize: '0.95rem'
            }}
          >
            Support
          </button>
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {wishlistCount > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-dacha-brown)', fontSize: '0.85rem' }}>
              <Heart size={20} fill="var(--color-terracotta)" color="var(--color-terracotta)" />
              <span>{wishlistCount}</span>
            </div>
          )}

          {/* Cart Icon */}
          <button 
            onClick={onOpenCart}
            style={{
              position: 'relative',
              background: 'var(--color-dacha-brown)',
              color: '#ffffff',
              padding: '10px 16px',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: '600',
              fontSize: '0.9rem',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <ShoppingBag size={18} />
            <span>Bag</span>
            <span style={{
              background: 'var(--color-terracotta)',
              color: '#ffffff',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '700'
            }}>
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
