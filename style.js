const movies = [

{
 title:"Dookudu",
 type:"Movie",
 genre:"Action • Comedy",
 image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiO888CYBrbimN-Y_acP-jL1JXYOvwVZH0gtUgJnUDzw&s=10",
 link:"https://youtu.be/M5rXgWKooz0?si=2O2njo5Xszw13Hm-"
},

{
 title:"Gabbar Singh",
 type:"Movie",
 genre:"Action • Comedy",
 image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2Q8eqbU95weMT8uzX2pRsMSVHnU1eMYnOi3HC4EreA&s=10",
 link:"https://youtu.be/EztUsjJAh0E?si=zVGEnzruvJOihEyV"
},

{
 title:"Racha",
 type:"Movie",
 genre:"Action • Romance",
 image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPZ0aXyw73inUT9KJw7DaBejk0SW_4D3L23cZETgb_A&s=10",
 link:"https://youtu.be/Kr1S_UvHcuc?si=73cAtNj93EM13N13"
},

{
 title:"Race Gurram",
 type:"Movie",
 genre:"Action • Comedy",
 image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPboGwbK5E3369xfmES5EoUdd-71IBL0byfrLz_H89xw&s=10",
 link:"https://youtu.be/oVsA6B1cweo?si=hYWlD0-NOBTSFa2y"
},

{
 title:"Thuppakki",
 type:"Movie",
 genre:"Action • Thriller",
 image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxgSJwZxGUJZummp449rp344vnfKQA0HAQo65slFbIQ&s",
 link:"https://youtu.be/8i-anl9T04s?si=kLbxAuYOPMmt5Tdu"
},

{
 title:"darling",
 type:"Movie",
 genre:"Comedy,romance",
 image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeusxQA_h38N9hUOuAWooqMY-V7dwbjbBQ8bHeTwQE1g&s=10",
 link:"https://youtu.be/nWMm95YFrfY?si=x72Rd_Vb23CU8dg_"
},

{
 title:"Chennai Express",
 type:"Movie",
 genre:"Comedy • Romance",
 image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm0KBjQg_3kZJQcqGiUqIsyPULfLcvrsJn8iVKD9X0ww&s",
 link:"https://youtu.be/nTFiU7os_M4?si=XNSr289BZT-VtlTl"
},

{
 title:"Idhayam Murali",
 type:"Movie",
 genre:"Romance • Drama",
 image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsEk6uZFhGuDImZOCPZcOntI-sh9h65Mz4jLTjkxSbvA&s",
 link:"https://youtu.be/VCnfbX_q-9c?si=otYL4OH8WmWHFK2Q"
},

{
 title:"Bigg Boss 10",
 type:"Show",
 genre:"Reality Show",
 image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXZ2D8xydgwcg95KRGYVclDz1dXy6G8iXIMJWKruBPg&s=10",
 link:"https://youtu.be/fKQJSP3-TPE?si=k2EnIaPXzWhJBhy4"
},

{
 title:"Dhee",
 type:"Show",
 genre:"Dance Show",
 image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ_-pzMVuHLKnKwF38bmdadiy9IDTbudjZtsJdTwslA&s=10",
 link:"https://youtu.be/dGZrJcIeoiw?si=EL-ie342w3UDdTBp"
},

{
 title:"saregama pa",
 type:"Show",
 genre:"singing Show",
 image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWCN92MhE6B3zDUe4lel3uPM3SuYLj-oVq3mHiTuksg&s=10",
 link:"https://youtu.be/-60tLX7Fk4k?si=qWCfRpo6b2YZEPai"
}

];

let selected = null;

let watchlist =
JSON.parse(localStorage.getItem("watchlist")) || [];


/* CARDS */

function createCard(item,index){

return `
<div class="card">

<img src="${item.image}">

<div class="cardBody">

<h3>${item.title}</h3>

<p>${item.genre}</p>

<button onclick="openMovie(${index})">
▶ Watch
</button>

</div>

</div>
`;
}


/* DISPLAY */

function display(list=movies){

document.getElementById("movieList").innerHTML =
list.map((x,i)=>
x.type=="Movie" ? createCard(x,i) : ""
).join("");

document.getElementById("showList").innerHTML =
list.map((x,i)=>
x.type=="Show" ? createCard(x,i) : ""
).join("");
}


/* LOGIN */

function login(){

let email=prompt("Enter your email:");

let password=prompt("Enter password:");

if(email && password){

localStorage.setItem("user",email);

updateLogin();

alert("Login successful!");

}

}


/* LOGOUT */

function logout(){

localStorage.removeItem("user");

updateLogin();

alert("Logged out.");

}


function updateLogin(){

let user=localStorage.getItem("user");

document.getElementById("loginBtn")
.style.display=user?"none":"block";

document.getElementById("logoutBtn")
.style.display=user?"block":"none";
}


/* OPEN MOVIE */

function openMovie(index){

if(!localStorage.getItem("user")){

alert("Please login first.");

login();

if(!localStorage.getItem("user"))
return;

}

selected=movies[index];

document.getElementById("popupImage")
.src=selected.image;

document.getElementById("popupTitle")
.innerText=selected.title;

document.getElementById("popupGenre")
.innerText=selected.genre;

document.getElementById("moviePopup")
.style.display="flex";

}


/* WATCH LINK */

function watchLink(){

if(!selected)
return;

/*
 Opens the movie/trailer link
 in a new browser tab.
*/

window.open(
selected.link,
"_blank"
);

}


/* WATCHLIST */

function addWatchlist(){

if(!selected)
return;

if(!watchlist.includes(selected.title)){

watchlist.push(selected.title);

localStorage.setItem(
"watchlist",
JSON.stringify(watchlist)
);

alert(
selected.title+
" added to Watchlist!"
);

}
else{

alert("Already in Watchlist.");

}

}


/* CLOSE MOVIE */

function closeMovie(){

document.getElementById("moviePopup")
.style.display="none";

}


/* SEARCH */

document.getElementById("search")
.addEventListener("input",function(){

let value=this.value.toLowerCase();

let result=movies.filter(x=>
x.title.toLowerCase().includes(value) ||
x.genre.toLowerCase().includes(value)
);

display(result);

});


/* PLANS */

function buyPlan(name,price){

if(!localStorage.getItem("user")){

alert("Please login first.");

login();

if(!localStorage.getItem("user"))
return;

}

document.getElementById("selectedPlan")
.innerText=name+" Plan - ₹"+price;

document.getElementById("paymentPopup")
.style.display="flex";

}


/* PAYMENT */

function payment(){

let name=
document.getElementById("name").value;

let id=
document.getElementById("paymentId").value;

if(!name || !id){

alert("Please enter payment details.");

return;

}

localStorage.setItem(
"subscription",
document.getElementById("selectedPlan")
.innerText
);

alert(
"✅ Payment Successful!\n"+
"Subscription Activated."
);

closePayment();

}


function closePayment(){

document.getElementById("paymentPopup")
.style.display="none";

}


/* START */

updateLogin();
display();