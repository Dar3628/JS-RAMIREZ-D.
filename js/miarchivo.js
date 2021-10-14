
        //Saludo e inicio
        let cliente = prompt("Ingresa tu nombre");
        let saludo = alert("Hola " + cliente);
                //Conteo de personas
        let numPersonas = 0;
                //Facturacion
        let interesTarjetaCuota = 1;
        let precioProducto = 0.0;
        const iva = 1.21;
        let numCuotas = 0;
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
            
        }
          
        
    
        
        
        
        const cuantoInteres = () => {
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
                    interesTarjetaCuota = 1.15;
                    break;
                       
                default:
                    alert("Cantidad de cuotas invalida");  
                    break;  
            }
        }
       
        


        const calculaInteresTarjetaCuota = () => {
            return (conInteresTarjetaCuota = conIva * interesTarjetaCuota);
        }

        let searchBtn = document.getElementById("book");

          searchBtn.addEventListener("click", e = () =>{
                let input = document.createElement("p");
                document.getElementById("unitario").textContent = "";
                input.setAttribute("class", "justify-content-center align-content-center");
                input.textContent="El precio final por persona es de $ " + conInteresTarjetaCuota;
                document.getElementById("unitario").appendChild(input);
            })               
                        
            searchBtn.addEventListener("click", e = () =>{
                let input = document.createElement("p");
                document.getElementById("total").textContent = "";
                input.setAttribute("class", "justify-content-center align-content-center");
                input.textContent ="El precio final es de $  " + (numPersonas * conInteresTarjetaCuota);
                document.getElementById("total").appendChild(input);
            }) 

            searchBtn.addEventListener("click", e = () =>{
                document.getElementById("resultados").style.display = "block";

            }) 

        let mostrarDivCuotas = () => {
            if(document.getElementById("tarjetaCredito").checked){
            document.getElementById("divCuotas").style.display = "block";
            }else{
                document.getElementById("divCuotas").style.display = "none";
                document.getElementById("cantCuotas").opcion = opcion[0];
            }        
        }


        const tarjetaCredito = document.getElementById("tipoPago");
        tarjetaCredito.addEventListener ("click", mostrarDivCuotas);
        
            
        let search = () => {
        let opcion = document.getElementById("cantPersonas");
        numPersonas = opcion.options[opcion.selectedIndex].text;
        let option2 = document.getElementById("cantCuotas");
        numCuotas = option2.options[option2.selectedIndex].text;
        //EJECUCION DE FUNCIONES
        asignarHabitacion();
        agregarIva();        
        cuantoInteres(); 
        calculaInteresTarjetaCuota();       

        }

        

        
