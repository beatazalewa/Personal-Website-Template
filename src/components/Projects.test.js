import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';

// Mock router components
jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));

describe('Projects Component', () => {
  test('renders without crashing', () => {
    render(<Projects />);
  });

  test('renders projects section heading', () => {
    render(<Projects />);
    
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  test('renders project cards', () => {
    render(<Projects />);
    
    // Check for project cards
    const projectCards = document.querySelectorAll('.project-card');
    expect(projectCards.length).toBeGreaterThan(0);
  });

  test('renders specific project titles', () => {
    render(<Projects />);
    
    // Check for known project titles
    expect(screen.getByText('Personal Website Template')).toBeInTheDocument();
    expect(screen.getByText('QR Code Generator')).toBeInTheDocument();
  });

  test('project cards have proper structure', () => {
    render(<Projects />);
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      expect(card).toHaveClass('project-card');
      
      // Each card should have a screenshot area
      const screenshot = card.querySelector('.project-screenshot');
      expect(screenshot).toBeInTheDocument();
    });
  });

  test('projects have technology information', () => {
    render(<Projects />);
    
    // Check for technology mentions
    expect(screen.getByText(/React.js/)).toBeInTheDocument();
    expect(screen.getByText(/HTML/)).toBeInTheDocument();
    expect(screen.getByText(/CSS/)).toBeInTheDocument();
    expect(screen.getByText(/Python/)).toBeInTheDocument();
    expect(screen.getByText(/Docker/)).toBeInTheDocument();
  });

  test('projects section has proper container structure', () => {
    render(<Projects />);
    
    const projectsSection = document.querySelector('.projects.section');
    expect(projectsSection).toBeInTheDocument();
    expect(projectsSection).toHaveAttribute('id', 'projects');
    
    const projectContainer = document.querySelector('.project-container');
    expect(projectContainer).toBeInTheDocument();
  });

  test('speaker marker is present', () => {
    render(<Projects />);
    
    const speakerMarker = document.querySelector('#speaker-marker');
    expect(speakerMarker).toBeInTheDocument();
  });

  test('project summaries are displayed', () => {
    render(<Projects />);
    
    expect(screen.getByText(/THIS PROJECT. A personal website template/)).toBeInTheDocument();
    expect(screen.getByText(/Developed a QR code generator/)).toBeInTheDocument();
  });
});