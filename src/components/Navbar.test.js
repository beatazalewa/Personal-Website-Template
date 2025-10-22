import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

// Mock react-scroll Link component
jest.mock('react-scroll', () => ({
  Link: ({ children, to, ...props }) => (
    <div data-testid={`link-${to}`} {...props}>
      {children}
    </div>
  ),
}));

describe('Navbar Component', () => {
  test('renders without crashing', () => {
    render(<Navbar />);
  });

  test('renders all navigation links', () => {
    render(<Navbar />);
    
    // Check for navigation links
    expect(screen.getByTestId('link-skills-marker')).toBeInTheDocument();
    expect(screen.getByTestId('link-background-marker')).toBeInTheDocument();
    expect(screen.getByTestId('link-projects')).toBeInTheDocument();
    expect(screen.getByTestId('link-hobby-marker')).toBeInTheDocument();
    expect(screen.getByTestId('link-contact-marker')).toBeInTheDocument();
    expect(screen.getByTestId('link-home')).toBeInTheDocument();
  });

  test('navigation links have correct text content', () => {
    render(<Navbar />);
    
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Background')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Hobby')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('navbar has proper structure', () => {
    render(<Navbar />);
    
    const navbar = document.querySelector('.navbar');
    expect(navbar).toBeInTheDocument();
    
    const navbarLinkGroups = document.querySelectorAll('.navbar-link-group');
    expect(navbarLinkGroups).toHaveLength(2);
  });

  test('avatar image is present in home link', () => {
    render(<Navbar />);
    
    const avatar = document.querySelector('.avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('alt', 'avatar');
  });

  test('navigation links are properly grouped', () => {
    render(<Navbar />);
    
    const linkGroups = document.querySelectorAll('.navbar-link-group');
    expect(linkGroups).toHaveLength(2);
    
    // First group should contain Skills and Background
    const firstGroup = linkGroups[0];
    expect(firstGroup).toContainElement(screen.getByTestId('link-skills-marker'));
    expect(firstGroup).toContainElement(screen.getByTestId('link-background-marker'));
    
    // Second group should contain Projects, Hobby, and Contact
    const secondGroup = linkGroups[1];
    expect(secondGroup).toContainElement(screen.getByTestId('link-projects'));
    expect(secondGroup).toContainElement(screen.getByTestId('link-hobby-marker'));
    expect(secondGroup).toContainElement(screen.getByTestId('link-contact-marker'));
  });
});