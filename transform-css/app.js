const startSquirm = () => {
    console.log('button clicked')

    const caterpillar = document.querySelector('.caterpillar')
    caterpillar.classList.toggle('squirm')
}


const crybaby = document.querySelector('.crybaby')
const crybabyText = document.querySelector('.crybabyText')
const drainPuddle = () => {
    const puddle = document.querySelector('.puddleContainer')

    puddle.classList.toggle('draining')

    switchCryBaby()
}

const switchCryBaby = () => {
    // not working grr
    // setTimeout(switchCryBaby(), 150000)
    // wait(1000)
    if(crybaby.src === `https://media3.giphy.com/media/Xp6cyO2oLTM8TLV2R1/giphy.gif?cid=6c09b952d32284bc066d6387ed7c51a12a43b7deb9f02272&ep=v1_internal_gifs_gifId&rid=giphy.gif&ct=s`){
        crybaby.src = `https://www.icegif.com/wp-content/uploads/2023/04/icegif-1422.gif`
        crybabyText.innerHTML = `Happy Ducky`
        crybabyText.setAttribute('style', 'color: white')
    } else{
        crybaby.src = `https://media3.giphy.com/media/Xp6cyO2oLTM8TLV2R1/giphy.gif?cid=6c09b952d32284bc066d6387ed7c51a12a43b7deb9f02272&ep=v1_internal_gifs_gifId&rid=giphy.gif&ct=s`
        crybabyText.innerHTML = `Crybaby`
        crybabyText.setAttribute('style', 'color: black')
    }
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