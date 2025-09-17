//Step2
let products = [
    {sku:"001", name:"pizza", category:"food",price:10, inventory:5},
    {sku:"002", name:"phone", category:"electronics",price:1000, inventory:2},
    {sku:"003", name:"dog", category:"animal",price:800, inventory:1},
    {sku:"004", name:"bracelet", category:"jewelery",price:50, inventory:3},
    {sku:"005", name:"sunglasses", category:"glasses",price:30, inventory:4},
];

//Step3
for (let product of products)
{
let discount = 0;
    switch (product.category) 
        {case "food": discount =.2;break;
        case "electronics": discount =.15;break;
        case "animal": discount =.1;break;
        case "jewelery": discount =.1;break;
        default:break;
        }
let promoPrice = product.price * (1-discount)
product.promoPrice = promoPrice
}

console.log(products);



