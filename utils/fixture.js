
import {test as base} from '@playwright/test' //package imported into base variable
//import{LoginPage} from '../page/LoginPage'
//import {logindata} from '../testdata/logindata.json'

const test=base.test.extend({ // extend fn (predefined) is used to create a custom test
    customfixture : async({page},use)=> //custom fixture creation and assigned to customfixture variable, use fn tells customfixture should be used instead of page
    {
await page.goto('https://www.demoblaze.com')
await use(page)
    }
})
export default test // esmodule 