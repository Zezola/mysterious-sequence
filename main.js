var buttons = document.getElementsByTagName("button")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
        alert(this.id[this.id.length-1])
        document.getElementById(this.id).disabled = true
        const buttonClickedId = this.id[this.id.length-1]
        let rowId = getRowId(buttonClickedId)
        let userInputArray = getUserInputPerRow(rowId)
        compareUserSequence(userInputArray)
    }
}

function getRowId(buttonId) {
    return "row-"+buttonId
}

console.log("JUST A TEST")

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

function compareUserSequence(userInputSequence) {
    console.log(userInputSequence)
    // at first lets just use a mock sequence 
    var sequence = [1,2,3,4,5]
    var elementIndex = 0
    const comparedInputSequence = userInputSequence.map((element, index) => {
        elementIndex = sequence.indexOf(Number(element))
        if (index === elementIndex) {
            return 0
        }
        return -1
    })
    console.log(comparedInputSequence)
}