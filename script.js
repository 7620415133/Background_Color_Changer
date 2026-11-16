
const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;
    let password = document.getElementById("password").value;

    let message = document.getElementById("message");

    // Check empty fields
    if (name === "" || email === "" ||
        age === "" || course === "" || password === "") {

        message.style.color = "red";
        message.textContent = "Please fill all fields!";
        return;
    }

    // Check email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.style.color = "red";
        message.textContent = "Please enter a valid email!";
        return;
    }

    // Check age
    if (Number(age) <= 0 || Number(age) > 120) {
        message.style.color = "red";
        message.textContent = "Please enter a valid age!";
        return;
    }

    // Check password length
    if (password.length < 8) {
        message.style.color = "red";
        message.textContent =
            "Password must be at least 8 characters!";
        return;
    }

    // Success message
    message.style.color = "green";
    message.textContent = "Registration Successful!";

    // Clear form automatically
    form.reset();

});
