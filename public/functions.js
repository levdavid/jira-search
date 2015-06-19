$(document).ready(function(){
	
	function handle(){
		var request = $('input').val();
			$.ajax({
				method: 'POST',
				url: '/search',
        accepts: 'text/html',
				data: {
          value: request
        },
        success: function (data) {
          $('.ticket-table').show().html(data);
        }
			});
    }


	$('button').on('click', handle);

	$('input').keypress(function(e) {
    	if(e.which == 13) {
    		handle();
    }
});

	}
);