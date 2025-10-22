import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Background from './Background';

// Mock child components
jest.mock('./Education', () => {
  return function MockEducation() {
    return <div data-testid="education-component">Education Content</div>;
  };
});

jest.mock('./Experience', () => {
  return function MockExperience() {
    return <div data-testid="experience-component">Experience Content</div>;
  };
});

jest.mock('./Animation', () => {
  return function MockAnimation({ fileName }) {
    return <div data-testid="background-animation" data-filename={fileName}>Animation: {fileName}</div>;
  };
});

describe('Background Component', () => {
  test('renders without crashing', () => {
    render(<Background />);
  });

  test('renders navigation buttons', () => {
    render(<Background />);
    
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  test('education view is active by default', () => {
    render(<Background />);
    
    // Education component should be rendered by default
    expect(screen.getByTestId('education-component')).toBeInTheDocument();
    expect(screen.queryByTestId('experience-component')).not.toBeInTheDocument();
    
    // Education button should have selected class
    const educationButton = screen.getByText('Education');
    expect(educationButton).toHaveClass('selected');
  });

  test('can switch between education and experience views', () => {
    render(<Background />);
    
    // Initially education should be active
    expect(screen.getByTestId('education-component')).toBeInTheDocument();
    expect(screen.queryByTestId('experience-component')).not.toBeInTheDocument();
    
    // Click experience button
    const experienceButton = screen.getByText('Experience');
    fireEvent.click(experienceButton);
    
    // Now experience should be active
    expect(screen.queryByTestId('education-component')).not.toBeInTheDocument();
    expect(screen.getByTestId('experience-component')).toBeInTheDocument();
    
    // Experience button should have selected class
    expect(experienceButton).toHaveClass('selected');
    expect(screen.getByText('Education')).not.toHaveClass('selected');
  });

  test('can switch back to education view', () => {
    render(<Background />);
    
    // Switch to experience first
    const experienceButton = screen.getByText('Experience');
    fireEvent.click(experienceButton);
    
    // Then switch back to education
    const educationButton = screen.getByText('Education');
    fireEvent.click(educationButton);
    
    // Education should be active again
    expect(screen.getByTestId('education-component')).toBeInTheDocument();
    expect(screen.queryByTestId('experience-component')).not.toBeInTheDocument();
    expect(educationButton).toHaveClass('selected');
  });

  test('has proper section structure', () => {
    render(<Background />);
    
    const backgroundSection = document.querySelector('.background.section');
    expect(backgroundSection).toBeInTheDocument();
    expect(backgroundSection).toHaveAttribute('id', 'background');
    
    const backgroundContainer = document.querySelector('.background-container');
    expect(backgroundContainer).toBeInTheDocument();
  });

  test('background marker is present', () => {
    render(<Background />);
    
    const backgroundMarker = document.querySelector('.background-marker');
    expect(backgroundMarker).toBeInTheDocument();
  });

  test('navigation and content areas are properly structured', () => {
    render(<Background />);
    
    const backgroundNav = document.querySelector('.background-nav');
    expect(backgroundNav).toBeInTheDocument();
    
    const backgroundContent = document.querySelector('.background-content');
    expect(backgroundContent).toBeInTheDocument();
    
    const backgroundView = document.querySelector('.background-view');
    expect(backgroundView).toBeInTheDocument();
  });

  test('button states update correctly', () => {
    render(<Background />);
    
    const educationButton = screen.getByText('Education');
    const experienceButton = screen.getByText('Experience');
    
    // Initially education should be selected
    expect(educationButton).toHaveClass('selected');
    expect(experienceButton).not.toHaveClass('selected');
    
    // Click experience
    fireEvent.click(experienceButton);
    expect(experienceButton).toHaveClass('selected');
    expect(educationButton).not.toHaveClass('selected');
    
    // Click education again
    fireEvent.click(educationButton);
    expect(educationButton).toHaveClass('selected');
    expect(experienceButton).not.toHaveClass('selected');
  });
});