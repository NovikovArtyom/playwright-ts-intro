const { test, expect } = require("@playwright/test");
const { allure } = require("allure-playwright");

test("Мок запроса", async ({ page }) => {
  const data = [
    {
      id: 108757,
      title: "Task 1",
      completed: false,
      order: null,
      url: "/108757",
    },
    {
      id: 108758,
      title: "Task 2",
      completed: false,
      order: null,
      url: "/108758",
    },
  ];

  await allure.step("Замокать запрос", async () => {
    await page.route(
      "https://todo-app-sky.herokuapp.com/",
      async (route, req) => {
        console.log(req.method());
        console.log(req.headers());
        console.log(req.url());
        await route.fulfill({ json: data });
      }
    );
  });

  await allure.step("Открыть главную", async () => {
    await page.goto("https://sky-todo-list.herokuapp.com");
  });
  
  await allure.step("Проверить, что на странцие 2 тудушки", async () => {
    await expect(page.locator("tbody tr")).toHaveCount(2);
  });
});
