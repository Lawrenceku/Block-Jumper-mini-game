var block = document.getElementById("block")
var character = document.getElementById("character")
var replay = document.getElementById("but")
var aud = document.getElementById("is")
var music=document.getElementById("music")
const game_over = document.querySelector('.game_over')
const score_count= document.querySelector('.score_count')
document.addEventListener('keypress', checkSpaceBarKeyPress);
var score=0
var jumping=false
var playable=true
music.volume=0// 0.7
function checkSpaceBarKeyPress(event) {
  if (event.keyCode === 32 && playable==true) {
    up()
  }
} 
/* var x = "#"+Math.ceil(Math.random()*999) */

/////////////OBSTACLES/////////////////////coming soon...

/////////////OBSTACLES/////////////////////
function up(){
aud.volume=1
if(character.classList !="animation" && jumping===false && playable===true){
  jumping=true
  character.classList.add("animation")
  aud.play()
  }
  else if(jumping==true ){
    return
  }
  setTimeout(()=>{
    jumping=false
    character.classList.remove("animation")
  },800)
}

///scoreCount///
setInterval(()=>{
  if (playable==true){
  score++
  score_count.innerText= 'SCORE: '+score
  }
  else{
    score=score
  }
  },1000)
//scoreCount//

///////////COLLISION//////////////
var checkdead = setInterval(()=>{
var top = parseInt( window.getComputedStyle(character).getPropertyValue("top") );
var blockleft = parseInt( window.getComputedStyle(block).getPropertyValue("left") );
if(blockleft>=-130 && blockleft<=-25  && top>=20){
playable=false
music.volume=0
score_count.style.display='none'
game_over.style.display='flex'
document.getElementById('h_score').innerText='SCORE: '+score
character.classList.add("die_animation")
setTimeout(()=>{
character.style.display='none'
},1000)
}
else{
  console.log(top,blockleft)
}
},0.1)

///////////COLLISION//////////////
function restart(){
  setTimeout(location.reload(),1000)
}