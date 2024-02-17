let cart = document.querySelector(".cart");
let totalPrice = document.querySelector(".p")
let sum = 0;
let arr =[1,2,3,4,5,6,7,8]

fetch('https://dummyjson.com/products')
  .then(res => {
    if(!res.ok){
        throw new Error('BIG ERROR');
    }
    return res.json();
  })
  .then(data=>{
    data.products.forEach(e => {
        let id = e.id;
        let image = e.images[0];
        let title = e.title;
        let desc = e.description;
        let pr = e.price;

        arr.filter((e)=>{
            if(e == id){
                // Create cart box
                let cartBox = document.createElement("div");
                cartBox.classList.add("box");
        
        // Create product
        let product = document.createElement("div");
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
        amountBox.innerText = 1;
        amountBox.classList.add("amount");
        
        // Add price
        let priceBox = document.createElement("span");
        priceBox.innerText = `${pr}$`;
        priceBox.classList.add("price");
        
        // Add total
        let totalBox = document.createElement("span");
        totalBox.innerText = `${pr}$`;
        totalBox.classList.add("total");
        
        // Add icon 
        let icon = document.createElement("i");
        icon.classList.add("ri-close-line", "remove");
        
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
        cartBox.appendChild(icon);
        
        let val = parseInt(totalBox.innerText)
        // Increment
        incrementBtn.addEventListener("click" , ()=>{
            let counter = +amountBox.innerText;
            counter++;
            amountBox.innerText = counter; 
            totalBox.innerText = `${pr * +amountBox.textContent}$`
            //total price
            sum += val;
            totalPrice.innerText = `${sum}$`
        });
        
        // Decrement 
        decrementBtn.addEventListener("click" , ()=>{
            let counter = +amountBox.innerText;
            counter--;
            amountBox.innerText = counter;
            if(counter == 0){
                cartBox.remove();
            }
            totalBox.innerText = `${pr * +amountBox.textContent}$`
        //total price
        sum -= val;
        totalPrice.innerText = `${sum}$`
    });
        icon.addEventListener("click" , ()=>{
            cartBox.remove();
            val = parseInt(totalBox.innerText)
            sum -= val;
            totalPrice.innerText = `${sum}$`
        })
        //total price
        sum += val;
            totalPrice.innerText = `${sum}$`
    }
})
    });
  })
  .catch(error => {
    console.error(error);
  });
