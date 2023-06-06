let modial_window = document.getElementsByClassName("modial-window")[0];
let close_icon = document.getElementsByClassName("close-icon")[0];
let register = document.getElementById("register");
for (let x = 0; x < 2; x++) {
    console.log(close_icon.children.item(x));
    close_icon.children.item(x).style.backgroundColor = "white";
}
close_icon.addEventListener("mouseover", () => {
    for (let x = 0; x < 2; x++) {
        console.log(close_icon.children.item(x));
        close_icon.children.item(x).style.backgroundColor = "black";
    }

});
close_icon.addEventListener("mouseout", () => {
    for (let x = 0; x < 2; x++) {
        console.log(close_icon.children.item(x));
        close_icon.children.item(x).style.backgroundColor = "white";
    }

});
close_icon.addEventListener("click", () => {
    modial_window.style.display = "none"
});
close_icon.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        modial_window.style.display = "none";
    }
});
register.addEventListener("click", () => {
    modial_window.style.display = "block";
})
register.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        modial_window.style.display = "block";
    }
});
