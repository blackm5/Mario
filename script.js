const mario = document.querySelector('img.mario')
const pipe = document.querySelector('img.pipe')
const game = document.querySelector('img#game')
const jump = () => {
    mario.classList.add('jump')
    setTimeout(() =>{
        mario.classList.remove('jump')
    }, 500)
}
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    if (pipePosition <= 102 && pipePosition > 0 && marioPosition < 65) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = 'img/game-over.png'
        mario.style.width = '60px'
        mario.style.marginLeft = '44px'
        clearInterval(loop)
        game.style.display = 'block'
    }
}, 10)

document.addEventListener('keydown', jump)