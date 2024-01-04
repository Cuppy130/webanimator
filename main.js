const canvas = $("#canvas");
const ctx = canvas[0].getContext('2d');
canvas.css({
    width: "400px",
    border:"1px solid black"
})
canvas[0].height = 400;
canvas[0].width = 400;

//
let scales = [10, 20, 40, 50, 80, 100, 110, 100+100/3, 200, 400];
let scale = 25;
let mode = 'animating'
let isMouseDown = false;

let currentframe = 0;
let currentcolor = "black";

class pixel {
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color || "rgb(0,0,0)";
    }
    update(){
        ctx.fillRect(this.x, this.y, scale, scale)
    }
}

const cursor = {x: 0, y: 0}
canvas.mousemove(event => {
    cursor.x = event.pageX;
    cursor.y = event.pageY;
    ctx.beginPath();
    ctx.rect(Math.floor(cursor.x/scale)*scale, Math.floor(cursor.y/scale)*scale, scale, scale);
    ctx.stroke()
}).click(()=>{frames[currentframe][`${Math.floor(cursor.x/scale*2)*scale}x${Math.floor(cursor.y/scale*2)*scale}`]=new pixel(Math.floor(cursor.x/scale*2)*scale,Math.floor(cursor.y/scale*2)*scale,currentcolor)})

document.getElementById("canvas").addEventListener("contextmenu", (event)=>{
    event.preventDefault()
    pixels = frames[currentframe]
    frames[currentframe] = {}
    Object.keys(pixels).forEach(key=>{
        let pixel = pixels[key] 
        if(Math.floor(cursor.x/scale)*scale!=pixel.x||Math.floor(cursor.y/scale)*scale!=pixel.y){
            frames[currentframe][`${pixel.x}x${pixel.y}`] = pixel
        }
    })
    
    frames[currentframe]
})

frames = [
    {},
    {}
]
$("#pastframe").mousedown(()=>{
    currentframe--;
    if(currentframe < 0){currentframe = 0}
    if(!frames[currentframe]){
        frames[currentframe] = {};
    }
})
//currframe
$("#nextframe").click(()=>{
    currentframe++;
    if(!frames[currentframe]){
        frames[currentframe] = {};
    }
})

function drawframe(cframe, type){
    if(cframe<0){return}
    Object.keys(frames[cframe]).forEach(key => {
        let pixel = this.frames[cframe][key]
        pixel.update()
    })
    if(type==-1||type==1){
        ctx.save()
        ctx.fillStyle='rgb(255,255,255,0.5)'
        ctx.fillRect(0, 0, 400, 400)
        ctx.restore();
    } else {
        Object.keys(frames[cframe]).forEach(key => {
            let pixel = this.frames[cframe][key]
            pixel.update()
        })
    }
    if(!frames[cframe+1]){
        frames[cframe+1] = {};
    }

}

setInterval(() => {
    ctx.clearRect(0, 0, 400, 400);
    if(mode=="animating"){
        drawframe(currentframe-1, -1)
        drawframe(currentframe+1, 1)
        drawframe(currentframe, 0)
    } else if(mode=="play"){
        drawframe(currentframe, 0)
    }
}, 1000/60);