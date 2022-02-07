let itemsList = JSON.parse(localStorage.getItem("cart")) || [];
displayItems(itemsList)


function displayItems(itemsList)
{
    let prices = [];
    // console.log(itemsList)
    document.getElementById("cart").textContent = "";
    itemsList.map(function(elem,index){
        let div = document.createElement("div");

        let poster = document.createElement("img");
        poster.src = elem.strMealThumb;

        let name = document.createElement("p");
        name.textContent = elem.strMeal;

        let price = document.createElement("p");
        let random = Math.floor(Math.random()*500);
        prices.push(random);
        // console.log(random);
        price.textContent = `₹ ${random}`

        let remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.addEventListener("click",function(){
            removeItem(index);
        })

        div.append(poster,name,price,remove);
        document.getElementById("cart").append(div);

        // console.log(prices);

        let total = 0;
        for(var i=0; i<prices.length; i++)
        {
            total = total+prices[i];
        }
        // console.log(total);

        let totalPrice = document.getElementById("total");
        totalPrice.textContent = `Total Amount ${total}`;
    });
}


function removeItem(index)
{
    itemsList.splice(index,1);
    displayItems(itemsList);
}


