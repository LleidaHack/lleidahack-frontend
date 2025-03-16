import '@testing-library/jest-dom/extend-expect';
import { mockEventService } from './test/services';

// Mock de IntersectionObserver
beforeAll(() => {
    class MockIntersectionObserver {
      observe = jest.fn();
      unobserve = jest.fn();
      disconnect = jest.fn();
    }
  
    global.IntersectionObserver = MockIntersectionObserver;
  });
  
  // Mock de window.scrollTo
  global.window.scrollTo = jest.fn();

// Mock de useLocation
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // Conserva las funciones reales
    useLocation: jest.fn(), // Mockea useLocation
}));

beforeAll(() => {
  // Service mocks:
  jest.mock('src/services/EventService', () => mockEventService);
  });

