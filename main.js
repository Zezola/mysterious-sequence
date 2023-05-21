
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
}