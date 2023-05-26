const generatedRandomSequence = generateRandomSequence();
var buttons = document.getElementsByTagName("button")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
        document.getElementById(this.id).disabled = true
        const buttonClickedId = this.id[this.id.length-1]
        let rowId = getRowId(buttonClickedId)
        let userInputArray = getUserInputPerRow(rowId)
        let resultsArray = compareUserSequenceIntoResultsArray(userInputArray)
        changeNumberColorBasedOnResultsArray(resultsArray, rowId)
    }
}

function changeNumberColorBasedOnResultsArray (resultsArray, rowId) {
    const currentDiv = document.getElementById(rowId)
    const inputsCollection = currentDiv.getElementsByTagName('input')
    Array.from(inputsCollection).forEach((element, index) => {
        if (resultsArray[index] === 0) {
            element.style.background = "orange"
        } 
        if (resultsArray[index] === 1) {
            element.style.background = "green"
        }
        if (resultsArray[index] === -1) {
            element.style.background = "red"
        }
    })
}


function getRowId(buttonId) {
    return "row-"+buttonId
}

function getUserInputPerRow(rowId) {
    let rowElemetsCollection
    switch(rowId) {
        case "row-1": 
            rowElemetsCollection = populateInputValuesIntoArray(rowId)
            return rowElemetsCollection
        case "row-2":
            rowElemetsCollection = populateInputValuesIntoArray(rowId)
            return rowElemetsCollection
        case "row-3":
            rowElemetsCollection = populateInputValuesIntoArray(rowId)
            return rowElemetsCollection
        case "row-4":
            rowElemetsCollection = populateInputValuesIntoArray(rowId)
            return rowElemetsCollection
        default:
            return []
    }
}


function populateInputValuesIntoArray(rowId) {
    const inputValues = []
    const rowInputs = document.getElementById(rowId).children
    for (let i = 0; i < rowInputs.length; i++) {
        if (rowInputs.item(i).tagName === "INPUT") {
            inputValues.push(rowInputs.item(i).value)
        }
    }
    return inputValues
}

function generateRandomSequence () {
    let sequence = []
    while (sequence.length <= 4) {
        let randomNumber = Math.floor(Math.random() * 10)
        if (sequence.indexOf(randomNumber) === -1) {
            sequence.push(randomNumber)
        }
    }
    return sequence
}


function compareUserSequenceIntoResultsArray(userInputSequence) {
    var elementIndex = 0
    const resultsArray = userInputSequence.map((element, index) => {
        elementIndex = generatedRandomSequence.indexOf(Number(element))
        if (index === elementIndex) {
            return 1
        } else if (index !== elementIndex && elementIndex !== -1) {
            return 0
        }
        return -1
    })
    return resultsArray
}