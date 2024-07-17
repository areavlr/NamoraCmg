let btn = document.getElementById('btNao')

function getRandomPosition() {

    let windowWidth = window.innerWidth
    let windowHeight = window.innerHeight

    let buttonWidth = btn.offsetWidth
    let buttonHeight = btn.offsetHeight

    let randomX = Math.random() * (windowWidth - buttonWidth)
    let randomY = Math.random() * (windowHeight - buttonHeight)


    return { x: randomX, y: randomY }
}


btn.addEventListener('mouseover', () => {

    let { x, y } = getRandomPosition()

    btn.style.position = 'absolute'
    btn.style.left = `${x}px`
    btn.style.top = `${y}px`
});

function nao(){
    document.getElementById("resp").innerHTML = "teste"
}

function sim() {
    document.getElementById("resp").innerHTML = `Seja bem-vinda a vaga de <span id="palavra">AMOR</span> DA MINHA VIDA!`
    document.getElementById("palavra").style.color = 'red'
    document.getElementById("btNao").style.display = 'none'
    document.getElementById("btSim").style.display = 'none'
}


