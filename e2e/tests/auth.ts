import { test } from "@playwright/test";

const CLIENT_URL = "http://localhost:5173";

test("should allow the user to sign in", async ({ page }) => {
  await page.goto(CLIENT_URL);
});
