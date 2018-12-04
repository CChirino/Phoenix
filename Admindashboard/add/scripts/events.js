
function open_close_stocks_event(bolsa='TEST', min=5, min_descanso=1, fecha='TEST'){
let eventos = [];
eventos.BolsaEvent = bolsa;
eventos.MensajeOpenTime = "La bolsa "+bolsa+" abrirá en "+min+" minutos";
eventos.MensajeOpened = "Acaba de abrir la bolsa "+bolsa+"";
eventos.MensajeCloseTime = "La bolsa "+bolsa+" cerrará en "+min+" minutos";
eventos.MensajeClosed = "Acaba de cerrar la bolsa "+bolsa+"";
eventos.MensajeDescansoTime = "La bolsa "+bolsa+" entrará en descanso en "+min+" minutos";
eventos.MensajeDescansando = "La bolsa "+bolsa+" ha entrado en un descanso, el mismo finaliza en "+min_descanso+" minutos";
eventos.MensajeFinDescansoTime = "La bolsa "+bolsa+" finalizará su descanso en "+min+" minutos";
eventos.MensajeFinDescanso = "La bolsa "+bolsa+" ha finalizado su descanso y se encuentra operando en este momento";
eventos.Fecha = fecha;
eventos.Event = 1;
return eventos;
}

function send_event(bolsa, min, min_descanso, fecha, id_evento, fecha_vencimiento, vencido_i){

var i_datos = open_close_stocks_event(bolsa, min, min_descanso, fecha);
jQuery.ajax({
    type: "POST",
    url: 'add/events.php',
    dataType: 'json',
    data: {mensaje_evento: i_datos.MensajeOpenTime, id_evento: i_datos.Event, bolsa_event: i_datos.BolsaEvent, fecha_evento: i_datos.Fecha, fecha_vencimiento: fecha_vencimiento, vencido: vencido_i},})

    .done(function (obj, textstatus) {
    	fecha_str_evento = obj.EVENTOS[bolsa][id_evento][fecha_vencimiento]

    				if(obj.EVENTOS[bolsa][id_evento]){
                		/*console.log(obj.EVENTOS[bolsa][id_evento]);*/
                	}
            	

                  
            });

}






