import{test,expect} from "@playwright/test"
import { faker } from "@faker-js/faker"
import { SignUp } from "../pages/SignUpPage"

import data from "../utils/signupcredentials.json" with {type:"json"}

test('Sign Up - Click Sign up button ', async({page})=>
{

let signpge = new SignUp(page)
await signpge.accessurl()
await signpge.signup()

//await signpge.enterusername(data.username)
//await signpge.enterpassword(data.password)

//Type 1 - Generate unique username and password
const username = 'User'+ Date.now()
const password = 'Alee'+ Date.now()

//Type 2 - Generate  test data using faker class
/*const username = faker.internet.username()
//const password = faker.internet.password(
    {
        length:10    //pass of length 10 
    }

)*/
console.log(username)
console.log(password)
await signpge.enterusername(username)
await signpge.enterpassword(password)

page.on('dialog', async dialog=>
    {
    console.log(dialog.message())
    await dialog.accept()
    }
    ) 
 await signpge.signupbutton()

await expect(page).toHaveURL("https://www.demoblaze.com")

})

test('SignUp - Click close button', async({page})=>
{
    let signpge = new SignUp(page)
    await signpge.accessurl()
    await signpge.signup()
    const username = faker.internet.username()
    const password = faker.internet.password(
        {
            length:10
        }
    )
    await signpge.enterusername(username)
    await signpge.enterpassword(password)
    await signpge.closebutton()

    await expect(page).toHaveURL("https://www.demoblaze.com")

})