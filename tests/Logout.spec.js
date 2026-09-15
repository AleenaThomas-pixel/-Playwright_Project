import{test,expect} from "@playwright/test"
import { LoginPage } from "../pages/loginpage"
import { LogOutPage } from "../pages/logoutpage"

const vdata = require("../utils/validcredentials.json")

test('LogOut', async({page})=>
{
 
   let loginpge = new LoginPage(page)
   await loginpge.accessurl()
   await loginpge.login()
   await loginpge.loginusername(vdata.username)
   await loginpge.loginpassword(vdata.password)
   await loginpge.loginbutton()

   let logOut = new LogOutPage(page)
   await logOut.logoutbutton()

   await expect(page.locator('#login2')).toBeVisible()


})