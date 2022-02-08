var mouse_event=""
var last_position_of_x, last_position_of_y

lineWidth="1"
color="black"

canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
console.log(ctx)

canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(){
    mouse_event="mousedown"
}

canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(){
    mouse_event="mouseup"
}

canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(){
    mouse_event="mouseleave"
}

canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    current_position_of_x=e.clientX-canvas.offsetLeft
    current_position_of_y=e.clientY-canvas.offsetTop
    if(mouse_event=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=lineWidth
        ctx.moveTo(last_position_of_x,last_position_of_y)
        ctx.lineTo(current_position_of_x,current_position_of_y)
        ctx.stroke()
    }
    last_position_of_x=current_position_of_x
    last_position_of_y=current_position_of_y
}
function clear_canvas(){
    ctx.clearRect(0,0,800,600)
}