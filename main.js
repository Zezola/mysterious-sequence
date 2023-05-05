// TO-DO: If i click in one of the buttons, the next row should have the display property changed to: grid 

// Click event-handler
document.getElementById('btn').onclick = () => {
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
    console.log(new_div.lastChild)
    return new_div    
}
