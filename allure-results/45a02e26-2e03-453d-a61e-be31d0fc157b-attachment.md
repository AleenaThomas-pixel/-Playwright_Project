# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> Valid Login
- Location: tests\Login.spec.js:7:6

# Error details

```
ReferenceError: vdata is not defined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog [active] [ref=e2]:
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
        - link "Log in" [ref=e35] [cursor=pointer]:
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
    - generic [ref=e61]:
      - generic [ref=e62]:
        - generic [ref=e64]:
          - link [ref=e65] [cursor=pointer]:
            - /url: prod.html?idp_=1
          - generic [ref=e66]:
            - heading [level=4] [ref=e67]:
              - link "Samsung galaxy s6" [ref=e68] [cursor=pointer]:
                - /url: prod.html?idp_=1
            - heading "$360" [level=5] [ref=e69]
            - paragraph [ref=e70]: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
        - generic [ref=e72]:
          - link [ref=e73] [cursor=pointer]:
            - /url: prod.html?idp_=2
          - generic [ref=e74]:
            - heading [level=4] [ref=e75]:
              - link "Nokia lumia 1520" [ref=e76] [cursor=pointer]:
                - /url: prod.html?idp_=2
            - heading "$820" [level=5] [ref=e77]
            - paragraph [ref=e78]: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
        - generic [ref=e80]:
          - link [ref=e81] [cursor=pointer]:
            - /url: prod.html?idp_=3
          - generic [ref=e82]:
            - heading [level=4] [ref=e83]:
              - link "Nexus 6" [ref=e84] [cursor=pointer]:
                - /url: prod.html?idp_=3
            - heading "$650" [level=5] [ref=e85]
            - paragraph [ref=e86]: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
        - generic [ref=e88]:
          - link [ref=e89] [cursor=pointer]:
            - /url: prod.html?idp_=4
          - generic [ref=e90]:
            - heading [level=4] [ref=e91]:
              - link "Samsung galaxy s7" [ref=e92] [cursor=pointer]:
                - /url: prod.html?idp_=4
            - heading "$800" [level=5] [ref=e93]
            - paragraph [ref=e94]: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
        - generic [ref=e96]:
          - link [ref=e97] [cursor=pointer]:
            - /url: prod.html?idp_=5
          - generic [ref=e98]:
            - heading [level=4] [ref=e99]:
              - link "Iphone 6 32gb" [ref=e100] [cursor=pointer]:
                - /url: prod.html?idp_=5
            - heading "$790" [level=5] [ref=e101]
            - paragraph [ref=e102]: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
        - generic [ref=e104]:
          - link [ref=e105] [cursor=pointer]:
            - /url: prod.html?idp_=6
          - generic [ref=e106]:
            - heading [level=4] [ref=e107]:
              - link "Sony xperia z5" [ref=e108] [cursor=pointer]:
                - /url: prod.html?idp_=6
            - heading "$320" [level=5] [ref=e109]
            - paragraph [ref=e110]: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
        - generic [ref=e112]:
          - link [ref=e113] [cursor=pointer]:
            - /url: prod.html?idp_=7
          - generic [ref=e114]:
            - heading [level=4] [ref=e115]:
              - link "HTC One M9" [ref=e116] [cursor=pointer]:
                - /url: prod.html?idp_=7
            - heading "$700" [level=5] [ref=e117]
            - paragraph [ref=e118]: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
        - generic [ref=e120]:
          - link [ref=e121] [cursor=pointer]:
            - /url: prod.html?idp_=8
          - generic [ref=e122]:
            - heading [level=4] [ref=e123]:
              - link "Sony vaio i5" [ref=e124] [cursor=pointer]:
                - /url: prod.html?idp_=8
            - heading "$790" [level=5] [ref=e125]
            - paragraph [ref=e126]: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
        - generic [ref=e128]:
          - link [ref=e129] [cursor=pointer]:
            - /url: prod.html?idp_=9
          - generic [ref=e130]:
            - heading [level=4] [ref=e131]:
              - link "Sony vaio i7" [ref=e132] [cursor=pointer]:
                - /url: prod.html?idp_=9
            - heading "$790" [level=5] [ref=e133]
            - paragraph [ref=e134]: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
      - list [ref=e136]:
        - listitem [ref=e137]:
          - button "Previous" [ref=e138]
        - listitem [ref=e139]:
          - button "Next" [ref=e140] [cursor=pointer]
  - generic [ref=e142]:
    - generic [ref=e145]:
      - heading "About Us" [level=4] [ref=e146]
      - paragraph [ref=e147]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e150]:
      - heading "Get in Touch" [level=4] [ref=e151]
      - paragraph [ref=e152]: "Address: 2390 El Camino Real"
      - paragraph [ref=e153]: "Phone: +440 123456"
      - paragraph [ref=e154]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e158]
  - contentinfo [ref=e160]:
    - paragraph [ref=e161]: Copyright © Product Store
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | 
  3  | import { LoginPage } from "../pages/loginpage"
  4  | const data = require("../utils/validcredentials.json")
  5  | const dataset = require("../utils/invalidcredentials.json")
  6  | 
  7  | test.only('Valid Login', async({page})=>
  8  | {
  9  | 
  10 | let loginpge = new LoginPage(page)
  11 | await loginpge.accessurl()
  12 | await loginpge.login()
> 13 | await loginpge.loginusername(vdata.username)
     |                              ^ ReferenceError: vdata is not defined
  14 | await loginpge.loginpassword(vdata.password)
  15 | const pOrder = await loginpge.loginbutton()  //page navigation
  16 | 
  17 | await page.waitForTimeout(5000)
  18 | await expect(page.locator('#nameofuser')).toBeVisible()
  19 | 
  20 | })
  21 | 
  22 | test('Invalid Login - invalid username valid password', async({page})=>
  23 | {
  24 | 
  25 | let loginpge = new LoginPage(page)
  26 | await loginpge.accessurl()
  27 | await loginpge.login()
  28 | await loginpge.loginusername(dataset.user1.username)
  29 | await loginpge.loginpassword(dataset.user1.password)
  30 | 
  31 | page.once('dialog',async dialog =>
  32 |     {
  33 |         console.log(dialog.message())
  34 |         await expect(dialog.message()).toContain("User does not exist") //assertion
  35 |         await dialog.accept()
  36 |     }
  37 |     )
  38 | await loginpge.loginbutton() 
  39 | 
  40 | await expect(page.locator('#login2')).toBeVisible()
  41 | 
  42 | })
  43 | 
  44 | test('Invalid Login- valid username invalid password', async({page})=>
  45 | {
  46 |  
  47 | let loginpge = new LoginPage(page)
  48 | await loginpge.accessurl()
  49 | await loginpge.login()
  50 | await loginpge.loginusername(dataset.user2.username)
  51 | await loginpge.loginpassword(dataset.user2.password)
  52 | 
  53 | page.once('dialog',async dialog =>
  54 |     {
  55 |         console.log(dialog.message())
  56 |         await expect(dialog.message()).toContain("Wrong password") //assertion
  57 |         await dialog.accept()
  58 |     }
  59 |     )
  60 | await loginpge.loginbutton() 
  61 | 
  62 | await expect(page.locator('#login2')).toBeVisible()
  63 | 
  64 | })
  65 | 
  66 | test('Invalid login - invalid username invalid password', async({page})=>
  67 | {
  68 |   
  69 | let loginpge = new LoginPage(page)
  70 | await loginpge.accessurl()
  71 | await loginpge.login()
  72 | await loginpge.loginusername(dataset.user3.username)
  73 | await loginpge.loginpassword(dataset.user3.password)
  74 | 
  75 | page.once('dialog',async dialog =>
  76 |     {
  77 |         console.log(dialog.message())
  78 |         await expect(dialog.message()).toContain("User does not exist") //assertion
  79 |         await dialog.accept()
  80 |     }
  81 |     )
  82 | await loginpge.loginbutton() 
  83 | 
  84 | await expect(page.locator('#login2')).toBeVisible()
  85 | 
  86 | })
```