const winterPic = document.querySelector('.winterPic')
const summerPic = document.querySelector('.summerPic')

// toggle 1
const switchSeasons = () => {
    winterPic.classList.toggle('hidden')
    summerPic.classList.toggle('hidden')
}


// toggle 2
const coloredText = document.querySelector('.coloredText')

const changeColor = (color) => {
    if(color === "yellow"){
        coloredText.classList.remove('blue')
        coloredText.classList.remove('red')
        coloredText.classList.toggle('yellow')
    } else if(color === "red"){
        coloredText.classList.remove('yellow')
        coloredText.classList.remove('blue')
        coloredText.classList.toggle('red')
    } else if(color === 'blue'){
        coloredText.classList.remove('yellow')
        coloredText.classList.remove('red')
        coloredText.classList.toggle('blue')
    }
    coloredText.innerHTML = `Hey, I'm ${color} now!`
}

const sizeText = document.querySelector('.size')


// toggle3 ... finished this then realized i am not even using the toggle method ughhh
// but its cool so im keeping it
// bug if decreased < 0 ...
let fontSize = 0

const changeFontSize = (direction) => {

    if(direction === 'big'){
        fontSize++
        sizeText.setAttribute('style', `font-size:${fontSize}px`)
    } else if(direction === 'small'){
        fontSize--
        sizeText.setAttribute('style',`font-size:${fontSize}px`)
    }
}


// toggle4
const hideMeText = document.querySelector('.hideMeText')
const hideButton = document.querySelector('.hide')

const toggleHidden = () => {
    console.log(hideMeText.classList.value)

    hideMeText.classList.toggle('hidden')
    if(hideMeText.classList.value.includes('hidden')){
        hideButton.innerText = "SHOW ME"
    } else {
        hideButton.innerText = "HIDE ME"
    }
}

const bugTalk = document.querySelector('.bugTalk')

// toggle5
const evolve = () => {
    
}



