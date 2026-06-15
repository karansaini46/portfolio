import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import BrandMark from "@/components/brand/BrandMark";
import IntroLoader from "@/components/IntroLoader";
import CommandPalette from "@/components/CommandPalette";
import { portfolio } from "@/data/portfolio";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: vi.fn(),
      prefetch: vi.fn(),
      replace: vi.fn(),
    };
  },
  usePathname() {
    return "/";
  },
}));

describe("BrandMark component", () => {
  it("renders SVG paths for the logo mark", () => {
    render(<BrandMark className="test-logo" />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveClass("test-logo");
  });
});

describe("IntroLoader component", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("completes animation and hides loader after delay", async () => {
    const { container } = render(<IntroLoader />);
    
    // Should render loader initially
    expect(container.querySelector(".fixed")).toBeInTheDocument();

    // Fast-forward 700ms (loader finishes at 650ms)
    act(() => {
      vi.advanceTimersByTime(700);
    });

    // Check that loader flag is stored in session storage
    expect(window.sessionStorage.getItem("has-seen-intro")).toBe("true");
  });

  it("skips rendering if loader-complete flag is present", async () => {
    vi.useRealTimers(); // Restore real timers so async acts don't block
    window.sessionStorage.setItem("has-seen-intro", "true");
    const { container } = render(<IntroLoader />);
    
    // Let useEffect run, and allow exit animation (300ms) to complete
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
    });

    expect(container.firstChild).toBeNull();
  });
});

describe("CommandPalette component", () => {
  it("toggles open on Ctrl+K and filters results", async () => {
    render(<CommandPalette />);

    // Initially closed
    expect(screen.queryByPlaceholderText(/Type a command/i)).not.toBeInTheDocument();

    // Fire Ctrl+K event wrapped in act
    await act(async () => {
      fireEvent.keyDown(window, { key: "k", ctrlKey: true });
      // Short delay for render
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    // Should now be visible
    const input = screen.getByPlaceholderText(/Type a command or search.../i);
    expect(input).toBeInTheDocument();

    // Type query matching "GitHub"
    fireEvent.change(input, { target: { value: "github" } });

    // Verify filter matches github
    const option = screen.getByText(/Open GitHub Profile/i);
    expect(option).toBeInTheDocument();

    // Fire ESC key to close
    await act(async () => {
      fireEvent.keyDown(window, { key: "Escape" });
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    
    expect(screen.queryByPlaceholderText(/Type a command/i)).not.toBeInTheDocument();
  });
});

describe("Portfolio Static Data", () => {
  it("contains valid project schema values and ETHER project configurations", () => {
    expect(portfolio.seo.title).toContain("Karan Saini");
    expect(portfolio.projects.length).toBeGreaterThanOrEqual(5);

    const ether = portfolio.projects.find((p) => p.slug === "ether");
    expect(ether).toBeDefined();
    expect(ether?.status).toBe("Completed");
    expect(ether?.category).toBe("Developer Tool · 3D Visualization · Code Intelligence");
    expect(ether?.archNodes?.length).toBeGreaterThan(0);
  });
});
