
let input = document.querySelector("input");
let button = document.querySelector("button");
let alertMessage = document.querySelector(".alert-email-message");
let boxMessage = document.getElementById("box-message");

button.addEventListener("click", function () {
    if ((input.value == "")) {
        showAlert("Error");
    } else {

        if (input.value.length >= 11) {
            if (input.value.includes("@gmail.com")) {
                showAlert("Email Added!")

            } else {
                showAlert("Wrong email!")
            }
        } else {
            showAlert("Wrong email!")
        }
    }
})


function showAlert(message) {
    boxMessage.innerHTML = message;
    alertMessage.classList.add("show-alert");
    setTimeout(disapearAlert, 1000);
}

function disapearAlert() {
    alertMessage.classList.remove("show-alert");
}
