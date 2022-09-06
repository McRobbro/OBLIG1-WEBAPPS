// Oppgave 1
const removeText = document.getElementById("remove");
const removeButton = document.getElementById("remove-btn");

removeButton.addEventListener("click", function(event)  {
    removeText.remove();
});
// Oppgave 2
const changeText = document.getElementById("change");
const changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener("click", function(event)  {
    changeText.innerHTML = "I HAVE CHANGED!!!!";
});
// Oppgave 3
const input = document.getElementById("input");
const inputText = document.getElementById("input-text");

input.addEventListener("keypress", function (event) {
    inputText.innerHTML += event.key;
})

// Oppgave 4
const myList = ["item one", "item two", "item three"];
const listBtn = document.getElementById("write-list");
const list = document.getElementById("ul");

listBtn.addEventListener("click", function (event) {
    list.innerHTML = null;
    myList.forEach((item) => {
        list.innerHTML += "<li>"+item+"</li>"
    })
})

// Oppgave 5
const select = document.getElementById("select");
const text5 = document.getElementById("text");
const create = document.getElementById("create");
const placeholder = document.getElementById("placeholder");

create.addEventListener("click", function (event) {
    placeholder.innerHTML = `<${select.value}>`+text5.value+`</${select.value}>`
})

// Oppgave 6
const removeBtn = document.getElementById("remove-li");
const listRemove = document.getElementById("list");

removeBtn.addEventListener("click", function (event) {
    listRemove.removeChild(listRemove.lastElementChild);
})

// Oppgave 7
const nameInput = document.getElementById("name");
const order = document.getElementById("order");

nameInput.addEventListener("keypress", function (event) {
    if (nameInput.value.length >= 4) {
        order.disabled = true;
        order.style.border = "1px solid red"
    }
})

// Oppgave 8
const evenChild = document.querySelectorAll(".children :nth-child(even)");
const oddChild = document.querySelectorAll(".children :nth-child(odd)");
const colorBtn = document.getElementById("color");

const pinkStlye = "1px solid pink";
const greenStyle = "1px solid green";

colorBtn.addEventListener("click", function (event) {
    evenChild.forEach((item) => {
        item.style.border = pinkStlye;
    });
    oddChild.forEach((item) => {
        item.style.border = greenStyle;
    });
})
