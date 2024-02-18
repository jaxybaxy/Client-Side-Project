let searchButton = document.getElementById("search-logo1");
searchButton.onclick = function searchData() {
  let searchValue = document.getElementById("search-text").value.toLowerCase()
  if (searchValue.length > 0) {
    fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
      .then((res) => res.json())
      .then((searchItem) => {
        let allItems = searchItem.products;
        length = Object.keys(allItems).length
        if(length>0){
          window.localStorage.setItem("value-1",searchValue)
          window.location.href = "products.html";
        }
        else{
          alert("no matched value")
        }
      }
      )
  }
  else{
    alert("please, type product name..")
  }
}


// let searchButton = document.getElementById("search-logo");
// searchButton.onclick = function searchData() {
//   let searchValue = document.getElementById("search-text").value.toLowerCase()
//   if (searchValue.length > 0) {
//     fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
//       .then((res) => res.json())
//       .then((products) => {
//         let allItems = products.products;
//         console.log(allItems)
//         length = Object.keys(allItems).length
//         if(length>0){

//           console.log(length)
//           window.location.href = "products.html";
//         }
//         else{
//           alert("no matched value")
//         }
//       }
//       )
//   }
//   else{
//     alert("please, type product name..")
//   }
// }




//     // for (let i = 0; i < length; i++) {
//       if (searchBar.value.toLowerCase().includes(searchValue) && searchValue.length > 0) {
//     console.log(allItems[i].id);
//     console.log(allItems[i].category);
//     console.log(allItems[i].title);
//     console.log(allItems[i].brand);

//   }
//   else if (!searchBar.value.toLowerCase().includes(searchValue) && searchValue.length > 0) {
//     alert("no matched value");
//   } else if (searchValue.length == 0) {
//     alert("please, type product name..");
//   }
//   // }
// };

// fetch("https://dummyjson.com/products/")
//   .then((res) => res.json())
//   .then((searchItem) => {
//     // console.log(searchItem);
//     // console.log(allItems);
//     // console.log(allItems[1].title);
//     // console.log(allItems[1].brand);
//     // console.log(allItems[1].category);
//     // console.log(allItems[1].id);
//     // console.log(length);
//     let allItems = searchItem.products;

//     // console.log(allItems);
//     length = Object.keys(allItems).length;
//     // console.log(length)
//     searchButton.onclick = function searchData() {
//       let searchValue = searchBar.value.toLowerCase();
//       // console.log(searchValue);
//       for (let i = 0; i < length; i++) {
//         if (
//           allItems[i].title.toLowerCase().includes(searchValue) &&
//           searchValue.length > 0
//         ) {
//           console.log(allItems[i].id);
//           console.log(allItems[i].category);
//           console.log(allItems[i].title);
//           console.log(allItems[i].brand);
//         } else if (searchValue.length == 0) {
//           alert("please, type product name..");
//           break;
//         }
//       }
//     };
//   });






