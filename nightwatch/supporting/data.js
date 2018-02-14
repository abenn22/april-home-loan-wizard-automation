module.exports = {
    testOne : { //app runthrough
            loanTypes: 'homePurchase',
            propertyTypes: 'singleFamily',
            cityName: 'Orem, UT',
            propertyPurpose: 'primaryHome',
            foundHome: 'yesButton',
            foundAgent: 'yesButton',
            purchasePrice: '$300000.00',
            downPayment: '40000.00',
            creditScore: 'excellentCredit',
            bankruptcyForeclosure: 'neither',
            addressOne: '4743 w FML st.',
            addressTwo: 'Apt #1',
            addressThree: 'Herriman, UT 84096',
            firstName: 'April',
            lastName: 'Bennett',
            email: 'aprilbennett@gmail.com'
        },
        testTwo : { //app runthrough
            loanTypes: 'refinance',
            propertyTypes: 'townHome',
            cityName:'St.George, UT',
            propertyPurpose: 'rentalProperty',
            foundHome: 'noButton',
            foundAgent:'noButton',
            purchasePrice:'1000',
            downPayment: '100',
            creditScore: 'goodCredit',
            bankruptcyForeclosure: 'bankruptcy',
            addressOne: '123 Dunder Mifflin St',
            addressTwo: '',
            addressThree: 'Scranton, PA 11111',
            firstName: 'Michael',
            lastName: 'Scott',
            email: 'prisonmike@dundermifflin.com'
        },
        testThree : { //app runthrough
            loanTypes: 'homeEquity',
            propertyTypes: 'condo',
            cityName:'Orem, UT',
            propertyPurpose: 'secondaryHome',
            foundHome: 'yesButton',
            foundAgent: 'noButton',
            purchasePrice:'$100000000000',
            downPayment:'$100000',
            creditScore: 'fairCredit',
            bankruptcyForeclosure: 'foreclosure',
            addressOne: '123 ABC',
            addressTwo: '*',
            addressThree: 'Maui, HI 12345',
            firstName: 'first',
            lastName: 'last',
            email: 'email@email.email'
        },
        testFour : { //app runthrough
            loanTypes: 'homePurchase',
            propertyTypes: 'multiFamily',
            cityName: 'Scranton, PA',
            propertyPurpose: 'primaryHome',
            foundHome: 'noButton',
            foundAgent: 'yesButton',
            purchasePrice: '300000',
            downPayment: '$40000',
            creditScore: 'poorCredit',
            bankruptcyForeclosure: 'both',
            addressOne: '123 Dunder Mifflin Dr',
            addressTwo: 'Floor2',
            addressThree: 'Scranton, PA 18503',
            firstName: 'Dwight',
            lastName: 'Shrute',
            email: 'assistant2theregionalmanager@dundermifflin.com'
        },
        testFive : { //app runthrough
            loanTypes: 'refinance',
            propertyTypes: 'mobile',
            cityName:'12345',
            propertyPurpose: 'rentalProperty',
            foundHome: 'yesButton',
            foundAgent: 'noButton',
            purchasePrice:'100000',
            downPayment:'100',
            creditScore: 'excellentCredit',
            bankruptcyForeclosure: 'neither',
            addressOne: '*******************************',
            addressTwo: '*************************',
            addressThree: 'Salt Lake City, UT 84118',
            firstName: '***********************',
            lastName: '************************',
            email: '**********************@email.com'
        },
        testSix : { //valid City
            valid1: '84096',
            valid2: 'Lehi, UT',
            valid3: '00000',
            valid4: 'City, UT'
        },
        testSeven : { //invalid City
            invalid1: 'Orem',
            invalid2: '123456',
            invalid3: '$%^&!'
        },
        testEight: { // valid purchase price/down payment
            valid1: '$300000',
            valid2: '$300000.00',
            valid3: '300000',
            valid4: '300000.00',
            valid5: '$10,000.00',
            valid6: '$10,000',
            valid7: '10,000.00',
            valid8: '10,000',
        },
        testNine: { //invalid purchase payment/down payment
            invalid1: 'One Million Dollars',
            invalid2: '!@#$%',
            invalid3: '' //enter for both
        },
        testTen: {
            lineOne: {
                one: '123 S 456 W',
                two: 'A12#$'
            },
            lineTwo: {
                one: '123#$AB',
                two: ''
            },
            lineThree: {
                one: 'Herriman, UT 84096',
                two: 'zipcode, UT 12345'
            }
        },
        testEleven: {
            lineOne: {
                one: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                two: '1234',
                three: '',
            },
            lineTwo: {
                one: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            },
            lineThree: {
                one: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                two: 'herriman, ut',
                three: ''
            }
        },
        testTwelve: {
            firstName: {
                one: 'A',
                two:'A12#$',
                three: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            },
            lastName: {
                one: 'B',
                two:'ab#$123',
                three: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            },
            email: {
                one: 'a@b.com',
                two:'email@email.email',
                three: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@xxxxxxxxxx.com'
            }
        },
        testThirteen : {
            firstName: {
                one: '',
                two:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            },
            lastName: {
                one: '',
                two:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            },
            email: {
                one: '',
                two:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.com',
            }
        }

    }
