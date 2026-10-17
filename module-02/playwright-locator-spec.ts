test.describe("smoke with locator hierarchy", () => {
  test("TC-001 -login + catalog applying the hierarchy",{tag: ['smoke','regression']} async ({ page }) => {
    await page.goto("https://wwww.omnipizza.com/catalog");
    await page.getByAltText("pepperoni").click();

    const pizzaCards = page.locator ("[data-testid^='pizza-card-p']");
    await expect(pizzaCards.first()).toBeVisible();

    const hawaiian = await pizzaCards.nth(2).innerText();
    console.log("hawaiian pizza card text is: " + hawaiian);

    const funghi = await pizzaCards.filter({hasText:"Funghi"}).textContent();
    console.log("funghi pizza card text is: " + funghi);

    // assertions
    const funghiText = pizzaCards.filter({hasText: "Funghi"});
    expect(funghiText).toContainText("Mushrooms");

    const count =await pizzaCards.count();
    console.log(count);
    expect(count).toBeGreaterThan(0); //<1;
    expect(count).toBeGreaterThanOrEqual(1); //<=1;

    const fourcheese = await page.getByRole("heading", {level:2}).filter({hasText:"Cheese"}).innerText(); //revisar
    console .log("fourcheese pizza card text is: " + fourcheese);
