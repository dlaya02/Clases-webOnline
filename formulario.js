
var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#link'),
	$primerItem = $('.item').first(),
	$lista = $('#contenido');
var	ss= sessionStorage,
	ls= localStorage;

var $save = 1;

if($save)
{
	if(($titulo.val()!="")||($url.val()!=""))
	{
	$url.val(ss.getItem('url'));
	$titulo.val(ss.getItem('titulo'));
	$save =1;
	}
}

var id = setInterval(function()
	{
		ss.setItem('titulo',$titulo.val());
		ss.setItem('url',$url.val());
	},1000);


function mostrarOcultarformulario()
{
		$form.slideToggle();
		$lista.slideToggle();
		//return false;
}



function agregarPost(e)
{
	e.preventDefault(); //cancela la accion predeterminada

	var titulo = $titulo.val(),
		url = $url.val(),
		$clon = $primerItem.clone();

	$clon.find('.titulo_item a')
		.text(titulo)
		.attr('href',url);
	$clon.hide();

	$lista.prepend($clon);
	mostrarOcultarformulario();
	//$clon.slideDown();
	//estos slidDown y fadeIn son solo efecto para insertar un elemento
	$clon.fadeIn();
	//return false; no se debe usar retrun false porque evita la propagacion del DOM

	$titulo.val("");
	$url.val("");
	$save=0;

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