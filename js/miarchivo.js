
        //Saludo e inicio
        // let cliente = prompt("Ingresa tu nombre");
        // let saludo = alert("Hola " + cliente);
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
                case numCuotas == "1 cuota (sin interes)":
                   interesTarjetaCuota = 1;
                   break;
        
                   case numCuotas == "3 cuotas (10% de interes)":
                    interesTarjetaCuota = 1.10;
                    break;
                
                    case numCuotas == "6 cuotas (15% de interes)":
                    interesTarjetaCuota = 1.15;
                    break;
                
                    case numCuotas == "9 cuotas (20% de interes)":
                    interesTarjetaCuota = 1.20;
                    break;

                    case numCuotas == "12 cuotas (25% de interes)":
                    interesTarjetaCuota = 1.25;
                    break;
                       
                default:
                    alert("Cantidad de cuotas invalida");  
                    break;  
            }
        }
       
        
        $("#btn-simulador").click(function(){
            $("#simulador").slideToggle(1000);
        })

        const calculaInteresTarjetaCuota = () => {
            return (conInteresTarjetaCuota = conIva * interesTarjetaCuota);
        }

        

        $("#book").click(function(){
            $("#unitario").empty();
            $("#unitario").append("El precio final por persona es de $ " + Math.trunc(conInteresTarjetaCuota));
        })
       

        $("#book").click(function(){
            $("#total").empty();
            $("#total").append("El precio final es de $ " + Math.trunc(numPersonas * conInteresTarjetaCuota))
                        .css("border","solid")
                        .css("border-radius", "10px")
                        .css("border-color", "blue")
                        .delay(1000) 
                        .queue(function(next){
                            $(this).css({"font-size": "2rem"});
                            next();
                            
                    })
        })
       

        $("#book").click(function(){
            $("#resultados").slideDown(700);
        })

        $('#book').keypress(function (e) {
            if (e.which == 13) {
              $('input').click();  
            }
          });
 
        $("#tipoPago").click(function() {
             if($("#tarjetaCredito").is(":checked")){
                $("#divCuotas").slideDown(3000);
             } else{
                if($("#tarjetaDebito").is(":checked") || $("#efectivo").is(":checked")){
                    $("#divCuotas").slideUp(1000)                                   
                    $("#cantCuotas").val("1 cuota (sin interes)");
                }
             }
        })
        
                
        const tarjetaCredito = document.getElementById("tipoPago");
        $("#tarjetaCredito").click(function(){
            $("#divCuotas").show();
        })
        
            
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

        

        
