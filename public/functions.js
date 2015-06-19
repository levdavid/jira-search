$(document).ready(function(){
	$('button').on('click', function(){
		var request = $('input').val();
			$.ajax({
				method: 'POST',
				url: '/search',
        dataType: 'json',
				data: {
          value: request
        },

        success: function (data) {
          console.log(data);
        }
			});
		});
	}
);