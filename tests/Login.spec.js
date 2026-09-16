import{test,expect} from "@playwright/test"
import { LoginPage } from "../pages/loginpage"

import vdata from "../utils/validcredentials.json" with {type: "json"}
import dataset from "../utils/invalidcredentials.json" with {type: "json"}

test('Valid Login', async({page})=>
{

let loginpge = new LoginPage(page)
await loginpge.accessurl()
await loginpge.login()
await loginpge.loginusername(vdata.username)
await loginpge.loginpassword(vdata.password)
const pOrder = await loginpge.loginbutton()  //page navigation

await page.waitForTimeout(5000)
await expect(page.locator('#nameofuser')).toBeVisible()

})

test('Invalid Login - invalid username valid password', async({page})=>
{

let loginpge = new LoginPage(page)
await loginpge.accessurl()
await loginpge.login()
await loginpge.loginusername(dataset.user1.username)
await loginpge.loginpassword(dataset.user1.password)

page.once('dialog',async dialog =>
    {
        console.log(dialog.message())
        await expect(dialog.message()).toContain("User does not exist") //assertion
        await dialog.accept()
    }
    )
await loginpge.loginbutton() 

await expect(page.locator('#login2')).toBeVisible()

})

test('Invalid Login- valid username invalid password', async({page})=>
{
 
let loginpge = new LoginPage(page)
await loginpge.accessurl()
await loginpge.login()
await loginpge.loginusername(dataset.user2.username)
await loginpge.loginpassword(dataset.user2.password)

page.once('dialog',async dialog =>
    {
        console.log(dialog.message())
        await expect(dialog.message()).toContain("Wrong password") //assertion
        await dialog.accept()
    }
    )
await loginpge.loginbutton() 

await expect(page.locator('#login2')).toBeVisible()

})

test('Invalid login - invalid username invalid password', async({page})=>
{
  
let loginpge = new LoginPage(page)
await loginpge.accessurl()
await loginpge.login()
await loginpge.loginusername(dataset.user3.username)
await loginpge.loginpassword(dataset.user3.password)

page.once('dialog',async dialog =>
    {
        console.log(dialog.message())
        await expect(dialog.message()).toContain("User does not exist") //assertion
        await dialog.accept()
    }
    )
await loginpge.loginbutton() 

await expect(page.locator('#login2')).toBeVisible()

})