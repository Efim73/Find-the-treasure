let map = document.getElementsByClassName('map')[0]
console.log(map);
let pirate = document.getElementsByClassName('pirate')[0]
let hint = document.getElementsByClassName('hint')[0]
let treasureX = Math.floor(Math.random()*500)
let treasureY = Math.floor(Math.random()*500)
let stepScore=0;
let steps = document.getElementsByClassName('steps')[0]
let treasure = document.getElementsByClassName('treasure')[0]
// treasure.style.left = treasureX + 'px'
// treasure.style.top = treasureY + 'px'
newGame = document.getElementsByClassName('newGame')[0]

// console.log(treasureX, treasureY);
map.onclick = function (event) {
    // console.log(event.offsetX, event.offsetY);
    // console.log('Я найду сокровище')
    let pirateX = event.offsetX-25;
    let pirateY = event.offsetY-50;
    pirate.style.left = pirateX + 'px'
    pirate.style.top = pirateY + 'px'
    stepScore=stepScore+1
    steps.innerHTML='steps: '+stepScore
    // console.log(hint);
    let X=treasureX - pirateX
    let Y=treasureY - pirateY
    let distance=Math.sqrt(X*X+Y*Y)
    console.log(distance);
    if(distance<20){
        hint.innerHTML='WIN!!!!'
        // treasure.style.left = pirateX + 'px'
        // treasure.style.top = pirateY + 'px'
        treasure.style.opacity=1;
        treasure.style.transform='scale(10) rotate(1080deg)'
        treasure.style.left='250px'
        treasure.style.top='250px'
        map.style.pointerEvents='none'
    }
    else if(distance<35){
        hint.innerHTML='Boiling hot!'
    }
    else if(distance<50){
        hint.innerHTML='Really hot!'
    }
    else if(distance<100){
        hint.innerHTML='Hot!'
    }
    else if(distance<150){
        hint.innerHTML='Warm!'
    }
    else if(distance<200){
        hint.innerHTML='Cold!'
    }
    else if(distance<250){
        hint.innerHTML='Really cold!'
    }
    else{
        hint.innerHTML='Freezing'
    }

}   
newGame.onclick = function(event){
    event.preventDefault()
    treasure.style.opacity=0;
    treasure.style.transform=' scale(1) rotate(0deg)'
    // pirate.style.marginTop='10px'
    hint.innerHTML='Good luck'
    // staps=staps-staps;
    stepScore=0
    steps.innerHTML='Click on the map'
    treasureX = Math.floor(Math.random()*500)
    treasureY = Math.floor(Math.random()*500)
    pirate.style.top='0px';
    pirate.style.left='65px';
    map.style.pointerEvents='auto'

    


    
}


