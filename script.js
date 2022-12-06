localStorage.clear
let root = document.querySelector(".root");
let numberInp = document.querySelector(".number-input");

function show(num) {
    if (num == 1) {
        root.innerHTML = `
        <br>
        <h3>Welcome to chrecters counter</h3>
        <br>
        <h4>To start please choose how many charecters you want to limit</h4>
        <br>
        <input class="number-input" type="number" placeholder="50">
         <p class="number-char">Charecter</p>
         <br>
         <a onclick="saveNum()" class="number-ok" href="pages/en/en-limit.html">OK</a>
        <br>
        <br>
        <br>
        <h5>OR</h5>
        <br>
        <br>
        <a class="count" href="pages/en/en-count.html">Count my charecters</a>
    `
    }
}

function saveNum() {
    numberInp = document.querySelector(".number-input");
    localStorage.setItem("num", numberInp.value)
}