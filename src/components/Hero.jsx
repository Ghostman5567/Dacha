import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Leaf, HeartHandshake, Award } from 'lucide-react';

export default function Hero({ onShopClick, onQuizClick }) {
  return (
    <section style={{ 
      position: 'relative',
      padding: '60px 0 80px',
      background: 'radial-gradient(circle at 80% 20%, #F5E8DC 0%, #FAF5EF 60%)',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
        
        {/* Left Column: Brand Copy */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }} className="badge-tag">
            <Sparkles size={14} />
            <span>Modern Indian Skincare</span>
          </div>

          <h1 style={{ 
            fontSize: '3.6rem', 
            color: 'var(--color-dacha-brown)', 
            marginBottom: '20px',
            fontStyle: 'italic',
            lineHeight: 1.15
          }}>
            DACHA. Unfiltered. <br/>
            <span style={{ fontStyle: 'normal', fontWeight: '700', color: 'var(--color-terracotta)' }}>
              Multani Mitti, reimagined.
            </span>
          </h1>

          <p style={{ 
            fontSize: '1.15rem', 
            color: 'var(--color-text-subtle)', 
            marginBottom: '32px',
            maxWidth: '520px',
            lineHeight: 1.6
          }}>
            Your skincare ritual, your rules. Discover 100% natural Fuller's Earth clay face mask blends infused with freeze-dried organic raspberries, Mysore sandalwood, and 5-turmeric botanicals.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <button onClick={onShopClick} className="btn-primary">
              <span>Shop All 11 Blends</span>
              <ArrowRight size={18} />
            </button>

            <button onClick={onQuizClick} className="btn-secondary">
              <Sparkles size={18} color="var(--color-terracotta)" />
              <span>Find Your Dacha Quiz</span>
            </button>
          </div>

          {/* Social Proof Pills */}
          <div style={{ 
            display: 'flex', 
            gap: '24px', 
            paddingTop: '24px', 
            borderTop: '1px solid var(--color-border)',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--color-dacha-brown)' }}>4.9 ★</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)' }}>1,400+ Verified Reviews</div>
            </div>
            <div style={{ width: '1px', height: '36px', background: 'var(--color-border)' }}></div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--color-dacha-brown)' }}>100%</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)' }}>Natural Freeze-Dried Powders</div>
            </div>
            <div style={{ width: '1px', height: '36px', background: 'var(--color-border)' }}></div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--color-dacha-brown)' }}>₹499</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)' }}>Starting Retail Price</div>
            </div>
          </div>
        </div>

        {/* Right Column: Imagery Showcase */}
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            border: '6px solid #FFFFFF'
          }}>
            <img 
              src="/images/hero.jpg" 
              alt="Dacha Multani Mitti Skincare Blends" 
              style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block' }}
            />
            
            {/* Floating Overlay Badge 1 */}
            <div style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(8px)',
              padding: '14px 20px',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              maxWidth: '280px'
            }}>
              <div style={{ 
                background: 'var(--color-soft-peach)', 
                color: 'var(--color-dacha-brown)', 
                padding: '10px', 
                borderRadius: '12px' 
              }}>
                <Leaf size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-dacha-brown)' }}>
                  Zero Preservatives
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-subtle)' }}>
                  Activated freshly at the moment of use
                </div>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'var(--color-dacha-brown)',
              color: '#ffffff',
              padding: '10px 16px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: 'var(--shadow-md)'
            }}>
              <ShieldCheck size={16} color="var(--color-soft-peach)" />
              <span>Dermatologically Safe</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
