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

// On stocke dans le navigateur la dernière ville définie par l'utilisateur
$('.ville').bind('input propertychange', function() {
	localStorage.setItem("ville", $(this).val() || 'berlin')
});

// On stocke dans le navigateur le texte défini par l'utilisateur
$('.custom').bind('input propertychange', function() {
	localStorage.setItem("custom", $(this).html() || 'abcdefghijklmnopqrstuvwxyz<br/>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>0123456789')
});

$(window).load( function(){
	getValues();
	// On récupère la dernière ville utilisée
	$('.ville').val( localStorage.getItem("ville") );
	// On récupère le texte de l'utilisateur
	$('.custom').html( localStorage.getItem("custom") );
})
