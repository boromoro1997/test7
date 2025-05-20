const form = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output")
form.addEventListener("input", sayHello);
function sayHello(event) {
    let textValue = event.currentTarget.value.trim();
    nameOutput.innerHTML = textValue;
    if (event.currentTarget.value.trim() === "") {
        nameOutput.innerHTML = `<span id="name-output">Anonymous</span>`;
    }
}