

function obtener_informacion_de_criptos(id_crypto_api, nombre_usar, nombre_id_numero, nombre_id_flecha, pre_simbol, su_simbol, nombre_dominancia){ 
  bolsas_llamado = "" //Se declara la variable a retornar
    var llamadoajax = $.ajax({url: "add/mercado.php", dataType:"json"})



  .done(function(data){









      if(parseFloat(data[id_crypto_api][5])>parseFloat(data[id_crypto_api][4])){
    
      if(document.getElementById(nombre_id_numero) && document.getElementById(nombre_id_flecha)){

        

        document.getElementById(nombre_id_numero).innerHTML = '<b style="color: #1fabf2; font-size: 0.9em" >'+nombre_usar+'</b><br/> <b>'+pre_simbol+data[id_crypto_api][3]+su_simbol+'</b>';
    
        document.getElementById(nombre_id_flecha).innerHTML ='<b style="color: green"><i class="fas fa-long-arrow-alt-up" style="font-size:20px"></i></b>';
      }


  }else if(parseFloat(data[id_crypto_api][5])<parseFloat(data[id_crypto_api][4])){

      if(document.getElementById(nombre_id_numero) && document.getElementById(nombre_id_flecha)){



        
        document.getElementById(nombre_id_numero).innerHTML = '<b style="color: #1fabf2; font-size: 0.9em" >'+nombre_usar+'</b><br/> <b>'+pre_simbol+data[id_crypto_api][3]+su_simbol+'</b>';
    
        document.getElementById(nombre_id_flecha).innerHTML ='<b style="color: red"><i class="fas fa-long-arrow-alt-down" style="font-size:20px"></i></b>';
      }


  }else{

      if(document.getElementById(nombre_id_numero) && document.getElementById(nombre_id_flecha)){
       
        document.getElementById(nombre_id_numero).innerHTML = '<b style="color: #1fabf2; font-size: 0.9em" >'+nombre_usar+'</b><br/> <b>'+pre_simbol+data[id_crypto_api][3]+su_simbol+'</b>';
    
        document.getElementById(nombre_id_flecha).innerHTML ='-';
      }
  }


  if(parseFloat(data[id_crypto_api][8])>parseFloat(data[id_crypto_api][7])){
    
      if(document.getElementById("dominance_"+nombre_id_numero) && document.getElementById("dominance_"+nombre_id_flecha)){


 


       
        document.getElementById("dominance_"+nombre_id_numero).innerHTML = '<b style="color: #1fabf2; font-size: 0.9em" >'+nombre_dominancia+'</b><br/> <b>'+data[id_crypto_api][6]+'%'+'</b>';
    
        document.getElementById("dominance_"+nombre_id_flecha).innerHTML ='<b style="color: green"><i class="fas fa-long-arrow-alt-up" style="font-size:20px"></i></b>';
      }


  }else if(parseFloat(data[id_crypto_api][8])<parseFloat(data[id_crypto_api][7])){
    
      if(document.getElementById("dominance_"+nombre_id_numero) && document.getElementById("dominance_"+nombre_id_flecha)){



        
        document.getElementById("dominance_"+nombre_id_numero).innerHTML = '<b style="color: #1fabf2; font-size: 0.9em" >'+nombre_dominancia+'</b><br/> <b>'+data[id_crypto_api][6]+'%'+'</b>';
    
        document.getElementById("dominance_"+nombre_id_flecha).innerHTML ='<b style="color: red"><i class="fas fa-long-arrow-alt-down" style="font-size:20px"></i></b>';
      }


  }else{

      if(document.getElementById("dominance_"+nombre_id_numero) && document.getElementById("dominance_"+nombre_id_flecha)){
       
        document.getElementById("dominance_"+nombre_id_numero).innerHTML = '<b style="color: #1fabf2; font-size: 0.9em" >'+nombre_dominancia+'</b><br/> <b>'+data[id_crypto_api][6]+'%'+'</b>';
    
        document.getElementById(nombre_id_flecha).innerHTML ='-';
      }
  }


  }


)}




function actualizar_barra(id_crypto_api, nombre_usar, nombre_id_numero, nombre_id_flecha, pre_simbol, su_simbol, nombre_dominancia){ 
  bolsas_llamado = "" //Se declara la variable a retornar
    var llamadoajax = $.ajax({url: "add/mercado.php", dataType:"json"})



  .done(function(data){

    if(document.getElementById(""+id_crypto_api+"_barra")){
      document.getElementById(""+id_crypto_api+"_barra").innerHTML = '<i class="fab fa-btc" style="color: #a35b08; font-size: 18px"></i> : '+data[id_crypto_api][3]+' '+pre_simbol+'';
    }

  }


)}






