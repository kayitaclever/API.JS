// let userContainer= document.getElementById('users')

// const getUsers=()=>{
//    return  fetch('https://dummyjson.com/users')
//     .then(response=>response.json())
//     .then(response=>response)
//     .catch(error=>error.message)
// };


// const displayUsers= async()=>{
//     const users= await getUsers();
//     console.log(users.users);
//     users.users.map(item=>{
//         let div= document.createElement('div');
//         div.className='people';
        
//         let img=document.createElement('img');
//         let names= document.createElement('h2');
//         let userName= document.createElement('p');


//         img.src= item.image;
//         names.innerHTML=`${item.firstName} ${item.lastName}`;
//         userName.innerHTML= item.username;
//         div.appendChild(img);
//         div.appendChild(names);
//         div.appendChild(userName);
//         userContainer.appendChild(div);


//      })
//     }
//     displayUsers();

    
function generateProductCards(data) {
    const productContainer = document.getElementById("product");
    
    data.forEach((product) => {
  
      const card = document.createElement("div");
      card.classList.add("product-card");
      
      card.innerHTML = `
              <img  class="img" src="${product.thumbnail}" alt="${product.name}" />
              <h2>${product.title}</h2>
              <div class='productPrice'>
              <p>${product.price}</p>
              <button class=btnProduct>ADD TO CART</button>
              </div> 
          `;
      
      productContainer.appendChild(card);
    });
  }
  function fetchProducts() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        
        const returnedData = data.products.slice(0, 8);
        
        generateProductCards(returnedData);
      });
  }
  fetchProducts()