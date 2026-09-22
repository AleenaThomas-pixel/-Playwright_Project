# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Placeorder.spec.js >> Product - Monitors purchase 
- Location: tests\Placeorder.spec.js:70:6

# Error details

```
ReferenceError: exact is not defined
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
            - textbox [ref=e12]: aleenauser213
          - generic [ref=e13]:
            - generic [ref=e14]: "Password:"
            - textbox [ref=e15]: aleena204
        - generic [ref=e17]:
          - button "Close" [ref=e18]
          - button "Log in" [active] [ref=e19]
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
  1   | //import { LogOutPage } from "./logoutpage"
  2   | 
  3   |  export class PlaceOrder
  4   | {
  5   | 
  6   |     constructor(page)
  7   |     {
  8   |         this.page = page
  9   |         this.categoryLaptop = page.locator("//a[text()='Laptops']")
  10  |         this.prdctnamelap = page.getByRole('link',{name:'Sony vaio i5'})
  11  |         this.categoryPhones = page.locator("//a[text()='Phones']")
  12  |         this.prdctnamePhone = page.getByRole('link',{name:'Samsung galaxy s7'})
  13  |         this.categoryMonitors = page.locator("//a[text()='Monitors']")
> 14  |         this.prdctnameMonitor = page.getByRole('link',{name:'ASUS Full HD'}, exact=true)
      |                                                                                   ^ ReferenceError: exact is not defined
  15  |         this.addtocartbtn = page.locator("//a[text()='Add to cart']")
  16  |         this.crtLink = page.locator('#cartur')
  17  |         this.placeorderbtn = page.locator("//button[text()='Place Order']")
  18  |         this.purchasename = page.locator('#name')
  19  |         this.purchaseco = page.locator('#country')
  20  |         this.purchasecty = page.locator('#city')
  21  |         this.purchasecc = page.locator('#card')
  22  |         this.purchasemnth = page.locator('#month')
  23  |         this.purchseyr = page.locator('#year')
  24  |         this.purchasebtn = page.locator("//button[text()='Purchase']")
  25  |         this.okbtn = page.locator("//button[text()='OK']")
  26  |         this.placeordermodal = page.locator('#orderModal')
  27  | 
  28  |     }
  29  | 
  30  |     /*async selectproduct(product)
  31  |    {
  32  |     await this.page.locator(`//a[text()="${product}"]`).click();
  33  |     return this
  34  |    }   
  35  |   */ 
  36  |     async selectcategoryLaptop()
  37  |     {
  38  |        await this.categoryLaptop.click()
  39  |        return this
  40  |     }
  41  | 
  42  |     async selectproductnameLaptap()
  43  |     {
  44  |        await this.prdctnamelap.click()
  45  |        return this
  46  |     }
  47  | 
  48  |     async selectcategoryPhone()
  49  |     {
  50  |        await this.categoryPhones.click()
  51  |        return this
  52  |     }
  53  | 
  54  |     async selectproductnamePhones()
  55  |     {
  56  |        await this.prdctnamePhone.click() 
  57  |        return this
  58  |     }
  59  | 
  60  |     async selectcategoryMonitors()
  61  |     {
  62  |        await this.categoryMonitors.click()
  63  |        //await this.prdctnameMonitor.waitFor({state: 'visible'})
  64  |        return this
  65  |     }
  66  | 
  67  |     async selectproductnameMonitors()
  68  |     {
  69  |         await this.prdctnameMonitor.click()
  70  |         return this
  71  |     }
  72  | 
  73  |     async addtocartbutton()
  74  |     {
  75  |         await this.addtocartbtn.click()
  76  |         return this
  77  |     }
  78  |  
  79  |     async cart()
  80  |     {
  81  |         await this.crtLink.click()
  82  |         return this
  83  |     }
  84  | 
  85  |     //to clear the existing product from cart
  86  |     async clearcart()
  87  |     {
  88  |         await this.cart()
  89  |         const Deletebtn = this.page.locator("//a[text() = 'Delete']")
  90  |         while(await Deletebtn.count()>0)
  91  |         {
  92  |             await Deletebtn.first().click()
  93  |             await this.page.waitForTimeout(500)
  94  |         }
  95  |         await this.page.getByText('PRODUCT STORE').click()
  96  |         return this
  97  |     }
  98  | 
  99  |     async placeorderbutton()
  100 |     {
  101 |         await this.placeorderbtn.click()
  102 |         //await this.placeordermodal.waitFor({ state: 'visible' })
  103 |         return this
  104 |     }
  105 | 
  106 |     async purchasedetails(name,country,city,card,month,year)
  107 |     {
  108 | 
  109 |        await this.purchasename.fill(name)
  110 |        await this.purchaseco.fill(country)
  111 |        await this.purchasecty.fill(city)
  112 |        await this.purchasecc.fill(card)
  113 |        await this.purchasemnth.fill(month)
  114 |        await this.purchseyr.fill(year)
```