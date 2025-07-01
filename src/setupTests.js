import "@testing-library/jest-dom/extend-expect";
import { mockEventService, mockHackerService } from "./test/services";

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
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // Conserva las funciones reales
  useLocation: jest.fn(), // Mockea useLocation
}));

beforeAll(() => {
  // Service mocks:
  jest.mock("src/services/EventService", () => mockEventService);
  jest.mock("src/services/HackerService", () => mockHackerService);
});

// Mock de localStorage.getItem
beforeAll(() => {
  const localStorageMock = {
    getItem: jest.fn((key) => {
      if (key === "userID") {
        return "1";
      }
      return null;
    }),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };
  global.localStorage = localStorageMock;
});
