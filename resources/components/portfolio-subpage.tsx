import React from 'react';
import { portfolioItems } from '../data/portfolio-items';

const PortfolioSubpage: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Portfolio</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              maxWidth: '300px',
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.subpage} style={{ color: 'blue', textDecoration: 'underline' }}>
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSubpage;