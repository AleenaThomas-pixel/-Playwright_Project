
import {expect} from "@playwright/test"
import {LoginPage} from "../pages/loginpage"
import { PlaceOrder } from "../pages/placeorderpage"
import test from "../utils/fixture.js"

import vdata from "../utils/validcredentials.json" with {type: "json"}

//Test7
test('Product - Laptop purchase ',{timeout:30000},async({customfixture})=>
{

   let loginpge = new LoginPage(customfixture)
   await loginpge.accessurl()
   await loginpge.login()
   await loginpge.loginusername(vdata.username)
   await loginpge.loginpassword(vdata.password)
   const pOrder = await loginpge.loginbutton() 

   await pOrder.selectcategoryLaptop()
   await pOrder.selectproductnameLaptap()

   customfixture.once('dialog',async dialog=>
    {
        console.log(dialog.message())
        await expect(dialog.message()).toContain("Product added")   //assertion
        await dialog.accept()
    }
    )
   await pOrder.addtocartbutton()

})

//Test8
test('Product - Phones purchase ',{timeout:30000},async({page})=>
{

   let loginpge = new LoginPage(page)
   await loginpge.accessurl()
   await loginpge.login()
   await loginpge.loginusername(vdata.username)
   await loginpge.loginpassword(vdata.password)
   const pOrder = await loginpge.loginbutton() 
   
   await pOrder.clearcart()
   await pOrder.selectcategoryPhone()
   await pOrder.selectproductnamePhones()

   page.once('dialog',async dialog=>
    {
        console.log(dialog.message())
        await expect(dialog.message()).toContain("Product added")   //assertion
        await dialog.accept()
    }
    )
   await pOrder.addtocartbutton()
   await pOrder.cart()
   await pOrder.placeorderbutton()
   await pOrder.purchasedetails("Aloshy","India","Gurgaon","2221-XXXX-XXXX","OCT","2026")
   await pOrder.purchaseorderbutton()

   await expect(page.getByRole('heading',{name:'Thank you for your purchase!'})).toBeVisible()  //assertion
   
   await pOrder.okbutton()

})

//Test9
test('Product - Monitors purchase ',{timeout:30000},async({page})=>
{

  let loginpge = new LoginPage(page)
   await loginpge.accessurl()
   await loginpge.login()
   await loginpge.loginusername(vdata.username)
   await loginpge.loginpassword(vdata.password)
   const pOrder = await loginpge.loginbutton() 
   await page.pause()

   await pOrder.clearcart()
   await page.pause()
   await pOrder.selectcategoryMonitors()
   await page.pause()
   await pOrder.selectproductnameMonitors()
   await page.pause()

   page.once('dialog',async dialog=>
    {
        console.log(dialog.message())
        await expect(dialog.message()).toContain("Product added")  //assertion
        await dialog.accept()
    }
    )
   await page.pause()
   await pOrder.addtocartbutton()
   await page.pause()
   await pOrder.cart()
   await page.pause()
   await pOrder.placeorderbutton()
   await page.pause()
   //await page.waitForTimeout(40000)
   await pOrder.purchasedetails("Aloshy","India","Gurgaon","2221-XXXX-XXXX","OCT","2026")
   await page.pause()
   await pOrder.purchaseorderbutton()   
   await page.pause()

   await expect(page.locator('#nava')).toHaveText("PRODUCT STORE")  //assertion
   await pOrder.okbutton()

})