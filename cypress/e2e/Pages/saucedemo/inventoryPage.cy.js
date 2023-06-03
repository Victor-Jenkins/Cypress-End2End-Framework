class inventoryPage {
    elements = {
        titleSpan: () => cy.get('.product_label'),
        titleCart: () => cy.get('.subheader'),
        itemName: () => cy.get('#item_4_title_link > div'),   
        itemName5: () => cy.get('#item_2_title_link > div'), 
        itemName3: () => cy.get('#item_1_title_link > div'), 
        totalPrice: () => cy.get('#checkout_summary_container > div > div.summary_info > div.summary_total_label'),
    }
}

module.exports = new inventoryPage();