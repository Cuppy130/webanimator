const canvas = $("#canvas");
const ctx = canvas[0].getContext('2d');
canvas.css({
    width: "200px"
})
canvas[0].height = 400
canvas[0].width = 400

//
let scales = [10, 20, 40, 50, 80, 100, 110, 100+100/3, 200, 400]
let scale = 80
let currentframe = 0

class pixel {
    constructor(x, y){
        this.x = x;
        this.y = y;
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
    ctx.rect(Math.floor(cursor.x/scale*2)*scale, Math.floor(cursor.y/scale*2)*scale, scale, scale);
    ctx.stroke()
}).click(event => {
    frames[currentframe][`${Math.floor(cursor.x/scale*2)*scale}x${Math.floor(cursor.y/scale*2)*scale}`] = new pixel(Math.floor(cursor.x/scale*2)*scale,Math.floor(cursor.y/scale*2)*scale)
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

setInterval(() => {
    ctx.clearRect(0, 0, 400, 400);
    Object.keys(frames[currentframe]).forEach(key => {
        let pixel = this.frames[currentframe][key]
        pixel.update()
    })
}, 1000/60);