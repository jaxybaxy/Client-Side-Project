const cartNum = document.getElementById("cart-number");
export function cartNumber(cartNum) {
  if (localStorage.getItem("cartItems")) {
    cartNum.innerText = JSON.parse(localStorage.getItem("cartItems")).length;
  } else {
    cartNum.innerText = 0;
  }
}

