$('.login-input').on('focus', function() {
  $('.login').addClass('focused');
});

$('.login').on('submit', function(e) {
  e.preventDefault();
  $('.login').removeClass('focused').addClass('loading');
  	var delayMillis = 1000; //1 second
	setTimeout(function() {
	  //your code to be executed after 1 second
	}, delayMillis);
	window.open("home.html")
});