// var p = document.createElement('p');
// console.log(p);
// var div = document.querySelector("div");
// div.appendChild(p);
// p.innerText="toto";

// var text = prompt("saisissez un nom");
// console.log(text);
// var span = document.createElement('span');
// var div = document.querySelector("div");
// div.appendChild(span);
// span.innerText= text;
 

 // var prenom = document.querySelector("div");
 // console.log(prenom);
 // console.log(prenom.innerHTML);

// var list = document.querySelectorAll("div");
// console.log(list);
// document.write("<ul>");
// for (var i= 0; i < prenom.length; i++){
// document.write("<li>"+ prenom[i].innerText+"</li>");
// }
// document.write("</ul>");
// console.log(div);
// var nodejack = list[1];
// nodejack.classList.toggle("gros");

// var nodejack = document.querySelector('.gros');
// nodejack.classList.toggle("gros");
// console.log(nodejack);

// var nodered = document.querySelector('h1');
// console.log(nodered);
// nodered.classList.toggle("red");
// // console.log(nodered);

// function myListener(){
// 	alert('bravo');
// };
// var btn = document.querySelector('button');
// btn.addEventListener("click", myListener);

// var bdy = document.querySelector('body');
// bdy.addEventListener("click",myListener);


function afficharti(){
var nodehide = document.querySelector("div");
nodehide.classList.toggle("hide");
} 
var nodebtn = document.querySelector("button");
nodebtn.addEventListener("click",afficharti);



function textred(){
var nodered = document.querySelector("p");
nodered.classList.toggle("color");

var nodermouse = document.querySelector("p");
nodermouse.addEventListener("mouseover",textred);
}


/*correction*/


// <html>

// 	<head>
    
//     	<style>
//          .hide {
//          	display:none;
//          }
         
//          #mon-article {
//             background-color: grey;
//          }
//         </style>
    
//     </head>
    
//     <body>
    
//         <button id="show-article-btn">afficher/cacher l'article</button>
        
//         <div id="mon-article" class="hide">

//             <h2>Coupe du monde</h2>
//             <p>
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//             </p>
//         </div>

 		   	
//     </body>
// </html>


// var btn = document.querySelector("#show-article-btn");

// btn.addEventListener('click', toggleArticle);


// var article = document.querySelector('#mon-article');

// article.addEventListener('mouseover', changeBackground);


// function changeBackground() {
// 	this
// }

// function toggleArticle() {
    
//     var nodeArticle = document.querySelector('#mon-article');
    
//     nodeArticle.classList.toggle('hide');
// }


// var operation = {};
// operation.nb1 = 5;
// operation.nb2 = 10;
// operation.sum = function(){
// 	var result = this.nb1 + this.nb2
// 	return result;
// }

// console.log(operation.sum());

// operation.nb1 = 50;
// operation.nb2 = 60;

// console.log (operation.sum());



var cart={};
cart.items =[];
cart.addItem = function(item){
	this.items.push(item);
}
cart.addItem("salade");
cart.addItem("pomme");
console.log (cart);


buildProduct(name,price,qty){
	var product = {};
	product.nom = name;
	product.prixttc = price;
	product.quantity = qty;


product.calculeprixttc= function(){
	return this prixttc *(1+0.2);
}
return product;
}
}