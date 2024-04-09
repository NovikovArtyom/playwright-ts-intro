const { test, expect } = require("@playwright/test");

test("Последовательная работа", async ({ page }) => {
  test.setTimeout(600000);
  for (var i = 0; i < 100; i++) {
    await page.goto(
      "https://bonigarcia.dev/selenium-webdriver-java/data-types.html"
    );

    await page.locator("[name=first-name]").fill("Dmitry");
    await page.locator("[name=last-name]").fill("Eremin");
    await page.locator("[name=address]").fill("Lenina");
    await page.locator("[name=city]").fill("Moscow");
    await page.locator("[name=country]").fill("Russia");
    await page.locator("[name=job-position]").fill("QA");
    await page.locator("[name=company]").fill("Inzhnerka");

    await page.locator("[type=submit]").click();

    await expect(page.locator("#zip-code")).toHaveCSS(
      "background-color",
      "rgb(248, 215, 218)"
    );
    await expect(page.locator("#e-mail")).toHaveCSS(
      "background-color",
      "rgb(248, 215, 218)"
    );
    await expect(page.locator("#phone")).toHaveCSS(
      "background-color",
      "rgb(248, 215, 218)"
    );
  }
});

test("Параллельное выполнение", async ({ page }) => {
  test.setTimeout(600000);
  for (var i = 0; i < 100; i++) {
    await page.goto(
      "https://bonigarcia.dev/selenium-webdriver-java/data-types.html"
    );

    await Promise.all([
      page.locator("[name=first-name]").fill("Dmitry"),
      page.locator("[name=last-name]").fill("Eremin"),
      page.locator("[name=address]").fill("Lenina"),
      page.locator("[name=city]").fill("Moscow"),
      page.locator("[name=country]").fill("Russia"),
      page.locator("[name=job-position]").fill("QA"),
      page.locator("[name=company]").fill("Inzhnerka"),
    ]);

    await page.locator("[type=submit]").click();
    await Promise.all([
      expect(page.locator("#zip-code")).toHaveCSS(
        "background-color",
        "rgb(248, 215, 218)"
      ),
      expect(page.locator("#e-mail")).toHaveCSS(
        "background-color",
        "rgb(248, 215, 218)"
      ),
      expect(page.locator("#phone")).toHaveCSS(
        "background-color",
        "rgb(248, 215, 218)"
      ),
    ]);
  }
});
