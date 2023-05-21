<<<<<<< HEAD

document.getElementById('btn').addEventListener('click', () => {
    let counter = 2
    let user_guesses = []
    let guess = get_user_sequence()
    user_guesses.push(guess)
    console.log(user_guesses)
    let new_div = render_new_div(counter)
    console.log(new_div)
    document.getElementById('guesses').appendChild(new_div)
    counter++
})

const render_new_div = (counter) => {
    const new_div_id = 'row-'+counter
    let new_div = document.createElement('div')
    // Generate the five inputs and the button
    new_div.appendChild(document.createElement('input'))
    new_div.appendChild(document.createElement('input'))
    new_div.appendChild(document.createElement('input'))
    new_div.appendChild(document.createElement('input'))
    new_div.appendChild(document.createElement('input'))
    new_div.className = 'guess-input'
    new_div.id = new_div_id
    return new_div    
}


let get_user_sequence = () => {
    /* TO-DO: Get the user sequence from 5 inputs */
    // Clean the map first
    let user_sequence_map = new Map()
    let user_inputs_array = Array.from(document.getElementsByTagName('input'))
        user_inputs_array.forEach((element, index)=>{
        user_sequence_map.set(index,element.value)
    })
    return user_sequence_map
=======
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
    // at first lets just use a mock sequence 
    const sequence = [1,2,3,4,5]
    Array.from(userInputSequence).forEach((e,index)=> {
        
    })
>>>>>>> 78a07ffafdf123a495f67d5076b658020eb394ca
}