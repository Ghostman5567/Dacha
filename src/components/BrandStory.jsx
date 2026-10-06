import React from 'react';
import { ShieldCheck, Heart, Sparkles, Zap, Leaf } from 'lucide-react';

export default function BrandStory() {
  const principles = [
    { title: "Brand Before Template", desc: "No generic storefront templates. Editorial Indian luxury designed specifically for Multani Mitti clay rituals.", icon: <Sparkles size={24} /> },
    { title: "Personalization Without Medical Claims", desc: "Honest cosmetic guidance grounded in botanical properties. Zero false promises of overnight medical magic.", icon: <ShieldCheck size={24} /> },
    { title: "Trust Before Aggressive Claims", desc: "100% transparent ingredient disclosures, batch testing guidance, and 24-hr patch test advice on every jar.", icon: <Heart size={24} /> },
    { title: "Zero Synthetic Fillers", desc: "Only pure Indian Fuller's Earth clay combined with 100% freeze-dried botanical superfoods.", icon: <Leaf size={24} /> }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'var(--color-dark-accent)', color: '#FAF5EF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ background: 'rgba(230,194,167,0.15)', color: 'var(--color-soft-peach)', padding: '4px 14px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase' }}>
            The Dacha Philosophy
          </span>
          <h2 style={{ fontSize: '3rem', color: '#FAF5EF', marginTop: '12px' }}>
            Unfiltered Skincare, Honest Principles
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-soft-peach)', maxWidth: '650px', margin: '12px auto 0', opacity: 0.9 }}>
            We created Dacha because Indian skincare deserves elevated editorial luxury without the gimmicks.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {principles.map((p, i) => (
            <div key={i} style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '28px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ color: 'var(--color-soft-peach)', marginBottom: '16px' }}>{p.icon}</div>
              <h3 style={{ fontSize: '1.3rem', color: '#FAF5EF', marginBottom: '8px' }}>{p.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-soft-peach)', opacity: 0.8, lineHeight: 1.5 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
