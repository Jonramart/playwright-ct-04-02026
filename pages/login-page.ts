import { expect, type Locator} from "@playwright/test";
import { BasePage } from "./base-page";
import type {ConuntryCode, User} from "../types";

export class LoginPage extends BasePage {
    readonly path ="/";

    private txtUsername: string = "username";
    private txtPassword: string = "password";
    private btnMarket: string = "market-";
    private btnSignIn: string = "login-button";
    private lblError: string = "login-error";

    private get usernameInput(): Locator {
        return this.tid(this.txtUsername);
    }

    private get passwordInput(): Locator {
        return this.tid(this.txtPassword);
    }

    private get SignInButton(): Locator {
        return this.tid(this.btnSignIn);
    }

    private get marketFlag(code: ConuntryCode): Locator {
        return this.tid ('${this.btnMarket}${code}');
    }

    private get errorMessage(): Locator {
        return this.tid(this.lblError);
    }

    async goto(): Promise<void> {
        await this.page.goto(this.path);
    }

    async selectMarket(code: ConuntryCode): Promise<void> {
        await this.marketFlag(code).click();
    }

    async loginAs(user: User): Promise<void> {
        await this.usernameInput.fill(user.username);
        await this.passwordInput.fill(user.password);
        await this.SignInButton.click();
    }

    async loginInMarket(user: User, code: ConuntryCode): Promise<void> {
        await this.selectMarket(code);
        await this.loginAs(user);
        await this.waitFourURL(/\/catalog/);

   }

   async expectLoaded(): Promise<void> {
    

