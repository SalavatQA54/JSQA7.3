// @ts-check;
const { test, expect } = require("@playwright/test");
const user = require("../tests/user.js");

test("successful authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(user.email);
  await page.locator('[placeholder="Email"]').press("Tab");
  await page.locator('[placeholder="Пароль"]').fill(user.pass);
  await page.getByTestId("login-submit-btn").click();
  await expect(
    page.getByRole("heading", { name: "Мои курсы и профессии" })
  ).toHaveText("Мои курсы и профессии");
});

test("not successful authorization", async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(user.wrongEmail);
  await page.locator('[placeholder="Email"]').press("Tab");
  await page.locator('[placeholder="Пароль"]').fill(user.wrongPass);
  await page.getByTestId("login-submit-btn").click();
  await expect(page.getByTestId("login-error-hint")).toHaveText(
    "Вы ввели неправильно логин или пароль"
  );
});