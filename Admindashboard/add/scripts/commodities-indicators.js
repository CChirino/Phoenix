
  function obtener_informacion_de_commodities(moneda_base_internal, pair_internal, texto_print, id_numero, id_flecha, pre_simbol, su_simbol){ 
  bolsas_llamado = "" //Se declara la variable a retornar
  var llamadoajax = $.ajax({url: "add/commodities.php", dataType:"json"})
  .done(function(data){
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




function actualizar_commodities_indicadores(){
  new Promise(function(){
    obtener_informacion_de_commodities("OIL", "USD-POIL", "USD/POIL", "poil_indicador", "poil_indicador_flecha", "", "")
    obtener_informacion_de_commodities("OIL", "USD-BOIL", "USD/BRENT", "boil_indicador", "boil_indicador_flecha", "", "")
    obtener_informacion_de_commodities("OIL", "USD-WOIL", "USD/WTI", "woil_indicador", "woil_indicador_flecha", "", "")
    obtener_informacion_de_commodities("ORE", "USD-GOLD", "USD/GOLD", "gold_indicador", "gold_indicador_flecha", "", "")
    obtener_informacion_de_commodities("ORE", "USD-SILVER", "USD/SILVER", "silver_indicador", "silver_indicador_flecha", "", "")
    /*obtener_informacion_de_commodities("ORE", "USD-ALUMINUM", "USD/ALUMINUM", "aluminum_indicador", "aluminum_indicador_flecha", "", "")*/
    setTimeout("actualizar_commodities_indicadores()",1000)
  })
}



