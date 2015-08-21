	var randomPlaylist = shuffle(playlist);
	console.log(randomPlaylist[0][0])



       // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
            console.log(document.getElementsByTagName('script')[0])

      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {

    player = new YT.Player('player', {
    height: '100',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    controls: 0,
    events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
    },
    playerVars: {
    start: 50,
    end: 60,
    controls: 0,
    showinfo: 0

    }
    });
      }




      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          // setTimeout(stopVideo, 6000);
          done = true;
        }
        if (event.data == 0) {
          console.log("next video")
          // player.seekTo({seconds:120, allowSeekAhead:false})
          // player.loadVideoById({ videoId: '7Roa3aKnFoE', startSeconds: "5", endSeconds: "10" });
          player.loadVideoById(randomPlaylist[0][0]);

        }
      }
      function stopVideo() {
        player.stopVideo();
      }


