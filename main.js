
document.getElementById('btn').addEventListener('click', () => {
    let new_div = render_new_div()
    document.getElementsByClassName('guesses').item(0).appendChild(new_div)
})

const render_new_div = () => {
    let new_div = document.createElement('div')
    // Generate the five inputs and the button
    new_div.appendChild(document.createElement('input'))
    new_div.appendChild(document.createElement('input'))
    new_div.appendChild(document.createElement('input'))
    new_div.appendChild(document.createElement('input'))
    new_div.appendChild(document.createElement('input'))
    new_div.className = 'guess-input'
    return new_div    
}
