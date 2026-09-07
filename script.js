const entryForm = document.getElementById("entryForm");

entryForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();

    if (!name || !email) {
        return;
    }

    // Save temporarily for the website experience
    sessionStorage.setItem("d2tUserName", name);
    sessionStorage.setItem("d2tUserEmail", email);

    const welcomeScreen = document.getElementById("welcomeScreen");

    welcomeScreen.style.transition = "1s ease";
    welcomeScreen.style.opacity = "0";
    welcomeScreen.style.transform = "scale(1.04)";

    setTimeout(() => {
        window.location.href = "home.html";
    }, 1000);
});