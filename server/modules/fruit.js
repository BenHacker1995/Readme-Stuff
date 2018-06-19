const MarketItem = require( './market-item' )


// Inheritance
    // one class extending another
        // parent - child
        // superclass ( parent )
        // base - subclass
        // parent/base -- what you are extending
        // child/subclass -- 

class Fruit extends MarketItem {
    constructor( name, price, imgUrl, freshness ) {
        // Always call this first
        super( name, price, imgUrl );
        // super calls MarketItem onto Fruit
        // Deal with any new properties
        this.freshness = freshness;
    }
    // With fruit every time the price changes
    // We also what the freshness to change
    changePrice() {
        // parent behavior first
        super.changePrice();
        // Then add on or modify it
        this.freshness --;
        if( this.freshness <= 0 ) {
            console.log( 'The fruit is spoiled!!!' );
        } else {
            console.log( 'Freshness:', this.freshness );
        }
    }
}

module.exports = Fruit;