let num = localStorage.getItem("num")
let info = document.querySelector(".info")
let counter = document.querySelector(".counter")


info.innerHTML = `
<textarea class="input" cols="30" rows="5" maxlength="${num}"></textarea>
`;

counter.innerHTML = `
<h3>عدد الاحرف: 0</h3>
<h3>المتبقي: ${num}</h3>
`


let inputEL = document.querySelector(".input")

inputEL.addEventListener("keyup", ()=> {
    updateCounter()
})

function updateCounter() {
    counter.innerHTML = `
    <h3>عدد الاحرف: ${inputEL.value.length}</h3>
    <h3>المتبقي: ${num - inputEL.value.length} </h3>
    `
} 