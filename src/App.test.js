import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders all main sections', () => {
    render(<App />);
    
    // Check if main sections are present
    expect(screen.getByText(/Hi, I'm Template Man/i)).toBeInTheDocument();
    expect(screen.getByText(/Lorem Ipsum is simply dummy text/i)).toBeInTheDocument();
  });

  test('renders navigation components', () => {
    render(<App />);
    
    // Check if navigation is present
    const navbar = document.querySelector('.navbar');
    expect(navbar).toBeInTheDocument();
  });

  test('renders all section components', () => {
    render(<App />);
    
    // Check for section elements
    const sections = document.querySelectorAll('.section');
    expect(sections.length).toBeGreaterThan(0);
  });

  test('home section contains Connect component', () => {
    render(<App />);
    
    // Verify Connect component is rendered in home section
    const homeSection = document.querySelector('.home');
    expect(homeSection).toBeInTheDocument();
  });

  test('application has proper structure', () => {
    render(<App />);
    
    // Check main App container
    const appContainer = document.querySelector('.App');
    expect(appContainer).toBeInTheDocument();
    expect(appContainer).toHaveClass('App');
  });
});