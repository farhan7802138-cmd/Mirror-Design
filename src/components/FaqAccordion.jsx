import React, { useState } from 'react';

export default function FaqAccordion({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <div className="faq-container">
      {items.map((item, idx) => {
        const isActive = activeIndex === idx;
        return (
          <div key={idx} className={`faq-item ${isActive ? 'active' : ''}`}>
            <div
              className="faq-header"
              onClick={() => toggleItem(idx)}
              style={{ cursor: 'pointer' }}
            >
              <h3>{item.q}</h3>
              <span className="faq-icon">{isActive ? '−' : '+'}</span>
            </div>
            <div className="faq-body">
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
