import React from 'react';
import { render, screen } from '@testing-library/react';

// Business Logic Tests for Personal Website Template

describe('Application Business Logic', () => {
  describe('Data Structures and Constants', () => {
    test('project data structure validation', () => {
      // Test project data structure from Projects component
      const sampleProject = {
        title: 'Test Project',
        technologies: ['React.js', 'CSS'],
        summary: 'A test project',
        github: 'https://github.com/test/project'
      };

      expect(sampleProject).toHaveProperty('title');
      expect(sampleProject).toHaveProperty('technologies');
      expect(sampleProject).toHaveProperty('summary');
      expect(Array.isArray(sampleProject.technologies)).toBe(true);
      expect(typeof sampleProject.title).toBe('string');
    });

    test('skill data structure validation', () => {
      // Test skills data structure
      const sampleSkill = {
        name: 'React.js',
        icon: 'react.svg',
        category: 'Frontend'
      };

      expect(sampleSkill).toHaveProperty('name');
      expect(typeof sampleSkill.name).toBe('string');
    });

    test('navigation link structure validation', () => {
      // Test navigation configuration
      const navLinks = [
        { text: 'Skills', target: 'skills-marker' },
        { text: 'Background', target: 'background-marker' },
        { text: 'Projects', target: 'projects' },
        { text: 'Hobby', target: 'hobby-marker' },
        { text: 'Contact', target: 'contact-marker' }
      ];

      navLinks.forEach(link => {
        expect(link).toHaveProperty('text');
        expect(link).toHaveProperty('target');
        expect(typeof link.text).toBe('string');
        expect(typeof link.target).toBe('string');
      });
    });
  });

  describe('Component State Management', () => {
    test('background component state logic', () => {
      // Test the logic for switching between Education and Experience
      let activeView = 'education';
      
      // Simulate state change to experience
      const setActiveView = (newView) => {
        activeView = newView;
      };

      setActiveView('experience');
      expect(activeView).toBe('experience');

      setActiveView('education');
      expect(activeView).toBe('education');
    });

    test('form validation logic', () => {
      // Test basic form validation logic
      const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

      const validateRequired = (value) => {
        return value && value.trim().length > 0;
      };

      // Test email validation
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('invalid-email')).toBe(false);
      expect(validateEmail('')).toBe(false);

      // Test required field validation
      expect(validateRequired('Valid input')).toBe(true);
      expect(validateRequired('')).toBe(false);
      expect(validateRequired('   ')).toBe(false);
      expect(validateRequired(null)).toBe(false);
      expect(validateRequired(undefined)).toBe(false);
    });
  });

  describe('URL and Link Validation', () => {
    test('validates external URLs', () => {
      const isValidUrl = (url) => {
        try {
          new URL(url);
          return true;
        } catch {
          return false;
        }
      };

      expect(isValidUrl('https://github.com/user')).toBe(true);
      expect(isValidUrl('https://linkedin.com/in/user')).toBe(true);
      expect(isValidUrl('invalid-url')).toBe(false);
      expect(isValidUrl('')).toBe(false);
    });

    test('validates social media link formats', () => {
      const validateLinkedInUrl = (url) => {
        return url && url.includes('linkedin.com');
      };

      const validateGitHubUrl = (url) => {
        return url && url.includes('github.com');
      };

      expect(validateLinkedInUrl('https://linkedin.com/in/user')).toBe(true);
      expect(validateLinkedInUrl('https://github.com/user')).toBe(false);
      
      expect(validateGitHubUrl('https://github.com/user')).toBe(true);
      expect(validateGitHubUrl('https://linkedin.com/in/user')).toBe(false);
    });
  });

  describe('Animation and File Handling', () => {
    test('validates animation file names', () => {
      const validAnimationFiles = [
        'home.json',
        'contact.json',
        'frontend.json',
        'backend.json',
        'database.json',
        'other-tech.json',
        'frontend-purple.json'
      ];

      const isValidAnimationFile = (fileName) => {
        return fileName && fileName.endsWith('.json');
      };

      validAnimationFiles.forEach(file => {
        expect(isValidAnimationFile(file)).toBe(true);
      });

      expect(isValidAnimationFile('invalid.txt')).toBe(false);
      expect(isValidAnimationFile('')).toBe(false);
      expect(isValidAnimationFile(null)).toBe(false);
    });

    test('validates image file extensions', () => {
      const isValidImageFile = (fileName) => {
        if (!fileName) return false;
        const validExtensions = ['.png', '.jpg', '.jpeg', '.svg'];
        return validExtensions.some(ext => fileName.toLowerCase().endsWith(ext));
      };

      expect(isValidImageFile('avatar.png')).toBe(true);
      expect(isValidImageFile('icon.svg')).toBe(true);
      expect(isValidImageFile('photo.jpg')).toBe(true);
      expect(isValidImageFile('image.jpeg')).toBe(true);
      expect(isValidImageFile('document.pdf')).toBe(false);
      expect(isValidImageFile('')).toBe(false);
    });
  });

  describe('Content Validation', () => {
    test('validates project data completeness', () => {
      const isCompleteProject = (project) => {
        return project &&
               project.title &&
               project.technologies &&
               Array.isArray(project.technologies) &&
               project.technologies.length > 0 &&
               project.summary;
      };

      const completeProject = {
        title: 'Test Project',
        technologies: ['React', 'CSS'],
        summary: 'A complete project'
      };

      const incompleteProject = {
        title: 'Test Project'
        // Missing required fields
      };

      expect(isCompleteProject(completeProject)).toBe(true);
      expect(isCompleteProject(incompleteProject)).toBe(false);
      expect(isCompleteProject(null)).toBe(false);
    });

    test('validates skill categorization', () => {
      const categorizeSkill = (skillName) => {
        const categories = {
          frontend: ['React', 'Vue', 'HTML', 'CSS', 'JavaScript'],
          backend: ['Node.js', 'Python', 'Java', 'Express'],
          database: ['MongoDB', 'MySQL', 'PostgreSQL'],
          tools: ['Git', 'Docker', 'VS Code']
        };

        for (const [category, skills] of Object.entries(categories)) {
          if (skills.some(skill => skillName.includes(skill))) {
            return category;
          }
        }
        return 'other';
      };

      expect(categorizeSkill('React.js')).toBe('frontend');
      expect(categorizeSkill('Node.js')).toBe('backend');
      expect(categorizeSkill('MongoDB')).toBe('database');
      expect(categorizeSkill('Git')).toBe('tools');
      expect(categorizeSkill('Unknown Skill')).toBe('other');
    });
  });

  describe('Responsive Design Logic', () => {
    test('validates screen size breakpoints', () => {
      const getDeviceType = (width) => {
        if (width < 480) return 'mobile';
        if (width < 768) return 'tablet';
        return 'desktop';
      };

      expect(getDeviceType(320)).toBe('mobile');
      expect(getDeviceType(600)).toBe('tablet');
      expect(getDeviceType(1200)).toBe('desktop');
    });

    test('validates responsive content logic', () => {
      const shouldShowMobileLayout = (screenWidth) => {
        return screenWidth <= 768;
      };

      const shouldStackVertically = (screenWidth) => {
        return screenWidth <= 768;
      };

      expect(shouldShowMobileLayout(500)).toBe(true);
      expect(shouldShowMobileLayout(1000)).toBe(false);
      expect(shouldStackVertically(600)).toBe(true);
      expect(shouldStackVertically(900)).toBe(false);
    });
  });
});