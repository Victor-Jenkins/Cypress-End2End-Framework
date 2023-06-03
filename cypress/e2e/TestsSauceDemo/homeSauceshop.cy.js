import homeSaucePage from '../Pages/saucedemo/homeSaucePage.cy'
import inventoryPage from '../Pages/saucedemo/inventoryPage.cy'
 
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')  
    });

    it('select different items and shop', () => {
        homeSaucePage.typeUsername('standard_user');
       
        homeSaucePage.typePassword('secret_sauce');
       
        homeSaucePage.clickLogin();
       
        inventoryPage.elements.titleSpan().should('have.text', 'Products')
       
        homeSaucePage.elements.item1().should('have.text', 'ADD TO CART')
        homeSaucePage.elements.item1().click();
        homeSaucePage.elements.item5().click();
        homeSaucePage.elements.item3().click();
        homeSaucePage.elements.cart().click();
        inventoryPage.elements.titleCart().should('have.text', 'Your Cart')
        homeSaucePage.elements.finish().click();
        cy.get('#first-name').type('Victor');
    
        cy.get('#last-name').type('Bañó Rodríguez');
        
        cy.get('#postal-code').type('08223');
      
        cy.get('#checkout_info_container > div > form > div.checkout_buttons > input').click();
        inventoryPage.elements.itemName().should('have.text', 'Sauce Labs Backpack')
        inventoryPage.elements.itemName5().should('have.text', 'Sauce Labs Onesie')
        inventoryPage.elements.itemName3().should('have.text', 'Sauce Labs Bolt T-Shirt')
        inventoryPage.elements.totalPrice().should('have.text', 'Total: $58.29')
        cy.get('#checkout_summary_container > div > div.summary_info > div.cart_footer > a.btn_action.cart_button').click();
    });

  


