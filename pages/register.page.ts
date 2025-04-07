import { Page, Locator } from "@playwright/test";

export class RegisterPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('#register-form input[name="firstName"]');
    this.lastName = page.locator('#register-form input[name="lastName"]');
    this.email = page.locator('#register-form input[name="email"]');
    this.password = page.locator('#register-form input[name="password"]');
    this.registerButton = page.locator('#register-form button[type="submit"]');
    
  }
  async fillFirstName(firstName: string) {
    await this.firstName.fill(firstName);
  }
  async fillLastName(lastName: string) {
    await this.lastName.fill(lastName);
  }
  async fillEmail(email: string) {
    await this.email.fill(email);
  }
  async fillPassword(password: string) {
    await this.password.fill(password);
  }   
  async clickRegisterButton() {
    await this.registerButton.click();
  }

  async goto() {
    await this.page.goto("https://automation-portal-bootcamp.vercel.app/register");
  }

}