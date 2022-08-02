!function(){var e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)})),o.on("timeupdate",onTime)}();
//# sourceMappingURL=02-video.a09ac892.js.map
