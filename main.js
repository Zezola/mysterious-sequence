var buttons = document.getElementsByTagName("button")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
        alert(this.id[this.id.length-1])
        document.getElementById(this.id).disabled = true
        const button_clicked_id = this.id[this.id.length-1]
        let row_id = get_row_id(button_clicked_id)
        let user_input = get_user_input_per_row(row_id)
        console.log(user_input)
    }
}

function get_row_id(button_id_serial) {
    return "row-"+button_id_serial
}

function populate_input_values_array(row_id) {
    const input_values = []
    const row_inputs = document.getElementById(row_id).children
    for (let i = 0; i < row_inputs.length; i++) {
        if (row_inputs.item(i).tagName === "INPUT") {
            input_values.push(row_inputs.item(i).value)
        }
    }
    return input_values
}

function get_user_input_per_row(row_id) {
    let row_elements_collection
    switch(row_id) {
        case "row-1": 
            row_elements_collection = populate_input_values_array(row_id)
            return row_elements_collection
        case "row-2":
            row_elements_collection = populate_input_values_array(row_id)
            return row_elements_collection
        case "row-3":
            row_elements_collection = populate_input_values_array(row_id)
            return row_elements_collection
        case "row-4":
            row_elements_collection = populate_input_values_array(row_id)
            return row_elements_collection
        default:
            return []
    }
}