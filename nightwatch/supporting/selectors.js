module.exports = {
    buttons: {
        getStarted : `button[class='home-btn']`,
        nextButton: `button[name='nextButton']`,
        yesButton: `button[name='yesButton']`,
        noButton: `button[name='noButton']`,
        sendButton: `button[name='sendButton']`,
        startAgain: `button[name='restartButton']`

    },
    loanTypes: {
        homePurchase: `option[value='Home Purchase']`,
        refinance: `option[value='Refinance']`,
        homeEquity: `option[value='Home Equity']`,
    },

    propertyTypes: {
        singleFamily: `option[value='Single Family Home']`,
        townHome: `option[value='Town Home']`,
        condo: `option[value='Condo']`,
        multiFamily: `option[value='Multi Family Dwelling']`,
        mobile: `option[value='Mobile Home']`

    },
    propertyPurpose: {
        primaryHome: `button[value='Primary Home']`,
        rentalProperty: `button[value='Rental Property']`,
        secondaryHome: `button[value='Secondary Home']`,
    },

    creditScore: {
        excellentCredit: `button[value='Excellent']`,
        goodCredit: `button[value='Good']`,
        fairCredit: `button[value='Fair']`,
        poorCredit: `button[value='Poor']`,
    },
    bankruptcyForeclosure: {
        neither: `button[value='Has not been in bankruptcy or foreclosure']`,
        bankruptcy: `button[value='Has had bankruptcy']`,
        foreclosure: `button[value='Has had a foreclosure']`,
        both: `button[value='Has had both a foreclosure and a bankruptcy']`,
    },

    fields:{
        loanTypes: `select[id='loanTypes']`,
        propertyTypes: `select[id='propertyTypes']`,
        cityName: `input[name='city']`,
        purchasePrice: `input[name='price']`,
        downPayment: `input[name='down']`,
        addressOne: `input[id='addressOne']`,
        addressTwo: `input[id='addressTwo']`,
        addressThree: `input[id='addressThree']`,
        firstName: `input[id='first']`,
        lastName: `input[id='last']`,
        email: `input[id='email']`
    },
    result: {
        formOverview: `div[class='vert-align']`,
        nameResult: `p[class='name p2']`,
        emailResult: `p[class='email p2']`,
        loanTypeResult: `p[class='loanType p2']`,
        propertyTypeResult: `p[class='propertyType p2']`,
        cityResult: `p[class='city p2']`,
        propertyPurposeResult: `p[class='propertyPurpose p2']`,
        foundHomeResult: `p[class='found p2']`,
        foundAgentResult: `p[class='agent p2']`,
        homePriceResult: `p[class='price p2']`,
        downPaymentResult: `p[class='downPayment p2']`,
        creditResult: `p[class='creditScore p2']`,
        creditHistoryResult: `p[class='creditHistory']`,
        addressOneResult: `span[id='addressOne']`,
        addressTwoResult: `span[id='addressTwo']`,
        addressThreeResult: `span[id='addressThree']`
    },
    errorMessages: {
        addressOneError: `li[name='addOneErrorMessage']`,
        addressTwoError:`li[name='addTwoErrorMessage']`,
        addressThreeError: `li[name='addThreeErrorMessage']`,
        cityError: 'This field requires a City Name (letters, periods and dashes allowed) and a State abbreviation (separated by a comma, no longer than 30 characters) or a 5 digit zip code. i.e. "94111" and "San Francisco, CA"',
        purchaseError: 'The price needs to be a valid dollar amount, greater than $0, and no less than the down payment.',
        downPaymentError: 'The down payment needs to be a valid dollar amount, though it can be $0.',
        firstNameError: 'The first name must be between 1 and 30 characters long.',
        lastNameError: 'The last name must be between 1 and 30 characters long.',
        emailError: 'The email address must follow standard email format (i.e. andy@gmail.com), and cannot exceed 50 characters in length.'
    },
    page: `div[class='vert-align']`
    }
