import React from 'react';

export default function AnnouncementBar({ variant = 'default', city = null }) {
  const isProductOrService = variant === 'workshop';

  return (
    <div className="announcement-bar">
      <div className="announcement-slider">
        <div className="announcement-track">
          {city ? (
            <>
              <span className="announcement-item">Free Estimates on All Orders | Quality Aluminium &amp; Glass Work {city}</span>
              <span className="announcement-item">🔥 Call Master Rahman: +92 302 1054485 🔥</span>
              <span className="announcement-item">Free Estimates on All Orders | Quality Aluminium &amp; Glass Work {city}</span>
              <span className="announcement-item">🔥 Call Master Rahman: +92 302 1054485 🔥</span>
            </>
          ) : isProductOrService ? (
            <>
              <span className="announcement-item">Free Estimates on All Orders | Quality Aluminium &amp; Glass Work Sialkot</span>
              <span className="announcement-item">🔥 Call Master Rahman: +92 302 1054485 🔥</span>
              <span className="announcement-item">Free Estimates on All Orders | Quality Aluminium &amp; Glass Work Sialkot</span>
              <span className="announcement-item">🔥 Call Master Rahman: +92 302 1054485 🔥</span>
            </>
          ) : (
            <>
              <span className="announcement-item">Free Estimates on All Orders | Quality Aluminium &amp; Glass Work</span>
              <span className="announcement-item">🔥 Trusted Aluminium &amp; Glass Specialists in Pakistan 🔥</span>
              <span className="announcement-item">Free Estimates on All Orders | Quality Aluminium &amp; Glass Work</span>
              <span className="announcement-item">🔥 Trusted Aluminium &amp; Glass Specialists in Pakistan 🔥</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
