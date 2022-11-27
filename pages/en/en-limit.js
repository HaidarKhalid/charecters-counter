let num = localStorage.getItem("num")
let info = document.querySelector(".info")
let counter = document.querySelector(".counter")


info.innerHTML = `
<textarea class="input" cols="30" rows="5" maxlength="${num}"></textarea>
`;

counter.innerHTML = `
<h3>charecters: 0</h3>
<h3>remaining: ${num}</h3>
`


let inputEL = document.querySelector(".input")

inputEL.addEventListener("keyup", ()=> {
    updateCounter()
})

function updateCounter() {
    counter.innerHTML = `
    <h3>charecters: ${inputEL.value.length}</h3>
    <h3>remaining: ${num - inputEL.value.length} </h3>
    `
}