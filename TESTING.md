# Testing Guide for Personal Website Template

## Overview

This application includes comprehensive unit tests for all components and business logic. The tests are built using Jest and React Testing Library, providing both component testing and business logic validation.

## Test Structure

```
src/
├── App.test.js                    # Main App component tests
├── businessLogic.test.js          # Business logic and utility function tests
├── testUtils.js                   # Test utilities and helpers
└── components/
    ├── Animation.test.js          # Animation component tests
    ├── Background.test.js         # Background component with state tests
    ├── Connect.test.js            # Social media links component tests
    ├── Contact.test.js            # Contact form component tests
    ├── Hobby.test.js             # Hobby section component tests
    ├── Navbar.test.js            # Navigation component tests
    └── Projects.test.js          # Projects showcase component tests
```

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode (Recommended for Development)
```bash
npm test -- --watch
```

### Run Tests with Coverage Report
```bash
npm test -- --coverage
```

### Run Specific Test File
```bash
npm test App.test.js
npm test Hobby.test.js
npm test businessLogic.test.js
```

### Run Tests Matching a Pattern
```bash
npm test -- --testNamePattern="business logic"
npm test -- --testNamePattern="renders"
```

### Run Tests in CI Mode (Single Run)
```bash
npm test -- --ci --coverage --watchAll=false
```

## Test Categories

### 1. Component Rendering Tests
- Verify components render without crashing
- Check for presence of expected elements
- Validate proper HTML structure and CSS classes

### 2. Component Interaction Tests
- Test user interactions (button clicks, form submissions)
- Verify state changes and dynamic content
- Test navigation and routing behavior

### 3. Business Logic Tests
- Validate data structures and constants
- Test form validation logic
- Verify URL and link validation
- Test responsive design breakpoints

### 4. Integration Tests
- Test component communication
- Verify data flow between components
- Test complete user workflows

## Test Examples

### Running Specific Component Tests

#### Test the new Hobby Component:
```bash
npm test Hobby.test.js
```

#### Test Navigation Functionality:
```bash
npm test Navbar.test.js
```

#### Test Background Component State Management:
```bash
npm test Background.test.js
```

### Running Business Logic Tests

#### Test All Business Logic:
```bash
npm test businessLogic.test.js
```

#### Test Specific Business Logic Areas:
```bash
npm test -- --testNamePattern="form validation"
npm test -- --testNamePattern="URL validation"
npm test -- --testNamePattern="responsive design"
```

## Test Coverage

The test suite covers:

- ✅ **Component Rendering**: All components render correctly
- ✅ **User Interactions**: Button clicks, form submissions, navigation
- ✅ **State Management**: Component state changes and updates
- ✅ **Props Handling**: Component props validation and usage
- ✅ **Business Logic**: Form validation, URL validation, data structures
- ✅ **Responsive Design**: Breakpoint logic and mobile layouts
- ✅ **Error Handling**: Graceful handling of missing props and invalid data

## Viewing Test Coverage

After running tests with coverage:
```bash
npm test -- --coverage
```

Open the coverage report in your browser:
```bash
open coverage/lcov-report/index.html
```

## Test Configuration

### Jest Configuration
The project uses Create React App's built-in Jest configuration with additional setup:

- **Test Environment**: jsdom (for DOM testing)
- **Setup Files**: `src/setupTests.js`
- **Test Utilities**: `src/testUtils.js`
- **Mocking**: Automatic mocking for modules like react-router-dom, react-lottie

### Testing Library Configuration
- **React Testing Library**: For component testing
- **Jest DOM**: For additional DOM matchers
- **User Event**: For simulating user interactions

## Writing New Tests

### For New Components:
1. Create a `ComponentName.test.js` file in the same directory
2. Import necessary testing utilities from `testUtils.js`
3. Follow the existing test patterns for consistency

### For Business Logic:
1. Add tests to `businessLogic.test.js`
2. Group related tests in describe blocks
3. Test both positive and negative cases

### Test Template:
```javascript
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  test('renders without crashing', () => {
    render(<ComponentName />);
  });

  test('displays expected content', () => {
    render(<ComponentName />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  test('handles user interaction', () => {
    render(<ComponentName />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    // Assert expected behavior
  });
});
```

## Continuous Integration

For CI/CD pipelines, use:
```bash
npm test -- --ci --coverage --watchAll=false --testResultsProcessor=jest-junit
```

## Debugging Tests

### Run Tests in Debug Mode:
```bash
npm test -- --debug
```

### Use Console Logs in Tests:
```javascript
screen.debug(); // Prints current DOM state
console.log(screen.getByText('text').outerHTML); // Inspect specific elements
```

### Common Test Issues:
1. **Component not found**: Check if component is properly imported
2. **Async operations**: Use `waitFor` or `findBy` queries
3. **Mocking issues**: Verify mock implementations match actual APIs

## Best Practices

1. **Test Behavior, Not Implementation**: Focus on what the user sees and does
2. **Use Descriptive Test Names**: Make test purposes clear
3. **Test Edge Cases**: Include tests for error conditions and boundary values
4. **Keep Tests Independent**: Each test should work in isolation
5. **Use Page Object Model**: For complex component interactions
6. **Mock External Dependencies**: Isolate component logic from external APIs

## Performance Testing

For performance testing, consider adding:
```bash
npm test -- --testTimeout=10000 --detectOpenHandles
```

This ensures tests complete within reasonable time limits and detect memory leaks.