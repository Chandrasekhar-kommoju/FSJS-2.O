// 20. In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of your shopping cart if it has not been already added
// - remove 'Honey'
// - modify Tea to 'Green Tea'

let shoppingCart = ['Milk', 'Coffee','Tea','Honey'];

// add meat at beginning

shoppingCart.unshift('Meat');
console.log(shoppingCart);

// add sugar at the end

shoppingCart.push('sugar');
console.log(shoppingCart);

//  remove honey

shoppingCart.splice(4, 1);
console.log(shoppingCart);

// modify tea to green tea

let tea = shoppingCart.indexOf('Tea');
shoppingCart.splice( tea, 1, 'greentea');
console.log(shoppingCart);






