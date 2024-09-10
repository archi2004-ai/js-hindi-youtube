//const myNum = [1,2,3]
//const myTotal = myNum.reduce( (acc,curval) =>acc +curval,0)
//console.log(myTotal);
const ShoppingCart = [
    {
        itemName : "js",
        price : 678,
    },
    {
        itemName : "web",
        price : 678,
    },

    {
        itemName : "java",
        price : 678,
    },

    {
        itemName : "py",
        price : 678,
    }
]
const value = ShoppingCart.reduce( (acc,item) => acc +  item.price,0)
//console.log(value);
const myNewNum  = [1,2,3,4,5,6,7,8,9,10]
const res = myNewNum.map( (num) =>num *10)
.map( num => num +1)
.filter ( (num) =>num > 40)
console.log(res);














