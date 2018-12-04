

function actualizar_microchart(mercado, pair, el_chart){
	var llamadoajax = $.ajax({url: "add/microcharts-api.php", data: {MERCADO:mercado, PAIR: pair}, method: "post", dataType: 'json'})
	    .done(function(data){

	    	el_chart.dataProvider= data;

  			el_chart.validateData();    	
	    	
	})	    	
}



var forex_usdeur = AmCharts.makeChart( "usdeur_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );

var forex_eurusd = AmCharts.makeChart( "eurusd_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );

var forex_usdcny = AmCharts.makeChart( "usdcny_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );

var forex_cnyusd = AmCharts.makeChart( "cnyusd_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );


var forex_usdjpy = AmCharts.makeChart( "usdjpy_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );

var forex_jpyusd = AmCharts.makeChart( "jpyusd_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );








var stock_sp500 = AmCharts.makeChart( "sp500_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );


var stock_dow30 = AmCharts.makeChart( "dow30_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );

var stock_nasdaq = AmCharts.makeChart( "nasdaq_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );

var stock_russell2000 = AmCharts.makeChart( "russell2000_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );


var stock_ftse100 = AmCharts.makeChart( "ftse100_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );


var stock_nikkei225 = AmCharts.makeChart( "nikkei225_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );











var commodity_poil = AmCharts.makeChart( "poil_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );


var commodity_boil = AmCharts.makeChart( "boil_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );

var commodity_woil = AmCharts.makeChart( "woil_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );

var commodity_gold = AmCharts.makeChart( "gold_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );


var commodity_silver = AmCharts.makeChart( "silver_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );


var commodity_aluminum = AmCharts.makeChart( "aluminum_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );



var cmc_btc = AmCharts.makeChart( "btc_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );
var cmc_eth = AmCharts.makeChart( "eth_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );
var cmc_eos = AmCharts.makeChart( "eos_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );
var cmc_tron = AmCharts.makeChart( "tron_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );
var cmc_neo = AmCharts.makeChart( "neo_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );
var cmc_ltc = AmCharts.makeChart( "ltc_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );
var cmc_dominancebtc = AmCharts.makeChart( "dominancebtc_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );
var cmc_dominanceeth = AmCharts.makeChart( "dominanceeth_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );



var global_cryptocurrencies = AmCharts.makeChart( "cryptocurrencies_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );
var global_exchanges = AmCharts.makeChart( "exchanges_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );
var global_marketcap = AmCharts.makeChart( "marketcap_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );
var global_volume_24h = AmCharts.makeChart( "volume24h_microchart", {
  "type": "serial",
  "dataProvider": [],
  "categoryField": "hour",
  "autoMargins": false,
  "marginLeft": 0,
  "marginRight": 5,
  "marginTop": 0,
  "marginBottom": 0,
  "graphs": [ {
    "fillAlphas": 0.2,
    "valueField": "value",
    "showBalloon": false,
    "lineColor": "#07840a",
    "negativeLineColor": "#bc0505"
  } ],
  "valueAxes": [ {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "guides": [ {
      "value": 0,
      "lineAlpha": 0.1
    } ]
  } ],
  "categoryAxis": {
    "gridAlpha": 0,
    "axisAlpha": 0,
    "startOnAxis": true
  }
} );



function actualizar_microcharts_function(){
actualizar_microchart('FOREX', 'USD-JPY', forex_usdjpy);
actualizar_microchart('FOREX', 'JPY-USD', forex_jpyusd);
actualizar_microchart('FOREX', 'CNY-USD', forex_cnyusd);
actualizar_microchart('FOREX', 'USD-CNY', forex_usdcny);
actualizar_microchart('FOREX', 'EUR-USD', forex_eurusd);
actualizar_microchart('FOREX', 'USD-EUR', forex_usdeur);

actualizar_microchart('STOCK', 'SP500', stock_sp500);
actualizar_microchart('STOCK', 'DOW30', stock_dow30);
actualizar_microchart('STOCK', 'NASDAQ', stock_nasdaq);
actualizar_microchart('STOCK', 'RUSSELL2000', stock_russell2000);
actualizar_microchart('STOCK', 'FTSE100', stock_ftse100);
actualizar_microchart('STOCK', 'NIKKEI225', stock_nikkei225);


actualizar_microchart('COMMODITY', 'POIL', commodity_poil);
actualizar_microchart('COMMODITY', 'BRENT', commodity_boil);
actualizar_microchart('COMMODITY', 'WTI', commodity_woil);
actualizar_microchart('COMMODITY', 'GOLD', commodity_gold);
actualizar_microchart('COMMODITY', 'SILVER', commodity_silver);
actualizar_microchart('COMMODITY', 'ALUMINUM', commodity_aluminum);


actualizar_microchart('CRYPTOCURRENCY', 'BTC', cmc_btc);
actualizar_microchart('CRYPTOCURRENCY', 'ETH', cmc_eth);
actualizar_microchart('CRYPTOCURRENCY', 'EOS', cmc_eos);
actualizar_microchart('CRYPTOCURRENCY', 'TRON', cmc_tron);
actualizar_microchart('CRYPTOCURRENCY', 'NEO', cmc_neo);
actualizar_microchart('CRYPTOCURRENCY', 'LTC', cmc_ltc);
actualizar_microchart('CRYPTOCURRENCY', 'DOMINANCEBTC', cmc_dominancebtc);
actualizar_microchart('CRYPTOCURRENCY', 'DOMINANCEETH', cmc_dominanceeth);


actualizar_microchart('GLOBAL', 'TOTAL_MARKET_CAP', global_marketcap);
actualizar_microchart('GLOBAL', 'VOL_24H', global_volume_24h);
actualizar_microchart('GLOBAL', 'CRYPTOCURRENCIES', global_cryptocurrencies);
actualizar_microchart('GLOBAL', 'EXCHANGES', global_exchanges);

setTimeout("actualizar_microcharts_function()",350000)
}



