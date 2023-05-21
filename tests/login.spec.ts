import { test, expect } from "@playwright/test";

test("password is less than 10 characters", async ({ page }) => {
  await page.goto("http://localhost:5173/signIn");

  await page.getByLabel("Email").fill("admin1212@gmail.com");
  await page.getByLabel("Password").fill("*");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(
    page.getByText("Password needs to be at least 10 characters long.")
  ).toBeVisible();
});
