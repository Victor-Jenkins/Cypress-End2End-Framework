class homeSaucePage{

    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMessage: () => cy.get('h3[data-test="error"]'),
        item1: () => cy.get('#inventory_container > div > div:nth-child(1) > div.pricebar > button'),
        item3: () => cy.get('#inventory_container > div > div:nth-child(3) > div.pricebar > button'),
        item5: () => cy.get('#inventory_container > div > div:nth-child(5) > div.pricebar > button'),
        cart: () => cy.get('#shopping_cart_container > a'),
        finish: () =>cy.get('#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button'),
        name : () => cy.get('.first-name'),
    
    }
    

    typeUsername(username){
        this.elements.usernameInput().type(username);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLogin(){
        this.elements.loginBtn().click();
    }


}

module.exports = new homeSaucePage();