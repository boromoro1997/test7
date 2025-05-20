const form = document.querySelector(".login-form");
form.addEventListener("submit", getLogin);


function getLogin(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    if (email.trim()==="" || password.trim()==="") {
        return alert("All form fields must be filled in");
    }
    const obj = {
        email,
        password,
    }
    console.log(obj);
    event.target.reset();
}
