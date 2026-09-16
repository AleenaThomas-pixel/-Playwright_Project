# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> Invalid login - invalid username invalid password
- Location: tests\Login.spec.js:68:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'user3')
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
  1  | import{test,expect} from "@playwright/test"
  2  | 
  3  | import { LoginPage } from "../pages/loginpage"
  4  | //const vdata = require("../utils/validcredentials.json")
  5  | import {vdata} from "../utils/validcredentials.json"
  6  | //const dataset = require("../utils/invalidcredentials.json")
  7  | import {dataset} from "../utils/invalidcredentials.json"
  8  | 
  9  | test('Valid Login', async({page})=>
  10 | {
  11 | 
  12 | let loginpge = new LoginPage(page)
  13 | await loginpge.accessurl()
  14 | await loginpge.login()
  15 | await loginpge.loginusername(vdata.username)
  16 | await loginpge.loginpassword(vdata.password)
  17 | const pOrder = await loginpge.loginbutton()  //page navigation
  18 | 
  19 | await page.waitForTimeout(5000)
  20 | await expect(page.locator('#nameofuser')).toBeVisible()
  21 | 
  22 | })
  23 | 
  24 | test('Invalid Login - invalid username valid password', async({page})=>
  25 | {
  26 | 
  27 | let loginpge = new LoginPage(page)
  28 | await loginpge.accessurl()
  29 | await loginpge.login()
  30 | await loginpge.loginusername(dataset.user1.username)
  31 | await loginpge.loginpassword(dataset.user1.password)
  32 | 
  33 | page.once('dialog',async dialog =>
  34 |     {
  35 |         console.log(dialog.message())
  36 |         await expect(dialog.message()).toContain("User does not exist") //assertion
  37 |         await dialog.accept()
  38 |     }
  39 |     )
  40 | await loginpge.loginbutton() 
  41 | 
  42 | await expect(page.locator('#login2')).toBeVisible()
  43 | 
  44 | })
  45 | 
  46 | test('Invalid Login- valid username invalid password', async({page})=>
  47 | {
  48 |  
  49 | let loginpge = new LoginPage(page)
  50 | await loginpge.accessurl()
  51 | await loginpge.login()
  52 | await loginpge.loginusername(dataset.user2.username)
  53 | await loginpge.loginpassword(dataset.user2.password)
  54 | 
  55 | page.once('dialog',async dialog =>
  56 |     {
  57 |         console.log(dialog.message())
  58 |         await expect(dialog.message()).toContain("Wrong password") //assertion
  59 |         await dialog.accept()
  60 |     }
  61 |     )
  62 | await loginpge.loginbutton() 
  63 | 
  64 | await expect(page.locator('#login2')).toBeVisible()
  65 | 
  66 | })
  67 | 
  68 | test('Invalid login - invalid username invalid password', async({page})=>
  69 | {
  70 |   
  71 | let loginpge = new LoginPage(page)
  72 | await loginpge.accessurl()
  73 | await loginpge.login()
> 74 | await loginpge.loginusername(dataset.user3.username)
     |                                      ^ TypeError: Cannot read properties of undefined (reading 'user3')
  75 | await loginpge.loginpassword(dataset.user3.password)
  76 | 
  77 | page.once('dialog',async dialog =>
  78 |     {
  79 |         console.log(dialog.message())
  80 |         await expect(dialog.message()).toContain("User does not exist") //assertion
  81 |         await dialog.accept()
  82 |     }
  83 |     )
  84 | await loginpge.loginbutton() 
  85 | 
  86 | await expect(page.locator('#login2')).toBeVisible()
  87 | 
  88 | })
```