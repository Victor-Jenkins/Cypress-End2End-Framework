describe('retry ability, habilidad de reintentar', function() {
beforeEach (function() {
    cy.visit('https://www.kiwi.com/en/')
      
});
it.only('just practice locators', () => {
    cy.get('#cookies_accept').click()
    cy.get('div input[placeholder]').type('mallorca')
    
    cy.get('#HomePage > div.LandingPagecommonstyled__LandingPageHead-sc-2d67w0-0.hXLjGw > div.LandingPagecommonstyled__LandingPageHeadContent-sc-2d67w0-1.caenqN > div.ContentWidthWrapperstyled__ContentWidthWrapper-sc-1wjj9cd-0.hwHRab > div.LandingPagecommonstyled__LandingPageSearchForm-sc-2d67w0-2.fNYTA-d > div.FormWrapperstyled__StyledSearchFormWrapper-sc-i1a9yv-0.VHmRG > div.FormWrapperstyled__SearchFormContainer-sc-i1a9yv-1.fkhqsb > div:nth-child(2) > div > div.ModalPickerstyled__ModalPicker-sc-1kae7kb-0.eoSCXD > div > div > div:nth-child(3) > div > div > div > div.PlacePickerstyled__PlacePickerItemText-sc-1ialbal-6.iSQwfF > div').click()
 

});

});