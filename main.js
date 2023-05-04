
var random_sequence = []
for(let i = 0; i < 5; i++) {
    mysterious_number = Math.floor((Math.random() * 5)+1)
    console.log(mysterious_number in random_sequence)
    if (mysterious_number in random_sequence) {
        mysterious_number = Math.floor((Math.random() * 5)+1)
    } else {
        random_sequence.push(mysterious_number)
    }
    
}
console.log(random_sequence)
console.log("------------------------")
let n = [1,3,5,2]
console.log(1 in n)