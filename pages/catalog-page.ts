import{ expect, type Locator } from "@playwright/test";
import {BasePage} from "./base-page";

export typ Category = "all" | "popular" | "veggie" | "meat" | "sides";

export class CatalogPage extends BasePage {
    readonly path = "/catalog";

    private cardPizza: string = "pizza-card";
    private btnAddToCart: string = "add-to-cart";
    private btnCheckoutNow: string = "checkout-now";
    private btnConfirmAddToCart: string = "confirm-add-to-cart";
    private btnCategory: string = "category";
    private lblPizzaPrice: string = "pizza-price";
    private lblCartCount: string = "nav-cart-count";

    private get pizzaCard(): Locator {
        return this.page.locator (`[data-testid^="${this.btnAddToCart}"]`);
    }

    pr
