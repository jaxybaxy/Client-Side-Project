let allSelector = document.querySelector(".all");
let checkbox = document.querySelectorAll(".cart .product_check");
let plus = document.querySelectorAll(".plus");
let quant = document.querySelectorAll(".qunt")
let minus = document.querySelectorAll(".minus");
let productQuantity = document.querySelectorAll(".product_quantity")
// select all the products
allSelector.addEventListener("change" , function(){
    
    if(allSelector.checked){
        checkbox.forEach(e=>{
            e.setAttribute("checked" ,"true")
        })
    }
    else {
        checkbox.forEach(e=>{
            e.removeAttribute("checked")
        })
    }
})
quant.forEach((e)=>{
e.value = 1;
})
// add items


