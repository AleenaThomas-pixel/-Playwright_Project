# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Placeorder.spec.js >> Product - Laptop purchase 
- Location: tests\Placeorder.spec.js:9:6

# Error details

```
ReferenceError: page is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=f3e1]:
  - navigation [ref=f3e2]:
    - generic [ref=f3e3]:
      - link "PRODUCT STORE" [ref=f3e4] [cursor=pointer]:
        - /url: index.html
      - list [ref=f3e7]:
        - listitem [ref=f3e8]:
          - link "Home (current)" [ref=f3e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=f3e10]: (current)
        - listitem [ref=f3e11]:
          - link "Contact" [ref=f3e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e13]:
          - link "About us" [ref=f3e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e15]:
          - link "Cart" [ref=f3e16] [cursor=pointer]:
            - /url: cart.html
        - listitem [ref=f3e17]:
          - link "Log in" [ref=f3e18] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem
        - listitem [ref=f3e19]:
          - link "Sign up" [ref=f3e20] [cursor=pointer]:
            - /url: "#"
  - generic [ref=f3e24]:
    - generic:
      - list [ref=f3e25]:
        - listitem [ref=f3e26] [cursor=pointer]
        - listitem [ref=f3e27] [cursor=pointer]
        - listitem [ref=f3e28] [cursor=pointer]
      - link:
        - /url: "#myCarousel-2"
      - link:
        - /url: "#myCarousel-2"
```

# Test source

```ts
  1  | 
  2  | import {expect} from "@playwright/test"
  3  | import {LoginPage} from "../pages/loginpage"
  4  | import { PlaceOrder } from "../pages/placeorderpage"
  5  | import test from '../utils/fixture.js'
  6  | 
  7  | import vdata from "../utils/validcredentials.json" with {type: "json"}
  8  | 
  9  | test.only('Product - Laptop purchase ',{timeout:30000},async({customfixture})=>
  10 | {
  11 | 
  12 |    let loginpge = new LoginPage(customfixture)
  13 |    await loginpge.accessurl()
  14 |    await loginpge.login()
  15 |    await loginpge.loginusername(vdata.username)
  16 |    await loginpge.loginpassword(vdata.password)
  17 |    const pOrder = await loginpge.loginbutton() 
  18 | 
  19 |    await pOrder.selectcategoryLaptop()
  20 |    await pOrder.selectproductnameLaptap()
  21 | 
> 22 |    page.once('dialog',async dialog=>
     |    ^ ReferenceError: page is not defined
  23 |     {
  24 |         console.log(dialog.message())
  25 |         await expect(dialog.message()).toContain("Product added")   //assertion
  26 |         await dialog.accept()
  27 |     }
  28 |     )
  29 |    await pOrder.addtocartbutton()
  30 | 
  31 | })
  32 | 
  33 | test('Product - Phones purchase ',{timeout:30000},async({page})=>
  34 | {
  35 | 
  36 |    let loginpge = new LoginPage(page)
  37 |    await loginpge.accessurl()
  38 |    await loginpge.login()
  39 |    await loginpge.loginusername(vdata.username)
  40 |    await loginpge.loginpassword(vdata.password)
  41 |    const pOrder = await loginpge.loginbutton() 
  42 | 
  43 |    await pOrder.clearcart()
  44 |    await pOrder.selectcategoryPhone()
  45 |    await pOrder.selectproductnamePhones()
  46 | 
  47 |    page.once('dialog',async dialog=>
  48 |     {
  49 |         console.log(dialog.message())
  50 |         await expect(dialog.message()).toContain("Product added")   //assertion
  51 |         await dialog.accept()
  52 |     }
  53 |     )
  54 |    await pOrder.addtocartbutton()
  55 |    await pOrder.cart()
  56 |    await pOrder.placeorderbutton()
  57 |    //await page.waitForTimeout(50000)
  58 |    await pOrder.purchasedetails("Aloshy","India","Gurgaon","2221-XXXX-XXXX","OCT","2026")
  59 |    await pOrder.purchaseorderbutton()
  60 | 
  61 |    await expect(page.getByRole('heading',{name:'Thank you for your purchase!'})).toBeVisible()  //assertion
  62 |    
  63 |    await pOrder.okbutton()
  64 | 
  65 | })
  66 | 
  67 | test('Product - Monitors purchase ',{timeout:30000},async({page})=>
  68 | {
  69 | 
  70 |   let loginpge = new LoginPage(page)
  71 |    await loginpge.accessurl()
  72 |    await loginpge.login()
  73 |    await loginpge.loginusername(vdata.username)
  74 |    await loginpge.loginpassword(vdata.password)
  75 |    const pOrder = await loginpge.loginbutton() 
  76 | 
  77 |    await pOrder.clearcart()
  78 |    await pOrder.selectcategoryMonitors()
  79 |    await pOrder.selectproductnameMonitors()
  80 | 
  81 |    page.once('dialog',async dialog=>
  82 |     {
  83 |         console.log(dialog.message())
  84 |         await expect(dialog.message()).toContain("Product added")  //assertion
  85 |         await dialog.accept()
  86 |     }
  87 |     )
  88 |    await pOrder.addtocartbutton()
  89 |    await pOrder.cart()
  90 |    await pOrder.placeorderbutton()
  91 |    //await page.waitForTimeout(40000)
  92 |    await pOrder.purchasedetails("Aloshy","India","Gurgaon","2221-XXXX-XXXX","OCT","2026")
  93 |    await pOrder.purchaseorderbutton()   
  94 | 
  95 |    await expect(page.locator('#nava')).toHaveText("PRODUCT STORE")  //assertion
  96 |    await pOrder.okbutton()
  97 | 
  98 | })
```