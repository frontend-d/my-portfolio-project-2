$(function() {
	$('#carousel').carouFredSel({
		width: 1140,
		items: 6,
		scroll: 1,
		auto: {
			duration: 1250,
			timeoutDuration: 2500
		},
		prev: '#prev',
		next: '#next',
		pagination: '#pager'
	});	
});