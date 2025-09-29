'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `Name: ${formData.name}\nCompany/Organization: ${formData.company}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    const mailtoLink = `mailto:davisproductspace@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <div 
      style={{
        padding: '40px 20px',
        maxWidth: '100%',
        width: '100%'
      }}
    >
      {/* Header Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 
          style={{
            color: '#3A3A3A',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: '40px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '48.75px',
            marginBottom: '25px'
          }}
        >
          Want to Work With Us?
        </h2>
        
        <div 
          style={{
            color: '#3A3A3A',
            textAlign: 'center',
            fontFamily: '"M PLUS 1", sans-serif',
            fontSize: '22.5px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '32px'
          }}
        >
          Send us an email at{' '}
          <a 
            href="mailto:davisproductspace@gmail.com"
            style={{
              color: '#9966B7',
              fontFamily: '"M PLUS 1", sans-serif',
              fontSize: '22.5px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '32px',
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              textDecorationSkipInk: 'auto',
              textDecorationThickness: 'auto',
              textUnderlineOffset: 'auto',
              textUnderlinePosition: 'from-font',
              textDecoration: 'none'
            }}
          >
            davisproductspace@gmail.com
          </a>
          {' '}or contact us through the form below!
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div style={{ marginBottom: '24px' }}>
          <label 
            htmlFor="name"
            style={{
              color: '#3A3A3A',
              fontFamily: '"M PLUS 1", sans-serif',
              fontSize: '22.5px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '32px',
              display: 'block',
              marginBottom: '8px'
            }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Jane Smith"
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #D8BFD8',
              borderRadius: '6px',
              backgroundColor: 'white',
              fontSize: '16px',
              fontFamily: '"M PLUS 1", sans-serif',
              color: '#3A3A3A',
              boxSizing: 'border-box',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#9966B7'}
            onBlur={(e) => e.target.style.borderColor = '#D8BFD8'}
          />
        </div>

        {/* Company/Organization Field */}
        <div style={{ marginBottom: '24px' }}>
          <label 
            htmlFor="company"
            style={{
              color: '#3A3A3A',
              fontFamily: '"M PLUS 1", sans-serif',
              fontSize: '22.5px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '32px',
              display: 'block',
              marginBottom: '8px'
            }}
          >
            Company/Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Product Space @ UCD"
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #D8BFD8',
              borderRadius: '6px',
              backgroundColor: 'white',
              fontSize: '16px',
              fontFamily: '"M PLUS 1", sans-serif',
              color: '#3A3A3A',
              boxSizing: 'border-box',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#9966B7'}
            onBlur={(e) => e.target.style.borderColor = '#D8BFD8'}
          />
        </div>



        {/* Message Field */}
        <div style={{ marginBottom: '32px' }}>
          <label 
            htmlFor="message"
            style={{
              color: '#3A3A3A',
              fontFamily: '"M PLUS 1", sans-serif',
              fontSize: '22.5px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '32px',
              display: 'block',
              marginBottom: '8px'
            }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Jane Smith"
            rows={6}
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #D8BFD8',
              borderRadius: '6px',
              backgroundColor: 'white',
              fontSize: '16px',
              fontFamily: '"M PLUS 1", sans-serif',
              color: '#3A3A3A',
              boxSizing: 'border-box',
              outline: 'none',
              resize: 'vertical',
              minHeight: '120px',
              transition: 'border-color 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#9966B7'}
            onBlur={(e) => e.target.style.borderColor = '#D8BFD8'}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '14px 24px',
            backgroundColor: '#9966B7',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '18px',
            fontFamily: '"M PLUS 1", sans-serif',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#8A5BA3'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#9966B7'}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
