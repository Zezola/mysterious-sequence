var buttons = document.getElementsByTagName("button")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
        alert(this.id[this.id.length-1])
        document.getElementById(this.id).disabled = true
        const buttonClickedId = this.id[this.id.length-1]
        let rowId = getRowId(buttonClickedId)
        let userInputArray = getUserInputPerRow(rowId)
        let resultsArray = compareUserSequenceIntoResultsArray(userInputArray)
    }
}

function getRowId(buttonId) {
    return "row-"+buttonId
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


function compareUserSequenceIntoResultsArray(userInputSequence) {
    console.log(userInputSequence)
    // at first lets just use a mock sequence 
    var sequence = [1,2,3,4,5]
    var elementIndex = 0
    const resultsArray = userInputSequence.map((element, index) => {
        elementIndex = sequence.indexOf(Number(element))
        if (index === elementIndex) {
            return 1
        } else if (index !== elementIndex && elementIndex !== -1) {
            return 0
        }
        return -1
    })
    return resultsArray
}