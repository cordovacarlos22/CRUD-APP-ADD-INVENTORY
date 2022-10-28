
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
    objCreate = {
      name :productName.value,
      upc: upcId.value,
      sellers: seller.value,
      cost: price.value,
      id: Date.now()
      
    }
  
  
    product.push(objCreate);
  
    
    if (localStorage.getItem('intentory') == null) { //check if exist
         
      localStorage.setItem('inventory', JSON.stringify(product));
  
   }else { // Cuando ya este creado
      let datos = localStorage.setItem('inventory', JSON.stringify('inventory'));
      
      datos.push(objCreate);
  
      localStorage.setItem('inventory', JSON.stringify(datos));
   }
    
  });
  
  
  
  
  // ---===FUNTIONS ===---
  
  
  //Funcion para cargar datos guadardos
  function cargarDatosGuardados (){
           
    if (localStorage.getItem('inventory') != null) {
  
        let datos = JSON.parse(localStorage.getItem('inventory'));
  
  
  
        //Aqui va ir el pintado de los datos
        datos.forEach(element => {
        
       let tableDiv = document.createElement('div');
       tableDiv.classList.add('tableDiv')
        let trow = document.createElement ('tr');
        
        let tdata1 = document.createElement ('td');
        trow.appendChild(tdata1); 
        let pName  =  document.createTextNode(element,`${objCreate.name}`);
        tdata1.appendChild(pName);
                
          
          
         tDataContainer.appendChild(tableDiv); 
         
        });
    }
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
    
   function print (){
    // table  container
const addRow = document.createElement("tr");
addRow.classList.add("table-row");


// create TD
// data cell for product name 
const tdata = document.createElement("td");
tdata.innerText = productName.value;
addRow.appendChild(tdata);
// data cell for upc id
const tdata1 = document.createElement("td");
tdata1.innerText = upcId.value;
addRow.appendChild(tdata1);

// data cell for seller
const tdata2 = document.createElement("td");
tdata2.innerText = seller.value;
addRow.appendChild(tdata2);

// data cell for price

const tdata3 = document.createElement("td");
tdata3.innerText = price.value;
addRow.appendChild(tdata3);


// CHECK edit Button
const editButton = document.createElement('button');
editButton.innerHTML = '<i class="fas fa-edit btnedit"></i>';
editButton.classList.add('edit-btn');
addRow.appendChild(editButton);

// CHECK trash Button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash btndelete">';
trashButton.classList.add('trash-btn');
addRow.appendChild(trashButton);

tDataContainer.appendChild(addRow);

   }
   
  
  //--- LOCAL STORAGE ==---
  
  

  
  