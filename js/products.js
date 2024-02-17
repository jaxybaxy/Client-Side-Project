
// import cartNumebr from './nav.js';
const prodCont = document.querySelector(".prodContainer");
const searchParams = new URLSearchParams(window.location.search);
let category = searchParams.get('category'); // price_descending

document.title = category ;

fetch(`https://dummyjson.com/products/category/${category}`)
  .then((res) => res.json())
  .then((products) => {
    products.products.forEach((element) => {
      //Product card
      prodCard = document.createElement("div");
      prodCard.classList.add("prodCard");

      // //Product name
      // prodTitle = document.createElement("p");
      // prodTitle.innerText = element.title;
      // prodTitle.classList.add("prodTitle");
      // prodCard.appendChild(prodTitle);
      //Product image
      prodImage = document.createElement("img");
      prodImage.src = element.thumbnail;
      prodImage.classList.add("prodImage");
      prodCard.appendChild(prodImage);
      



      
        //Product description
        prodDesc = document.createElement('p');
        prodDesc.innerText = element.description;
        prodDesc.classList.add("prodDesc");
        prodCard.appendChild(prodDesc);

      //Product price
      prodPrice = document.createElement("p");
      prodPrice.innerText = element.price + "$";
      // prodPrice.classList.add("prodPrice");

      //Product Discount
      prodDscnt = document.createElement("p");
      discount = Math.ceil(
        element.price - element.price * (element.discountPercentage / 100)
      );
      prodDscnt.innerText = discount + "$";

      // prodSale = document.createElement("p");
      // prodSale.innerText = Math.ceil(element.discountPercentage) + "%";

      priceDiv = document.createElement("div");
      priceDiv.appendChild(prodPrice);
      priceDiv.appendChild(prodDscnt);
      prodCard.appendChild(priceDiv);

      priceDiv.classList.add("priceDiv");

      //Product div styling

      if (element.discountPercentage >= 10) {
        prodDscnt.classList.add("prodDscnt");
        prodPrice.classList.add("prodPrice");
        // prodSale = document.createElement("p");
        // prodSale.innerHTML = `<p>${Math.ceil(element.discountPercentage)}%</p>`;
        // prodSale.classList.add("prodSale");
        // prodCard.appendChild(prodSale);
      } else {
        prodPrice.style.fontSize = "2rem";
        prodPrice.classList.add("prodDscnt");
        prodDscnt.style.display = "none";
      }

      //// Product rating start
      let rate = (element.rating / 5) * 100;

      //&#9733;
      // const fullStar = `
      //   <div class="fullStar" style="width:${rate}%">
      //   <span>★★★★★</span>
      //   </div>
      //   `;
      // const emptyStar = `
      //   <div class="emptyStar">
      //   <span>★★★★★</span>
      //   </div>
     
      //   `;
      // prodRating = document.createElement("div");
      // prodRating.innerHTML = emptyStar + fullStar;
      // prodRating.classList.add("prodRating");
      // prodRating.classList.add("star-ratings");

      // //Product rating number
      // const rateNum = document.createElement("p");
      // rateNum.innerText = element.rating;
      // rateNum.classList.add("rateNum");

      // //Product rating div
      // const ratingDiv = document.createElement("div");
      // ratingDiv.appendChild(prodRating);
      // ratingDiv.appendChild(rateNum);
      // prodCard.appendChild(ratingDiv);
      // ratingDiv.classList.add("ratingDiv");

//       //Product Order Quantity
//       // console.log(element.stock);
//       prodQuant = document.createElement("div");
//       // <p> In Stock : ${element.stock}</P>
//       prodQuant.innerHTML = `

//         <button class="downQuant" onClick='decreaseCount(event, this , ${element.stock})'>▼</button>
//         <span class="quantSpan">1</span>
//         <button class="upQuant" onClick='increaseCount( event,this , ${element.stock})'>▲</button>
// `;
//       prodQuant.classList.add("prodQuant");
//       prodCard.appendChild(prodQuant);

      //Add to cart button
      add2Cart = document.createElement("button");
      add2Cart.value = 1;
      add2Cart.innerText = "Add To Cart";
      add2Cart.classList.add("add2Cart");
      add2Cart.setAttribute("id", element.id);
      prodCard.appendChild(add2Cart);


      // Product details
      prodDetails = document.createElement('a');
      prodDetails.innerText = 'View product details';
      prodDetails.classList.add('prodDetails');
      prodDetails.href= `snglprod.html?id=${element.id}`;
      add2Cart.insertAdjacentElement("beforeBegin" , prodDetails);

      prodCont.appendChild(prodCard);
    });
    cartButtons = document.getElementsByClassName("add2Cart");
    for (i = 0; i < cartButtons.length; i++) {
        // console.log(cartButtons[i].id);
        cartButtons[i].addEventListener("click", (event) => {

          if (!localStorage.getItem('cartItems')){
              cart = [];
              cart.push(event.target.id);
              localStorage.setItem("cartItems", JSON.stringify(cart));
          } else {
             cart = JSON.parse(localStorage.getItem('cartItems'));
             cartIDs = [];
             cart.forEach((item)=>{
              console.log(item);
              cartIDs.push(item);
              console.log(cartIDs);
             })
              if (!(cartIDs.includes(event.target.id))){
                cart.push(event.target.id)
                localStorage.setItem("cartItems", JSON.stringify(cart));
              }

            }
            // cartNumebr();
        });
      };
  });

