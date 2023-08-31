const buttons = document.getElementById('buttons')
const imagem = document.getElementById('imagem')
let colorIndex = 0
let intervalId = null

const semaforo = event => {
  stopAutomatic()
  turnOn[event.target.id]()
}

const nextIndex = () => {
  colorIndex = colorIndex < 2 ? ++colorIndex : 0
}

const changeColor = () => {
  const colors = ['red', 'yellow', 'green']
  const color = colors[colorIndex]
  turnOn[color]()
  nextIndex()
}

const stopAutomatic = () => {
  clearInterval(intervalId)
}

const turnOn = {
  red: () => (imagem.src = 'vermelho.png'),
  yellow: () => (imagem.src = 'amarelo.png'),
  green: () => (imagem.src = 'verde.png'),
  automatic: () => (intervalId = setInterval(changeColor, 1000))
}

buttons.addEventListener('click', semaforo)
