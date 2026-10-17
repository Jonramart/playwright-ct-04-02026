import {test, expect} from '@playwright/test';
import userJson from '../data/users.json' with {type: 'json'};
import marketJson from '../data/market.json' with {type: 'json'};
import {Market, User, Currency}from "../types";

const markets = marketJson as Market[];
const users = userJson as User[];

const standardUser = users.find((user) => user.role === "standard_user");

if(!standardUser) {
    throw new Error("data/users.json does not contain a user with role 'standard_user'.Check the data seed before running");
}
 //
const currencySymbols: PartialRecord<Currency, string> = {
    MXN: "$",
    JPY: "¥",
    //SAR: "﷼",
    SAR: "ر.س",
}

test.describe("Smoke parametriized by market", ()=>{
    for (const market of markets) {
        test(`TC-${market.code} - login + catalog for market ${market.code}`, {tag: smoke"}, async ({page})=>{
            await page.goto("https://www.omnipizza.com/catalog"); //cambiar la ruta por aboluta

            //Act
            await page.getByRole("button", {name: "Login"}).click();
            await page.getByLabel("Username").fill(standardUser.username);
            await page.getByLabel("Password").fill(standardUser.password);
            await page.getByRole("button", {name: "Login"}).click();

            await page.getByTestId("username-desktop").fill(standardUser.username);
            await page.getByTestId("password-desktop").fill(standardUser.password);
            await page.getByTestId(`market-${market.code}`).click();
            await page.getByTestId("login-button-desktop").click();


            //Assert
            await expect(page).toHaveURL(/\/catalog/);

            const pizzaCards = page.locator("[data-testid^='pizza-card-p']");
            await expect(pizzaCards.first()).toBeVisible();
            const allCards = await pizzaCards.all();
            expect(allCards.length).toBeGreaterThan(0);

            for

})