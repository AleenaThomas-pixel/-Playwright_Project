import { PlaceOrder } from "./placeorderpage"


export class LoginPage
{

    constructor(page)
    {
        this.page = page 
        this.loginlink = page.locator('#login2')
        this.lusername = page.locator('#loginusername')
        this.lpassword = page.locator('#loginpassword')
        this.loginbtn = page.locator("//button[text()='Log in']")
    }



 async accessurl()
   {
    await this.page.goto("https://www.demoblaze.com")
   }

 async login()
 {
    await this.loginlink.click()
    return this
    
 }

 async loginusername(username)
 {
    await this.lusername.fill(username)
    return this
 }

 async loginpassword(password)
 {
    await this.lpassword.fill(password)
    return this
 }

 async loginbutton()
 {
    await this.loginbtn.click()
    return new PlaceOrder(this.page) // chaining
 
}

}