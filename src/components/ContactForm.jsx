import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Aluminium Doors',
    message: ''
  });
  const [captchaChecked, setCaptchaChecked] = useState(true);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    fetch('https://formspree.io/f/mlgygblb', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _subject: 'New Estimate Request — Rahman Website',
        ...formData
      })
    })
      .then((res) => {
        if (res.ok) {
          setStatus('success');
        } else {
          setStatus('error');
        }
      })
      .catch(() => {
        setStatus('error');
      });
  };

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
        <h3 style={{ color: '#C9A24B', fontSize: '22px', marginBottom: '12px' }}>
          Message Sent Successfully!
        </h3>
        <p style={{ color: '#94A3B8', marginBottom: '20px' }}>
          Thank you for contacting Rahman. We will get back to you within 24 hours.
        </p>
        <a
          href="https://wa.me/923021054485"
          style={{
            background: '#25D366',
            color: 'white',
            padding: '12px 28px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            display: 'inline-block'
          }}
        >
          💬 Chat on WhatsApp Instead
        </a>
      </div>
    );
  }

  return (
    <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New Estimate Request — Rahman Website" />

      <div className="form-group">
        <label htmlFor="full-name">Full Name *</label>
        <input
          type="text"
          id="full-name"
          name="name"
          placeholder="Your Full Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone-number">Phone Number *</label>
        <input
          type="tel"
          id="phone-number"
          name="phone"
          placeholder="+92 300 0000000"
          required
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email-address">Email Address</label>
        <input
          type="email"
          id="email-address"
          name="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group-select">
        <label htmlFor="service-needed">Service Needed</label>
        <select
          id="service-needed"
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="Aluminium Doors">Aluminium Doors</option>
          <option value="Aluminium Windows">Aluminium Windows</option>
          <option value="Shopfront">Aluminium Shopfront</option>
          <option value="Wall Mirror">Wall Mirror</option>
          <option value="LED Mirror">LED Mirror</option>
          <option value="Glass Partition">Glass Partition</option>
          <option value="Shower Cabin">Shower Cabin</option>
          <option value="Other">Other Custom Work</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="project-details">Project Details</label>
        <textarea
          id="project-details"
          name="message"
          rows="4"
          placeholder="Tell us about dimensions, location in Sialkot, and preferences..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* hCaptcha Protection Widget Mockup */}
      <div className="hcaptcha-placeholder">
        <div
          className={`hcaptcha-checkbox ${captchaChecked ? 'checked' : ''}`}
          id="hcaptcha-check"
          title="Click to verify"
          onClick={() => setCaptchaChecked(!captchaChecked)}
          style={{ cursor: 'pointer' }}
        ></div>
        <span>I am human (hCaptcha protected)</span>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--space-md)' }}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Submit Request'}
      </button>

      {status === 'error' && (
        <p id="form-error" style={{ color: '#ef4444', marginTop: '12px', fontSize: '14px' }}>
          ❌ Something went wrong. Please try again or WhatsApp us directly.
        </p>
      )}
    </form>
  );
}
