// 4: VISA, 51 -> 55: MasterCard, 36-38-39: DinersClub, 34-37: American Express, 65: Discover, 5019: dankort


$(function(){
  
    var cards = [{
      nome: "mastercard",
      colore: "#0061A8",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
    }, {
      nome: "visa",
      colore: "#E2CB38",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2000px-Visa_Inc._logo.svg.png"
    }, {
      nome: "dinersclub",
      colore: "#888",
      src: "http://www.worldsultimatetravels.com/wp-content/uploads/2016/07/Diners-Club-Logo-1920x512.png"
    }, {
      nome: "americanExpress",
      colore: "#108168",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo.svg/600px-American_Express_logo.svg.png"
    }, {
      nome: "discover",
      colore: "#86B8CF",
      src: "https://lendedu.com/wp-content/uploads/2016/03/discover-it-for-students-credit-card.jpg"
    }, {
      nome: "dankort",
      colore: "#0061A8",
      src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Dankort_logo.png"
    }];
    
    var month = 0;
    var html = document.getElementsByTagName('html')[0];
    var number = "";
    
    var selected_card = -1;
    
    $(document).click(function(e){
      if(!$(e.target).is(".pagos-ccv") || !$(e.target).closest(".pagos-ccv").length){
        $(".pagos-card").css("transform", "rotatey(0deg)");
        $(".pagos-seccode").css("color", "var(--text-color)");
      }
      if(!$(e.target).is(".pagos-expire") || !$(e.target).closest(".pagos-expire").length){
        $(".pagos-date_value").css("color", "var(--text-color)");
      }
      if(!$(e.target).is(".pagos-number") || !$(e.target).closest(".pagos-number").length){
        $(".pagos-card_number").css("color", "var(--text-color)");
      }
      if(!$(e.target).is(".pagos-inputname") || !$(e.target).closest(".pagos-inputname").length){
        $(".pagos-fullname").css("color", "var(--text-color)");
      }
    });
    
    
    //Card number input
    $(".pagos-number").keyup(function(event){
      $(".pagos-card_number").text($(this).val());
      number = $(this).val();
      
      if(parseInt(number.substring(0, 2)) > 50 && parseInt(number.substring(0, 2)) < 56){
        selected_card = 0;
      }else if(parseInt(number.substring(0, 1)) == 4){
        selected_card = 1;  
      }else if(parseInt(number.substring(0, 2)) == 36 || parseInt(number.substring(0, 2)) == 38 || parseInt(number.substring(0, 2)) == 39){
        selected_card = 2;     
      }else if(parseInt(number.substring(0, 2)) == 34 || parseInt(number.substring(0, 2)) == 37){
        selected_card = 3; 
      }else if(parseInt(number.substring(0, 2)) == 65){
        selected_card = 4; 
      }else if(parseInt(number.substring(0, 4)) == 5019){
        selected_card = 5; 
      }else{
        selected_card = -1; 
      }
      
      if(selected_card != -1){
        html.setAttribute("style", "--card-color: " + cards[selected_card].colore);  
        $(".pagos-bankid").attr("src", cards[selected_card].src).show();
      }else{
        html.setAttribute("style", "--card-color: #cecece");
        $(".pagos-bankid").attr("src", "").hide();
      }
      
      if($(".pagos-card_number").text().length === 0){
        $(".pagos-card_number").html("&#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF;");
      }
  
    }).focus(function(){
      $(".pagos-card_number").css("color", "white");
    }).on("keydown input", function(){
      
      $(".pagos-card_number").text($(this).val());
      
      if(event.key >= 0 && event.key <= 9){
        if($(this).val().length === 4 || $(this).val().length === 9 || $(this).val().length === 14){
          $(this).val($(this).val() +  " ");
        }
      }
    })
    
    //Name Input
    $(".pagos-inputname").keyup(function(){  
      $(".pagos-fullname").text($(this).val().toUpperCase());  
      if($(".pagos-inputname").val().length === 0){
          $(".pagos-fullname").text("FULL NAME");
      }
      return event.charCode;
    }).focus(function(){
      $(".pagos-fullname").css("color", "white");
    });
    
    //Security code Input
    $(".pagos-ccv").focus(function(){
      $(".pagos-card").css("transform", "rotatey(180deg)");
      $(".pagos-seccode").css("color", "white");
    }).keyup(function(){
      $(".pagos-seccode").text($(this).val());
      if($(this).val().length === 0){
        $(".pagos-seccode").html("&#x25CF;&#x25CF;&#x25CF;");
      }
    }).focusout(function() {
        $(".pagos-card").css("transform", "rotatey(0deg)");
        $(".pagos-seccode").css("color", "var(--text-color)");
    });
      
    
    //Date expire input
    $(".pagos-expire").keypress(function(event){
      if(event.charCode >= 48 && event.charCode <= 57){
        if($(this).val().length === 1){
            $(this).val($(this).val() + event.key + " / ");
        }else if($(this).val().length === 0){
          if(event.key == 1 || event.key == 0){
            month = event.key;
            return event.charCode;
          }else{
            $(this).val(0 + event.key + " / ");
          }
        }else if($(this).val().length > 2 && $(this).val().length < 9){
          return event.charCode;
        }
      }
      return false;
    }).keyup(function(event){
      $(".pagos-date_value").html($(this).val());
      if(event.keyCode == 8 && $(".pagos-expire").val().length == 4){
        $(this).val(month);
      }
      
      if($(this).val().length === 0){
        $(".pagos-date_value").text("MM / YYYY");
      }
    }).keydown(function(){
      $(".pagos-date_value").html($(this).val());
    }).focus(function(){
      $(".pagos-date_value").css("color", "white");
    });
  });