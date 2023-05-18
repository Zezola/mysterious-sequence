var buttons = document.getElementsByTagName("button")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
        alert(this.id[this.id.length-1])
        document.getElementById(this.id).disabled = true
        const buttonClickedId = this.id[this.id.length-1]
        let rowId = get_row_id(buttonClickedId)
        let userInput = getUserInputPerRow(rowId)
    }
}

function getRowId(buttonId) {
    return "row-"+buttonId
}

function populateInputValuesIntoArray(row_id) {
    const input_values = []
    const row_inputs = document.getElementById(row_id).children
    for (let i = 0; i < row_inputs.length; i++) {
        if (row_inputs.item(i).tagName === "INPUT") {
            input_values.push(row_inputs.item(i).value)
        }
    }
    return input_values
}

function getUserInputPerRow(rowId) {
    let rowElemetsCollection
    switch(rowId) {
        case "row-1": 
            rowElemetsCollection = populate_input_values_array(rowId)
            return rowElemetsCollection
        case "row-2":
            rowElemetsCollection = populate_input_values_array(rowId)
            return rowElemetsCollection
        case "row-3":
            rowElemetsCollection = populate_input_values_array(rowId)
            return rowElemetsCollection
        case "row-4":
            rowElemetsCollection = populate_input_values_array(rowId)
            return rowElemetsCollection
        default:
            return []
    }
}