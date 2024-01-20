import { expect, test } from "@playwright/test";

const CLIENT_URL = "http://localhost:5173";

test("should allow the user to sign in", async ({ page }) => {
  await page.goto(CLIENT_URL);

  await page.getByTestId("sign-in-header-button").click();

  await expect(
    page.getByRole("heading", { name: "Sign into your account" })
  ).toBeVisible();

  await page.locator("[name=email]").fill("test@example.com");
  await page.locator("[name=password]").fill("123456");

  await page.getByTestId("sign-in-form-button").click();

  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible();
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
});
