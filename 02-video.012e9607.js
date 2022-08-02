const e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)})),o.on("timeupdate",onTime);
//# sourceMappingURL=02-video.012e9607.js.map
