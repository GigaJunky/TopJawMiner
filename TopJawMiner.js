var tjTotal = 0


function TopJawClick()
{
    tjTotal = tjTotal +1
    document.getElementById('tjTotal').innerText = tjTotal
}

function tjImgClick_onMouseDown(){
    console.log('down')
    document.getElementById('tjImgClick').src = 'TopJawMinerSpriteDn.png'
}

function tjImgClick_onMouseUp(){
    console.log('up')
    document.getElementById('tjImgClick').src = 'TopJawMinerSprite.png'
}