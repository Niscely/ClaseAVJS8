//Al hacer click en el boton "SUBMIT" se mostraran los datos ingresados en el formulario en un alert()
$(document).ready(() => {

//Al pasar el mouse por el titulo del formulario, el formulario se oculta y al quitarlo se muestra
	$(function() {
		$('h1').mouseenter(function(){
			$('#formulario').slideUp();
		});
	
		$('h1').mouseleave(function(){
			$('#formulario').slideDown();
		});
	})

	//Al hacer click dentro del cuadro de datos el mensaje que esta abajo desaparecera
   //Al dar doble click se reestablecen las indicaciones de la parte inferior
    $('#nombre').click(function(){ 
        $('#nombreerror').hide();
    });
    $('#apellido').click(function(){ 
        $('#apellidoerror').hide();
    });
    $('#email').click(function(){ 
        $('#emailerror').hide();
    });
    $('#nomerot').click(function(){
        $('#numeroerror').hide();
    });
    $('#exampleFormControlTextarea1').click(function(){ 
        $('#mensajeerror').hide();
    });
    $('.form-control').dblclick(function(){ 
        $('.error').show();
    });
	$('.form-control').click(function(){ 
        $('#generoerror').hide();
    });

//Al hacer click en el boton "SUBMIT" se mostraran los datos ingresados en el formulario en un alert()
  $('#boton').click(function(){
	let nombres = $('#nombre').val();
	let apellidos = $('#apellido').val();
	let email = $('#email').val();
	let numero = $('#nomerot').val();
	let mensaje = $('#exampleFormControlTextarea1').val();
	let genero = $('#genero').val();
	let fecha = $('#start').val();
	
	alert( `DATOS ENVIADOS:
	    Nombre: ${nombres} 
	    Apellido: ${apellidos} 
	    Email: ${email} 
	    Numero: ${numero} 
	    Mensaje: ${mensaje}
	    Genero: ${genero} 
	    Fecha de nacimiento: ${fecha}`
	);
  });
});






