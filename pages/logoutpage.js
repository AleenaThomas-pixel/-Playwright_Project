
export class LogOutPage
{
    constructor(page)
    {
        this.page = page
        this.logoutbtn = page.locator('#logout2')
    }

    async logoutbutton()
    {
        await this.logoutbtn.click()
        return this
    }
    
}