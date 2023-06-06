import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/signIn");

  await page.getByLabel("Email").fill("admin1212@gmail.com");
  await page.getByLabel("Password").fill("admin1212!");

  await page.getByRole("button", { name: "Login" }).click();

  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "OK" }).click();
});

test("can sign in", async ({ page }) => {
  // redirect to dashboard.
  await page.waitForTimeout(1000);
  await expect(page).toHaveURL(new RegExp("http://localhost:5173/*"));
});

test("can sign out", async ({ page }) => {
  await page.getByRole("button", { name: "Logout" }).click();
  await expect(page).toHaveURL("http://localhost:5173/signIn");
});

test("can see all available dog breeds", async ({ page }) => {
  await expect(page.getByText("Husky", { exact: true })).toBeVisible();
  await expect(
    page.getByText("Golden retriever", { exact: true })
  ).toBeVisible();
  await expect(page.getByText("Pitbull", { exact: true })).toBeVisible();
  await expect(
    page.getByText("West highland white terrier", { exact: true })
  ).toBeVisible();
  await expect(page.getByText("Cocker spaniel", { exact: true })).toBeVisible();
});
