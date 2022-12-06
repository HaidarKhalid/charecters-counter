localStorage.clear


let info = document.querySelector(".info")
let counter = document.querySelector(".counter")


info.innerHTML = `
<textarea placeholder="Type something!"  class="input" cols="30" rows="5"></textarea>
`;

counter.innerHTML = `
<h3>charecters: 0</h3>
`


let inputEL = document.querySelector(".input")

inputEL.addEventListener("keyup", ()=> {
    updateCounter()
})

function updateCounter() {
    counter.innerHTML = `
    <h3>charecters: ${inputEL.value.length}</h3>
    `
}