//Modified from Selenium IDE Export

const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Kecilin Login Function', function() {
  this.timeout(120000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Login Function', async function() {
    //Open Homepage
    await driver.get("https://staging-briuker.kecilin.id")
        let URL = await driver.getCurrentUrl()
        assert.equal(URL, 'https://staging-briuker.kecilin.id/login')
        await driver.sleep(1000);
    //Click Remember Me
    await driver.findElement(By.css(".ml-2")).click()
    await driver.sleep(1000);
    await driver.findElement(By.css(".ml-2")).click()
    await driver.sleep(1000);
    //Click Forgot Password
    await driver.findElement(By.css("small")).click()
      let URL2 = await driver.getCurrentUrl()
      assert.equal(URL2, 'https://staging-briuker.kecilin.id/forgot-password')
      await driver.sleep(1000);
    await driver.get("https://staging-briuker.kecilin.id")
    await driver.sleep(1000);
    //Input Email only
    await driver.findElement(By.id("email")).sendKeys("admindoangkecilin@yopmail.com")
    await driver.findElement(By.css(".px-4")).click()
    await driver.sleep(1000);
    await driver.findElement(By.id("email")).clear()
    await driver.sleep(1000);
    //Input Password only
    await driver.findElement(By.id("password")).sendKeys("s3creTpas&word")
    await driver.findElement(By.css(".px-4")).click()
    await driver.sleep(1000);
    await driver.findElement(By.id("password")).clear()
    await driver.sleep(1000);
    //Input Incorrect Email
    await driver.findElement(By.id("email")).sendKeys("bukanadmin@yopmail.com")
    await driver.findElement(By.id("password")).sendKeys("s3creTpas&word")
    await driver.findElement(By.css(".px-4")).click()
    await driver.sleep(1000);
    await driver.findElement(By.id("email")).clear()
    await driver.findElement(By.id("password")).clear()
    await driver.sleep(1000);
    //Input Incorrect Password
    await driver.findElement(By.id("email")).sendKeys("admindoangkecilin@yopmail.com")
    await driver.findElement(By.id("password")).sendKeys("bukanpassword")
    await driver.findElement(By.css(".px-4")).click()
    await driver.sleep(1000);
    await driver.findElement(By.id("email")).clear()
    await driver.findElement(By.id("password")).clear()
    await driver.sleep(1000);
    //Input Proper Credential
    await driver.findElement(By.id("email")).sendKeys("admindoangkecilin@yopmail.com")
    await driver.findElement(By.id("password")).sendKeys("s3creTpas&word")
    await driver.findElement(By.css(".px-4")).click()
    await driver.sleep(1000);
    //Logout
    await driver.findElement(By.css(".fa-sign-out-alt")).click()
    await driver.sleep(1000);
  })
})