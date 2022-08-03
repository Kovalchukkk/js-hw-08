const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("play",(function(){console.log("played the video!")})),t.getVideoTitle().then((function(e){console.log("title:",e)}));localStorage.getItem("videoplayer-current-time");t.on("timeupdate",(function(e){const t=JSON.stringify(e);localStorage.setItem("videoplayer-current-time",t)}));
//# sourceMappingURL=02-video.c2a0cfb5.js.map
