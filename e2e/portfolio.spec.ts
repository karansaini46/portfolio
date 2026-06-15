import { test, expect } from "@playwright/test";

test.describe("Portfolio E2E Flow", () => {
  test("should load home page and perform main user interactions", async ({ page }) => {
    // Navigate to homepage
    await page.goto("/");

    // Verify page title
    await expect(page).toHaveTitle(/Karan Saini/);

    // Verify main components are present
    const heroTitle = page.locator("h1").first();
    await expect(heroTitle).toBeVisible();

    // Verify the command palette opens on Control+k shortcut
    await page.keyboard.press("Control+k");
    const input = page.locator("input[placeholder='Type a command or search...']");
    await expect(input).toBeVisible();

    // Filter projects inside palette
    await input.fill("work");
    await expect(page.locator("text=Go to Work")).toBeVisible();

    // Press Escape to dismiss palette
    await page.keyboard.press("Escape");
    await expect(input).not.toBeVisible();
  });

  test("should navigate to /work page and display side navigation index", async ({ page }) => {
    await page.goto("/work");

    // Case Study sidebar title
    await expect(page.locator("text=Case Study Index")).toBeVisible();

    // Verify selected projects are rendering
    await expect(page.locator("text=System Overview").first()).toBeVisible();
  });
});
