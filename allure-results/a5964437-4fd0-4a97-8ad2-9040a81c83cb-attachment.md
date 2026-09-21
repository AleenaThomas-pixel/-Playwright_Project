# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Placeorder.spec.js >> Product - Phones purchase 
- Location: tests\Placeorder.spec.js:35:6

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
  1   | 
  2   | import {expect} from "@playwright/test"
  3   | import {LoginPage} from "../pages/loginpage"
  4   | import { PlaceOrder } from "../pages/placeorderpage"
  5   | import test from "../utils/fixture.js"
  6   | 
  7   | import vdata from "../utils/validcredentials.json" with {type: "json"}
  8   | 
  9   | //Test7
  10  | test('Product - Laptop purchase ',{timeout:30000},async({customfixture})=>
  11  | {
  12  | 
  13  |    let loginpge = new LoginPage(customfixture)
  14  |    await loginpge.accessurl()
  15  |    await loginpge.login()
  16  |    await loginpge.loginusername(vdata.username)
  17  |    await loginpge.loginpassword(vdata.password)
  18  |    const pOrder = await loginpge.loginbutton() 
  19  | 
  20  |    await pOrder.selectcategoryLaptop()
  21  |    await pOrder.selectproductnameLaptap()
  22  | 
  23  |    customfixture.once('dialog',async dialog=>
  24  |     {
  25  |         console.log(dialog.message())
  26  |         await expect(dialog.message()).toContain("Product added")   //assertion
  27  |         await dialog.accept()
  28  |     }
  29  |     )
  30  |    await pOrder.addtocartbutton()
  31  | 
  32  | })
  33  | 
  34  | //Test8
  35  | test.only('Product - Phones purchase ',{timeout:30000},async({page})=>
  36  | {
  37  | 
  38  |    let loginpge = new LoginPage(page)
  39  |    await loginpge.accessurl()
  40  |    await loginpge.login()
> 41  |    await pOrder.clearcart()
      |    ^ ReferenceError: Cannot access 'pOrder' before initialization
  42  |    await loginpge.loginusername(vdata.username)
  43  |    await loginpge.loginpassword(vdata.password)
  44  |    const pOrder = await loginpge.loginbutton() 
  45  | 
  46  |    await pOrder.selectcategoryPhone()
  47  |    await pOrder.selectproductnamePhones()
  48  | 
  49  |    page.once('dialog',async dialog=>
  50  |     {
  51  |         console.log(dialog.message())
  52  |         await expect(dialog.message()).toContain("Product added")   //assertion
  53  |         await dialog.accept()
  54  |     }
  55  |     )
  56  |    await pOrder.addtocartbutton()
  57  |    await pOrder.cart()
  58  |    await pOrder.placeorderbutton()
  59  |    //await page.waitForTimeout(50000)
  60  |    await pOrder.purchasedetails("Aloshy","India","Gurgaon","2221-XXXX-XXXX","OCT","2026")
  61  |    await pOrder.purchaseorderbutton()
  62  | 
  63  |    await expect(page.getByRole('heading',{name:'Thank you for your purchase!'})).toBeVisible()  //assertion
  64  |    
  65  |    await pOrder.okbutton()
  66  | 
  67  | })
  68  | 
  69  | //Test9
  70  | test.only('Product - Monitors purchase ',{timeout:30000},async({page})=>
  71  | {
  72  | 
  73  |   let loginpge = new LoginPage(page)
  74  |    await loginpge.accessurl()
  75  |    await loginpge.login()
  76  |    await loginpge.loginusername(vdata.username)
  77  |    await loginpge.loginpassword(vdata.password)
  78  |    const pOrder = await loginpge.loginbutton() 
  79  | 
  80  |    await pOrder.clearcart()
  81  |    await pOrder.selectcategoryMonitors()
  82  |    await pOrder.selectproductnameMonitors()
  83  | 
  84  |    page.once('dialog',async dialog=>
  85  |     {
  86  |         console.log(dialog.message())
  87  |         await expect(dialog.message()).toContain("Product added")  //assertion
  88  |         await dialog.accept()
  89  |     }
  90  |     )
  91  |    await pOrder.addtocartbutton()
  92  |    await pOrder.cart()
  93  |    await pOrder.placeorderbutton()
  94  |    //await page.waitForTimeout(40000)
  95  |    await pOrder.purchasedetails("Aloshy","India","Gurgaon","2221-XXXX-XXXX","OCT","2026")
  96  |    await pOrder.purchaseorderbutton()   
  97  | 
  98  |    await expect(page.locator('#nava')).toHaveText("PRODUCT STORE")  //assertion
  99  |    await pOrder.okbutton()
  100 | 
  101 | })
```