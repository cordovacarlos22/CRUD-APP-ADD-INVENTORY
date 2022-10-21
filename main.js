// ----==== SELECTORS ===--- 
const form = document.querySelector('form'); // form that hold my inputs
const productName = document.querySelector ('#proname');  // calls product name input
const upcId = document.querySelector ('#upc-id');   // calls upc input
const seller = document.querySelector('#seller'); // calls  sellers input
const price  = document.querySelector('#price'); // calls price input
const addProduct = document.querySelector('#bnt-summit');// add a product to my inventory
const tDataContainer = document.querySelector('tbody'); // table row tbody
const product = [];  // saves my object (inventory)



//---===EVENT LISTENER ===--- 

form.addEventListener('click',onAddDataCell);


// ---===FUNTIONS ===---
function onAddDataCell (e){
   // prevent form from submitting
  e.preventDefault();
  
// object
  objCreado = {
    name :productName.value,
    upc: upcId.value,
    sellers: seller.value,
    cost: price.value,
    id: Date.now()
    
  }


// add inventory to my object 
  product.push(objCreado);
 
  
  print();

}

function print (e){
  
  tDataContainer.innerHTML += `
  <tr> 
    <td>${objCreado.name}</td>
    <td>${objCreado.upc}</td>
    <td>${objCreado.sellers}</td>
    <td>${objCreado.cost}</td>
    <td><i class="fas fa-edit btnedit"></i></td>
    <td><i class="fas fa-trash btndelete"></i></td>
  </tr>  
  `;
  
}



//--- LOCAL STORAGE ==---