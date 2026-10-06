import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import QuizModal from './components/QuizModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import JournalSection from './components/JournalSection';
import BrandStory from './components/BrandStory';
import FAQSection from './components/FAQSection';
import AdminDashboard from './components/AdminDashboard';
import AIChatbot from './components/AIChatbot';
import { PRODUCTS } from './data/products';
import { Sparkles, ArrowRight, ShieldCheck, Filter, Search } from 'lucide-react';

export default function App() {
  const [products, setProducts] = useState(PRODUCTS);
  const [activeTab, setActiveTab] = useState('home');
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [cart, setCart] = useState([
    { ...PRODUCTS[0], quantity: 1 } // sample item in cart
  ]);
  const [wishlist, setWishlist] = useState(['variant-01', 'variant-03']);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutSummary, setCheckoutSummary] = useState(null);

  // Filters state for Shop page
  const [selectedConcern, setSelectedConcern] = useState('All');
  const [selectedSkinType, setSelectedSkinType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Cart operations
  const handleAddToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { ...product, quantity: qty }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(id);
      return;
    }
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item)));
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleToggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  // Filtered Products for Shop
  const filteredProducts = products.filter((p) => {
    const matchesConcern = selectedConcern === 'All' || p.concern === selectedConcern;
    const matchesSkin = selectedSkinType === 'All' || p.skinType.includes(selectedSkinType) || p.skinType.includes('All Skin Types');
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesConcern && matchesSkin && matchesSearch;
  });

  // Sort
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured default
  });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navbar */}
      <Navbar
        cartCount={cart.reduce((a, c) => a + c.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isAdminMode={isAdminMode}
        setIsAdminMode={setIsAdminMode}
        wishlistCount={wishlist.length}
      />

      {/* Main View rendering */}
      <main style={{ flex: 1 }}>
        {isAdminMode ? (
          <AdminDashboard products={products} setProducts={setProducts} />
        ) : (
          <>
            {activeTab === 'home' && (
              <>
                <Hero
                  onShopClick={() => setActiveTab('shop')}
                  onQuizClick={() => setIsQuizOpen(true)}
                />

                {/* Featured Products Section */}
                <section style={{ padding: '80px 0', background: '#FAF5EF' }}>
                  <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                      <div>
                        <span className="badge-tag">Curated Collection</span>
                        <h2 style={{ fontSize: '2.8rem', color: 'var(--color-dacha-brown)', marginTop: '8px' }}>
                          Multani Mitti Botanical Blends
                        </h2>
                        <p style={{ fontSize: '1rem', color: 'var(--color-text-subtle)' }}>
                          Pure volcanic clay activated with 100% natural freeze-dried superfoods.
                        </p>
                      </div>

                      <button 
                        onClick={() => setActiveTab('shop')}
                        className="btn-secondary"
                      >
                        <span>View All 11 Blends</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
                      {products.slice(0, 4).map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onAddToCart={handleAddToCart}
                          onViewDetails={setSelectedProduct}
                          isWishlisted={wishlist.includes(product.id)}
                          onToggleWishlist={handleToggleWishlist}
                        />
                      ))}
                    </div>
                  </div>
                </section>

                <BrandStory />
                <JournalSection />
                <FAQSection />
              </>
            )}

            {activeTab === 'shop' && (
              <section style={{ padding: '60px 0 80px', background: '#FAF5EF' }}>
                <div className="container">
                  <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <span className="badge-tag">Full Catalog</span>
                    <h1 style={{ fontSize: '3rem', color: 'var(--color-dacha-brown)', marginTop: '8px' }}>
                      Explore Dacha Blends
                    </h1>
                    <p style={{ fontSize: '1rem', color: 'var(--color-text-subtle)', maxWidth: '560px', margin: '8px auto 0' }}>
                      Filtered for your skin type, primary skincare concern, and sensory ritual.
                    </p>
                  </div>

                  {/* Filter & Search Bar */}
                  <div style={{ background: '#FFFFFF', padding: '20px 24px', borderRadius: '20px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-border)', marginBottom: '32px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
                    
                    {/* Concern Filter Pills */}
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {['All', 'Glowing', 'Oil-Control', 'Soothing', 'Hydration', 'Exfoliation', 'Clarifying'].map((c) => (
                        <button
                          key={c}
                          onClick={() => setSelectedConcern(c)}
                          style={{
                            padding: '6px 14px',
                            borderRadius: '16px',
                            fontSize: '0.85rem',
                            fontWeight: selectedConcern === c ? '700' : '500',
                            background: selectedConcern === c ? 'var(--color-terracotta)' : 'var(--color-cream-bg)',
                            color: selectedConcern === c ? '#ffffff' : 'var(--color-dacha-brown)',
                            transition: 'var(--transition)'
                          }}
                        >
                          {c === 'All' ? 'All Concerns' : c}
                        </button>
                      ))}
                    </div>

                    {/* Search & Sort */}
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <div style={{ position: 'relative' }}>
                        <input
                          type="text"
                          placeholder="Search ingredients, benefits..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          style={{ padding: '8px 14px 8px 36px', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '0.85rem' }}
                        />
                        <Search size={16} style={{ position: 'absolute', left: '12px', top: '10px', color: 'var(--color-text-subtle)' }} />
                      </div>

                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        style={{ padding: '8px 14px', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '0.85rem', color: 'var(--color-dacha-brown)' }}
                      >
                        <option value="featured">Sort by: Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                      </select>
                    </div>

                  </div>

                  {/* Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
                    {sortedProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                        onViewDetails={setSelectedProduct}
                        isWishlisted={wishlist.includes(product.id)}
                        onToggleWishlist={handleToggleWishlist}
                      />
                    ))}
                  </div>

                </div>
              </section>
            )}

            {activeTab === 'journal' && <JournalSection />}
            {activeTab === 'about' && <BrandStory />}
            {activeTab === 'faqs' && <FAQSection />}
          </>
        )}
      </main>

      {/* Floating AI Chatbot */}
      <AIChatbot 
        onNavigateToProduct={(p) => setSelectedProduct(p)} 
        onOpenQuiz={() => setIsQuizOpen(true)} 
      />

      {/* Modals & Drawers */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onAddToCart={handleAddToCart}
        onViewProduct={setSelectedProduct}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={handleUpdateQuantity}
        removeFromCart={handleRemoveFromCart}
        onProceedToCheckout={(summary) => {
          setCheckoutSummary(summary);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        summary={checkoutSummary}
        onClearCart={() => setCart([])}
      />

      {/* Footer */}
      <footer style={{ background: 'var(--color-dark-accent)', color: 'var(--color-soft-peach)', padding: '60px 0 30px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', marginBottom: '40px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', fontWeight: '700', color: '#FFFFFF', letterSpacing: '2px' }}>
                DACHA
              </div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--color-terracotta)', fontWeight: '700', marginBottom: '16px' }}>
                Unfiltered.
              </div>
              <p style={{ fontSize: '0.88rem', opacity: 0.8, maxWidth: '320px', lineHeight: 1.6 }}>
                Modern Indian skincare commerce platform for Multani Mitti-based blends. 100% natural, ethically sourced, zero artificial fillers.
              </p>
            </div>

            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '16px' }}>Shop</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', opacity: 0.8 }}>
                <span style={{ cursor: 'pointer' }} onClick={() => setActiveTab('shop')}>All 11 Blends</span>
                <span style={{ cursor: 'pointer' }} onClick={() => setIsQuizOpen(true)}>Find Your Dacha</span>
                <span style={{ cursor: 'pointer' }} onClick={() => setActiveTab('shop')}>Raspberry #01</span>
                <span style={{ cursor: 'pointer' }} onClick={() => setActiveTab('shop')}>Chandan #03</span>
              </div>
            </div>

            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '16px' }}>Information</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', opacity: 0.8 }}>
                <span style={{ cursor: 'pointer' }} onClick={() => setActiveTab('about')}>Our Principles</span>
                <span style={{ cursor: 'pointer' }} onClick={() => setActiveTab('journal')}>Dacha Journal</span>
                <span style={{ cursor: 'pointer' }} onClick={() => setActiveTab('faqs')}>Shipping & Returns</span>
                <span style={{ cursor: 'pointer' }} onClick={() => setActiveTab('faqs')}>Privacy Policy</span>
              </div>
            </div>

            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '16px' }}>Contact</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', opacity: 0.8 }}>
                <div>WhatsApp: +91 99874 47541</div>
                <div>Email: charulk0303@gmail.com</div>
                <div>Primary Market: India</div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.8rem', opacity: 0.6 }}>
            © {new Date().getFullYear()} DACHA Skincare. All rights reserved. Unfiltered.
          </div>
        </div>
      </footer>

    </div>
  );
}
