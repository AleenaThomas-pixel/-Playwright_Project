/*const base=require('@playwright/test') //package imported into base variable
//const LoginPage = require('../page/LoginPage');
//const logindata = require('../testdata/logindata.json')

const test=base.test.extend({ // extend fn (predefined) is used to create a custom test
    customfixture: async({page},use)=> //custom fixture creation and assigned to customfixture variable, use fn tells customfixture should be used instead of page
    {                                    //
await page.goto('https://www.demoblaze.com')
await use(page)
    }
})
module.exports={test}*/

import {test as base} from '@playwright/test'
//import{LoginPage} from '../page/LoginPage'
//import {logindata} from '../testdata/logindata.json'

const test=base.test.extend({
    customfixture : async({page},use)=>
    {
await page.goto('https://www.demoblaze.com')
await use(page)
    }
})
export default test