const audio_ = [
    "./forest.mp3",
    "./rick.mp3",
    "./love.mp3",
    "./bird.mp3",
    "./vibez.mp3",
    "./butterfly.mp3",
    "./soviet.mp3"
   ];

   const audio = audio_[Math.floor(Math.random() * audio_.length)];


   if(audio === "./forest.mp3") var audio__ = "forest sound"
   if(audio === "./rick.mp3") var audio__ = "never gonna give you up"
   if(audio === "./love.mp3") var audio__ = "umit besen - i love you"
   if(audio === "./bird.mp3") var audio__ = "bird sounds"
   if(audio === "./vibez.mp3") var audio__ = "dababy - vibes"
   if(audio === "./butterfly.mp3") var audio__ = "smile - butterfly"
   if(audio === "./soviet.mp3") var audio__ = "soviet march earpe"

   document.getElementById("playingmusic").innerHTML = `playing audio...`

   document.getElementById("openjavascript").style.display = "none"

   var play = new Audio(audio);
   play.play().then(() => {
    document.getElementById("nowplaying").innerHTML = `now playing ${audio__}`
   }).catch(() => {
    document.getElementById("nowplaying").innerHTML = `site settings > sound > allow to play music.`
   })
