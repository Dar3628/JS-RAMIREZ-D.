
        
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
        var ahuespedes = [];
        var ahuesped1 = [];
        var ahuesped2 = [];
        var ahuesped3 = [];
        var ahuesped4 = [];
        var ahuesped5 = [];

    var elementoBotonRegistrar = document.querySelector("#btn-pagado");
    elementoBotonRegistrar.addEventListener("click", nuevaReserva);

    function nuevaReserva(){
        if(localStorage.getItem('familia') != null){
        afamilia = JSON.parse(localStorage.getItem('familia'));
        ahabitacionTipo = JSON.parse(localStorage.getItem('habitacionTipo'));
        afechaCheckIn = JSON.parse(localStorage.getItem('fechaCheckIn'))
        afechaCheckOut = JSON.parse(localStorage.getItem('fechaCheckOut'))
        acodigo = JSON.parse(localStorage.getItem('codigo'))
        ahuespedes = JSON.parse(localStorage.getItem('Huespedes'))
        }

        var familia = $('#apellido1').val();
            habitacionTipo = $('#cantPersonas').val();
            fechaCheckIn = $('#check-in').val();
            fechaCheckOut = $('#check-out').val();
            codigo = $('#dni1').val();


        afamilia.push(familia);
        ahabitacionTipo.push(habitacionTipo);
        afechaCheckIn.push(fechaCheckIn);
        afechaCheckOut.push(fechaCheckOut);
        acodigo.push(codigo);

        
        
        var name1 = $('#name1').val();
        var apellido1 = $('#apellido1').val();
        var edad1 = $('#edad1').val();
        var telefono1 = $('#telefono1').val();

        var name2 = $('#name2').val();
        var apellido2 = $('#apellido2').val();
        var edad2 = $('#edad2').val();
        var telefono2 = $('#telefono2').val();

        var name3 = $('#name3').val();
        var apellido3 = $('#apellido3').val();
        var edad3 = $('#edad3').val();
        var telefono3 = $('#telefono3').val();

        var name4 = $('#name4').val();
        var apellido4 = $('#apellido4').val();
        var edad4 = $('#edad4').val();
        var telefono4 = $('#telefono4').val();

        var name5 = $('#name5').val();
        var apellido5 = $('#apellido5').val();
        var edad5 = $('#edad5').val();
        var telefono5 = $('#telefono5').val();

        if(habitacionTipo >= 1){
        ahuesped1.push(name1);
        ahuesped1.push(apellido1);
        ahuesped1.push(edad1);
        ahuesped1.push(telefono1);
        ahuespedes.push(ahuesped1);
        }

        if(habitacionTipo >= 2){
        ahuesped2.push(name2);
        ahuesped2.push(apellido2);
        ahuesped2.push(edad2);
        ahuesped2.push(telefono2);
        ahuespedes.push(ahuesped2);        
        }

        if(habitacionTipo >= 3){
        ahuesped3.push(name3);
        ahuesped3.push(apellido3);
        ahuesped3.push(edad3);
        ahuesped3.push(telefono3);
        ahuespedes.push(ahuesped3);        
        }

        if(habitacionTipo >= 4){
        ahuesped4.push(name4);
        ahuesped4.push(apellido4);
        ahuesped4.push(edad4);
        ahuesped4.push(telefono4);
        ahuespedes.push(ahuesped4);        
        }
        
        if(habitacionTipo >= 5){
        ahuesped5.push(name5);
        ahuesped5.push(apellido5);
        ahuesped5.push(edad5);
        ahuesped5.push(telefono5);
        ahuespedes.push(ahuesped5);
        }

        localStorage.setItem("familia", JSON.stringify(afamilia));
        localStorage.setItem("habitacionTipo", JSON.stringify(ahabitacionTipo));
        localStorage.setItem("fechaCheckIn", JSON.stringify(afechaCheckIn));
        localStorage.setItem("fechaCheckOut", JSON.stringify(afechaCheckOut));
        localStorage.setItem("codigo", JSON.stringify(acodigo));
        localStorage.setItem("Huespedes", JSON.stringify(ahuespedes));
        // var i = 0;
        // for(let cod in codigo ){
        //     if (cod = 44){
        //         familia = afamilia[i];
        //         habit = ahabitacionTipo[i];
        //     }
        //     i++;
        // }

    }

    // function mostrarReserva(){
    //    var tablaReserva = $('#tablaReserva');
       
    //    tablaReserva.innerHTML = '';
    //    var codigo =JSON.parse(localStorage.getItem('codigo'))
    //    var titular =JSON.parse(localStorage.getItem('familia'))
    //    var plazas =JSON.parse(localStorage.getItem('habitacionTipo'))
    //    var fechaInicio =JSON.parse(localStorage.getItem('fechaCheckIn'))
    //    var fechaFin =JSON.parse(localStorage.getItem('fechaCheckOut'))

    //    function showItemsByKey() {
    //     var typeofKey = null;
    //     for (var key in localStorage) {
    //         typeofKey = (typeof localStorage[codigo]);
    //         console.log(key, typeofKey);
    //         }
    //     }

    //    //for(var i in codigo[]) i== codigo; print()){
    //        var fila = document.createElement('tr');

    //        var celdacodigo= document.createElement('td');
    //        var celdaTitular = document.createElement('td');
    //        var celdaPlazas = document.createElement('td');
    //        var celdaFechaInicio = document.createElement('td');
    //        var celdaFechaFin = document.createElement('td');

    //        nodoTextoCodigo = document.createTextNode(codigo[i]),
    //        nodoTextoTitular = document.createTextNode(titular[i]),
    //        nodoTextoPlazas = document.createTextNode(plazas[i]),
    //        nodoTextoFechaInicio = document.createTextNode(fechaInicio[i]),
    //        nodoTextoFechaFin = document.createTextNode(fechaFin[i])

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
