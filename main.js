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
tableEL.addEventListener('click', onDeleteRow);
addProduct.addEventListener('click',event =>{
  
  // object
  productS = {
    name :productName.value,
    upc: upcId.value,
    sellers: seller.value,
    cost: price.value,
    id: Date.now()
    
  }

  product.push(productS);
  
  if (localStorage.getItem('intentory') == null) { //check if exist
        
    localStorage.setItem('inventory', JSON.stringify(product));

 }else { // Cuando ya este creado
    let datos = localStorage.setItem('inventory', JSON.stringify(productS));
    
    datos.push(productS);

    localStorage.setItem('inventory', JSON.stringify(datos));
 }
 
 

});



// ---===FUNTIONS ===---


function print (){
         
  if (localStorage.getItem('inventory') != null) {

      let datos = JSON.parse(localStorage.getItem('inventory'));

      //Aqui va ir el pintado de los datos
      datos.forEach(element => {
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
          
      });
  }
  print ();
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

