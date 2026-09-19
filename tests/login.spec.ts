import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {loginData} from '../test-data/loginData';

 
test('OrangeHRM login test',async({page})=>{
    const loginPage = new LoginPage(page);
    const username =loginData.username;
    const password =loginData.password;
 
    await loginPage.open();
    await loginPage.login(username,password);
    await expect(page).toHaveURL(/dashboard/);
 
 


 
});
 