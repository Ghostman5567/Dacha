import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, RefreshCw, ShoppingBag, ShieldAlert } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function QuizModal({ isOpen, onClose, onAddToCart, onViewProduct }) {
  const [step, setStep] = useState(1);
  const [skinType, setSkinType] = useState('');
  const [concern, setConcern] = useState('');
  const [scent, setScent] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  if (!isOpen) return null;

  const handleCalculateRecommendation = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      // Deterministic ranking algorithm
      let scored = PRODUCTS.map(p => {
        let score = 0;
        if (p.skinType.includes(skinType) || p.skinType.includes("All Skin Types")) score += 40;
        if (p.concern === concern) score += 40;
        if (p.scent.toLowerCase().includes(scent.toLowerCase())) score += 20;

        return { ...p, matchScore: Math.min(99, 70 + score) };
      });

      scored.sort((a, b) => b.matchScore - a.matchScore);

      setRecommendation({
        primary: scored[0],
        alternatives: [scored[1], scored[2]],
        rationale: `Based on your ${skinType.toLowerCase()} skin type and primary goal for ${concern.toLowerCase()}, your skin will benefit most from ${scored[0].name}. Its ${scored[0].tagline.toLowerCase()} properties detoxify gently while delivering target botanical actives.`
      });
      setIsAnalyzing(false);
      setStep(4);
    }, 1200);
  };

  const resetQuiz = () => {
    setStep(1);
    setSkinType('');
    setConcern('');
    setScent('');
    setRecommendation(null);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
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
        maxWidth: '680px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
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

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }} className="badge-tag">
            <Sparkles size={12} />
            <span>AI Recommendation Engine</span>
          </div>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--color-dacha-brown)' }}>Find Your Dacha</h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-subtle)' }}>
            Answer 3 quick questions to discover your personalized Multani Mitti clay ritual.
          </p>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                style={{ 
                  flex: 1, 
                  height: '4px', 
                  borderRadius: '2px', 
                  background: s <= step ? 'var(--color-terracotta)' : 'var(--color-border)',
                  transition: 'var(--transition)'
                }}
              />
            ))}
          </div>
        )}

        {/* STEP 1: Skin Type */}
        {step === 1 && (
          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-dacha-brown)', marginBottom: '16px' }}>
              1. What is your primary skin type?
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {['Normal', 'Oily', 'Dry', 'Combination', 'Sensitive'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSkinType(type)}
                  style={{
                    padding: '16px',
                    borderRadius: '16px',
                    border: skinType === type ? '2px solid var(--color-terracotta)' : '1px solid var(--color-border)',
                    background: skinType === type ? 'rgba(194, 97, 58, 0.08)' : '#FFFFFF',
                    textAlign: 'left',
                    fontWeight: skinType === type ? '700' : '500',
                    color: skinType === type ? 'var(--color-terracotta)' : 'var(--color-text-main)',
                    fontSize: '1rem',
                    transition: 'var(--transition)'
                  }}
                >
                  {type} Skin
                </button>
              ))}
            </div>

            <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                disabled={!skinType}
                onClick={() => setStep(2)}
                className="btn-primary"
                style={{ opacity: skinType ? 1 : 0.5 }}
              >
                <span>Next Question</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Concern */}
        {step === 2 && (
          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-dacha-brown)', marginBottom: '16px' }}>
              2. What is your top skincare goal?
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { label: 'Glowing & Brightening', value: 'Glowing' },
                { label: 'Oil & Sebum Control', value: 'Oil-Control' },
                { label: 'Soothing & Redness Calm', value: 'Soothing' },
                { label: 'Deep Hydration & Comfort', value: 'Hydration' },
                { label: 'Enzymatic Exfoliation', value: 'Exfoliation' },
                { label: 'Blemish Defense', value: 'Clarifying' }
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setConcern(item.value)}
                  style={{
                    padding: '16px',
                    borderRadius: '16px',
                    border: concern === item.value ? '2px solid var(--color-terracotta)' : '1px solid var(--color-border)',
                    background: concern === item.value ? 'rgba(194, 97, 58, 0.08)' : '#FFFFFF',
                    textAlign: 'left',
                    fontWeight: concern === item.value ? '700' : '500',
                    color: concern === item.value ? 'var(--color-terracotta)' : 'var(--color-text-main)',
                    fontSize: '0.95rem'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={() => setStep(1)} className="btn-secondary">Back</button>
              <button 
                disabled={!concern}
                onClick={() => setStep(3)}
                className="btn-primary"
                style={{ opacity: concern ? 1 : 0.5 }}
              >
                <span>Next Question</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Scent / Aroma Preference */}
        {step === 3 && (
          <div>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-dacha-brown)', marginBottom: '16px' }}>
              3. Which sensory aroma profile do you prefer?
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { label: 'Fruity & Berry Fresh', value: 'Berry' },
                { label: 'Mystic Sandalwood & Earth', value: 'Sandalwood' },
                { label: 'Warm Turmeric & Spice', value: 'Turmeric' },
                { label: 'Gentle Damask Rose', value: 'Rose' },
                { label: 'Invigorating Dark Coffee', value: 'Coffee' },
                { label: 'Zesty Fresh Citrus', value: 'Citrus' }
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setScent(item.value)}
                  style={{
                    padding: '16px',
                    borderRadius: '16px',
                    border: scent === item.value ? '2px solid var(--color-terracotta)' : '1px solid var(--color-border)',
                    background: scent === item.value ? 'rgba(194, 97, 58, 0.08)' : '#FFFFFF',
                    textAlign: 'left',
                    fontWeight: scent === item.value ? '700' : '500',
                    color: scent === item.value ? 'var(--color-terracotta)' : 'var(--color-text-main)',
                    fontSize: '0.95rem'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={() => setStep(2)} className="btn-secondary">Back</button>
              <button 
                disabled={!scent}
                onClick={handleCalculateRecommendation}
                className="btn-primary"
                style={{ opacity: scent ? 1 : 0.5 }}
              >
                <span>Discover My Match</span>
                <Sparkles size={18} />
              </button>
            </div>
          </div>
        )}

        {/* LOADING STATE */}
        {isAnalyzing && (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <RefreshCw size={40} color="var(--color-terracotta)" style={{ animation: 'spin 1s linear infinite', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-dacha-brown)' }}>Analyzing Dacha Knowledge Base...</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-subtle)', marginTop: '8px' }}>
              Matching 11 Multani Mitti botanical formulations to your profile.
            </p>
          </div>
        )}

        {/* STEP 4: RECOMMENDATION RESULT */}
        {step === 4 && recommendation && !isAnalyzing && (
          <div>
            <div style={{ 
              background: '#FFFFFF', 
              borderRadius: '20px', 
              padding: '24px', 
              boxShadow: 'var(--shadow-md)',
              border: '2px solid var(--color-terracotta)',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <span className="badge-tag">Your #1 Match • {recommendation.primary.matchScore}% Match</span>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--color-dacha-brown)', marginTop: '8px' }}>
                    {recommendation.primary.name}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-terracotta)', fontWeight: '600' }}>
                    {recommendation.primary.tagline}
                  </p>
                </div>
                <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--color-dacha-brown)' }}>
                  ₹{recommendation.primary.price}
                </div>
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--color-text-main)', background: 'var(--color-cream-bg)', padding: '16px', borderRadius: '12px', marginBottom: '20px', lineHeight: 1.5 }}>
                ✨ <strong>Why this matches:</strong> {recommendation.rationale}
              </p>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  onClick={() => {
                    onAddToCart(recommendation.primary);
                    onClose();
                  }}
                  className="btn-primary" 
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <ShoppingBag size={18} />
                  <span>Add #1 Match to Cart</span>
                </button>

                <button 
                  onClick={() => {
                    onViewProduct(recommendation.primary);
                    onClose();
                  }}
                  className="btn-secondary"
                >
                  View Details
                </button>
              </div>
            </div>

            {/* Alternatives */}
            <h4 style={{ fontSize: '1.05rem', color: 'var(--color-dacha-brown)', marginBottom: '12px' }}>
              Alternative Compatible Blends:
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              {recommendation.alternatives.map((alt) => (
                <div key={alt.id} style={{ background: '#FFFFFF', padding: '14px', borderRadius: '14px', border: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--color-dacha-brown)' }}>{alt.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)' }}>₹{alt.price}</div>
                  </div>
                  <button 
                    onClick={() => {
                      onAddToCart(alt);
                      onClose();
                    }}
                    style={{ background: 'var(--color-soft-peach)', color: 'var(--color-dacha-brown)', padding: '6px 12px', borderRadius: '12px', fontSize: '0.78rem', fontWeight: '700' }}
                  >
                    + Add
                  </button>
                </div>
              ))}
            </div>

            {/* Non-medical Disclaimer */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.78rem', color: 'var(--color-text-subtle)', background: 'rgba(134, 61, 40, 0.05)', padding: '10px 14px', borderRadius: '10px' }}>
              <ShieldAlert size={16} color="var(--color-terracotta)" />
              <span>Dacha recommendations provide cosmetic skincare guidance based on approved product attributes and do not diagnose medical skin conditions.</span>
            </div>

            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              <button onClick={resetQuiz} style={{ fontSize: '0.85rem', color: 'var(--color-terracotta)', textDecoration: 'underline' }}>
                Retake Quiz
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
