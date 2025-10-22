import React from 'react';
import { render, screen } from '@testing-library/react';
import Connect from './Connect';

// Mock router components
jest.mock('react-router-dom', () => ({
  Link: ({ children, to, target, ...props }) => (
    <a href={to} target={target} {...props}>
      {children}
    </a>
  ),
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));

describe('Connect Component', () => {
  const mockProps = {
    linkedin: 'https://linkedin.com/in/testuser',
    github: 'https://github.com/testuser',
    contact: 'contact',
    resume: 'https://example.com/resume.pdf'
  };

  test('renders without crashing', () => {
    render(<Connect {...mockProps} />);
  });

  test('renders with all required props', () => {
    render(<Connect {...mockProps} />);
    
    // Component should render without errors when all props are provided
    const connectElement = document.querySelector('.connect');
    expect(connectElement).toBeInTheDocument();
  });

  test('handles missing props gracefully', () => {
    // Test with minimal props
    render(<Connect linkedin="https://linkedin.com" />);
    
    // Should still render without crashing
    const connectElement = document.querySelector('.connect');
    expect(connectElement).toBeInTheDocument();
  });

  test('renders social media links when provided', () => {
    render(<Connect {...mockProps} />);
    
    // Check if links are rendered (implementation may vary)
    // This test structure assumes the component creates clickable elements
    const links = document.querySelectorAll('a');
    expect(links.length).toBeGreaterThan(0);
  });

  test('connect component has proper structure', () => {
    render(<Connect {...mockProps} />);
    
    const connectDiv = document.querySelector('.connect');
    expect(connectDiv).toBeInTheDocument();
  });

  test('handles empty props object', () => {
    render(<Connect />);
    
    // Should render without crashing even with no props
    const connectElement = document.querySelector('.connect');
    expect(connectElement).toBeInTheDocument();
  });

  test('validates prop types when provided', () => {
    // Test with proper string props
    expect(() => {
      render(<Connect 
        linkedin="https://linkedin.com" 
        github="https://github.com" 
        contact="contact" 
        resume="https://resume.com" 
      />);
    }).not.toThrow();
  });
});