

function actualizar_monedas_preev(){
	var llamadoajax = $.ajax({url: "add/bolsas-api.php", dataType:"json", data: {CRYPTOCURRENCY:'BTC'}, method: "post"})
	.done(function(data){

		document.getElementById('c_res').value ='1897';



	});
}

function crypto_to_currency(){
	if(document.getElementById('cryptocurrency_preev')){
		var cryptocurrency_selected = $("#cryptocurrency_preev option:selected").text();
		var cryptocurrency_selected_val = $("#cryptocurrency_preev option:selected").val();
		var currency_selected = $("#currency_preev option:selected").text();
		var currency_selected = $("#currency_preev option:selected").text();

		var cantidad_cryptocurrency = $("#cantidad_cryptocurrency").val();
		var llamadoajax = $.ajax({url: "add/preev.php", dataType:"json", data: {cryptocurrency: cryptocurrency_selected, currency: currency_selected}, method: "post"})
		.done(function(data){
			document.getElementById('cantidad_currency').value = data*cantidad_cryptocurrency;
		});
}
}

function currency_to_crypto(){
	if(document.getElementById('cryptocurrency_preev')){
		var cryptocurrency_selected = $("#cryptocurrency_preev option:selected").text();
		var cryptocurrency_selected_val = $("#cryptocurrency_preev option:selected").val();
		var currency_selected = $("#currency_preev option:selected").text();
		var currency_selected = $("#currency_preev option:selected").text();

		var cantidad_cryptocurrency = $("#cantidad_cryptocurrency").val();
		var cantidad_currency = $("#cantidad_currency").val();
		var llamadoajax = $.ajax({url: "add/preev.php", dataType:"json", data: {cryptocurrency: cryptocurrency_selected, currency: currency_selected}, method: "post"})
		.done(function(data){
			document.getElementById('cantidad_cryptocurrency').value = cantidad_currency/data;
		});
}
}

function actualizar_currencies(){
	if(document.getElementById('cryptocurrency_preev')){
		var cryptocurrency_selected = $("#cryptocurrency_preev option:selected").text();
		
		var llamadoajax = $.ajax({url: "add/act-selects-preev.php", data: {cryptocurrency: cryptocurrency_selected}, method: "post"})
		.done(function(data){
			document.getElementById('currency_preev').innerHTML = data;
		});
}
}




