// Test Utilities for Personal Website Template

/**
 * Custom render function for components that need special setup
 */
export const renderWithProviders = (ui, options = {}) => {
  // This can be extended to include providers like Router, Context, etc.
  return render(ui, options);
};

/**
 * Helper function to create mock props for testing
 */
export const createMockProps = (overrides = {}) => {
  const defaultProps = {
    linkedin: 'https://linkedin.com/in/testuser',
    github: 'https://github.com/testuser',
    contact: 'contact',
    resume: 'https://example.com/resume.pdf',
    ...overrides
  };
  return defaultProps;
};

/**
 * Helper function to create mock project data
 */
export const createMockProject = (overrides = {}) => {
  return {
    title: 'Test Project',
    technologies: ['React.js', 'CSS', 'JavaScript'],
    summary: 'A test project for unit testing',
    github: 'https://github.com/test/project',
    liveURL: 'https://test-project.com',
    screenshot: 'test-screenshot.png',
    ...overrides
  };
};

/**
 * Helper function to create mock skill data
 */
export const createMockSkill = (overrides = {}) => {
  return {
    name: 'React.js',
    icon: 'react.svg',
    category: 'Frontend',
    level: 'Advanced',
    ...overrides
  };
};

/**
 * Helper function to create mock education data
 */
export const createMockEducation = (overrides = {}) => {
  return {
    institution: 'Test University',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2018',
    endDate: '2022',
    gpa: '3.8',
    ...overrides
  };
};

/**
 * Helper function to create mock experience data
 */
export const createMockExperience = (overrides = {}) => {
  return {
    company: 'Test Company',
    position: 'Software Developer',
    startDate: '2022',
    endDate: 'Present',
    description: 'Developed and maintained web applications',
    technologies: ['React', 'Node.js'],
    ...overrides
  };
};

/**
 * Helper function to simulate window resize for responsive testing
 */
export const simulateWindowResize = (width, height = 800) => {
  global.innerWidth = width;
  global.innerHeight = height;
  global.dispatchEvent(new Event('resize'));
};

/**
 * Helper function to mock image loading
 */
export const mockImageLoad = () => {
  Object.defineProperty(HTMLImageElement.prototype, 'complete', {
    get() {
      return true;
    },
  });
  Object.defineProperty(HTMLImageElement.prototype, 'naturalHeight', {
    get() {
      return 100;
    },
  });
  Object.defineProperty(HTMLImageElement.prototype, 'naturalWidth', {
    get() {
      return 100;
    },
  });
};

/**
 * Helper function to test accessibility
 */
export const testAccessibility = async (component) => {
  // This would require additional accessibility testing libraries
  // Like @testing-library/jest-dom and axe-core
  return true; // Placeholder
};

/**
 * Helper function to wait for animations to complete
 */
export const waitForAnimation = (ms = 500) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Custom matchers for testing
 */
export const customMatchers = {
  toHaveValidUrl: (received) => {
    try {
      new URL(received);
      return {
        message: () => `expected ${received} to be a valid URL`,
        pass: true,
      };
    } catch {
      return {
        message: () => `expected ${received} to be a valid URL`,
        pass: false,
      };
    }
  },
  
  toHaveValidEmail: (received) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pass = emailRegex.test(received);
    return {
      message: () => `expected ${received} to be a valid email`,
      pass,
    };
  },
};

/**
 * Setup function for tests that need specific environment
 */
export const setupTestEnvironment = () => {
  // Mock console methods to avoid noise in test output
  global.console = {
    ...console,
    warn: jest.fn(),
    error: jest.fn(),
  };

  // Mock IntersectionObserver
  global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };

  // Mock matchMedia
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};

/**
 * Cleanup function for after tests
 */
export const cleanupTestEnvironment = () => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
};