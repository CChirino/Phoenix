
function obtener_informacion_de_forex(moneda_base_internal, pair_internal, texto_print, id_numero, id_flecha, pre_simbol, su_simbol){ 

  bolsas_llamado = "" //Se declara la variable a retornar
  
  var llamadoajax = $.ajax({url: "add/forex.php", dataType:"json"}) //Ruta del archivo que calcula el tipo de horario de las bolsas, y extrae info de la BD  
    

    .done(function(data) {
    bolsas_llamado = data;

  var flecha_actual = document.getElementById(id_flecha).innerHTML

  if(JSON.parse(JSON.stringify(data[moneda_base_internal][pair_internal]['valor_presente']))>JSON.parse(JSON.stringify(data[moneda_base_internal][pair_internal]['valor_pasado']))){
    
      if(document.getElementById(id_numero) && document.getElementById(id_flecha)){
        

        if(document.getElementById(id_numero+"_div")){
            if(flecha_actual!='<b style="color: green"><i class="fas fa-long-arrow-alt-up" style="font-size:20px"></i></b>'){
              $( "#"+id_numero+"_div" ).effect("highlight", {color: "#9bffa5"}, 500);
            }
          }
        

        document.getElementById(id_numero).innerHTML = '<b style="color: #1fabf2; font-size: 0.9em" >'+texto_print+'</b><br/> <b>'+pre_simbol+JSON.parse(JSON.stringify(data[moneda_base_internal][pair_internal]['valor_print']))+su_simbol+'</b>';
    
        document.getElementById(id_flecha).innerHTML ='<b style="color: green"><i class="fas fa-long-arrow-alt-up" style="font-size:20px"></i></b>';
      }


  }else if(JSON.parse(JSON.stringify(data[moneda_base_internal][pair_internal]['valor_presente']))<JSON.parse(JSON.stringify(data[moneda_base_internal][pair_internal]['valor_pasado']))){
    
      if(document.getElementById(id_numero) && document.getElementById(id_flecha)){


      if(document.getElementById(id_numero+"_div")){
        if(flecha_actual!='<b style="color: red"><i class="fas fa-long-arrow-alt-down" style="font-size:20px"></i></b>'){
          $( "#"+id_numero+"_div" ).effect("highlight", {color: "#f98989"}, 500);
        }
      }
        
        document.getElementById(id_numero).innerHTML = '<b style="color: #1fabf2; font-size: 0.9em" >'+texto_print+'</b><br/> <b>'+pre_simbol+JSON.parse(JSON.stringify(data[moneda_base_internal][pair_internal]['valor_print']))+su_simbol+'</b>';
    
        document.getElementById(id_flecha).innerHTML ='<b style="color: red"><i class="fas fa-long-arrow-alt-down" style="font-size:20px"></i></b>';
      }


  }else{

      if(document.getElementById(id_numero) && document.getElementById(id_flecha)){
       
        document.getElementById(id_numero).innerHTML = '<b style="color: #1fabf2; font-size: 0.9em" >'+texto_print+'</b><br/> <b>'+pre_simbol+JSON.parse(JSON.stringify(data[moneda_base_internal][pair_internal]['valor_print']))+su_simbol+'</b>';
    
        document.getElementById(id_flecha).innerHTML ='-';
      }
  }



  })
      }
  

function actualizar_forex_indicadores(){

    obtener_informacion_de_forex("USD", "USD-EUR", "USD/EUR", "dolar_euro", "dolar_euro_flecha", "", "")
    obtener_informacion_de_forex("USD", "USD-JPY", "USD/JPY", "usd_jpy", "usd_jpy_flecha", "", "")
    

    obtener_informacion_de_forex("USD", "USD-CNY", "USD/CNY", "usd_cny", "usd_cny_flecha", "", "")
    obtener_informacion_de_forex("CNY", "CNY-USD", "CNY/USD", "cny_usd", "cny_usd_flecha", "", "")
    obtener_informacion_de_forex("JPY", "JPY-USD", "JPY/USD", "jpy_usd", "jpy_usd_flecha", "", "")
    obtener_informacion_de_forex("EUR", "EUR-USD", "EUR/USD", "eur_usd", "eur_usd_flecha", "", "")
    setTimeout("actualizar_forex_indicadores()",1000) 

}



