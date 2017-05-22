var tjTotal = 0, tjHelper = 0


function TopJawClick()
{
    tjTotal = Math.round(tjTotal+1 + (tjHelper * 0.20))
    document.getElementById('tjTotal').innerText = tjTotal
}

function TopJawHelperClick()
{
    tjHelper++
    if(tjTotal >= 10){
        tjTotal -= 10
    cloneImage()
    document.getElementById('tjHelperTotal').innerText = tjHelper
    }
}


function tjImgClick_onMouseDown(){
    console.log('down')
    document.getElementById('tjImgClick').src = 'TopJawMinerSpriteDn.png'
}

function tjImgClick_onMouseUp(){
    console.log('up')
    document.getElementById('tjImgClick').src = 'TopJawMinerSpriteUp.png'
}

function cloneImage () {
    imageA = new Image();
    imageA.src = 'tjHelpers.gif'
    document.getElementById("helpers").appendChild(imageA);
}


function Loop() {
setInterval(function() {
    TopJawClick()
    console.log('loop')
},500);
}
