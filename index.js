let header = document.querySelector('#page-header')
header.style.textAlign = "left"


let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i <  dogImages.length; i++) {
    dogImages[i].style.borderRadius = '400px'
    dogImages[i].style.transform = 'scaleY(1)'
}

//dogImages.style.transform = "scaleY(1)"

let footer = document.querySelector('.footer')
footer.style.borderStyle = 'solid'

let dogName = document.querySelector('.dog-name')
dogName.style.textAlign = "left"

header.style.color = 'blue'

header.style.fontFamily ='timesNewRoman'

/*
let dogName = document.querySelectorAll('.dog-name')
for (let i = 0; i < dogName.length; i++) {
    let = dogName[i].style.textAlign = 'left'
}

dogName.style.textAlign = "left"
*/




