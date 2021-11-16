
        
                //Conteo de personas
        let numPersonas = 0;
                //Facturacion
        let interesTarjetaCuota = 1;
        let precioProducto = 0.0;
        const iva = 1.21;
        let numCuotas = 0;
        let conIva = 0.0;
        let conInteresTarjetaCuota = 0.0;
        let diastranscurridos = 0;
        let fecha1 = Date.now();
        
        
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
        
        const URL = "json/habitaciones.json";
        class huesped {
            constructor(nombre, apellido, dni, mail, edad, telefono) {
                this.nombre  = tipo.toUpperCase(nombre);
                this.apellido  = tipo.toUpperCase(apellido);
                this.dni  = parseInt(dni);
                this.mail  = tipo.toLowerCase(mail);
                this.edad = parseInt(edad);
                this.telefono = parseInt(telefono);
            }
        }
        const URLhuespedes = "json/huespedes.json";
        class reserva {
            constructor(huespedes, habitacion, fechaCheckIn, fechaCheckOut, codigo) {
                this.huespedes  = huespedes;
                this.habitacion  = habitacion;
                this.fechaCheckIn  = fechaCheckIn; // ver que es variable local de la funcion Calcular; 
                this.fechaCheckOut  = fechaCheckOut;
                this.codigo = codigo; // generar
            }
        }
        const URLReservas = "json/reservas.json";

        // let guardarHuesped = function(){
        //     reserva.huespedes.push(huespedAguardar);
        // }

    

        //Declaramos un array de productos para almacenar objetos
        let habitaciones = [];

        habitaciones.push(new habitacion("individual", 1, 4, 3700));

        habitaciones.push(new habitacion("doble", 2, 1, 6000));
            
        habitaciones.push(new habitacion("triple", 3, 5, 9000));
        
        habitaciones.push(new habitacion("familiar", 4, 3, 10500));
        
        habitaciones.push(new habitacion("familiar2", 5, 4, 12000));
        
           
        

        
        let asignarHabitacion = () =>{
        $.get(URL, (respuesta,estado) =>{
            console.log(respuesta);
            console.log(estado);
            let habAsignadaSi = false;
            for( let habitAux of respuesta){
                if (habitAux.capacidad == numPersonas){                
                habitacionAsignada = new habitacion(habitAux.tipo, habitAux.capacidad, habitAux.disponibles, habitAux.precio);
                habAsignadaSi = true;
                }
            }
            if(habAsignadaSi){
                // console.log('habitacionAsignada ' + habitacionAsignada.precio);
                // agregarIva();        
                // cuantoInteres(); 
                // calculaInteresTarjetaCuota();
                // imprimirTotal();
            }
        }).done(function() {
            agregarIva();        
            cuantoInteres(); 
            calculaInteresTarjetaCuota();
            imprimirTotal();
          })
    }
    
    const agregarIva = () => {
        conIva = habitacionAsignada.precio * 1.21;
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

      
        $("#btn-simulador").click(function(){
            $("#seccion1a").queue(function(next){
                $(this).css("order","1");
            }) 
            $("#seccion1b").hide(2000);
            $("#seccion1c").show(4000);
        })

        $("#btn-continuar1").click(function(){
            $("#seccion2b").hide(2000);
            $("#seccion2c").show(4000);
            $("#seccion2a").queue(function(next){
                $(this).css("order","2");
                $(this).css("position","relative");
            })
                
        })
            
                                                                                // ver


        $("#btn-continuar1").click(function(){
                    ($("#huesped2")).css("display","none");
                    ($("#huesped2")).css("display","none");
                    ($("#huesped3")).css("display","none");
                    ($("#huesped4")).css("display","none");
                    ($("#huesped5")).css("display","none")
                if ($("#cantPersonas").val() >= 1){
                    ($("#huesped1")).css("display","block");
                }
                if ($("#cantPersonas").val() >= 2){
                    ($("#huesped2")).css("display","block");                    
                }
                if ($("#cantPersonas").val() >= 3){
                    ($("#huesped3")).css("display","block");
                }
                if ($("#cantPersonas").val() >= 4){
                    ($("#huesped4")).css("display","block")
                }
                if ($("#cantPersonas").val() >= 5){
                    ($("#huesped5")).css("display","block")
                }
        })

        $("#btn-continuar2").click(function(){
            $("#seccion3a").queue(function(next){
                $(this).css("order","1");
            }) 
            $("#seccion3b").hide(2000);
            $("#seccion3c").show(4000);
        })

        const calculaInteresTarjetaCuota = () => {
            return (conInteresTarjetaCuota = conIva * interesTarjetaCuota);
        }

        

        // $("#book").click(function(){
        //     $("#unitario").empty();
        //     $("#unitario").append("El precio final por persona es de $ " + Math.trunc(conInteresTarjetaCuota));
        // })
       

        let imprimirTotal = function(){
            console.log('funcion total :' + numPersonas);
            console.log('conInteresTarjetaCuota total :' + conInteresTarjetaCuota);
            console.log('diastranscurridos total :' + diastranscurridos);

            $("#total").empty();
            $("#total").append(" $ " + Math.trunc(numPersonas * conInteresTarjetaCuota * diastranscurridos))
                       
                        .queue(function(next){
                            $(this).animate({"font-size": "1.6rem"},500);
                            $(this).css({"border":"solid",
                                        "border-radius": "10px",
                                        "border-color": "blue"})
                            next();
                        }) 
                        .queue(function(next){                       
                            $(this).animate({"font-size": "1.3rem"},1000);
                            next()
                        })
                        .queue(function(next){
                            $(this).animate({"font-size": "1.5rem"},2000),
                            next();
                        })
                        
        }
       

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
                $("#divCuotas").slideDown();
                $("#divCuotaHijo").slideDown(1000);
             } else{
                if($("#tarjetaDebito").is(":checked") || $("#efectivo").is(":checked")){
                    $("#divCuotas").slideUp(1000)
                    $("#divCuotaHijo").slideUp(1000)                                   
                    $("#cantCuotas").val("1 cuota (sin interes)");
                }
             }
        })
        
                
        const tarjetaCredito = document.getElementById("tipoPago");
        $("#tarjetaCredito").click(function(){
            $("#divCuotas").show();
        })

        

            
        let calcular = () => {
            fecha1 = new Date(document.getElementById('check-in').value);
            let fecha2 = new Date(document.getElementById("check-out").value);
            const milisegundosDia = 24*60*60*1000;
            let milisegundosTranscurridos = Math.abs(fecha1.getTime() - fecha2.getTime());
            diastranscurridos = Math.round(milisegundosTranscurridos/milisegundosDia);
    
            console.log(fecha1);
            console.log(fecha2);
            console.log(milisegundosDia);
            console.log('milisegs : ' + milisegundosTranscurridos);
            console.log(diastranscurridos);
    
        let opcion = document.getElementById("cantPersonas");
        numPersonas = opcion.options[opcion.selectedIndex].text;
        let option2 = document.getElementById("cantCuotas");
        numCuotas = option2.options[option2.selectedIndex].text;
        //EJECUCION DE FUNCIONES
        asignarHabitacion();
        // agregarIva();        
        // cuantoInteres(); 
        // calculaInteresTarjetaCuota();
        // imprimirTotal();
        
        }

        $("#btn-reservar").click(function(){
            guardarReserva();
        })

        const guardarReserva = () =>{
            let habitacionAux = new habitacion("individual", 1, 4, 3700);
            let reservaAux = new reserva(null, habitacionAux, Date.now(), Date.now(), "34576274");
            const infoPost =  JSON.stringify(reservaAux);
            $("#btn-reservar").click(() => { 
                $.post(URLReservas, infoPost ,(respuesta, estado) => {
                    if(estado === "success"){
                        $("body").prepend(`<div>
                        Guardado:${respuesta.nombre}
                        </div>`);
                    }  
                });
            });

        }
        
        //constructor(huespedes, habitacion, fechaCheckIn, fechaCheckOut, codigo) {
        //Declaramos la url que vamos a usar para el GET

//Declaramos la información a enviar
//Agregamos un botón con jQuery
//Escuchamos el evento click del botón agregado
