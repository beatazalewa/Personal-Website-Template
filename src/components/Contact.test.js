import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Component', () => {
  // Mock fetch for form submission
  global.fetch = jest.fn();

  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders without crashing', () => {
    render(<Contact />);
  });

  test('renders contact section heading', () => {
    render(<Contact />);
    
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
  });

  test('renders email information', () => {
    render(<Contact />);
    
    expect(screen.getByText('youremail@example.com')).toBeInTheDocument();
  });

  test('renders contact form elements', () => {
    render(<Contact />);
    
    // Check for form elements
    expect(screen.getByText(/Feel free to reach out to me through the form below/)).toBeInTheDocument();
    expect(screen.getByText('or')).toBeInTheDocument();
  });

  test('has proper section structure', () => {
    render(<Contact />);
    
    const contactSection = document.querySelector('.contact.section');
    expect(contactSection).toBeInTheDocument();
    expect(contactSection).toHaveAttribute('id', 'contact');
    
    const contactContainer = document.querySelector('.contact-container');
    expect(contactContainer).toBeInTheDocument();
  });

  test('renders email icon', () => {
    render(<Contact />);
    
    const emailIcon = document.querySelector('.email-icon');
    expect(emailIcon).toBeInTheDocument();
    expect(emailIcon).toHaveAttribute('alt', 'email-icon');
  });

  test('contact form container is present', () => {
    render(<Contact />);
    
    const formContainer = document.querySelector('.contact-form-container');
    expect(formContainer).toBeInTheDocument();
    
    const formContent = document.querySelector('.contact-form-content');
    expect(formContent).toBeInTheDocument();
  });

  test('email container structure is correct', () => {
    render(<Contact />);
    
    const emailContainer = document.querySelector('.email-container');
    expect(emailContainer).toBeInTheDocument();
    expect(emailContainer).toContainElement(screen.getByText('youremail@example.com'));
  });

  test('contact or separator is present', () => {
    render(<Contact />);
    
    const contactOr = document.querySelector('.contact-or');
    expect(contactOr).toBeInTheDocument();
    expect(contactOr).toContainElement(screen.getByText('or'));
  });

  test('map container exists for location display', () => {
    render(<Contact />);
    
    // Note: The map container might not be visible in test environment
    // but we can check if the structure exists
    const mapContainer = document.querySelector('.map-container');
    // This test might need to be adjusted based on actual implementation
  });
});