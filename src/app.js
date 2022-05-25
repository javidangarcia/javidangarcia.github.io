const sideBar = document.getElementById("sidebar");
const navList = document.getElementById("nav-list");

function toggleButton() {
    navList.classList.toggle("display");
}

sideBar.addEventListener("click", toggleButton);