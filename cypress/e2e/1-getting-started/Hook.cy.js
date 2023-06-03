//Before,After,Skips y only en Cypress
//Los Hooks nos permiten setear condiciones antes o despues de los test cases

/* Ejemplo de flujo
1.Before() -> SOLO UNA VEZ AL PRINCIPIO
2.beforeEach() -> ANTES DE CADA TEST
3.TEST EXECUTION
4.afterEach()-> DESPUES DE CADA TEST
5.beforeEach()
6.TEST EXECUTION
7.afterEach()
8.After()-> UNA VEZ AL FINAL
*/


describe('demo de hooks', function(){

    before(function(){
        cy.log('This code will be executed once before any test execution')
    });
    
    beforeEach(function(){
        cy.log('This code is executed before any test execution');
    });

    context('Context #1', function(){
        it('should be a #1 dummy test using IT',function(){
            console.log('#1 Test');
        });
    });
    context('Context #2', function(){
        it.skip('should be a #2 dummy test using IT',function(){
            console.log('#2 Test');
        });
    });
    context('Context #3', function(){
        it('should be a #3 dummy test using IT',function(){
            console.log('#3 Test');
        });
    });
    afterEach(function(){
        cy.log('This code is executed after any test execution');
    });
    
    after(function(){
        cy.log('This code will be executed once all test execution is done');
    });

});