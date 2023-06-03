import homeSaucePage from '../Pages/saucedemo/homeSaucePage.cy'
import inventoryPage from '../Pages/saucedemo/inventoryPage.cy'

const tests = require('../../fixtures/data-driven/sauceUsers.json');

describe('Home Sauce Demo', () => {

    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/v1/index.html');
    });

    tests.forEach(test => {

        it(test.name, function(){

            homeSaucePage.typeUsername(test.username);
            homeSaucePage.typePassword(test.password);
            homeSaucePage.clickLogin();

            if(test.name === 'should login to inventory page'){
                inventoryPage.elements.titleSpan().should('have.text', test.expected)
            }else{
                homeSaucePage.elements.errorMessage().should('have.text', test.expected)  
            }
    
        });

    });
    
});