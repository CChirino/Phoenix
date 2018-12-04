function actualizar_reloj(){
 
    new Promise(function(){
      if(document.getElementById("hora_caracas")){
        document.getElementById("hora_caracas").innerHTML = '<b style="font-size: 2em; color: black">' + moment().format('h:mm:ss a') + '</b><br/> <b style="color: red;">LOCAL</b>';
      }
      if(document.getElementById("hora_gmt")){
        document.getElementById("hora_gmt").innerHTML = '<b style="font-size: 2em; color: black">' + moment().tz("Etc/UTC").format('h:mm:ss a') + '</b><br/> <b style="color: red;">UTC/GTM</b>';
      }
      if(document.getElementById("open_LSE")){
        document.getElementById("open_LSE").innerHTML =  '<b>'+moment().tz("Europe/London").format('h:mm:ss a')+'</b>';
      }
      if(document.getElementById("open_NYSE")){
      document.getElementById("open_NYSE").innerHTML =  '<b>'+moment().tz("America/New_York").format('h:mm:ss a')+'</b>';
      }
      if(document.getElementById("open_B3")){
        document.getElementById("open_B3").innerHTML =  '<b>'+moment().tz("America/Sao_Paulo").format('h:mm:ss a')+'</b>';
      }
      if(document.getElementById("open_BME")){
        document.getElementById("open_BME").innerHTML =  '<b>'+moment().tz("Europe/Madrid").format('h:mm:ss a')+'</b>';
      }
      if(document.getElementById("open_FSE")){
        document.getElementById("open_FSE").innerHTML =  '<b>'+moment().tz("Europe/Berlin").format('h:mm:ss a')+'</b>';
      }
      if(document.getElementById("open_TSE")){
        document.getElementById("open_TSE").innerHTML =  '<b>'+moment().tz("Asia/Tokyo").format('h:mm:ss a')+'</b>';
      }
      if(document.getElementById("open_HKSE")){
        document.getElementById("open_HKSE").innerHTML =  '<b>'+moment().tz("Asia/Hong_Kong").format('h:mm:ss a')+'</b>';
      }
      if(document.getElementById("open_SSE")){
        document.getElementById("open_SSE").innerHTML =  '<b>'+moment().tz("Asia/Shanghai").format('h:mm:ss a')+'</b>';
      }
      if(document.getElementById("open_ASX")){
        document.getElementById("open_ASX").innerHTML =  '<b>'+moment().tz("Australia/Sydney").format('h:mm:ss a')+'</b>';
      }
      if(document.getElementById("open_MOEX")){
        document.getElementById("open_MOEX").innerHTML =  '<b>'+moment().tz("Europe/Moscow").format('h:mm:ss a')+'</b>';
      }


    })

    setTimeout("actualizar_reloj()",100)


}