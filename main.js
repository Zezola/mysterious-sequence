var buttons = document.getElementsByTagName("button")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
        alert(this.id[this.id.length-1])
        const button_clicked_id = this.id[this.id.length-1]
        let row_id = get_row_id(button_clicked_id)
        get_user_input_per_row(row_id)
    }
}

function get_row_id(button_id) {
    return "row-"+button_id
}

function get_user_input_per_row(row_id) {
    let row_elements_collection
    let values = [0,0,0,0,0]
    switch(row_id) {
        case "row-1": 
            row_elements_collection = document.getElementById(row_id).children
            for (let i = 0; i < row_elements_collection.length; i++) {
                if (row_elements_collection.item(i).tagName === "INPUT") {
                    values[i] = row_elements_collection.item(i).value
                }
            }
            break
        case "row-2":
            row_elements_collection = document.getElementById(row_id).children
            for (let i = 0; i < row_elements_collection.length;i++) {
                if (row_elements_collection.item(i).tagName === "INPUT") {
                    values[i] = row_elements_collection.item(i).value
                }
            }
            break
        case "row-3":
            row_elements_collection = document.getElementById(row_id).children
            for (let i = 0; i < row_elements_collection.length;i++) {
                if (row_elements_collection.item(i).tagName === "INPUT") {
                    values[i] = row_elements_collection.item(i).value
                }
            }
            break
        case "row-4":
            row_elements_collection = document.getElementById(row_id).children
            for (let i = 0; i < row_elements_collection.length;i++) {
                if (row_elements_collection.item(i).tagName === "INPUT") {
                    values[i] = row_elements_collection.item(i).value
                }
            }
            break
        default:
            return 0
    }
}