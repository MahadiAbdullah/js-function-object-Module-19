var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
// when you know the specific property name, use dot natation
var penCount = shoppingCart.pen;
// alterantive system 
// when you know the specific property name, use dot natation
var penCount2 = shoppingCart['pen'];

var propertyName = 'books';

var properties = Object.keys(shoppingCart);
var propertiesValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertiesValues)


console.log(shoppingCart);


// set propertics values 
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 39;
console.log(shoppingCart);
