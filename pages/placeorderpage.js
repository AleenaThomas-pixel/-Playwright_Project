//import { LogOutPage } from "./logoutpage"

 export class PlaceOrder
{

    constructor(page)
    {
        this.page = page
        this.categoryLaptop = page.locator("//a[text()='Laptops']")
        this.prdctnamelap = page.getByRole('link',{name:'Sony vaio i5'})
        this.categoryPhones = page.locator("//a[text()='Phones']")
        this.prdctnamePhone = page.getByRole('link',{name:'Samsung galaxy s7'})
        this.categoryMonitors = page.locator("//a[text()='Monitors']")
        this.prdctnameMonitor = page.getByRole('link',{name:'ASUS Full HD'})
        this.addtocartbtn = page.locator("//a[text()='Add to cart']")
        this.crtLink = page.locator('#cartur')
        this.placeorderbtn = page.locator("//button[text()='Place Order']")
        this.purchasename = page.locator('#name')
        this.purchaseco = page.locator('#country')
        this.purchasecty = page.locator('#city')
        this.purchasecc = page.locator('#card')
        this.purchasemnth = page.locator('#month')
        this.purchseyr = page.locator('#year')
        this.purchasebtn = page.locator("//button[text()='Purchase']")
        this.okbtn = page.locator("//button[text()='OK']")

    }


    async selectcategoryLaptop()
    {
       await this.categoryLaptop.click()
       return this
    }

    async selectproductnameLaptap()
    {
       await this.prdctnamelap.click()
       return this
    }

    async selectcategoryPhone()
    {
       await this.categoryPhones.click()
       return this
    }

    async selectproductnamePhones()
    {
       await this.prdctnamePhone.click() 
       return this
    }
    async selectcategoryMonitors()
    {
       await this.categoryMonitors.click()
       return this
    }

    async selectproductnameMonitors()
    {
        await this.prdctnameMonitor.click()
        return this
    }

    async addtocartbutton()
    {
        await this.addtocartbtn.click()
        return this
    }
 
    async cart()
    {
        await this.crtLink.click()
        return this
    }

    //to clear the existing product from cart
    async clearcart()
    {
        await this.cart()
        const Deletebtn = this.page.locator("//a[text() = 'Delete']")
        if(await Deletebtn.count()>0)
        {
            await Deletebtn.first().click()
            await this.page.waitForTimeout(500)
        }
        await this.page.getByText('PRODUCT STORE').click()
        return this
    }

    async placeorderbutton()
    {
        await this.placeorderbtn.click()
        return this
    }

    async purchasedetails(name,country,city,card,month,year)
    {

       await this.purchasename.fill(name)
       await this.purchaseco.fill(country)
       await this.purchasecty.fill(city)
       await this.purchasecc.fill(card)
       await this.purchasemnth.fill(month)
       await this.purchseyr.fill(year)
       return this

    }

    async purchaseorderbutton()
    {
        await this.purchasebtn.click()
        return this
    }

    async okbutton()
    {
        await this.okbtn.click()
        //return new LogOutPage(this.page)
        return this
    }
}