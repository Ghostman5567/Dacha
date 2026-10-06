import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/products';

export default function JournalSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section style={{ padding: '80px 0', background: '#FAF5EF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="badge-tag">Dacha Journal</span>
          <h2 style={{ fontSize: '2.8rem', color: 'var(--color-dacha-brown)', marginTop: '8px' }}>
            Unfiltered Skincare Rituals & Science
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-subtle)', maxWidth: '600px', margin: '8px auto 0' }}>
            Deep dives into clay mineralogy, botanical freeze-drying, and daily Indian self-care rituals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {JOURNAL_ARTICLES.map((art) => (
            <div 
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
                transition: 'var(--transition)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <img src={art.image} alt={art.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--color-terracotta)', fontWeight: '700', marginBottom: '8px' }}>
                  <span>{art.category}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> {art.readTime}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-dacha-brown)', marginBottom: '12px', lineHeight: 1.3 }}>
                  {art.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-subtle)', marginBottom: '16px', lineHeight: 1.5 }}>
                  {art.excerpt}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-terracotta)', fontWeight: '700', fontSize: '0.9rem' }}>
                  <span>Read Article</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            background: 'rgba(30,20,18,0.75)',
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
              maxWidth: '720px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '40px',
              position: 'relative'
            }}>
              <button 
                onClick={() => setSelectedArticle(null)}
                style={{ position: 'absolute', top: '20px', right: '20px', background: '#FFFFFF', borderRadius: '50%', padding: '8px', border: 'none' }}
              >
                <X size={20} />
              </button>

              <span className="badge-tag">{selectedArticle.category}</span>
              <h1 style={{ fontSize: '2.4rem', color: 'var(--color-dacha-brown)', margin: '12px 0 8px' }}>
                {selectedArticle.title}
              </h1>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-subtle)', marginBottom: '24px' }}>
                By {selectedArticle.author} • {selectedArticle.date} • {selectedArticle.readTime}
              </div>

              <img src={selectedArticle.image} alt={selectedArticle.title} style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '16px', marginBottom: '24px' }} />

              <div style={{ fontSize: '1rem', color: 'var(--color-text-main)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                {selectedArticle.content}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
