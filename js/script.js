// $( document ).ready(function(){
// 	var randomPlaylist = shuffle(playlist);
// 	console.log(randomPlaylist[0][0])


//  // $('#video').attr('src',randomPlaylist[0][0]);  

//  function onPlayerStateChange(event) {
//  	console.log(event);
//  } 
//  function youTubeClipCallback(event) {
//  	console.log(event);
//  }
// // <iframe width="640" height="360" src="'+randomPlaylist[0][0]+'" frameborder="0" allowfullscreen></iframe>
// $('#container').html('<iframe id="ik_player_iframe" frameborder="0" height="315" src="http://www.youtube.com/embed/5EnL2WXsxNQ?enablejsapi=1" width="560"></iframe>')

//  // var iframe = "<iframe id='video' frameborder='0' src='"+ randomPlaylist[0][0] +"'allowfullscreen></iframe>";
//  // $('#container').html(iframe)

// // $(function(){
// //   $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });

// //   $(window).resize(function(){
// //     $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
// //   });

// //Holds a reference to the YouTube player
// var ik_player;

// //this function is called by the API
// function onYouTubeIframeAPIReady() {
//   //creates the player object
//   ik_player = new YT.Player('ik_player_iframe');
       
//   console.log('Video API is loaded');
       
//   //subscribe to events
//   ik_player.addEventListener("onReady",       "onYouTubePlayerReady");
//   ik_player.addEventListener("onStateChange", "onYouTubePlayerStateChange");
// }

// function onYouTubePlayerReady() {
//   console.log('Video is ready to play');
// }

// function onYouTubePlayerStateChange(event) {
//   console.log('Video state changed');
// }

// });