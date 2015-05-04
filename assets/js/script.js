// Pour convertir les farenheit vers des degrés
function convertFarenheit( temp ){
	return Math.floor( ( temp - 32 ) / 1.8 );
}

// Pour convertir le code jour anglais en texte français
function convertDay( day ){
	var days = {
		'Sun': 'Dimanche',
		'Mon': 'Lundi',
		'Tue': 'Mardi',
		'Wed': 'Mercredi',
		'Thu': 'Jeudi',
		'Fri': 'Vendredi',
		'Sat': 'Samedi'
	};
	return days[day]
}

// On récupère les infos globales pour les afficher
function getValues() {
	$('.results span').each( function() {
		$(this).html( window[ $(this).attr('id') ] )
	})
}

$(function(){
	// On stocke dans le navigateur la dernière ville définie par l'utilisateur
	$('.ville').bind('input propertychange', function() {
		var ville = $(this).val() !='' ? $(this).val() : 'Berlin';
		localStorage.setItem("ville", ville );
	});
	// On stocke dans le navigateur le texte défini par l'utilisateur
	$('.custom').bind('input propertychange', function() {
		var custom = $(this).val() !='' ? $(this).val() : 'abcdefghijklmnopqrstuvwxyz\nABCDEFGHIJKLMNOPQRSTUVWXYZ\n0123456789';
		localStorage.setItem("custom", custom );
	});
});

$(window).load( function(){
	getValues();
	// On récupère la dernière ville utilisée
	$('.ville').val( localStorage.getItem("ville") );
	// On récupère le texte de l'utilisateur
	$('.custom').val( localStorage.getItem("custom") );
});

$('#download').on('click', function() {
	font.download();
})
