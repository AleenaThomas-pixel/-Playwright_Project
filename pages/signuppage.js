
export class SignUp
{

    constructor(page)
    {
        this.page = page
        this.signuplink = page.locator('#signin2')
        this.usrname = page.locator('#sign-username')
        this.passwrd = page.locator("//input[@id='sign-password']")
        this.signbtn = page.locator("//button[text()='Sign up']")
        this.clsebtn = page.locator("//button[text()='Close']").nth(1)
    }

   async accessurl()
   {
    await this.page.goto("https://www.demoblaze.com")
   }

   async signup()
   {
     await this.signuplink.click()
     return this

   }

   async enterusername(username)
   {
     await this.usrname.fill(username)
     return this
   }

   async enterpassword(password)
   {
     await this.passwrd.fill(password)
     return this
   }

   async signupbutton()
   {
     await this.signbtn.click()
     return this
   }

   async closebutton()
   {
     
    await this.clsebtn.click()
    return this

   }

}

