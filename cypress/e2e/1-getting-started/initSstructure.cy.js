



let add = (a,b) => a +b;
let substract = (a,b) => a - b;
let divide = (a,b) => a / b;
let multiply = (a,b) => a * b;

//Describe o context -> permite agrupar tests, en este caso hemos agrupado 4 test en 
//el primer context y 2 tests mas en el segundo
describe('unit testings', () => {
    context ('math with possitive numbers',()=> {
    //it o specify=> se usa para hacer el test
    it('debe sumar numeros positivos',()=> {
        expect(add(1,2)).to.equal(3);
    });
    it('debe restar numeros positivos',()=> {
        expect(substract(4,2)).to.equal(2);
    });
    it('debe dividir numeros positivos',()=> {
        expect(divide(4,2)).to.equal(2);
    });
    it('debe multiplicar numeros positivos',()=> {
        expect(multiply(4,2)).to.equal(8);
    });
 });
    

describe('math with decimal numbers',()=> {
    
   
    it('debe sumar numeros decimales',()=> {
        expect(add(2.2,2.2)).to.equal(4.4);
    });
    it('debe restar numeros decimales',()=> {
        expect(substract(4.4,2.2)).to.equal(2.2);
    });
});
});
