function randomPizza(){
    var crustType = ["Deep Dish", "Thin Crust", "Hand Tossed", "Stuffed Crust"];

    var sauceType = ["Traditional", "Marinara", "BBQ Sauce", "Buffalo"];

    var cheeses = ["Mozarella", "Feta", "Provolone", "Cheddar"];

    var toppings = ["Pepperoni", "Red Peppers", "Mushrooms", "Pineapples", "Chicken", "Steak"];

    var pizza = {};

    pizza.crustType = crustType[Math.floor(Math.random() * crustType.length)];

    pizza.sauceType = sauceType[Math.floor(Math.random() * sauceType.length)];

    pizza.cheeses = cheeses[Math.floor(Math.random() * cheeses.length)];

    pizza.toppings = toppings[Math.floor(Math.random() * toppings.length)];
    
    return pizza;
}

var rp1 = randomPizza();
console.log(rp1);