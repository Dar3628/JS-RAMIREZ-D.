/*!
* Start Bootstrap - Landing Page v6.0.3 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank


        //Saludo e inicio
        let cliente = prompt("Ingresa tu nombre");
        let saludo = alert("Hola " + cliente);
        
                //Conteo de personas
        let numPersonas= prompt("Ingrese Numero de personas");
                //Facturacion
        let interesTarjetaCuota = 0.0;
        let precioProducto = 0.0;
        const iva = 1.21;
        let numCuotas = parseFloat( prompt ("Ingrese la cantidad de cuotas en que lo desea abonar"));
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
        
        


        console.log(habitaciones);

        // for (const habitacion of habitaciones){
        //     console.log(habitacion.tipo);
        //     console.log(habitacion.precio);
        // }
        
        
        
        const asignarHabitacion = () => {
            let habAsignadaSi = false;
            for( let habitAux of habitaciones ){
                if (habitAux.capacidad == numPersonas){
                habitacionAsignada = habitAux;
                habAsignadaSi = true;
                }
            }
            if(habAsignadaSi ==true ){
                alert("habitacion " + habitacionAsignada.tipo + "a un valor de " + habitacionAsignada.precio);                    

            } else {
                alert( "No existe una habitacion con las caracteristicas requeridas");
            }
        }
          
        
        /* habitacion.sort((a, b) =>{
            const tipoA = a.apellido.tolowerCase();
            const tipoB = b.apellido.tolowerCase();
            if(apellidoA < apellidoB){
                return -1;
            }
            if(apellidoA > apellidoB){
                    return 1;
            }
            return 0;
        });
        console.log(habitacion) */
        
                
        //facturacion
        
           
        const cuantoInteres = () => {
            switch(true){
                case numCuotas <= "3":
                   interesTarjetaCuota = 1;// aca deberia ser 1, para poder calcular el precioFinalUnitario
                   break;
        
                case numCuotas >= "4" && numCuotas <= "6":
                    interesTarjetaCuota = 1.10;
                    break;
                
                case numCuotas >= "7" && numCuotas <= "9":
                    interesTarjetaCuota = 1.15;
                    break;
                
                case numCuotas >= "10" && numCuotas <= "12":
                    interesTarjetaCuota = 1.15;
                    break;
                       
                default:
                    alert("Cantidad de cuotas invalida");  
                    break;  
            }
        }

        const calculaInteresTarjetaCuota = () => (
            conInteresTarjetaCuota = conIva * interesTarjetaCuota);
        
        const precioFinalUnitario = () => {
              alert("el precio final por persona es " + conInteresTarjetaCuota);
        }
        
        const precioFinal = () => {
                alert( "el precio final es " + (numPersonas * conInteresTarjetaCuota)); 
        } 
        
        //EJECUCION DE FUNCIONES
        asignarHabitacion();
        agregarIva();
        //console.log(precioProducto);
        cuantoInteres(); 
        calculaInteresTarjetaCuota();
        precioFinalUnitario();
        precioFinal();