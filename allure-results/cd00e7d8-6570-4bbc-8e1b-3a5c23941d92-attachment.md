# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Placeorder.spec.js >> Product - Phones purchase 
- Location: tests\Placeorder.spec.js:33:6

# Error details

```
ReferenceError: Cannot access 'pOrder' before initialization
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog [ref=e2]:
    - document [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - heading "Log in" [level=5] [ref=e6]
          - button "Close" [ref=e7] [cursor=pointer]: ×
        - generic [ref=e9]:
          - generic [ref=e10]:
            - generic [ref=e11]: "Username:"
            - textbox [ref=e12]
          - generic [ref=e13]:
            - generic [ref=e14]: "Password:"
            - textbox [ref=e15]
        - generic [ref=e17]:
          - button "Close" [ref=e18]
          - button "Log in" [ref=e19]
  - text:             
  - navigation [ref=e20]:
    - link "PRODUCT STORE" [ref=e21] [cursor=pointer]:
      - /url: index.html
    - list [ref=e24]:
      - listitem [ref=e25]:
        - link "Home (current)" [ref=e26] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=e27]: (current)
      - listitem [ref=e28]:
        - link "Contact" [ref=e29] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e30]:
        - link "About us" [ref=e31] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e32]:
        - link "Cart" [ref=e33] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=e34]:
        - link "Log in" [active] [ref=e35] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=e36]:
        - link "Sign up" [ref=e37] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e39]:
      - list [ref=e40]:
        - listitem [ref=e41] [cursor=pointer]
        - listitem [ref=e42] [cursor=pointer]
        - listitem [ref=e43] [cursor=pointer]
      - img "First slide" [ref=e46]
      - button "Previous" [ref=e47] [cursor=pointer]
      - button "Next" [ref=e50] [cursor=pointer]
  - generic [ref=e54]:
    - generic [ref=e56]:
      - link "CATEGORIES" [ref=e57] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e58] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e59] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e60] [cursor=pointer]:
        - /url: "#"
    - list [ref=e63]:
      - listitem [ref=e64]:
        - button "Previous" [ref=e65]
      - listitem [ref=e66]:
        - button "Next" [ref=e67] [cursor=pointer]
  - generic [ref=e69]:
    - generic [ref=e72]:
      - heading "About Us" [level=4] [ref=e73]
      - paragraph [ref=e74]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e77]:
      - heading "Get in Touch" [level=4] [ref=e78]
      - paragraph [ref=e79]: "Address: 2390 El Camino Real"
      - paragraph [ref=e80]: "Phone: +440 123456"
      - paragraph [ref=e81]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e85]
  - contentinfo [ref=e87]:
    - paragraph [ref=e88]: Copyright © Product Store
```

# Test source

```ts
  1  | 
  2  | import {expect} from "@playwright/test"
  3  | import {LoginPage} from "../pages/loginpage"
  4  | import { PlaceOrder } from "../pages/placeorderpage"
  5  | import test from "../utils/fixture.js"
  6  | 
  7  | import vdata from "../utils/validcredentials.json" with {type: "json"}
  8  | 
  9  | test('Product - Laptop purchase ',{timeout:30000},async({customfixture})=>
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
  22 |    customfixture.once('dialog',async dialog=>
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
  33 | test.only('Product - Phones purchase ',{timeout:30000},async({page})=>
  34 | {
  35 | 
  36 |    let loginpge = new LoginPage(page)
  37 |    await loginpge.accessurl()
  38 |    await loginpge.login()
> 39 |    await pOrder.clearcart()
     |    ^ ReferenceError: Cannot access 'pOrder' before initialization
  40 |    await loginpge.loginusername(vdata.username)
  41 |    await loginpge.loginpassword(vdata.password)
  42 |    const pOrder = await loginpge.loginbutton() 
  43 | 
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
  72 |    await pOrder.clearcart()
  73 |    await loginpge.login()
  74 |    await loginpge.loginusername(vdata.username)
  75 |    await loginpge.loginpassword(vdata.password)
  76 |    const pOrder = await loginpge.loginbutton() 
  77 | 
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