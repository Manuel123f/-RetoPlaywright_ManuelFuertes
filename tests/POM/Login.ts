import { Locator,Page } from '@playwright/test';
export class Login{
    private readonly usernameTextbox: Locator
    private readonly passwordTextbox: Locator
    private readonly loginButton: Locator
    

    constructor(page: Page){
        this.usernameTextbox = page.getByRole('textbox',{name:'username'})
        this.passwordTextbox = page.getByRole('textbox',{name:'password'})
        this.loginButton = page.getByRole('button',{name:'Login'})
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