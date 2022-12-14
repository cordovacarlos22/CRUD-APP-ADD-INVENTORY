
// ----==== SELECTORS ===--- 
const tableEL = document.querySelector('table');
const form = document.querySelector('form'); // form that hold my inputs
const productName = document.querySelector('#proname');  // calls product name input
const upcId = document.querySelector('#upc-id');   // calls upc input
const seller = document.querySelector('#seller'); // calls  sellers input
const price = document.querySelector('#price'); // calls price input
const addProduct = document.querySelector('#bnt-summit');// add a product to my inventory
const editProduct = document.querySelector('#bnt-edits'); // edits product to inventory
const tDataContainer = document.querySelector('tbody'); // table row tbody
let referenceForUpdate2 = '';
//---===EVENT LISTENER ===--- 
addProduct.addEventListener('click', send); // adds a product to produts/inventory  array
editProduct.addEventListener('click', update2);// calls update function
document.addEventListener("DOMContentLoaded", prints);// prins elements to when we open page


// ---===FUNTIONS ===---

// sends elements to local stogage and prints them
function send() {


  // does not let send form if not fill complete
  if (productName.value == '' | upcId.value == '' | seller.value == '' | price.value == '') {
    alert('MAKE SURE TO FILL FORM COMPLETE');
    return;

  }

  // creates a object for inventory 
  let objInventory = {
    name: productName.value,
    upc: upcId.value,
    sellers: seller.value,
    cost: price.value,
    id: Date.now(),

  }
  //--- LOCAL STORAGE ==---
  // variable to set localstogare
  let inventory = JSON.parse(localStorage.getItem('products'));
  // if for localstogage
  if (inventory === null) {
    inventory = [];
    inventory.push(objInventory);
    localStorage.setItem('products', JSON.stringify(inventory));
  } else {
    inventory.push(objInventory);
    localStorage.setItem('products', JSON.stringify(inventory));
  }

  prints(); // prints html elemenets to tDatacontainer
  // prevent form from submitting
  form.reset();

  // clear input form  after an input 
  productName.value = '';
  upcId.value = '';
  seller.value = '';
  price.value = '';

}

// create table row and table data using innerHTML.
function prints() {

  let inventory = JSON.parse(localStorage.getItem('products'));

  if (inventory != null) {
    tDataContainer.innerHTML = "";

    inventory.forEach((element) => {
      tDataContainer.innerHTML =
        tDataContainer.innerHTML +
        `
 <tr class='trContainer' key=${element.id}> 
   <td>${element.name}</td>
   <td>${element.upc}</td>
   <td>${element.sellers}</td>
   <td>${element.cost}</td>
   <td><i onclick='update(event)' ontouchstart='update(event)' class="fas fa-edit btnedit"></i></td>
   <td><i onclick='onDeleteRow(event)' ontouchstart='onDeleteRow(event)' class="btnErase fas fa-trash btndelete"></i></td>
   <td style='display:none'>${element.id}</td>
 </tr>  
 `;
    });
  }

  // clear input form  after an input 
  productName.value = '';
  upcId.value = '';
  seller.value = '';
  price.value = '';

}

// DELETE FUNTION 
function onDeleteRow(e) {
  //console.log(e.path[2].childNodes[13].innerHTML)
  // console.log(e.path[2].getAttribute('key'));
  let findTr = e.path[2].childNodes[13].innerHTML; // to  find element id or key 
console.log(findTr);
  let inventory = JSON.parse(localStorage.getItem('products'));
  let index = inventory.findIndex((element) => element.id == findTr);

  inventory.splice(index, 1); // delete element from array

  localStorage.setItem('products', JSON.stringify(inventory)); // updated DOM OR localstorage

  prints()

   // clear input form  after an input 
   productName.value = '';
   upcId.value = '';
   seller.value = '';
   price.value = '';

}
// update function or edit function
function update(e) {
  
  let findTr = e.path[2].childNodes[13].innerHTML; // to  find element id or key 
  let inventory = JSON.parse(localStorage.getItem('products')); // to bring DOM
  let index = inventory.findIndex((element) => element.id == findTr); // TO FIND INDEX

  // to bring data into inputs from LOCALSTORAGE
  productName.value = inventory[index].name;
  upcId.value = inventory[index].upc;
  seller.value = inventory[index].sellers;
  price.value = inventory[index].cost;
  // to hidde add product button.
  addProduct.classList.add("d-none");
  // to show update button.
  editProduct.classList.remove("d-none");
  
  referenceForUpdate2 = inventory[index].id; // finds id element to use as a reference to update data
}


function update2(){
  // creates a object for inventory 
  let objInventory = {
    name: productName.value,
    upc: upcId.value,
    sellers: seller.value,
    cost: price.value,
    id:referenceForUpdate2,

  }
  let inventory = JSON.parse(localStorage.getItem('products')); // to bring DOM
  let index = inventory.findIndex((element) => element.id == objInventory.id); // TO FIND INDEX
  
  inventory.splice(index, 1, objInventory); // delete element from array

  localStorage.setItem('products', JSON.stringify(inventory)); // updated DOM OR localstorage

  prints();

  
  // to hidde add product button.
  addProduct.classList.remove("d-none");
  // to show update button.
  editProduct.classList.add("d-none");

  // clear input form  after an input 
  productName.value = '';
  upcId.value = '';
  seller.value = '';
  price.value = '';

}