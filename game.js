const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = ()

function startGame() {
    state = {}
    showTextNode(1)

}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
}

textNode.options.forEach(option => {
    if (showOption(option))
})

function selectOption(option) {

}

const textNodes = [
    {
      id: 1, 
      text: 'du vaknar på en okänd plats med en burk med sylt bredvid',
      options:[
        {
            text: 'ta upp sylten',
            setState: {sylt: true}
            nextText: 2
        },
        {
            text: 'låt bli syltburken',
            nextText: 2
        }
      ]
    },
    {
        id: 2
    }
]

startGame()