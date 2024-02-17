
// import cartNumebr from './nav.js';
const prodCont = document.querySelector(".prodContainer");
const searchParams = new URLSearchParams(window.location.search);
if (searchParams.get('category')){
  var category = searchParams.get('category'); // price_descending
  document.title = category ;
  var link = `https://dummyjson.com/products/category/${category}`;
} else {
  var link = `https://dummyjson.com/products`;
  document.title = 'Our Products' ;
}


fetch(link)
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

const menu = document.getElementsByClassName('fa-solid')[0];
const categories = document.getElementById('all-cat-container');
menu.addEventListener('click' , ()=>{
  if (categories.style.display == 'none'){
    console.log('none');
    categories.style.display = 'flex';
  } else {
    categories.style.display = 'none';
    console.log('flex');
  }
})