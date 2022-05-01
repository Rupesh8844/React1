import { navbar } from "../components/navbar";

import "../styles/navbar.css";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

const url ="https://grocery-masai.herokuapp.com/items";

let cartitems = JSON.parse(localStorage.getItem("items")) || [];

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
   groceryItems(res);
})
.catch(function(err){
    console.log("err:",err);
});


function groceryItems(data){

   let item = document.getElementById("container");


   let length = data.data.length;
//    console.log(length);


for(let i=0;i<length;i++){
        
    let box = document.createElement("div");
    box.setAttribute("class","box");

    let image = document.createElement("img");
    image.src = data.data[i].image;

    let names = document.createElement("p");
    names.innerText = data.data[i].name;

    let prices = document.createElement("p");
    prices.innerText = data.data[i].price;

   

    box.append(image,names,prices);

    
    item.append(box);
    }


    // box.append(image);
    // item.append(box);
}

