function parser_vars(req){

var parametros =[],
arreglo_parametros=[],
valores=[];


		if(req.url.indexOf('?')>0){
			var url_data = req.url.split('?');
			arreglo_parametros = url_data[1].split('&');
		}
		for (var i=0; i<arreglo_parametros.length;i++){
			var parametro = arreglo_parametros[i];
			var param_data=parametro.split('=');
			parametros[i]=param_data[0];
			valores[i]=param_data[1];
		}
		return {
		parametros: parametros,
		valorees: valores;

		}
}
module.exports.parser_vars = parser_vars;

module.exports.batman = {
	identidad:'Bruce Wayne',
	poder:'Dinero'
};