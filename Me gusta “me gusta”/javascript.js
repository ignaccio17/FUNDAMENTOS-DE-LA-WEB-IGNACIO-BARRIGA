window.onload = ()=>{
    
const quantity = document.getElementById("quantity");
const button_plus = document.getElementById("button+");
let items = 0;

function increaseItem() {
 items++;
 quantity.textContent = items;
}

function decreaseItem(){
 if(items > 0) items--;
 quantity.textContent = items;
}

button_plus.addEventListener("click", increaseItem);
button_minus.addEventListener("click",decreaseItem);

}