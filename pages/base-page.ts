import type { Page, Locator } from "@playwright/test";

export class BasePage {
    constructor(protected readonly page: Page) {}

    protected tid(base: string): Locator {
        )