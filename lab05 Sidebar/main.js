//Select the element with querySelector

let mySidenav = document.querySelector("#mySidenav");
let main = document.querySelector("#main")
// Create a variable to hold the button element
let openBtn = document.querySelector("#main > span");
let closeBtn = document.querySelector(".closebtn")


// Assigning event to the buttons
openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

// Defining the function for Event

function openNav(){
    mySidenav.style.width = "250px" ;
    main.style.marginLeft = "250px"
}

function closeNav(){
    mySidenav.style.width = "0px" ;
    main.style.marginLeft = "0px"
}