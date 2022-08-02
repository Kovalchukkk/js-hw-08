const e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)})),o.on("timeupdate",(function(e){const o=JSON.stringify(e);localStorage.setItem("videoplayer-current-time",o)}));
//# sourceMappingURL=02-video.f7de0a81.js.map
