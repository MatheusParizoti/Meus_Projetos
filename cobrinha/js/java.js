const  canvas = document.querySelector("canvas")
/*se der erro - tentar usar aspas simples como uma opção */

const ctx = canvas.getContext('2d')
const size = 30
const snake = [
    {x: 200, y:200,},
    {x: 230, y:200,},
    // {x: 260, y:200,},
    // {x: 290, y:200,},
]
const drawSnake = () => {

    ctx.fillStyle = "#ddd"

   snake.forEach((position, index) => {
       if (index == snake.length - 1) {
           ctx.fillStyle = "white"
           
       }
   ctx.fillRect(position. x, position.y, size,size)
   
   // ctx.fillRect(snake(0). x,  snake(0).y,size,size)
})
}
let direction 
let loopId
const moveSnake = () => {
if(!direction)return

    const head = snake[snake.length -1]
    

    if (direction  == "right") {
        snake.push ({x:head.x + size, y:head.y,})
    }
    if (direction  == "left") {
        snake.push ({x:head.x - size, y:head.y,})
    }
    if (direction  == "up") {
        snake.push ({x:head.x , y:head.y - size,})
    }
    if (direction  == "down") {
        snake.push ({x:head.x , y:head.y + size,})
    }
    

    snake.shift()
}
const gameLoop = () => {
    clearInterval(loopId)
    ctx.clearRect(0,0, 600,600)
    drawSnake()
    moveSnake()

    loopId = setTimeout(() => {
        gameLoop()
    },300)
}
gameLoop()
addEventListener()
document.addEventListener("keydown", ({key}) => {

    if (key == "ArrowRight " &&  direction ≠ "left"){
        direction = "right"
    }
    if (key == "ArrowLeft " &&  direction ≠ "right") {
        direction = "left"
    }
    if (key == "ArrowUP ") {
        direction = "up"
    }
    if (key == "ArrowDown ") {
        direction = "down"
    }

})
