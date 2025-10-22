import React from 'react';
import { render, screen } from '@testing-library/react';
import Hobby from './Hobby';

// Mock Animation component
jest.mock('./Animation', () => {
  return function MockAnimation({ fileName }) {
    return <div data-testid="animation" data-filename={fileName}>Animation: {fileName}</div>;
  };
});

describe('Hobby Component', () => {
  test('renders without crashing', () => {
    render(<Hobby />);
  });

  test('renders hobby section heading', () => {
    render(<Hobby />);
    
    expect(screen.getByText('My Hobby: Beekeeping')).toBeInTheDocument();
  });

  test('renders main content sections', () => {
    render(<Hobby />);
    
    expect(screen.getByText('The Fascinating World of Bees')).toBeInTheDocument();
    expect(screen.getByText('Why Bees Matter')).toBeInTheDocument();
    expect(screen.getByText('Amazing Bee Facts')).toBeInTheDocument();
    expect(screen.getByText('My Beekeeping Journey')).toBeInTheDocument();
  });

  test('renders bee facts list', () => {
    render(<Hobby />);
    
    // Check for specific bee facts
    expect(screen.getByText(/A single bee colony can contain up to 60,000 bees/)).toBeInTheDocument();
    expect(screen.getByText(/Bees must visit about 2 million flowers/)).toBeInTheDocument();
    expect(screen.getByText(/waggle dance/)).toBeInTheDocument();
    expect(screen.getByText(/queen bee can live up to 5 years/)).toBeInTheDocument();
  });

  test('renders educational content about bees', () => {
    render(<Hobby />);
    
    expect(screen.getByText(/Beekeeping has become one of my most rewarding hobbies/)).toBeInTheDocument();
    expect(screen.getByText(/one-third of the food we eat/)).toBeInTheDocument();
    expect(screen.getByText(/sustainable beekeeping practices/)).toBeInTheDocument();
  });

  test('has proper section structure', () => {
    render(<Hobby />);
    
    const hobbySection = document.querySelector('.hobby.section');
    expect(hobbySection).toBeInTheDocument();
    expect(hobbySection).toHaveAttribute('id', 'hobby');
    
    const hobbyContainer = document.querySelector('.hobby-container');
    expect(hobbyContainer).toBeInTheDocument();
  });

  test('renders animation component', () => {
    render(<Hobby />);
    
    const animation = screen.getByTestId('animation');
    expect(animation).toBeInTheDocument();
    expect(animation).toHaveAttribute('data-filename', 'other-tech.json');
  });

  test('renders bee icon and hexagon pattern', () => {
    render(<Hobby />);
    
    const beeIcon = document.querySelector('.hobby-bee-icon');
    expect(beeIcon).toBeInTheDocument();
    expect(beeIcon).toHaveTextContent('🐝');
    
    const hexagonPattern = document.querySelector('.hobby-hexagon-pattern');
    expect(hexagonPattern).toBeInTheDocument();
    
    const hexagons = document.querySelectorAll('.hobby-hexagon');
    expect(hexagons).toHaveLength(6);
  });

  test('renders fact containers with proper styling', () => {
    render(<Hobby />);
    
    const factsContainer = document.querySelector('.hobby-facts-container');
    expect(factsContainer).toBeInTheDocument();
    
    const journeyContainer = document.querySelector('.hobby-journey-container');
    expect(journeyContainer).toBeInTheDocument();
  });

  test('contact marker is present', () => {
    render(<Hobby />);
    
    const contactMarker = document.querySelector('#contact-marker');
    expect(contactMarker).toBeInTheDocument();
  });

  test('hobby content section is properly structured', () => {
    render(<Hobby />);
    
    const hobbyContent = document.querySelector('.hobby-content');
    expect(hobbyContent).toBeInTheDocument();
    
    const hobbySection = document.querySelector('.hobby-section');
    expect(hobbySection).toBeInTheDocument();
    
    const hobbyAnimation = document.querySelector('.hobby-animation');
    expect(hobbyAnimation).toBeInTheDocument();
  });
});