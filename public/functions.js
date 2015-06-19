$(document).ready(function(){
	$('button').on('click', function(){
		var request = $('input').val();
			$.ajax({
				method: 'POST',
				url: '/search',
        accepts: 'text/html',
				data: {
          value: request
        },
        success: function (data) {
          console.log(data);
          $('.items').html(data);
        }
			});
    });



	}
);