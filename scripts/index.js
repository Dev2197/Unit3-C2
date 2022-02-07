let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

async function getItems()
{
    try{
        let res = await fetch(url);
    let items = await res.json();

    displayItems(items.meals);
    }
    catch(err){
        console.log(err);
    }
}

getItems();

var cart =  [];
function cartItems(item)
{
    cart.push(item);
    // console.log(cart);
    localStorage.setItem("cart",JSON.stringify(cart));
    updateCart();
}

function updateCart()
{
    let cartCount = document.getElementById("count");
    cartCount.textContent = cart.length;
    // console.log(cartCount)
}

function displayItems(items)
{
    updateCart();
    let menu = document.getElementById("menu");

    console.log(items);
    items.map(function(elem){
        let div = document.createElement("div");

        let poster = document.createElement("img");
        poster.src = elem.strMealThumb;

        let name = document.createElement("p");
        name.textContent = elem.strMeal;

        let price = document.createElement("p");
        var random = Math.floor(Math.random() * 500);
        price.textContent = `₹ ${random}`;
        // console.log(price);

        let cartButton = document.createElement("button");
        cartButton.textContent = "Add To Cart";
        cartButton.addEventListener("click",function(){
            cartItems(elem);
        })
        div.append(poster,name,price,cartButton);
        menu.append(div);

    })
}
