class MarketItem {
    constructor( name, price, imgUrl ) {
        this.name = name;
        this.price = price;
        this.imgUrl = imgUrl;
    }

    changePrice() {
        this.price --;
        console.log( `Price has gone down ${ this.price }`);
    }
}

module.exports = MarketItem;