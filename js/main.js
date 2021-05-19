"use strict"

document.addEventListener("DOMContentLoaded", () => {

    let inputText = document.getElementById("inputText")
    const all_todos = []

    inputText.addEventListener("keypress", (event) => {
        if (event.keyCode === 13) {
            event.preventDefault()

            all_todos.push(
                {
                    text: inputText.value,
                    checked: false
                }
            )
            updateUI()
            inputText.value = ""
            console.log(all_todos)
        }
    })

    function updateUI() {
        // clear all li-elements
        let list = document.getElementById("list")

        while(list.firstChild) list.removeChild(list.firstChild);

        let openCount = 0

        // todos-liste durchgehen und neue lis erzeugen
        for (let i = 0; i < all_todos.length; i++) {
            const liElement = createLiElement(all_todos[i])
            // insert to list
            list.appendChild(liElement)

            if (!all_todos[i].checked) {
                openCount++
            }
        }

        // update open todos
        const count = document.getElementById("count")
        count.innerText = "There are " + openCount + " things to do"
    }

    function createLiElement(todo) {
        const div = document.createElement("div")
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.classList.add("list-box")
        checkbox.checked = todo.checked

        const text = document.createTextNode(todo.text)

 /*       checkbox.addEventListener("click", () => {
            text.classList.add("strike")
        })*/

        div.appendChild(checkbox)

        div.appendChild(text)
        const li = document.createElement("li")
        li.appendChild(div)
        return li
    }

})