function obtener_indicadores_globales(id_crypto_api, nombre_usar, nombre_id_numero, nombre_id_flecha, pre_simbol, su_simbol, index_pasado, index_actual, index_presente){ 
    bolsas_llamado = "" //Se declara la variable a retornar
    var llamadoajax = $.ajax({url: "add/mercado.php", dataType:"json"})



  .done(function(data){

      if(parseFloat(data[id_crypto_api][index_presente][index_actual])>parseFloat(data[id_crypto_api][index_pasado][index_actual])){
    
      if(document.getElementById(nombre_id_numero) && document.getElementById(nombre_id_flecha)){



        
        document.getElementById(nombre_id_numero).innerHTML = '<b style="color: #1fabf2; font-size: 0.9em" >'+nombre_usar+'</b><br/> <b>'+pre_simbol+data[id_crypto_api][index_actual]+su_simbol+'</b>';
    
        document.getElementById(nombre_id_flecha).innerHTML ='<b style="color: green"><i class="fas fa-long-arrow-alt-up" style="font-size:20px"></i></b>';
      }


  }else if(parseFloat(data[id_crypto_api][index_presente][index_actual])<parseFloat(data[id_crypto_api][index_pasado][index_actual])){

      if(document.getElementById(nombre_id_numero) && document.getElementById(nombre_id_flecha)){




        document.getElementById(nombre_id_numero).innerHTML = '<b style="color: #1fabf2; font-size: 0.9em" >'+nombre_usar+'</b><br/> <b>'+pre_simbol+data[id_crypto_api][index_actual]+su_simbol+'</b>';
    
        document.getElementById(nombre_id_flecha).innerHTML ='<b style="color: red"><i class="fas fa-long-arrow-alt-down" style="font-size:20px"></i></b>';
      }


  }else{

      if(document.getElementById(nombre_id_numero) && document.getElementById(nombre_id_flecha)){
       
        document.getElementById(nombre_id_numero).innerHTML = '<b style="color: #1fabf2; font-size: 0.9em" >'+nombre_usar+'</b><br/> <b>'+pre_simbol+data[id_crypto_api][index_actual]+su_simbol+'</b>';
        
    
        document.getElementById(nombre_id_flecha).innerHTML ='-';
      }
  }


  }


)}


function cambiar_indicadores_cryptos(){

  new Promise(function(){
  obtener_indicadores_globales("CMC_GLOBAL", "Criptomonedas", "Criptomonedas_indicador", "Criptomonedas_indicador_flecha", "","", 6, 4, 7);
  obtener_indicadores_globales("CMC_GLOBAL", "Exchanges", "exchanges_indicador", "exchanges_indicador_flecha", "","", 6, 5, 7);
  obtener_indicadores_globales("CMC_GLOBAL", "Market Cap", "marketcap_indicador", "marketcap_indicador_flecha", "$","", 6, 0, 7);
  obtener_indicadores_globales("CMC_GLOBAL", "24h Volume", "volume_24h_indicador", "volume_24h_indicador_flecha", "$","", 6, 1, 7);
  obtener_indicadores_globales("CMC_GLOBAL", "24h Volume", "volume_24h_indicador", "volume_24h_indicador_flecha", "$","", 6, 1, 7);


  obtener_informacion_de_criptos("BITCOIN", "Bitcoin", "bitcoin_indicador", "bitcoin_indicador_flecha", "$","", "Dominancia BTC");
  obtener_informacion_de_criptos("ETHEREUM", "Ethereum", "ethereum_indicador", "ethereum_indicador_flecha", "$","", "Dominancia ETH");
  obtener_informacion_de_criptos("EOS", "EOS", "EOS_indicador", "EOS_indicador_flecha", "$","", "Dominancia EOS");
  obtener_informacion_de_criptos("TRON", "TRON", "TRON_indicador", "TRON_indicador_flecha", "$","", "Dominancia TRON");
  obtener_informacion_de_criptos("NEO", "NEO", "NEO_indicador", "NEO_indicador_flecha", "$","", "Dominancia NEO");
  obtener_informacion_de_criptos("LITECOIN", "Litecoin", "Litecoin_indicador", "Litecoin_indicador_flecha", "$","", "Dominancia LTC");

actualizar_barra("BITCOIN", "Bitcoin", "bitcoin_indicador", "bitcoin_indicador_flecha", "$","", "Dominancia BTC");
actualizar_barra("BITCOINEUR", "Bitcoin", "bitcoin_indicador", "bitcoin_indicador_flecha", "€","", "Dominancia BTC");
actualizar_barra("BITCOINJPY", "Bitcoin", "bitcoin_indicador", "bitcoin_indicador_flecha", "¥","", "Dominancia BTC");
actualizar_barra("BITCOINCNY", "Bitcoin", "bitcoin_indicador", "bitcoin_indicador_flecha", "Ұ","", "Dominancia BTC");
actualizar_barra("BITCOINGBP", "Bitcoin", "bitcoin_indicador", "bitcoin_indicador_flecha", "£","", "Dominancia BTC");
actualizar_barra("BITCOINMXN", "Bitcoin", "bitcoin_indicador", "bitcoin_indicador_flecha", "Mex$","", "Dominancia BTC");
actualizar_barra("BITCOINBRL", "Bitcoin", "bitcoin_indicador", "bitcoin_indicador_flecha", "R$","", "Dominancia BTC");
actualizar_barra("BITCOINKRW", "Bitcoin", "bitcoin_indicador", "bitcoin_indicador_flecha", "₩","", "Dominancia BTC");
actualizar_barra("BITCOINTRY", "Bitcoin", "bitcoin_indicador", "bitcoin_indicador_flecha", "₺","", "Dominancia BTC");
actualizar_barra("BITCOINRUB", "Bitcoin", "bitcoin_indicador", "bitcoin_indicador_flecha", "₽","", "Dominancia BTC");


})

  setTimeout("cambiar_indicadores_cryptos()",5000) 
}