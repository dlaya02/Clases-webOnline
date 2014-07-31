
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

function agregarPost()
{
	var titulo = $titulo.val(),
		url = $url.val(),
		clon = $primerItem.clone();

	clon.find('.titulo_item a')
		.text(titulo)
		.attr('href',url);

	clon.hide();debugger;
	$lista.prepend(clon);
	clon.slideDown();

}

$('#publicar_nav').click(mostrarOcultarformulario);
$('#formulario').on('submit',agregarPost);