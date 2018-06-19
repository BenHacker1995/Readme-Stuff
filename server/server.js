const MarketItem = require( './modules/market-item' );
const Fruit = require( './modules/fruit' );

let myItem = new MarketItem( 'GW2 CD', 250, 'gw2_cd.jpg' );

console.log( 'My item is', myItem );
// if you do console.log( `My item is ${ myItem } ),
// it will log [ object Object ] because it is an object

let myApple = new Fruit( 'Apple', 2, 'apple.jpg', 5 );
console.log( 'The apple:', myApple );

myItem.changePrice();
myApple.changePrice();
myApple.changePrice();
myApple.changePrice();
myApple.changePrice();
myApple.changePrice();