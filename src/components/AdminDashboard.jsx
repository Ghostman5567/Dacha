import React, { useState } from 'react';
import { ShieldCheck, Package, ShoppingCart, DollarSign, Users, Check, X, Edit, Eye, Filter } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function AdminDashboard({ products, setProducts }) {
  const [activeTab, setActiveTab] = useState('orders'); // orders, products, reviews
  const [orders, setOrders] = useState([
    { id: 'DACHA-894102', customer: 'Charul Sharma', items: 'Multani Mitti + Raspberry (x2)', total: 998, status: 'Packed', date: 'Oct 6, 2026', payment: 'Paid (UPI)' },
    { id: 'DACHA-894101', customer: 'Aarav Patel', items: 'Multani Mitti + Chandan (x1)', total: 549, status: 'Shipped', date: 'Oct 5, 2026', payment: 'Paid (Card)' },
    { id: 'DACHA-894100', customer: 'Priya Nair', items: 'Multani Mitti + Panch Haldi (x1)', total: 499, status: 'Delivered', date: 'Oct 4, 2026', payment: 'Paid (COD)' }
  ]);

  const toggleStock = (id) => {
    setProducts(products.map(p => p.id === id ? { ...p, stock: p.stock === 0 ? 50 : 0 } : p));
  };

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  return (
    <section style={{ padding: '40px 0 80px', background: '#FAF5EF', minHeight: '80vh' }}>
      <div className="container">
        
        {/* Admin Header */}
        <div style={{ background: 'var(--color-dark-accent)', color: '#FAF5EF', padding: '24px 32px', borderRadius: '20px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(230,194,167,0.2)', color: 'var(--color-soft-peach)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700' }}>
              <ShieldCheck size={14} /> Store Admin Mode
            </div>
            <h1 style={{ fontSize: '2rem', color: '#FAF5EF', marginTop: '6px' }}>Dacha Operations Dashboard</h1>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={() => setActiveTab('orders')}
              style={{
                background: activeTab === 'orders' ? 'var(--color-terracotta)' : 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                padding: '8px 18px',
                borderRadius: '14px',
                fontWeight: '600',
                fontSize: '0.88rem'
              }}
            >
              Orders ({orders.length})
            </button>
            <button 
              onClick={() => setActiveTab('products')}
              style={{
                background: activeTab === 'products' ? 'var(--color-terracotta)' : 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                padding: '8px 18px',
                borderRadius: '14px',
                fontWeight: '600',
                fontSize: '0.88rem'
              }}
            >
              Products ({products.length})
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
            <div style={{ color: 'var(--color-text-subtle)', fontSize: '0.82rem', fontWeight: '600' }}>Total Store Revenue</div>
            <div style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--color-dacha-brown)', marginTop: '4px' }}>₹1,48,920</div>
            <div style={{ fontSize: '0.75rem', color: '#065F46', fontWeight: '600', marginTop: '4px' }}>+18.4% this week</div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
            <div style={{ color: 'var(--color-text-subtle)', fontSize: '0.82rem', fontWeight: '600' }}>Active Customer Orders</div>
            <div style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--color-dacha-brown)', marginTop: '4px' }}>{orders.length}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-terracotta)', fontWeight: '600', marginTop: '4px' }}>3 Pending Packing</div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
            <div style={{ color: 'var(--color-text-subtle)', fontSize: '0.82rem', fontWeight: '600' }}>Top Selling Variant</div>
            <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--color-dacha-brown)', marginTop: '4px' }}>Chandan #03</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-subtle)', marginTop: '4px' }}>215 Jars Sold</div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
            <div style={{ color: 'var(--color-text-subtle)', fontSize: '0.82rem', fontWeight: '600' }}>Quiz Completion Rate</div>
            <div style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--color-dacha-brown)', marginTop: '4px' }}>84.2%</div>
            <div style={{ fontSize: '0.75rem', color: '#065F46', fontWeight: '600', marginTop: '4px' }}>High discovery match</div>
          </div>
        </div>

        {/* TAB 1: ORDERS */}
        {activeTab === 'orders' && (
          <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '24px', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-dacha-brown)', marginBottom: '16px' }}>Customer Orders Management</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--color-border)', color: 'var(--color-text-subtle)' }}>
                    <th style={{ padding: '12px' }}>Order Ref</th>
                    <th style={{ padding: '12px' }}>Customer</th>
                    <th style={{ padding: '12px' }}>Items</th>
                    <th style={{ padding: '12px' }}>Total</th>
                    <th style={{ padding: '12px' }}>Payment</th>
                    <th style={{ padding: '12px' }}>Status</th>
                    <th style={{ padding: '12px' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '12px', fontWeight: '700', color: 'var(--color-dacha-brown)' }}>{o.id}</td>
                      <td style={{ padding: '12px' }}>{o.customer}</td>
                      <td style={{ padding: '12px' }}>{o.items}</td>
                      <td style={{ padding: '12px', fontWeight: '700' }}>₹{o.total}</td>
                      <td style={{ padding: '12px', color: '#065F46' }}>{o.payment}</td>
                      <td style={{ padding: '12px' }}>
                        <span style={{
                          padding: '4px 10px',
                          borderRadius: '10px',
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          background: o.status === 'Delivered' ? '#D1FAE5' : o.status === 'Shipped' ? '#DBEAFE' : '#FEF3C7',
                          color: o.status === 'Delivered' ? '#065F46' : o.status === 'Shipped' ? '#1E40AF' : '#92400E'
                        }}>
                          {o.status}
                        </span>
                      </td>
                      <td style={{ padding: '12px' }}>
                        <select 
                          value={o.status}
                          onChange={(e) => updateOrderStatus(o.id, e.target.value)}
                          style={{ padding: '4px 8px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '0.78rem' }}
                        >
                          <option value="Packed">Packed</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCTS */}
        {activeTab === 'products' && (
          <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '24px', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-dacha-brown)', marginBottom: '16px' }}>Catalog & Stock Control</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--color-border)', color: 'var(--color-text-subtle)' }}>
                    <th style={{ padding: '12px' }}>Variant #</th>
                    <th style={{ padding: '12px' }}>Product Blend</th>
                    <th style={{ padding: '12px' }}>Price</th>
                    <th style={{ padding: '12px' }}>Concern Tag</th>
                    <th style={{ padding: '12px' }}>Stock Units</th>
                    <th style={{ padding: '12px' }}>Status</th>
                    <th style={{ padding: '12px' }}>Toggle Stock</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '12px', fontWeight: '700' }}>#{p.variantNo}</td>
                      <td style={{ padding: '12px', fontWeight: '600', color: 'var(--color-dacha-brown)' }}>{p.name}</td>
                      <td style={{ padding: '12px' }}>₹{p.price}</td>
                      <td style={{ padding: '12px' }}><span className="badge-tag">{p.concern}</span></td>
                      <td style={{ padding: '12px', fontWeight: '700' }}>{p.stock}</td>
                      <td style={{ padding: '12px' }}>
                        <span style={{
                          padding: '4px 8px',
                          borderRadius: '8px',
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          background: p.stock > 0 ? '#D1FAE5' : '#FEE2E2',
                          color: p.stock > 0 ? '#065F46' : '#991B1B'
                        }}>
                          {p.stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </td>
                      <td style={{ padding: '12px' }}>
                        <button 
                          onClick={() => toggleStock(p.id)}
                          style={{
                            background: p.stock > 0 ? '#FEE2E2' : '#D1FAE5',
                            color: p.stock > 0 ? '#991B1B' : '#065F46',
                            padding: '4px 10px',
                            borderRadius: '8px',
                            fontSize: '0.78rem',
                            fontWeight: '700'
                          }}
                        >
                          {p.stock > 0 ? 'Set Out of Stock' : 'Restock 50 Units'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
