
        //Saludo e inicio
        let cliente = prompt("Ingresa tu nombre");
        let saludo = alert("Hola " + cliente);
                //Conteo de personas
        let numPersonas = 0;
                //Facturacion
<<<<<<< HEAD
        let interesTarjetaCuota = 1;
        let precioProducto = 0.0;
        const iva = 1.21;
        let numCuotas = 0;
=======
        let interesTarjetaCuota = 0.0;
        let precioProducto = 0.0;
        const iva = 1.21;
        let numCuotas = 1;
>>>>>>> main
        let conIva = 0.0;
        let conInteresTarjetaCuota = 0.0;
        
        
        //habitaciones de mi hotel
 
        class habitacion {
            constructor(tipo, capacidad, disponibles, precio) {
                this.tipo  = tipo.toUpperCase();
                this.capacidad  = parseInt(capacidad);
                this.disponibles  = parseInt(disponibles);
                this.precio  = parseFloat (precio);
                this.ocupada = false;
            }
            
        }
        
        const agregarIva = () => {
            conIva = habitacionAsignada.precio * 1.21;
        }
        //Declaramos un array de productos para almacenar objetos
        let habitaciones = [];

        habitaciones.push(new habitacion("individual", 1, 4, 3700));

        habitaciones.push(new habitacion("doble", 2, 1, 6000));
            
        habitaciones.push(new habitacion("triple", 3, 5, 9000));
        
        habitaciones.push(new habitacion("familiar", 4, 3, 10500));
        
        habitaciones.push(new habitacion("familiar2", 5, 4, 12000));
        
             
        
        const asignarHabitacion = () => {
            let habAsignadaSi = false;
            for( let habitAux of habitaciones ){
                if (habitAux.capacidad == numPersonas){
                habitacionAsignada = habitAux;
                habAsignadaSi = true;
                }
            }
            if(habAsignadaSi ==true ){
                alert("habitacion " + habitacionAsignada.tipo + " a un valor de " + habitacionAsignada.precio);                    

            } else {
                alert( "No existe una habitacion con las caracteristicas requeridas");
            }
        }
          
        
<<<<<<< HEAD
    
=======
        // habitaciones.sort((a, b) =>{
        //     const tipoA = a.tipo;
        //     const tipoB = b.tipo;
        //     if(tipoA < tipoB){
        //         return -1;
        //     }
        //     if(tipoA > tipoB){
        //         return 1;
        //     }
        //     return 0;
        // });
        
        // function crearHtml(){
        //     let elementoNuevo = document.createElement("div");
        //     elementoNuevo.innerHTML = <h3>"El costo de la habitacion requerida es el siguiente: "</h3>
        // }
                
        //facturacion
>>>>>>> main
        
        
        
        const cuantoInteres = () => {
<<<<<<< HEAD
            switch(true){
                case numCuotas == "1":
                   interesTarjetaCuota = 1;
                   break;
        
                   case numCuotas == "3":
                    interesTarjetaCuota = 1.10;
                    break;
                
                    case numCuotas == "6":
                    interesTarjetaCuota = 1.15;
                    break;
                
                    case numCuotas == "9":
                    interesTarjetaCuota = 1.15;
                    break;

                    case numCuotas == "12":
=======
            switch(Number){
                case cantCuotas == 1:
                   interesTarjetaCuota = 1;
                   break;
        
                   case cantCuotas == 3:
                    interesTarjetaCuota = 1.10;
                    break;
                
                    case cantCuotas == 6:
                    interesTarjetaCuota = 1.15;
                    break;
                
                    case cantCuotas == 9:
                    interesTarjetaCuota = 1.15;
                    break;

                    case cantCuotas == 12:
>>>>>>> main
                    interesTarjetaCuota = 1.15;
                    break;
                       
                default:
                    alert("Cantidad de cuotas invalida");  
                    break;  
            }
        }
<<<<<<< HEAD
        // const cantCuotas = () => {
        //     document.getElementById = ("cantCuotas");
        //     cantCuotas = numCuotas;
        // }
        


        const calculaInteresTarjetaCuota = () => {
                return (
                    conInteresTarjetaCuota = conIva * interesTarjetaCuota);
            }
=======
        const cantCuotas = () => {
            document.getElementById = ("cantCuotas");
        //     cantCuotas = numCuotas;
        }


        const calculaInteresTarjetaCuota = () => (
            conInteresTarjetaCuota = conIva * interesTarjetaCuota);
>>>>>>> main
        
        const precioFinalUnitario = () => {
              alert("el precio final por persona es " + conInteresTarjetaCuota);
        }
        
        const precioFinal = () => {
                alert( "el precio final es " + (numPersonas * conInteresTarjetaCuota)); 
        } 
        
<<<<<<< HEAD
        const efectivo = document.getElementById("efectivo");
        const tarjetaCredito = document.getElementById("tarjetaCredito");
        const tarjetaDebito = document.getElementById("tarjetaDebito");
        let formaDePago = () =>{
            switch(true){
                case efectivo : efectivo.addEventListener("click", e=() => {
                    document.getElementById("divCuotas").style.display = "none"});
                    break;
               
                case tarjetaDebito: tarjetaDebito.addEventListener ("click", e=() => {
                    document.getElementById("divCuotas").style.display = "none"});
                    break;
                case tarjetaCredito : tarjetaCredito.addEventListener ("click", e=() => {
                    document.getElementById("divCuotas").style.display = "block"});
                    break;

            }
            
        }
        
=======

>>>>>>> main
        let search = () => {
        let opcion = document.getElementById("cantPersonas");
        numPersonas = opcion.options[opcion.selectedIndex].text;
        let option2 = document.getElementById("cantCuotas");
<<<<<<< HEAD
        numCuotas = option2.options[option2.selectedIndex].text;
        //alert(numPersonas)
=======
        numCuotas = option2.options[parseInt(option2.selectedIndex)];
        // alert(numPersonas)
>>>>>>> main
        //EJECUCION DE FUNCIONES
        asignarHabitacion();
        agregarIva();
        //console.log(precioProducto);
<<<<<<< HEAD
        tipoPago();
=======
        cantCuotas();
>>>>>>> main
        cuantoInteres(); 
        calculaInteresTarjetaCuota();
        precioFinalUnitario();
        precioFinal();
        }

<<<<<<< HEAD
        

         
=======


>>>>>>> main
        /* let cantPersonasDom = document.getElementById("cantPersonas");
        let b = document.createElement("option");
        b.innerHTML = numPersonas;
        cantPersonas.append(b); */

