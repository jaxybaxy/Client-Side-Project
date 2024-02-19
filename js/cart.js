
let cart = document.querySelector(".cart");
let cartItem = JSON.parse(localStorage.getItem("cartItems"));
let totalPrice = document.querySelector(".totalPrice");
let checkout = document.querySelector(".oraderSummary a");
let cartNumber = document.getElementById("cart-number");
let total = 0;
let quant = 0;
cartItem.forEach((e)=>{
  fetch(`https://dummyjson.com/products/${e.id}`)
  .then((res) => {
    if (!res.ok) {
      throw new Error("BIG ERROR");
    }
    return res.json();
})
.then((data) => {
    let id = data.id;
      let image = data.images[0];
      let title = data.title;
      let desc = data.description;
      let price = (data.discountPercentage < 10) ? data.price : Math.ceil(data.price - (data.price * (data.discountPercentage/100))) ;
      cartItem.filter((i) => {
          if (i.id == id) {
          // Create cart box
          let cartBox = document.createElement("div");
          cartBox.classList.add("box");

          // Create product
          let product = document.createElement("a");
          product.href = `snglprod.html?id=${i.id}`;
          product.classList.add("product");
          
          // Add image of product
          let imgBox = document.createElement("div");
          imgBox.classList.add("image");
          let img = document.createElement("img");
          img.src = image;
          
          // Create product info
          let infoBox = document.createElement("div");
          infoBox.classList.add("info");
          let titleBox = document.createElement("h3");
          titleBox.innerText = title;
          let descBox = document.createElement("p");
          descBox.innerText = desc;
          descBox.classList.add("desc");
          
          // Add quantity
          let quantityBox = document.createElement("div");
          quantityBox.classList.add("quantity");
          
          // Increment button
          let incrementBtn = document.createElement("button");
          incrementBtn.innerText = "+";
          incrementBtn.classList.add("increment");
          
          // Decrement button
          let decrementBtn = document.createElement("button");
          decrementBtn.innerText = "-";
          decrementBtn.classList.add("decrement");
          
          // Amount
          let amountBox = document.createElement("span");
          amountBox.innerText = i.quantity;
          amountBox.classList.add("amount");
          
          // Add price
          let priceBox = document.createElement("span");
          priceBox.innerText = `${price}$`;
          priceBox.classList.add("price");
          
          // Add total
          let totalBox = document.createElement("span");
          totalBox.innerText = `${price}$`;
          totalBox.classList.add("total");
          
          // Add icon
          let removeIcon = document.createElement("i");
          removeIcon.classList.add("ri-close-line", "remove");
          
          // Appending
          cart.appendChild(cartBox);
          cartBox.appendChild(product);
          product.appendChild(imgBox);
          imgBox.appendChild(img);
          product.appendChild(infoBox);
          infoBox.appendChild(titleBox);
          infoBox.appendChild(descBox);
          cartBox.appendChild(priceBox);
          cartBox.appendChild(quantityBox);
          quantityBox.appendChild(incrementBtn);
          quantityBox.appendChild(amountBox);
          quantityBox.appendChild(decrementBtn);
          cartBox.appendChild(totalBox);
          cartBox.appendChild(removeIcon);
          
          function showCartStatus(cart) {
            if (cart.length === 1) {
                console.log("Your cart is empty.");
            } else {
                console.log("Your cart contains items.");
            }
        }
        
          // cart number
            function cartNum(change){
              quant+= change;
              cartNumber.innerText = quant;
            }
          // update the Amount
          function changeAmount(change) {
            let amount = +amountBox.innerText;
            amount += change;
            amountBox.innerText = amount;
            // Save the amount in CartItem
            i.quantity = amount;
            // remove product with decrement
            if(amount == 0){
                cartBox.remove()
              }
            if (i.quantity == 0){
                cartItem.splice(cartItem.indexOf(i) , 1)
            }
            localStorage.setItem("cartItems" , JSON.stringify(cartItem));
        }
        // update the product total
        function changeProductTotal(){
          let price = parseInt(priceBox.innerText);
          price *= +amountBox.innerText
            totalBox.innerText = `${price}$`;
        }
          // Increment Function
        incrementBtn.addEventListener("click",()=>{
            changeAmount(1);
            cartNum(1)
            changeProductTotal();
            // updateTotal;
            total += parseInt(priceBox.innerText);
            totalPrice.innerText = `${total}$`
          });
          // Decrement Function
        decrementBtn.addEventListener("click",()=>{
            changeAmount(-1);
            cartNum(-1);
            changeProductTotal();
            // updateTotal;
            total -= parseInt(priceBox.innerText);
            totalPrice.innerText = `${total}$`
          
          });
          // Remove Product with remove icon
          removeIcon.addEventListener("click" ,()=>{
            cartBox.remove();
            // remove from localStorage
                cartItem.splice(cartItem.indexOf(i) , 1)
                localStorage.setItem("cartItems" , JSON.stringify(cartItem))
                // updateTotal;
                total -= parseInt(totalBox.innerText);
                totalPrice.innerText = `${total}$`
                cartNum(-i.quantity);
              })
              cartNum(i.quantity);
            changeProductTotal();
            total += parseInt(totalBox.innerText);
            totalPrice.innerText = `${total}$`;
        }
      });
    }).catch((error) => {
        console.error(error);
  })
    })



