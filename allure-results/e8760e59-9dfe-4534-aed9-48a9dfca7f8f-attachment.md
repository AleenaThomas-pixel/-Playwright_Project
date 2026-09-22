# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Placeorder.spec.js >> Product - Monitors purchase 
- Location: tests\Placeorder.spec.js:70:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//a[text() =\'ASUS Full HD\']') to be visible

```

# Page snapshot

```yaml
- generic [ref=f3e1]:
  - navigation [ref=f3e2]:
    - link "PRODUCT STORE" [ref=f3e3] [cursor=pointer]:
      - /url: index.html
    - list [ref=f3e6]:
      - listitem [ref=f3e7]:
        - link "Home (current)" [ref=f3e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=f3e9]: (current)
      - listitem [ref=f3e10]:
        - link "Contact" [ref=f3e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f3e12]:
        - link "About us" [ref=f3e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f3e14]:
        - link "Cart" [ref=f3e15] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=f3e16]:
        - link "Log in" [ref=f3e17] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=f3e18]:
        - link "Sign up" [ref=f3e19] [cursor=pointer]:
          - /url: "#"
    - generic [ref=f3e21]:
      - list [ref=f3e22]:
        - listitem [ref=f3e23] [cursor=pointer]
        - listitem [ref=f3e24] [cursor=pointer]
        - listitem [ref=f3e25] [cursor=pointer]
      - img "First slide" [ref=f3e28]
      - button "Previous" [ref=f3e29] [cursor=pointer]
      - button "Next" [ref=f3e32] [cursor=pointer]
  - generic [ref=f3e36]:
    - generic [ref=f3e38]:
      - link "CATEGORIES" [ref=f3e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=f3e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=f3e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [active] [ref=f3e42] [cursor=pointer]:
        - /url: "#"
    - list [ref=f3e45]:
      - listitem [ref=f3e46]:
        - button "Previous" [ref=f3e47]
      - listitem [ref=f3e48]:
        - button "Next" [ref=f3e49] [cursor=pointer]
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
  14  |         this.prdctnameMonitor = page.locator("//a[text() ='ASUS Full HD']")
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
  63  |        return this
  64  |     }
  65  | 
  66  |     async selectproductnameMonitors()
  67  |     {
> 68  |         await this.prdctnameMonitor.waitFor({state: 'visible'})
      |                                     ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
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
  108 |        await this.purchasename.fill(name)
  109 |        await this.purchaseco.fill(country)
  110 |        await this.purchasecty.fill(city)
  111 |        await this.purchasecc.fill(card)
  112 |        await this.purchasemnth.fill(month)
  113 |        await this.purchseyr.fill(year)
  114 |        return this
  115 | 
  116 |     }
  117 | 
  118 |     async purchaseorderbutton()
  119 |     {
  120 |         await this.purchasebtn.click()
  121 |         return this
  122 |     }
  123 | 
  124 |     async okbutton()
  125 |     {
  126 |         await this.okbtn.click()
  127 |         //return new LogOutPage(this.page)
  128 |         return this
  129 |     }
  130 | }
  131 | 
  132 | 
```