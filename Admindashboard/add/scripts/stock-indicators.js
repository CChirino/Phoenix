
  function obtener_informacion_de_stock(moneda_base_internal, pair_internal, texto_print, id_numero, id_flecha, pre_simbol, su_simbol){ 
  bolsas_llamado = "" //Se declara la variable a retornar
  var llamadoajax = $.ajax({url: "add/stock.php", dataType:"json"})

.done(function(data){
  var flecha_actual = document.getElementById(id_flecha).innerHTML


  if(JSON.parse(JSON.stringify(data[moneda_base_internal][pair_internal]['valor_presente']))>JSON.parse(JSON.stringify(data[moneda_base_internal][pair_internal]['valor_pasado']))){
    
      if(document.getElementById(id_numero) && document.getElementById(id_flecha)){
        
        document.getElementById(id_numero).innerHTML = '<b style="color: #1fabf2; font-size: 0.9em" >'+texto_print+'</b><br/> <b>'+pre_simbol+JSON.parse(JSON.stringify(data[moneda_base_internal][pair_internal]['valor_print']))+su_simbol+'</b>';
    
        document.getElementById(id_flecha).innerHTML ='<b style="color: green"><i class="fas fa-long-arrow-alt-up" style="font-size:20px"></i></b>';

        if(document.getElementById(id_numero+"_div")){
          if(flecha_actual!='<b style="color: green"><i class="fas fa-long-arrow-alt-up" style="font-size:20px"></i></b>'){
            $( "#"+id_numero+"_div" ).effect("highlight", {color: "#9bffa5"}, 500);
        }
      }
    }


  }else if(JSON.parse(JSON.stringify(data[moneda_base_internal][pair_internal]['valor_presente']))<JSON.parse(JSON.stringify(data[moneda_base_internal][pair_internal]['valor_pasado']))){
    
      if(document.getElementById(id_numero) && document.getElementById(id_flecha)){
        
        document.getElementById(id_numero).innerHTML = '<b style="color: #1fabf2; font-size: 0.9em" >'+texto_print+'</b><br/> <b>'+pre_simbol+JSON.parse(JSON.stringify(data[moneda_base_internal][pair_internal]['valor_print']))+su_simbol+'</b>';
    
        document.getElementById(id_flecha).innerHTML ='<b style="color: red"><i class="fas fa-long-arrow-alt-down" style="font-size:20px"></i></b>';

        if(document.getElementById(id_numero+"_div")){
          if(flecha_actual!='<b style="color: red"><i class="fas fa-long-arrow-alt-down" style="font-size:20px"></i></b>'){
           $( "#"+id_numero+"_div" ).effect("highlight", {color: "#f98989"}, 500);
          }
        }
      }



  }else{

      if(document.getElementById(id_numero) && document.getElementById(id_flecha)){
       
        document.getElementById(id_numero).innerHTML = '<b style="color: #1fabf2; font-size: 0.9em" >'+texto_print+'</b><br/> <b>'+pre_simbol+JSON.parse(JSON.stringify(data[moneda_base_internal][pair_internal]['valor_print']))+su_simbol+'</b>';
    
        document.getElementById(id_flecha).innerHTML ='-';
      }
  }


})
}


function actualizar_stock_indicadores(){
    new Promise(function(){
    obtener_informacion_de_stock("BOLSA", "SP500", "S&P 500", "sp500_indicador", "sp500_indicador_flecha", "$", "")
    obtener_informacion_de_stock("BOLSA", "DOW30", "DOW 30", "dow30_indicador", "dow30_indicador_flecha", "$", "")
    

    obtener_informacion_de_stock("BOLSA", "NASDAQ", "NASDAQ", "nasdaq_indicador", "nasdaq_indicador_flecha", "$", "")
    obtener_informacion_de_stock("BOLSA", "RUSSELL2000", "RUSSELL 2000", "russell2000_indicador", "russell2000_indicador_flecha", "$", "")
    obtener_informacion_de_stock("BOLSA", "FTSE100", "FTSE 100", "ftse100_indicador", "ftse100_indicador_flecha", "$", "")
    obtener_informacion_de_stock("BOLSA", "NIKKEI225", "NIKKEI 225", "nikkei225_indicador", "nikkei225_indicador_flecha", "$", "")
    setTimeout("actualizar_stock_indicadores()",1000) 
  })

}