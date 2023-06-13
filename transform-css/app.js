const startSquirm = () => {
    console.log('button clicked')

    const caterpillar = document.querySelector('.caterpillar')
    caterpillar.classList.toggle('squirm')
}


const drainPuddle = () => {
    const puddle = document.querySelector('.puddleContainer')

    puddle.classList.toggle('draining')
}

const dontHelp = () => {
    console.log('help clicked')
    const water = document.querySelector('.water')

    water.classList.toggle('waterRising')
}

const octopusSwim = () => {
    const octopus = document.querySelector('.octopus')

    octopus.classList.toggle('squirm')
}

const redButton = document.querySelector('.redButton')
const buttonText = document.querySelector('.buttonText')

console.log(redButton.innerText)
const clickedRedButton = () => {

    if(redButton.innerText === "don't push me"){
        redButton.innerText = `don't push me again`
        redButton.setAttribute('style','height:125px; width:125px')
    } else if(redButton.innerText === `don't push me again`){
        redButton.innerText = `last warning`
        redButton.setAttribute('style','height:150px; width:150px')
    }else if(redButton.innerText === `last warning`){
        redButton.innerText = `...`
        redButton.setAttribute('style','height:150px; width:150px; font-size: 40px')
        redButton.classList.toggle('explode')
        buttonText.classList.toggle('hidden')
    }
}