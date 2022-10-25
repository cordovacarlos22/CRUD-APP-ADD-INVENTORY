window.onload =  function() {
  let arregloNombres = [];
  
 
  //Funcion para agregar
  const btnAgregar  = document.getElementById('btnAgregar');
  btnAgregar.addEventListener('click', event => {
      
       //Objeto Persona
      let objetoPersona = {
          id:0,
          nombre:'',
          apellidos:''
      }

      
      //Logica
     let nombre  = document.getElementById('txtNombre').value;
     //alert(nombre);
     
     //Seteando el valor nombre del objeto Persona
     objetoPersona.nombre = nombre;  

     //AÃ±adirlo en el arreglo
     arregloNombres.push(objetoPersona);
      
     //console.log(arregloNombres);
     
     //Logica del LocalStorage
     
     if (localStorage.getItem('valores') == null) { //Cuando no esta creado
      
        localStorage.setItem('valores', JSON.stringify(arregloNombres));

     }else { // Cuando ya este creado
        let datos = JSON.parse(localStorage.getItem('valores'));
        
        datos.push(objetoPersona);

        localStorage.setItem('valores', JSON.stringify(datos));
     }


  }); 

   //Funcion para cargar datos guadardos
   function cargarDatosGuardados (){
       
      if (localStorage.getItem('valores') != null) {

          let datos = JSON.parse(localStorage.getItem('valores'));

          //Aqui va ir el pintado de los datos
          datos.forEach(element => {
              let  divNombre  =  document.createElement('div');
              let textNombre  =  document.createTextNode(element.nombre);
              divNombre.appendChild(textNombre);
              
              let boton  = document.createElement('button');
                  boton.className = 'btn btn-danger';
              let textBoton = document.createTextNode('Borrar');

                   boton.addEventListener('click', event =>{
                     alert(element.nombre);     
                   });

              boton.appendChild(textBoton);
              
              divNombre.appendChild(boton);

              document.body.appendChild(divNombre)        
          });
      }
   }


   cargarDatosGuardados();

}