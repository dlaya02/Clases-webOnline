
var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#link'),
	$primerItem = $('.item').first(),
	$lista = $('#contenido');

function mostrarOcultarformulario()
{
		$form.slideToggle();


		return false;
}

function agregarPost(){

	var url 	= $url.val();
	var titulo 	= $titulo.val();
	var $clone 	= $primerItem.clone();

	$clone.find('.titulo_item a')
			.text(titulo)
			.attr('href', url);

	$clone.hide();

	$lista.prepend($clone);

	$clone.fadeIn();

	return false;
}

$('#publicar_nav').click(mostrarOcultarformulario);
$('#formulario').on('submit',agregarPost);