// ----==== SELECTORS ===--- 
const tableEL = document.querySelector('table');
const form = document.querySelector('form'); // form that hold my inputs
const productName = document.querySelector ('#proname');  // calls product name input
const upcId = document.querySelector ('#upc-id');   // calls upc input
const seller = document.querySelector('#seller'); // calls  sellers input
const price  = document.querySelector('#price'); // calls price input
const addProduct = document.querySelector('#bnt-summit');// add a product to my inventory
const tDataContainer = document.querySelector('tbody'); // table row tbody
const product = [];  // saves my object (inventory)



//---===EVENT LISTENER ===--- 

addProduct.addEventListener('click',onAddDataCell);
tableEL.addEventListener('click', onDeleteRow);


// ---===FUNTIONS ===---
function onAddDataCell (e){
  // prevent form from submitting
 e.preventDefault();
  
 if (productName === '' | upcId === '' | seller === '' | price === '' ){
   alert('esta vacio');
   return;

 }

 
// object
 objCreado = {
   name :productName.value,
   upc: upcId.value,
   sellers: seller.value,
   cost: price.value,
   id: Date.now()
   
 }

 print ();
 localStorageSave();
 prints();



}



function print (e){
 
 tDataContainer.innerHTML += `
 <tr> 
   <td>${objCreado.name}</td>
   <td>${objCreado.upc}</td>
   <td>${objCreado.sellers}</td>
   <td>${objCreado.cost}</td>
   <td><i class="fas fa-edit btnedit"></i></td>
   <td><i class="btnErase fas fa-trash btndelete"></i></td>
 </tr>  
 `;


 
}

// DELETE FUNTION 
function onDeleteRow (e){
   // delete ROW
   if (!e.target.classList.contains ('btndelete')){
    return;

     };
     const item = e.target;
     item.closest('tr').remove();

 }
 

 

//--- LOCAL STORAGE ==---

function localStorageSave (e){
   
  if (localStorage.getItem('inventory') == null) { //Cuando no esta creado
        
    localStorage.setItem('inventory', JSON.stringify(objCreado));

 }else { // Cuando ya este creado
    let datos = JSON.parse(localStorage.getItem('inventory'));
    
    datos.push( objCreado);

    localStorage.setItem('inventory', JSON.stringify(datos));
 }


function prints (e){
  if (localStorage.getItem('inventory') == null) { //Cuando no esta creado
        
    localStorage.setItem('inventory', JSON.stringify(product));

    //Aqui va ir el pintado de los datos
    product.forEach(inventory => {
  tDataContainer.innerHTML += `
  <tr> 
    <td>${objCreado.name}</td>
    <td>${objCreado.upc}</td>
    <td>${objCreado.sellers}</td>
    <td>${objCreado.cost}</td>
    <td><i class="fas fa-edit btnedit"></i></td>
    <td><i class="btnErase fas fa-trash btndelete"></i></td>
  </tr>  
  `
      
    });
  
  }} 

  
}
