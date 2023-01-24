const night = document.querySelector(".dropdown-item");
const body = document.getElementById("body-bg");
const navItmes = document.querySelectorAll("a");




        // Button night
        

function  changeBody() {
    if(night.classList.contains("night") === false) {
        night.classList.add("night")
        body.style.backgroundColor = "#131313";
        for (let i = 0; i < navItmes.length - 2; i++) {
            navItmes[i].style.color = 'white';}
    } else {
        night.classList.remove("night")
        body.style.background = "#f2f2f2";
        for (let i = 0; i < navItmes.length; i++) {
            navItmes[i].style.color = 'black';}
    }
}


night.addEventListener("click", changeBody);