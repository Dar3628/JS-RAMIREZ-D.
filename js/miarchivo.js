
        
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
            constructor(nombre, apellido, edad, telefono) {
                this.nombre  = nombre;
                this.apellido  = apellido;
                this.edad = parseInt(edad);
                this.telefono = parseInt(telefono);
            }
        }
        class areserva {
            constructor(codigo, familia, habitacionTipo, fechaCheckIn, fechaCheckOut, huespedes) {
                this.codigo = codigo;
                this.familia  = familia;
                this.habitacionTipo  = habitacionTipo;
                this.fechaCheckIn  = fechaCheckIn;
                this.fechaCheckOut  = fechaCheckOut;
                this.huespedes = huespedes;
            }
        }
        

    

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

        $("#btn-datosPago").click(function(){
            $("#seccionTarjeta").show(2000);
        })

            
        let calcular = () => {
            let fecha1 = new Date(document.getElementById('check-in').value);
            let fecha2 = new Date(document.getElementById('check-out').value);
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
   
        
        }

    
        var afamilia = [];
        var ahabitacionTipo = [];
        var afechaCheckIn = [];
        var afechaCheckOut = [];
        var acodigo = [];
        
       
        var areservas = [];
    
        var elementoBotonRegistrar = document.querySelector("#btn-pagado");
    
        elementoBotonRegistrar.addEventListener("click", nuevaReserva);
    
        function nuevaReserva(){
            if(localStorage.getItem('areservas') != null){
            areservas = JSON.parse(localStorage.getItem('areservas'));
            
            }
            
            var familia = $('#apellido1').val();
            var habitacionTipo = $('#cantPersonas').val();
            var fechaCheckIn = $('#check-in').val();
            var fechaCheckOut = $('#check-out').val();
            var codigo = $('#dni1').val();
            var ahuespedes = [];
    
                
            var name1 = $('#name1').val();
            var apellido1 = $('#apellido1').val();
            var edad1 = $('#edad1').val();
            var telefono1 = $('#telefono1').val();
            var ahuesped1 = new huesped(name1,apellido1,edad1,telefono1);
    
            var name2 = $('#name2').val();
            var apellido2 = $('#apellido2').val();
            var edad2 = $('#edad2').val();
            var telefono2 = $('#telefono2').val();
            var ahuesped2 = new huesped(name2,apellido2,edad2,telefono2);
    
            var name3 = $('#name3').val();
            var apellido3 = $('#apellido3').val();
            var edad3 = $('#edad3').val();
            var telefono3 = $('#telefono3').val();
            var ahuesped3 = new huesped(name3,apellido3,edad3,telefono3);
    
            var name4 = $('#name4').val();
            var apellido4 = $('#apellido4').val();
            var edad4 = $('#edad4').val();
            var telefono4 = $('#telefono4').val();
            var ahuesped4 = new huesped(name4,apellido4,edad4,telefono4);
    
            var name5 = $('#name5').val();
            var apellido5 = $('#apellido5').val();
            var edad5 = $('#edad5').val();
            var telefono5 = $('#telefono5').val();
            var ahuesped5 = new huesped(name5,apellido5,edad5,telefono5);
    
    
            ahuespedes.push(ahuesped1);
            ahuespedes.push(ahuesped2);
            ahuespedes.push(ahuesped3);
            ahuespedes.push(ahuesped4);
            ahuespedes.push(ahuesped5);
    
            ahuespedes = ahuespedes.splice(0,parseInt(habitacionTipo)); 
    
    
            var reservaActual = new areserva(codigo ,familia,habitacionTipo,fechaCheckIn,fechaCheckOut,ahuespedes);
            areservas.push(reservaActual);
            localStorage.setItem("areservas", JSON.stringify(areservas));
        }
        
    function mostrarReserva(){
        var areservasGuard = [];
        //var tablaReserva = $('#tablaReserva');
        if(localStorage.getItem('areservas') != null){
            areservasGuard = JSON.parse(localStorage.getItem('areservas'));
        }else {console.log('SIN RESERVAS');}
        
        let l = 0;
        let largo = areservasGuard.length;
       while( l < largo){
            console.log(areservasGuard[l].codigo);
            console.log(areservasGuard[l].familia);
            console.log(areservasGuard[l].habitacionTipo);
            console.log(areservasGuard[l].fechaCheckIn);
            console.log(areservasGuard[l].fechaCheckOut);
            console.log(areservasGuard[l].huespedes[0]);

            l++;
        }
    }
    var elementoBotonTraerReserva = document.querySelector("#btn-search");
    
    elementoBotonTraerReserva.addEventListener("click", mostrarReserva);
       
    //    tablaReserva.innerHTML = '';
    //    var codigo =JSON.parse(localStorage.getItem('codigo'))
    //    var titular =JSON.parse(localStorage.getItem('familia'))
    //    var plazas =JSON.parse(localStorage.getItem('habitacionTipo'))
    //    var fechaInicio =JSON.parse(localStorage.getItem('fechaCheckIn'))
    //    var fechaFin =JSON.parse(localStorage.getItem('fechaCheckOut'))

    //   

    //    //for(var i in codigo[]) i== codigo; print()){
    //        var fila = document.createElement('tr');

    //        var celdacodigo= document.createElement('td');
    //        var celdaTitular = document.createElement('td');
    //        var celdaPlazas = document.createElement('td');
    //        var celdaFechaInicio = document.createElement('td');
    //        var celdaFechaFin = document.createElement('td');

    //        nodoTextoCodigo = document.createTextNode(areservasGuard[l].codigo),
    //        nodoTextoTitular = document.createTextNode(areservasGuard[l].familia),
    //        nodoTextoPlazas = document.createTextNode(areservasGuard[l].habitacionTipo),
    //        nodoTextoFechaInicio = document.createTextNode(areservasGuard[l].fechaCheckIn),
    //        nodoTextoFechaFin = document.createTextNode(areservasGuard[l].fechaCheckOut)

    
    //         celdacodigo.appendChild(nodoTextoCodigo)
    //         celdaTitular.appendChild(nodoTextoTitular)
    //         celdaPlazas.appendChild(nodoTextoPlazas)
    //         celdaFechaInicio.appendChild(nodoTextoFechaInicio)
    //         celdaFechaFin.appendChild(nodoTextoFechaFin)

    //         fila.appendChild(celdacodigo);
    //         fila.appendChild(celdaTitular);
    //         fila.appendChild(celdaPlazas);
    //         fila.appendChild(celdaFechaInicio);
    //         fila.appendChild(celdaFechaFin);

    //         tablaReserva.appendChild(fila);

    //    //}
    // }
