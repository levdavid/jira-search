$(document).ready(function(){
	$('button').on('click', function(){
		var request = $('input').val();
			$.ajax({
				method: 'POST',
				url: '/search',
				data: request
			});
		});
	}
);