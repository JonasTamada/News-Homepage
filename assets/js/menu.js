function openNav() {

    document.querySelector(".header__menu").style.width = "250px";
    document.querySelector(".mobile--menu").style.display = "none";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {

    document.querySelector(".header__menu").style.width = "0";
    document.querySelector(".mobile--menu").style.display = "block";
    document.body.style.backgroundColor = "var(--branco)";
}