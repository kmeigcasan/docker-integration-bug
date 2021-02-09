const { Builder, By, Key, until } = require('selenium-webdriver');

const chai = require('chai');
const expect = chai.expect;


describe ('User Integration Testing', async function() {
    this.timeout(30000);
    let driver;
    let vars;
    console.log("#1");


    it('User is able to login successfully', async() => {
        
        console.log("#2");
        
        driver = await new Builder().forBrowser('chrome').build();

        console.log("Getting localhost 3000");
        await driver.get("http://localhost:3000");
        console.log("Done getting localhost 3000");

        //1. Open in browser
        console.log("\n\nDriver inside IT", driver);

        await driver.get("http://localhost:3000"); //
        console.log("Done visiting google");

        await driver.sleep(3000);
        console.log("done");
        //2. Type email               
        let input_email = await driver.findElement(By.name("email"));
        await input_email.sendKeys("kmeigcasan@gmail.com");
        
        //3. Type password
        let input_password = await driver.findElement(By.name("password"));
        await input_password.sendKeys("1234567890");

        //4. Click submit
        let button_submit = await driver.findElement(By.id("login_button"));
        await button_submit.click();
        await driver.sleep(3000);

        //---------Expect---------//
        const result = await driver.findElement(By.id("page_name"));
        const result_text = driver.wait(async function(){
                                return await result.getText();
                            }, 5000);
        expect(result_text).to.equal("CodingDojo Wall");
        await driver.quit();
    });
    
});