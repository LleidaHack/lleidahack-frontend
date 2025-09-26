import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sponsors from "../../../components/hackeps/Home/Sponsors";
import * as CompanyService from "../../../services/CompanyService";

// Mock the CompanyService
jest.mock("../../../services/CompanyService");

describe("Home Sponsors Component", () => {
  beforeEach(() => {
    // Mock localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => 'test-event'),
        setItem: jest.fn(),
        removeItem: jest.fn(),
      },
      writable: true
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("shows loading state initially", () => {
    // Mock API calls to never resolve
    CompanyService.getCompanyByTier.mockImplementation(() => new Promise(() => {}));

    render(
      <MemoryRouter>
        <Sponsors />
      </MemoryRouter>
    );

    expect(screen.getByText("Carregant reptes de sponsors...")).toBeInTheDocument();
    expect(screen.getByText("Carregant sponsors...")).toBeInTheDocument();
  });

  test("displays sponsors and challengers when data loads successfully", async () => {
    // Mock successful API responses
    const mockChallenger = [
      { id: 1, name: "Challenger Company", image: "test-image.jpg", tier: 2 }
    ];
    const mockSponsors = [
      [{ id: 2, name: "Sponsor Tier 1", image: "sponsor1.jpg", tier: 1 }],
      [{ id: 3, name: "Sponsor Tier 3", image: "sponsor3.jpg", tier: 3 }]
    ];

    CompanyService.getCompanyByTier
      .mockResolvedValueOnce(mockChallenger)
      .mockResolvedValueOnce(mockSponsors[0])
      .mockResolvedValueOnce(mockSponsors[1]);

    render(
      <MemoryRouter>
        <Sponsors />
      </MemoryRouter>
    );

    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByText("Carregant reptes de sponsors...")).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.queryByText("Carregant sponsors...")).not.toBeInTheDocument();
    });

    // Check that sponsor sections are rendered (titles should be present)
    expect(screen.getByText("Reptes Proposats per...")).toBeInTheDocument();
    expect(screen.getByText("Amb la col·laboració de...")).toBeInTheDocument();
  });

  test("shows empty state when no event is in localStorage", async () => {
    // Mock localStorage to return null
    window.localStorage.getItem = jest.fn(() => null);

    render(
      <MemoryRouter>
        <Sponsors />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("No hi ha reptes disponibles actualment.")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("No hi ha sponsors disponibles actualment.")).toBeInTheDocument();
    });
  });

  test("shows empty state when API returns empty data", async () => {
    // Mock API to return empty arrays
    CompanyService.getCompanyByTier
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce([])
      .mockResolvedValueOnce([]);

    render(
      <MemoryRouter>
        <Sponsors />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("No hi ha reptes disponibles actualment.")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("No hi ha sponsors disponibles actualment.")).toBeInTheDocument();
    });
  });

  test("handles API errors gracefully", async () => {
    // Mock API to reject
    CompanyService.getCompanyByTier.mockRejectedValue(new Error("API Error"));

    // Mock console.error to avoid noise in test output
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <MemoryRouter>
        <Sponsors />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("No hi ha reptes disponibles actualment.")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("No hi ha sponsors disponibles actualment.")).toBeInTheDocument();
    });

    expect(consoleSpy).toHaveBeenCalledWith("Error fetching sponsors data:", expect.any(Error));
    
    consoleSpy.mockRestore();
  });
});