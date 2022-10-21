// ----==== SELECTORS ===--- 
const productName = document.querySelector ('.product-name');
const addProduct = document.querySelector('.add-product');
const rowContainer = document.querySelector('.row-container');
const updId = document.querySelector ('.upd-id '); 

//---===EVENT LISTENER ===--- 
addProduct.addEventListener('click', addRow);


// ---===FUNTION ===---

function addRow (event){
   // prevent form from submitting
 event.preventDefault();



// table  container
 const addRow = document.createElement("tr");
 addRow.classList.add("table-row");


 // create TD
const tdata = document.createElement("td");
tdata.innerText = productName.value;
tdata.innerText = updId.value;
//const cell = document.createTextNode('HEY');
//tdata.appendChild(cell);
addRow.appendChild(tdata);


// check mark button
const completeButton = document.createElement('button');
completeButton.innerHTML = '<i class="fas fa-check"></i>';
completeButton.classList.add('complete-btn');
addRow.appendChild(completeButton);

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

rowContainer.appendChild(addRow);

}


//--- LOCAL STORAGE ==-- 