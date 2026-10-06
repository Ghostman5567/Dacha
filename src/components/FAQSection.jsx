import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/products';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section style={{ padding: '80px 0', background: '#FAF5EF' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="badge-tag">Customer Support</span>
          <h2 style={{ fontSize: '2.6rem', color: 'var(--color-dacha-brown)', marginTop: '8px' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}>
          {FAQS.map((faq, idx) => (
            <div 
              key={idx}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid var(--color-border)',
                overflow: 'hidden'
              }}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                style={{
                  width: '100%',
                  padding: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'left',
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  color: 'var(--color-dacha-brown)'
                }}
              >
                <span>{faq.q}</span>
                {openIdx === idx ? <ChevronUp size={20} color="var(--color-terracotta)" /> : <ChevronDown size={20} color="var(--color-text-subtle)" />}
              </button>

              {openIdx === idx && (
                <div style={{ padding: '0 20px 20px', fontSize: '0.92rem', color: 'var(--color-text-subtle)', lineHeight: 1.6, borderTop: '1px solid var(--color-cream-bg)' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support Direct Contact Cards */}
        <div style={{ background: '#FFFFFF', padding: '28px', borderRadius: '20px', border: '1px solid var(--color-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'center' }}>
          <div>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--color-dacha-brown)', marginBottom: '4px' }}>Need Human Support?</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-subtle)' }}>Our skincare advisors are available Mon-Sat 10am-7pm IST.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--color-dacha-brown)', fontWeight: '600' }}>
              <Phone size={16} color="var(--color-terracotta)" /> <span>+91 99874 47541</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--color-dacha-brown)', fontWeight: '600' }}>
              <Mail size={16} color="var(--color-terracotta)" /> <span>charulk0303@gmail.com</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
