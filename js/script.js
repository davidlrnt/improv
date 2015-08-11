$( document ).ready(function(){
	var randomPlaylist = shuffle(playlist);
	console.log(randomPlaylist[0][0])


 $('#video').attr('src',randomPlaylist[0][0]);   

// $(function(){
//   $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

//   $(window).resize(function(){
//     $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
//   });

});