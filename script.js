/********** Fonctionnalité 1 ***********/

let bottom = document.querySelector("footer");
bottom.addEventListener("click", function () {
    console.log("clique");
});

/********** Fonctionnalité 1-bis ***********/
let x = 0;

bottom.addEventListener("click", function () {
    x += 1;
    console.log(`clic numero ${x}`);
});

/********** Fonctionnalité 2 ***********/

let nav = document.querySelector("#navbarHeader");
let hambButton = document.querySelector(".navbar-toggler");
hambButton.addEventListener("click", function () {
    nav.classList.toggle("collapse");
});

/********** Fonctionnalité 3 ***********/
let edit1 = document.querySelector(".btn-group").childNodes[3];
let cardText1 = document.querySelector(".card-text");
edit1.addEventListener("click", function () {
    cardText1.style.color = "red";
});

/********** Fonctionnalité 4 ***********/

let edit2 = document.querySelectorAll(".btn-group")[1].childNodes[3];
let cardText2 = document.querySelectorAll(".card-text")[1];
let buttonStatus = false;

edit2.addEventListener("click", function () {
    if (buttonStatus == false) {
        cardText2.style.color = "green";
        buttonStatus = true;
    } else if (buttonStatus == true) {
        cardText2.style.color = "";
        buttonStatus = false;
    }
});

/********** Fonctionnalité 5   ***********/

let head = document.querySelector("header");
let boots = document.querySelector("link");
let headerStatus = false;

head.addEventListener("dblclick", function () {
    if (headerStatus == false) {
        boots.setAttribute("href", "");
        headerStatus = true;
    } else if (headerStatus == true) {
        boots.setAttribute(
            "href",
            "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        );
        headerStatus = false;
    }
});
/********** Fonctionnalité 6   ***********/

let views = document.querySelector(".btn-success"); // un boutton
let textCard = document.querySelectorAll(".card-body p"); // le texte de la carte
let imgCard = document.querySelectorAll(".card-img-top"); // la premiere image
let cardStatus = false;

let allButton = document.querySelectorAll(".btn-success");
for (let i = 0; i < allButton.length; i++) {
    allButton[i].addEventListener("mouseover", function () {
        if (cardStatus == false) {
            imgCard[i].style.width = "20%";
            textCard[i].style.display = "none";
            cardStatus = true;
        } else if (cardStatus == true) {
            imgCard[i].style.width = "";
            textCard[i].style.display = "block";
            cardStatus = false;
        }
    });
}
