$("select").change(function(){
	var seleccion = $(this).val();
	$('.peli').show();
	if (seleccion !== 'todos') {
		$('.peli').not('.' + seleccion).hide();
	}
});
