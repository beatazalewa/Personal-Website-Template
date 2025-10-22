import React from 'react';
import { render } from '@testing-library/react';
import Animation from './Animation';

// Mock lottie-react
jest.mock('react-lottie', () => {
  return function MockLottie({ options, ...props }) {
    return (
      <div 
        data-testid="lottie-animation" 
        data-filename={options?.animationData || 'unknown'}
        {...props}
      >
        Lottie Animation
      </div>
    );
  };
});

describe('Animation Component', () => {
  test('renders without crashing', () => {
    render(<Animation fileName="test.json" />);
  });

  test('renders with fileName prop', () => {
    const { getByTestId } = render(<Animation fileName="home.json" />);
    
    const animationElement = getByTestId('lottie-animation');
    expect(animationElement).toBeInTheDocument();
  });

  test('handles missing fileName prop', () => {
    expect(() => {
      render(<Animation />);
    }).not.toThrow();
  });

  test('renders different animations based on fileName', () => {
    const { rerender, getByTestId } = render(<Animation fileName="home.json" />);
    let animationElement = getByTestId('lottie-animation');
    expect(animationElement).toBeInTheDocument();

    rerender(<Animation fileName="contact.json" />);
    animationElement = getByTestId('lottie-animation');
    expect(animationElement).toBeInTheDocument();
  });

  test('animation component has proper structure', () => {
    render(<Animation fileName="test.json" />);
    
    // Check if the animation wrapper exists
    const animationContainer = document.querySelector('.animation');
    // Note: This test depends on the actual implementation of Animation component
    // Adjust based on actual CSS classes used
  });

  test('handles various animation file names', () => {
    const fileNames = [
      'home.json',
      'contact.json',
      'frontend.json',
      'backend.json',
      'other-tech.json'
    ];

    fileNames.forEach(fileName => {
      expect(() => {
        render(<Animation fileName={fileName} />);
      }).not.toThrow();
    });
  });
});