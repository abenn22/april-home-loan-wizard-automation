const selectors = require('../supporting/selectors')
const data =require('../supporting/data')
const functions =require('../supporting/functions')

module.exports = {
    beforeEach : browser => {
        browser.url('http://localhost:3000')
    },
    after : browser => {
        browser.end()
    },
    "testCase1" : browser => {
        functions.appRunThrough(browser, data.testOne)
        browser.expect.element(selectors.result.loanTypeResult).text.to.equal('Home Purchase')
        browser.expect.element(selectors.result.propertyTypeResult).text.to.equal('Single Family Home')
        browser.expect.element(selectors.result.propertyPurposeResult).text.to.equal('Primary Home')
        browser.expect.element(selectors.result.foundHomeResult).text.to.equal('Yes')
        browser.expect.element(selectors.result.foundAgentResult).text.to.equal('Yes')
    },

   "testCase2" : browser => {
       functions.appRunThrough(browser, data.testTwo)
        browser.expect.element(selectors.result.loanTypeResult).text.to.equal('Refinance')
        browser.expect.element(selectors.result.propertyTypeResult).text.to.equal('Town Home')
        browser.expect.element(selectors.result.propertyPurposeResult).text.to.equal('Rental Property')
        browser.expect.element(selectors.result.foundHomeResult).text.to.equal('No')
        browser.expect.element(selectors.result.foundAgentResult).text.to.equal('No')
    },

    "testCase3": browser => {
        functions.appRunThrough(browser, data.testThree)
        browser.expect.element(selectors.result.loanTypeResult).text.to.equal('Home Equity')
        browser.expect.element(selectors.result.propertyTypeResult).text.to.equal('Condo')
        browser.expect.element(selectors.result.propertyPurposeResult).text.to.equal('Secondary Home')
        browser.expect.element(selectors.result.foundHomeResult).text.to.equal('Yes')
        browser.expect.element(selectors.result.foundAgentResult).text.to.equal('No')
    },
    "testCase4": browser => {
        functions.appRunThrough(browser, data.testFour)
        browser.expect.element(selectors.result.loanTypeResult).text.to.equal('Home Purchase')
        browser.expect.element(selectors.result.propertyTypeResult).text.to.equal('Multi Family Dwelling')
        browser.expect.element(selectors.result.propertyPurposeResult).text.to.equal('Primary Home')
        browser.expect.element(selectors.result.foundHomeResult).text.to.equal('No')
        browser.expect.element(selectors.result.foundAgentResult).text.to.equal('Yes')
    },
    "testCase5": browser => {
        functions.appRunThrough(browser, data.testFive)
        browser.expect.element(selectors.result.loanTypeResult).text.to.equal('Refinance')
        browser.expect.element(selectors.result.propertyTypeResult).text.to.equal('Mobile Home')
        browser.expect.element(selectors.result.propertyPurposeResult).text.to.equal('Rental Property')
        browser.expect.element(selectors.result.foundHomeResult).text.to.equal('Yes')
        browser.expect.element(selectors.result.foundAgentResult).text.to.equal('No')
    },
    
    "testCases6-13": browser => {
        browser
        .waitForElementVisible(selectors.buttons.getStarted, 2000)
        .click(selectors.buttons.getStarted)
        .waitForElementVisible(selectors.buttons.nextButton, 2000)
        .click(`${selectors.fields.loanTypes} ${selectors.loanTypes.homePurchase}`)
        .click(`${selectors.fields.propertyTypes} ${selectors.propertyTypes.singleFamily}`)
        .click(selectors.buttons.nextButton)
        .waitForElementVisible(selectors.fields.cityName, 2000)
        .setValue(selectors.fields.cityName, data.testSeven.invalid1) //Test Case 7 Invalid City
        .click(selectors.buttons.nextButton)
        .expect.element(selectors.page).text.to.contain(selectors.errorMessages.cityError)
        browser
        .clearValue(selectors.fields.cityName)
        .setValue(selectors.fields.cityName, data.testSeven.invalid2)
        .click(selectors.buttons.nextButton)
        .expect.element(selectors.page).text.to.contain(selectors.errorMessages.cityError)
        browser
        .clearValue(selectors.fields.cityName)
        .setValue(selectors.fields.cityName, data.testSeven.invalid3)
        .click(selectors.buttons.nextButton)
        .expect.element(selectors.page).text.to.contain(selectors.errorMessages.cityError)
        browser
        .clearValue(selectors.fields.cityName)
        .setValue(selectors.fields.cityName, data.testSix.valid1)  //Test Case 6 Valid City
        .click(selectors.buttons.nextButton)
        .waitForElementVisible(selectors.propertyPurpose.primaryHome, 2000)
        .click(selectors.propertyPurpose.primaryHome)
        .waitForElementVisible(selectors.buttons.yesButton, 2000)
        .click(selectors.buttons.yesButton)
        .waitForElementVisible(selectors.buttons.noButton, 2000)
        .click(selectors.buttons.yesButton)
        .waitForElementVisible(selectors.fields.downPayment, 2000)
        .setValue(selectors.fields.purchasePrice, data.testNine.invalid1) //Test Case 9 Invalid Purchase Price/Down Payment
        .setValue(selectors.fields.downPayment, data.testNine.invalid2)
        .click(selectors.buttons.nextButton)
        .expect.element(selectors.page).text.to.contain(selectors.errorMessages.purchaseError)
        browser.expect.element(selectors.page).text.to.contain(selectors.errorMessages.downPaymentError)
        browser
        .clearValue(selectors.fields.purchasePrice)
        .setValue(selectors.fields.purchasePrice, data.testNine.invalid3)
        .clearValue(selectors.fields.downPayment)
        .setValue(selectors.fields.downPayment, data.testNine.invalid3)
        .click(selectors.buttons.nextButton)
        .expect.element(selectors.page).text.to.contain(selectors.errorMessages.purchaseError)
        browser.expect.element(selectors.page).text.to.contain(selectors.errorMessages.downPaymentError)
        browser
        .clearValue(selectors.fields.purchasePrice)
        .setValue(selectors.fields.purchasePrice, data.testEight.valid1) //Test Case 8 Valid Purchase Price/Down Payment
        .clearValue(selectors.fields.downPayment)
        .setValue(selectors.fields.downPayment, data.testEight.valid2)
        .click(selectors.buttons.nextButton)
        .waitForElementVisible(selectors.creditScore.excellentCredit, 2000)
        .click(selectors.creditScore.excellentCredit)
        .waitForElementVisible(selectors.bankruptcyForeclosure.neither, 2000)
        .click(selectors.bankruptcyForeclosure.neither)
        .waitForElementVisible(selectors.fields.addressOne, 2000)
        .setValue(selectors.fields.addressOne, data.testEleven.lineOne.one) // Test Case 11 Invalid Address
        .setValue(selectors.fields.addressTwo, data.testEleven.lineTwo.one)
        .setValue(selectors.fields.addressThree, data.testEleven.lineThree.one)
        .click(selectors.buttons.nextButton)
        .expect.element(selectors.errorMessages.addressOneError).text.to.contain('The first line of the address can only be between 5 and 50 characters long.')
        browser.expect.element(selectors.errorMessages.addressTwoError).text.to.contain('The second line of the address can only be 50 characters long.')
        browser.expect.element(selectors.errorMessages.addressThreeError).text.to.contain('The last line must follow a standard city, state zip format (San Francisco, CA 94111), with a valid state abbreviation. It also can be no longer than 50 characters total.')
        browser
        .clearValue(selectors.fields.addressOne)
        .setValue(selectors.fields.addressOne, data.testEleven.lineOne.two)
        .clearValue(selectors.fields.addressTwo)
        .setValue(selectors.fields.addressTwo, data.testEleven.lineTwo.one)
        .clearValue(selectors.fields.addressThree)
        .setValue(selectors.fields.addressThree, data.testEleven.lineThree.two)
        .expect.element(selectors.errorMessages.addressOneError).text.to.contain('The first line of the address can only be between 5 and 50 characters long.')
        browser.expect.element(selectors.errorMessages.addressTwoError).text.to.contain('The second line of the address can only be 50 characters long.')
        browser.expect.element(selectors.errorMessages.addressThreeError).text.to.contain('The last line must follow a standard city, state zip format (San Francisco, CA 94111), with a valid state abbreviation. It also can be no longer than 50 characters total.')
        browser
        .clearValue(selectors.fields.addressOne)
        .setValue(selectors.fields.addressOne, data.testEleven.lineOne.three)
        .clearValue(selectors.fields.addressTwo)
        .setValue(selectors.fields.addressTwo, data.testTen.lineTwo.one)
        .clearValue(selectors.fields.addressThree)
        .setValue(selectors.fields.addressThree, data.testEleven.lineThree.three)
        .expect.element(selectors.errorMessages.addressOneError).text.to.contain('The first line of the address can only be between 5 and 50 characters long.')
        browser.expect.element(selectors.errorMessages.addressTwoError).text.to.contain('The second line of the address can only be 50 characters long.')
        browser.expect.element(selectors.errorMessages.addressThreeError).text.to.contain('The last line must follow a standard city, state zip format (San Francisco, CA 94111), with a valid state abbreviation. It also can be no longer than 50 characters total.')
        browser
        .clearValue(selectors.fields.addressOne)
        .setValue(selectors.fields.addressOne, data.testTen.lineOne.one) //Test Case 10 Valid Address
        .clearValue(selectors.fields.addressTwo)
        .setValue(selectors.fields.addressTwo, data.testTen.lineTwo.one)
        .clearValue(selectors.fields.addressThree)
        .setValue(selectors.fields.addressThree, data.testTen.lineThree.one)
        .click(selectors.buttons.nextButton)
        .waitForElementVisible(selectors.fields.firstName, 2000)
        .setValue(selectors.fields.firstName, data.testThirteen.firstName.one) // Test Case 13 Invalid Name/Email
        .setValue(selectors.fields.lastName, data.testThirteen.lastName.one)
        .setValue(selectors.fields.email, data.testThirteen.email.one)
        .click(selectors.buttons.nextButton)
        .expect.element(selectors.page).text.to.contain(selectors.errorMessages.firstNameError)
        browser.expect.element(selectors.page).text.to.contain(selectors.errorMessages.lastNameError)
        browser.expect.element(selectors.page).text.to.contain(selectors.errorMessages.emailError)
        browser
        .clearValue(selectors.fields.firstName)
        .setValue(selectors.fields.firstName, data.testThirteen.firstName.two)
        .clearValue(selectors.fields.lastName)
        .setValue(selectors.fields.lastName, data.testThirteen.lastName.two)
        .clearValue(selectors.fields.email)
        .setValue(selectors.fields.email, data.testThirteen.email.two)
        .expect.element(selectors.page).text.to.contain(selectors.errorMessages.firstNameError)
        browser.expect.element(selectors.page).text.to.contain(selectors.errorMessages.lastNameError)
        browser.expect.element(selectors.page).text.to.contain(selectors.errorMessages.emailError)
        browser
        .clearValue(selectors.fields.firstName)
        .setValue(selectors.fields.firstName, data.testTwelve.firstName.one) // Test Case 12 Valid Name/Email
        .clearValue(selectors.fields.lastName)
        .setValue(selectors.fields.lastName, data.testTwelve.lastName.one)
        .clearValue(selectors.fields.email)
        .setValue(selectors.fields.email, data.testTwelve.email.one)
        .click(selectors.buttons.nextButton)
        .pause(10000)
        .expect.element(selectors.result.nameResult).text.to.contain(data.testTwelve.firstName.one)
        browser.expect.element(selectors.result.nameResult).text.to.contain(data.testTwelve.lastName.one)
        browser.expect.element(selectors.result.emailResult).text.to.equal(data.testTwelve.email.one)
        browser.expect.element(selectors.result.loanTypeResult).text.to.equal('Home Purchase')
        browser.expect.element(selectors.result.propertyTypeResult).text.to.equal('Single Family Home')
        browser.expect.element(selectors.result.cityResult).text.to.contain(data.testSix.valid1)
        browser.expect.element(selectors.result.propertyPurposeResult).text.to.equal('Primary Home')
        browser.expect.element(selectors.result.foundHomeResult).text.to.equal('Yes')
        browser.expect.element(selectors.result.foundAgentResult).text.to.equal('Yes')
        browser.expect.element(selectors.result.homePriceResult).text.to.contain(data.testEight.valid1)
        browser.expect.element(selectors.result.downPaymentResult).text.to.contain(data.testEight.valid2)
    },
    

    }
