var base_url = "http://query.yahooapis.com/v1/public/yql?";

function obtenerGeoInformacion(lat, lon) {
	
	var query = "SELECT * FROM geo.placefinder WHERE text='"+lat+", "+lon+"'";
	query += " AND gflags='R'";
	query = encodeURIComponent(query);

	var opciones = {
		url: base_url + "q=" + query,
		dataType: 'jsonp',
		jsonpCallback: 'geocallback',
		data: {
			format : 'json'
		}
	}

	$.ajax(opciones);
}

function geocallback(datos) {
	var info  = datos.query.results.Result;
	var pais   = info.country;
	var ciudad = info.city;
	var barrio = info.neighborhood;
	var woeid  = info.woeid;

	var temp = "<p><strong>"+barrio +"</strong><br>"+ciudad+pais+"</p>" ;
	$('#geo').prepend(temp);

	optenerclima(woeid);

}

function optenerclima(datos)
{
	var query = "select * from weather.forecast where woeid='"+datos+"' AND u='c'";
	
	query = encodeURIComponent(query);

	var opciones = {
		url: base_url + "q=" + query,
		dataType: 'jsonp',
		jsonpCallback: 'climacallback',
		data: {
			format : 'json'
		}
	}

	$.ajax(opciones);
	
}

function climacallback(datos)
{
	var clima = datos.query.results.channel;

	var temp  = clima.item.condition.temp;
	var code  = clima.item.condition.code;
	var unit  = clima.units.temperature;
	var img   = new Image();
	img.src   = "http://l.yimg.com/a/i/us/we/52/"+code+".gif";

	$('#clima')
		.html('<strong>'+temp+'</strong> '+unit+'º')
		.prepend(img);
	console.log(datos);
}