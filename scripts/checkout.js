document.querySelector("form").addEventListener("submit",order);

function order(event)
{
    event.preventDefault();

    let x = setTimeout(function(){
        alert("Order is accepted")
    },0);

    let y = setTimeout(function(){
        alert("Your order is being cooked")
    },3000);

    let z = setTimeout(function(){
        alert("Your order is ready")
    },5000);

    let a = setTimeout(function(){
        alert("Order out for delivery")
    },10000);

    let b = setTimeout(function(){
        alert("Order delivered");
    },12000)
}