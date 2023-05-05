// TO-DO: This only works for the first button. If i click on the others nothing happens.

let buttons = document.getElementsByTagName('button')
let last_button = buttons.item(buttons.length-1)

last_button.onclick = () => {
    let new_div = render_new_div()
    new_div.className = "guess-input"
    document.getElementsByClassName("guesses").item(0).appendChild(new_div)    
}

const render_new_div = () => {
    let new_div = document.createElement('div')
    // Generate the five inputs and the button
    new_div.appendChild(document.createElement('input'))
    new_div.appendChild(document.createElement('input'))
    new_div.appendChild(document.createElement('input'))
    new_div.appendChild(document.createElement('input'))
    new_div.appendChild(document.createElement('input'))
    new_div.appendChild(document.createElement('button'))
    new_div.lastChild.id = 'btn'
    return new_div    
}
