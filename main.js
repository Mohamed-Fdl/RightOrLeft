function randomSide() {
    var rand = Math.floor(Math.random() * 10)
    if (rand >= 0 && rand < 5) {
        return 'left'
    }
    return 'right'
}


const side = randomSide()

const leftButton = document.getElementById('left')

const rightButton = document.getElementById('right')

leftButton.addEventListener('click', function(e) {
    if (side === 'left') {
        alert('You win')
        location.reload()
    } else {
        alert('You lost')
        location.reload()
    }
})

rightButton.addEventListener('click', function(e) {
    if (side === 'right') {
        alert('You win')
        location.reload()
    } else {
        alert('You lost')
        location.reload()
    }
})


//var essay = 5

/*while (essay > 0) {
   

    // if (essay >= 10) { break }

    const side = randomSide()

     const leftButton = document.getElementById('left')

     const rightButton = document.getElementById('right')

       leftButton.addEventListener('click', function(e) {
           if (side === 'left') {
               essay++
               alert('You win .Score : ' + essay)
           } else {
               essay--
               alert('You lost .Score : ' + essay)
           }
       })

       rightButton.addEventListener('click', function(e) {
           if (side === 'right') {
               essay++
               alert('You win .Score : ' + essay)
           } else {
               essay--
               alert('You lost .Score : ' + essay)
           }
       })
}*/


// > et <