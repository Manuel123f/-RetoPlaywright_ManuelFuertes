import { Locator, Page } from "@playwright/test";

export class LoginPage{
    private readonly usernameTextbox: Locator
    private readonly passwordTextbox: Locator
    private readonly loginButton: Locator
    constructor(page: Page){
        this.usernameTextbox = page.locator('input[name=\'username\']')
        this.passwordTextbox = page.locator('input[name=\'password\']')
        this.loginButton = page.locator('button[type=\'submit\']')
    }
   async fillUsername(){
    this.usernameTextbox.fill('Admin')
   }
   async fillPassword(){
    this.passwordTextbox.fill('admin123')
   }
   async clickOnLogin(){
    this.loginButton.click()
   }

}