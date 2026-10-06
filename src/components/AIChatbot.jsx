import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function AIChatbot({ onNavigateToProduct, onOpenQuiz }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Namaste! 👋 I am your Dacha Skincare Assistant. Ask me anything about our 11 Multani Mitti clay blends, usage rituals, or patch testing!'
    }
  ]);

  const quickQuestions = [
    "Which blend is best for oily skin?",
    "How often should I apply Multani Mitti?",
    "Is Panch Haldi non-staining?",
    "Take Skincare Recommendation Quiz"
  ];

  const handleSendMessage = (textToSend) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const newMsgs = [...messages, { sender: 'user', text }];
    setMessages(newMsgs);
    setInput('');

    setTimeout(() => {
      let botReply = "";
      const lower = text.toLowerCase();

      if (lower.includes('quiz') || lower.includes('find your dacha')) {
        botReply = "You can take our interactive 'Find Your Dacha' quiz! It matches your skin type, skincare goal, and aroma preferences with precision.";
        onOpenQuiz();
      } else if (lower.includes('oily') || lower.includes('sebum') || lower.includes('shine')) {
        botReply = "For oily or shine-prone skin, we recommend Multani Mitti + Lemon (#09) for intense oil balancing, or Multani Mitti + Panch Haldi (#05) for clarifying defense.";
      } else if (lower.includes('dry') || lower.includes('hydrate') || lower.includes('moisture')) {
        botReply = "For dry or moisture-seeking skin, try Multani Mitti + Rose (#04) for gentle floral hydration, or Multani Mitti + Avocado (#11) for rich fatty acid barrier repair.";
      } else if (lower.includes('how often') || lower.includes('frequency')) {
        botReply = "We recommend 2-3 times per week for oily skin types, and 1-2 times per week for dry or sensitive skin. Always rinse after 10-12 minutes before the clay bone-dries.";
      } else if (lower.includes('haldi') || lower.includes('turmeric') || lower.includes('stain')) {
        botReply = "Our Panch Haldi blend uses wild non-staining Kasthuri Manjal and Curcuma botanicals. It leaves a natural golden glow that washes off clean with water!";
      } else {
        botReply = "All 11 Dacha blends feature 100% pure Indian Fuller's Earth clay combined with freeze-dried botanical superfoods. Ask me about Raspberry, Chandan, Papaya, Coffee, or Aloe Vera!";
      }

      setMessages([...newMsgs, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 150,
            background: 'linear-gradient(135deg, var(--color-terracotta), var(--color-dacha-brown))',
            color: '#ffffff',
            padding: '14px 20px',
            borderRadius: '30px',
            boxShadow: '0 8px 24px rgba(134,61,40,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: '700',
            fontSize: '0.92rem'
          }}
        >
          <Sparkles size={18} />
          <span>Ask Dacha AI</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 200,
          width: '360px',
          height: '500px',
          background: '#FAF5EF',
          borderRadius: '24px',
          boxShadow: '0 16px 40px rgba(0,0,0,0.25)',
          border: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{ background: 'var(--color-dacha-brown)', color: '#ffffff', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bot size={20} color="var(--color-soft-peach)" />
              <div>
                <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>Dacha Assistant</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-soft-peach)' }}>Grounded Skincare Knowledge</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ color: '#ffffff' }}>
              <X size={20} />
            </button>
          </div>

          {/* Messages List */}
          <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  background: m.sender === 'user' ? 'var(--color-terracotta)' : '#FFFFFF',
                  color: m.sender === 'user' ? '#ffffff' : 'var(--color-text-main)',
                  padding: '10px 14px',
                  borderRadius: m.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                  fontSize: '0.85rem',
                  lineHeight: 1.5,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                  border: m.sender === 'bot' ? '1px solid var(--color-border)' : 'none'
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div style={{ padding: '8px 12px', background: '#FFFFFF', borderTop: '1px solid var(--color-border)', display: 'flex', gap: '6px', overflowX: 'auto' }}>
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(q)}
                style={{
                  whiteSpace: 'nowrap',
                  fontSize: '0.72rem',
                  background: 'var(--color-cream-bg)',
                  color: 'var(--color-dacha-brown)',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontWeight: '600'
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
            style={{ padding: '12px', background: '#FFFFFF', borderTop: '1px solid var(--color-border)', display: 'flex', gap: '8px' }}
          >
            <input
              type="text"
              placeholder="Ask about ingredients, skin goals..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ flex: 1, padding: '8px 12px', borderRadius: '12px', border: '1px solid var(--color-border)', fontSize: '0.82rem' }}
            />
            <button type="submit" style={{ background: 'var(--color-dacha-brown)', color: '#ffffff', padding: '8px 14px', borderRadius: '12px' }}>
              <Send size={14} />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
