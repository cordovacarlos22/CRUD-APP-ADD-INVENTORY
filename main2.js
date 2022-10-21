// ----==== SELECTORS ===--- 
const productName = document.querySelector ('.product-name'); // calls product nane input
const upcId = document.querySelector ('.upd-id ');   // calls upc input 
const sellerParagraph = document.querySelector('.seller-Paragraph'); // calls seller input
const priceTag  = document.querySelector('.Price-tag'); // calls price input
const addProduct = document.querySelector('.add-product'); // add a product to my inventory
const tDataContainer = document.querySelector('.rowscontainer'); // table row tbody
const product = []; // saves my object (inventory)
//---===EVENT LISTENER ===--- 
addProduct.addEventListener('click', addRow);

// ---===FUNTION ===---


function addInventory (event){
   // prevent form from submitting
 event.preventDefault(); // prevents form from summiting 
// object 
 inventory = {
  name:productName.value,
  upc: upcId.value,
  sellers:sellerParagraph.value,
  cost:priceTag.value
 }
// adds inventory to my product array
 product.push(inventory);

// calls addRow function
addRow();

}
// create a table row and data cell
function addRow (e){
  // clear my table row and cell
  tDataContainer.innerHTML = '';
// using innerHTML we create a HTML TR a TD
// I USE ${} to call my object 
  tDataContainer.innerHTML += `
  <tr>  
    <td>${productName}</td>
    <td>${upcId}</td>
    <td>${seller}</td>
    <td>${price}</td>
    <td><i class="fas fa-edit btnedit"></i></td>
    <td><i class="fas fa-trash btndelete"></i></td>
  </tr>  
  `;
 }

 // delete my row element




//--- LOCAL STORAGE ==-- 