"use strict"

document.addEventListener("DOMContentLoaded", () => {

    let inputText = document.getElementById("inputText")
    let list = document.getElementById("list")

    inputText.addEventListener("keypress", (event) => {
        if (event.keyCode === 13) {
            event.preventDefault()

            // create List-Element
            const div = document.createElement("div")
            const checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            checkbox.classList.add("list-box")

            const text = document.createTextNode(inputText.value)

            checkbox.addEventListener("click", () => {
                text.classList.add("strike")

                // calculate open todos
                const count = document.getElementById("count")

                for (let liElement of list.children) {
                    alert("liElement")
                }

                count.innerText = "There are " + "0" + " things to do"

            })

            div.appendChild(checkbox)

            div.appendChild(text)
            const li = document.createElement("li")
            li.appendChild(div)

            // insert to list
            list.appendChild(li)
        }
    })

})