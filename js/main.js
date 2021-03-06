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
        const li = document.createElement("li")
        const checkbox = document.createElement("input")

        const span = document.createElement("span")
        span.innerText = todo.text

        if (todo.checked === true) {
            span.classList.add("strike")
        }

        checkbox.type = "checkbox"
        checkbox.checked = todo.checked

        checkbox.addEventListener("click", () => {
            todo.checked = !todo.checked
            updateUI()
        })

        div.appendChild(checkbox)
        div.appendChild(span)
        li.appendChild(div)
        return li
    }

})