const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Du vaknar upp på en konstig plats, bredvid dig ser du en behållare med en röd flytande vätska i',
    options: [
      {
        text: 'Ta upp behållaren',
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text: 'Gå vidare utan att ta med vätskan',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'På din jakt på svar så träffar du på en tjej i ett marknadsstånd.',
    options: [
      {
        text: 'Byt vätskan mot ett svärd',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },
        nextText: 3
      },
      {
        text: 'Byt vätskan mot en sköld',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 3
      },
      {
        text: 'Ignorera försäljaren, hon känns skum',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'Efter att ha lämnat försäljaren börjar du känna dig trött och snubblar du över en liten by som ligger bredvid ett slott som ser mystiskt och skrämmande ut',
    options: [
      {
        text: 'Du blir nyfiken och vill utforska slottet',
        nextText: 4
      },
      {
        text: 'Hitta ett rum att sova ut på i byn',
        nextText: 5
      },
      {
        text: 'Hitta ett stall och sov ut i en hästbox bland hö',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'Medans du utforskar slottet blir du så trött så du somnar, medans du sover blir du mördad av dom hemska monstren som finns i slottet',
    options: [
      {
        text: 'Starta Om',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Utan pengar att betala för ett rum bryter du dig in i ett rum, ägaren till boendet hittar dig och lämnar över dig till vakterna som griper dig och låser in dig i en cell.',
    options: [
      {
        text: 'Starta Om',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'Du vaknar upp full med energi och nu redo att utforska det mystiska slottet som låg i närheten.',
    options: [
      {
        text: 'Utforska slottet',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'Medans du utforksar det stora slottet, träffar du på ett stort monster.',
    options: [
      {
        text: 'Spring!',
        nextText: 8
      },
      {
        text: 'Attackera monstret med ditt svärd',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Göm dig bakom din sköld.',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Släng den mystiska röda vätskan på monstret.',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Du springer och springer men monstret var för snabbt och kom ikapp och slet dig i stycken.',
    options: [
      {
        text: 'Starta Om',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'Du försöker förgäves att svinga ditt svärd mot monstret som har en ogentränglig hud, monstret mördar dig.',
    options: [
      {
        text: 'Starta Om',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'Monstret skrattar åt dig att du trodde skölden skulle kunna hjälpa dig, monstret slaktar dig med sina klor',
    options: [
      {
        text: 'Starta Om',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'Du kastar vätskan på monstret som börjar vråla av smärta, vätskan löser upp monstret för att sedan explodera. Medans blodet från monstret skvätter på dig bestämmer du dig för att ta över slottet och leva där för resten av dina dagar.',
    options: [
      {
        text: 'Grattis Kung David, du är nu den nya mästaren i slottet.',
        nextText: -1
      }
    ]
  }
]

startGame()