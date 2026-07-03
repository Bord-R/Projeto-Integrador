const myButton = document.getElementById("clare-dark-btn");

const saveTheme = localStorage.getItem("theme");

if (saveTheme === "clare") {
    document.body.classList.add("clare-mode");
    myButton.textContent = "Modo escuro"
}

myButton.addEventListener("click", function () {

    document.body.classList.toggle("clare-mode");

    let theme = "dark";
    myButton.textContent = "Modo Claro"

    if (document.body.classList.contains("clare-mode")){
        theme = "clare";
        myButton.textContent = "Modo Escuro"
    }

    localStorage.setItem("theme", theme)
});

