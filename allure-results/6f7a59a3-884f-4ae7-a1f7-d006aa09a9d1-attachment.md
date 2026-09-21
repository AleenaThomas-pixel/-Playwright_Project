# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Placeorder.spec.js >> Product - Monitors purchase 
- Location: tests\Placeorder.spec.js:70:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#orderModal') to be visible
    51 × locator resolved to hidden <div tabindex="-1" role="dialog" id="orderModal" class="modal fade" aria-hidden="true" aria-labelledby="orderModalLabel">…</div>

```

# Page snapshot

```yaml
- generic [ref=f5e1]:
  - text:             
  - navigation [ref=f5e2]:
    - generic [ref=f5e3]:
      - link "PRODUCT STORE" [ref=f5e4] [cursor=pointer]:
        - /url: index.html
      - list [ref=f5e7]:
        - listitem [ref=f5e8]:
          - link "Home (current)" [ref=f5e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=f5e10]: (current)
        - listitem [ref=f5e11]:
          - link "Contact" [ref=f5e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f5e13]:
          - link "About us" [ref=f5e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f5e15]:
          - link "Cart" [ref=f5e16] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=f5e17]:
          - link "Log out" [ref=f5e18] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f5e19]:
          - link "Welcome aleenauser213" [ref=f5e20] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=f5e22]:
    - generic [ref=f5e23]:
      - heading "Products" [level=2] [ref=f5e24]
      - table [ref=f5e26]:
        - rowgroup [ref=f5e27]:
          - row [ref=f5e28]:
            - columnheader "Pic" [ref=f5e29]
            - columnheader "Title" [ref=f5e30]
            - columnheader "Price" [ref=f5e31]
            - columnheader "x" [ref=f5e32]
        - rowgroup
    - generic [ref=f5e33]:
      - heading "Total" [level=2] [ref=f5e34]
      - generic:
        - generic:
          - heading [level=3]
      - button "Place Order" [active] [ref=f5e35]
  - generic [ref=f5e37]:
    - generic [ref=f5e40]:
      - heading "About Us" [level=4] [ref=f5e41]
      - paragraph [ref=f5e42]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f5e45]:
      - heading "Get in Touch" [level=4] [ref=f5e46]
      - paragraph [ref=f5e47]: "Address: 2390 El Camino Real"
      - paragraph [ref=f5e48]: "Phone: +440 123456"
      - paragraph [ref=f5e49]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f5e53]
  - contentinfo [ref=f5e55]:
    - paragraph [ref=f5e56]: Copyright © Product Store
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
  14  |         this.prdctnameMonitor = page.getByRole('link',{name:'ASUS Full HD'})
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
  30  | 
  31  |     async selectcategoryLaptop()
  32  |     {
  33  |        await this.categoryLaptop.click()
  34  |        return this
  35  |     }
  36  | 
  37  |     async selectproductnameLaptap()
  38  |     {
  39  |        await this.prdctnamelap.click()
  40  |        return this
  41  |     }
  42  | 
  43  |     async selectcategoryPhone()
  44  |     {
  45  |        await this.categoryPhones.click()
  46  |        return this
  47  |     }
  48  | 
  49  |     async selectproductnamePhones()
  50  |     {
  51  |        await this.prdctnamePhone.click() 
  52  |        return this
  53  |     }
  54  |     async selectcategoryMonitors()
  55  |     {
  56  |        await this.categoryMonitors.click()
  57  |        return this
  58  |     }
  59  | 
  60  |     async selectproductnameMonitors()
  61  |     {
  62  |         await this.prdctnameMonitor.click()
  63  |         return this
  64  |     }
  65  | 
  66  |     async addtocartbutton()
  67  |     {
  68  |         await this.addtocartbtn.click()
  69  |         return this
  70  |     }
  71  |  
  72  |     async cart()
  73  |     {
  74  |         await this.crtLink.click()
  75  |         return this
  76  |     }
  77  | 
  78  |     //to clear the existing product from cart
  79  |     async clearcart()
  80  |     {
  81  |         await this.cart()
  82  |         const Deletebtn = this.page.locator("//a[text() = 'Delete']")
  83  |         while(await Deletebtn.count()>0)
  84  |         {
  85  |             await Deletebtn.first().click()
  86  |             await this.page.waitForTimeout(500)
  87  |         }
  88  |         await this.page.getByText('PRODUCT STORE').click()
  89  |         return this
  90  |     }
  91  | 
  92  |     async placeorderbutton()
  93  |     {
  94  |         await this.placeorderbtn.click()
> 95  |         await this.placeordermodal.waitFor({ state: 'visible' })
      |                                    ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  96  |         return this
  97  |     }
  98  | 
  99  |     async purchasedetails(name,country,city,card,month,year)
  100 |     {
  101 | 
  102 |        await this.purchasename.fill(name)
  103 |        await this.purchaseco.fill(country)
  104 |        await this.purchasecty.fill(city)
  105 |        await this.purchasecc.fill(card)
  106 |        await this.purchasemnth.fill(month)
  107 |        await this.purchseyr.fill(year)
  108 |        return this
  109 | 
  110 |     }
  111 | 
  112 |     async purchaseorderbutton()
  113 |     {
  114 |         await this.purchasebtn.click()
  115 |         return this
  116 |     }
  117 | 
  118 |     async okbutton()
  119 |     {
  120 |         await this.okbtn.click()
  121 |         //return new LogOutPage(this.page)
  122 |         return this
  123 |     }
  124 | }
```