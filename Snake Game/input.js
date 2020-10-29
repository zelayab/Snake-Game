let inputDirection = { x: 0, y: 0}
//this is for break to move back
let lastInputDirection = { x: 0, y:0}

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if(lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y:-1}
            break;
        case 'ArrowDown':
            if(lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y:1}
            break;
        case 'ArrowLeft':
            if(lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y:0}
            break;
        case 'ArrowRight':
            if(lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y:0}
            break;
    }
})


// gets input direction of the snake
export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}