let likes = localStorage.getItem('likes')
      
function like() {
    likes++
    render()

    localStorage.setItem('likes', likes)
}

function countLikes(likes) {
    if (likes >= 1000 && likes < 1000000) {
        return `Likes ${(likes/1000).toFixed(1)+'K'}`

    } else if (likes >= 1000000) {
        return `Likes ${(likes/1000000).toFixed(1)+'M'}`
    } else if (likes == null) {
        return `Likes 0`
    } else {
        return `Likes ${likes}`
    }
}

function render() {
    let btn = document.getElementById('likeBtn')

    btn.innerText = countLikes(likes)

}

render()

// HW1: 
//        if/else: 
//                 1.....999 - Likes 999
//                 999....999000 - Likes 1.5k(1500)
//                 999000.... - Likes 1.5M(1500000)

//HW2:
//     if/else: initial null ? ---0

//HW3: when getting the item -> integer number