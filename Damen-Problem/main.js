let mainCanvas = document.getElementById("mainCanvas");
mainCanvas.width  = window.innerWidth;
mainCanvas.height = window.innerHeight;


let ctx = mainCanvas.getContext("2d");
let ch = mainCanvas.height;
let cw = mainCanvas.width;

let fieldSize = 80;
let border = 1;
let fields = 8;

for(let i = 0; i < fields; i++){
    for(let j = 0; j < fields; j++){
        ctx.fillStyle = "grey";
        ctx.fillRect(j * fieldSize, i * fieldSize, fieldSize - border, fieldSize - border);
    }    
}

function clickHandler(event) {
    let clickX = event.clientX;
    let clickY = event.clientY;
    let row = Math.floor(clickY / fieldSize) + 1;
    let col = Math.floor(clickX / fieldSize) + 1;
    console.log(col, row);

    for(let i = 0; i < fields; i++){
        ctx.fillStyle = "red";
        //row
        ctx.fillRect(i * fieldSize, (row - 1) * fieldSize, fieldSize - border, fieldSize - border);
        //col
        ctx.fillRect((col - 1) * fieldSize, i * fieldSize, fieldSize - border, fieldSize - border);
    }

    //diagonal
    for(let i = 0; i < fields; i++){
        ctx.fillStyle = "red";
        //nach unten rechts
        if((col + i < fields + 1) && (row + i < fields + 1))
        ctx.fillRect((col + i - 1) * fieldSize, (row + i - 1) * fieldSize, fieldSize - border, fieldSize - border);
        
        //nach oben links
        if((col - i > 0) && (row - i > 0))
        ctx.fillRect((col - i - 1) * fieldSize, (row - i - 1) * fieldSize, fieldSize - border, fieldSize - border);

        //nach oben rechts
        if((col + i < fields + 1) && (row - i > 0))
        ctx.fillRect((col + i - 1) * fieldSize, (row - i - 1) * fieldSize, fieldSize - border, fieldSize - border);

        //nach unten links
        if((row + i < fields + 1) && (col - i > 0))
        ctx.fillRect((col - i - 1) * fieldSize, (row + i - 1) * fieldSize, fieldSize - border, fieldSize - border);
    }

    ctx.fillStyle = "green";
    ctx.fillRect((col - 1) * fieldSize, (row - 1) * fieldSize, fieldSize - border, fieldSize - border);

}
document.addEventListener("click", clickHandler);