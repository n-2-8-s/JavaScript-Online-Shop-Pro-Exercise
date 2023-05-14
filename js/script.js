var allProducts = [
    {id:1, name:"milk", price:50000},
    {id:2, name:"water", price:8000},
    {id:3, name:"coffee", price:23000},
    {id:4, name:"soda", price:15000},
    {id:5, name:"juice", price:20000},
]
var userBasket = [
    {id:1, name:"milk", price:50000},
    {id:2, name:"water", price:8000},
]
var userRequest = prompt("1.Add a Product \n 2.Remove a Product ")
if (userRequest === "1") {
    var userProductName = prompt("Enter Your Product Name: ");
    var productData;
    var isInShop = allProducts.some(function (product) {
        if (product.name === userProductName) {
            productData = product;
            return true;
        }
    })
    if (isInShop === true) {
        var newProduct = {
            id: 3,
            name: productData.name,
            price: productData.price,
        }
        userBasket.push(newProduct);
        console.log("Basket: " , userBasket);
    }
    else {
        alert("چنین محصولی موجود نمی باشد")
    }
} else if (userRequest === "2") {
    var userProductName = prompt("Enter Your Product Name: ")
    var productIndex = userBasket.findIndex(function (product) {
        return product.name === userProductName;
    })
    userBasket.splice(productIndex, 1);
    console.log("Basket: " , userBasket);
} else {
    alert("لطفا گزینه صحیح را انتخاب کنید");
}