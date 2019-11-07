// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: [],
    addItemCart: function(item) {
        this.cart.push(item);
    },
    addTaxItemCart: function(itemId) {
        this.cart.forEach((item) => {
            if(item.id == itemId) {
                item.tax *= 1.03;
            }
        });
    },
    buy: function(itemId) {
        var index = this.cart.map(function(item) { return item.id; }).indexOf(itemId);
    }
} 
  
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.