
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