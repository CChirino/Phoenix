function transform_offset(offset_i){
		 	offsethour = parseInt(Math.abs(offset_i/60));
	 		offset_min = Math.abs(offset_i%60);

	 		if(offset_i<0){
	 			symbol = '-';
	 			offset_i = offset_i * -1;
	 		}else{symbol = '+'}

	 		if(offsethour < 10){
	 			offsethour = '0' + offsethour;
	 		}
	 		if(offset_min < 10){
	 			offset_min = '0' + offset_min;
	 		}

	 		estrinb = symbol+offsethour+':'+offset_min;
	 		return estrinb
}



function i_bolsas_info(id_globe, i_timezone, stock_api){ 



	 var llamadoajax = $.ajax({url: "add/bolsas-api.php", dataType:"json"}) //Ruta del archivo que calcula el tipo de horario de las bolsas, y extrae info de la BD  
	 .done(function(data){
	 		let start_time = null;
	 		let end_time = null;
	 		let hora_actual = null;
	 		let start_time_str = data[stock_api]["start_time"];
	 		let end_time_str = data[stock_api]["end_time"];
	 		var re_start = data[stock_api]["re_start"];
	 		var re_end = data[stock_api]["re_end"];
	 		let fecha_actual = moment().tz(i_timezone)

	 		var dia_del_pais = fecha_actual.get('date');
	 		if(dia_del_pais<10){
	 			dia_del_pais = '0'+dia_del_pais
	 		}

	 		var mes_del_pais = fecha_actual.get('month')+1;
	 		if(mes_del_pais<10){
	 			mes_del_pais = '0'+mes_del_pais
	 		}

	 		var ano_del_pais = fecha_actual.get('year');


	 		


	 		hora_actual = moment().tz(i_timezone);
	 		var offset = hora_actual.utcOffset();

	 		estrinc = transform_offset(offset);

	 		var dia_actual = fecha_actual.day();
	 		
	 		end_time =moment(""+ano_del_pais+"-"+mes_del_pais+"-"+dia_del_pais+"T"+end_time_str+".000"+estrinc);
	 		
	 		start_time = moment(""+ano_del_pais+"-"+mes_del_pais+"-"+dia_del_pais+"T"+start_time_str+".000"+estrinc);

	 		re_start_time =moment(""+ano_del_pais+"-"+mes_del_pais+"-"+dia_del_pais+"T"+re_start+".000"+estrinc);

	 		re_end_time =moment(""+ano_del_pais+"-"+mes_del_pais+"-"+dia_del_pais+"T"+re_end+".000"+estrinc);

	 		var dia_siguiente_del_pais = dia_del_pais + 1;



	 		var fecha_actual_events = ""+ano_del_pais+"-"+mes_del_pais+"-"+dia_del_pais+"";
			var fecha_vencimiento = ""+ano_del_pais+"-"+mes_del_pais+"-"+dia_siguiente_del_pais+"";




	 		if(hora_actual.isBetween(re_start_time, re_end_time) && dia_actual!=0 && dia_actual!=6){
	 			if(document.getElementById(id_globe)){
	 					document.getElementById(id_globe).innerHTML ='<i class="fas fa-globe" style="color: gray; font-size: 20px"></i>';
	 					
	 			}
	 			if(document.getElementById(""+stock_api+"_MARKER")){
	 					document.getElementById(""+stock_api+"_MARKER").className = "descanso";
	 			}
	 		}
	 		else if(hora_actual.isBetween(start_time, end_time) && dia_actual!=0 && dia_actual!=6){
	 			if(document.getElementById(id_globe)){
	 					document.getElementById(id_globe).innerHTML ='<i class="fas fa-globe" style="color: green; font-size: 20px"></i>';
	 					
	 			}
	 			if(document.getElementById(""+stock_api+"_MARKER")){
	 					document.getElementById(""+stock_api+"_MARKER").className = "abierta";
	 			}
	 		}
	 		else{
	 			document.getElementById(id_globe).innerHTML ='<i class="fas fa-globe" style="color: red; font-size: 20px"></i>';

	 			if(document.getElementById(""+stock_api+"_MARKER")){
	 					document.getElementById(""+stock_api+"_MARKER").className = "cerrada";
	 			}
	 			
	 		}

	 })
	}





function  actualizar_status_bolsas(){
	i_bolsas_info("status_bolsa_nyse", "America/New_York", 'NYSE');
	i_bolsas_info("status_bolsa_b3", "America/Sao_Paulo", 'B3');
	i_bolsas_info("status_bolsa_lse", "Europe/London", 'LSE');
	i_bolsas_info("status_bolsa_bme", "Europe/Madrid", 'BME');
	i_bolsas_info("status_bolsa_fse", "Europe/Berlin", 'FSE');
	i_bolsas_info("status_bolsa_tse", "Asia/Tokyo", 'TSE');
	i_bolsas_info("status_bolsa_hkse", "Asia/Hong_Kong", 'HKSE');
	i_bolsas_info("status_bolsa_sse", "Asia/Shanghai", 'SSE');
	i_bolsas_info("status_bolsa_asx", "Australia/Sydney", 'ASX');
	i_bolsas_info("status_bolsa_moex", "Europe/Moscow", 'MOEX');
	setTimeout("actualizar_status_bolsas()",1000);

}