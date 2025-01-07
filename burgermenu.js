const menuItems = document.querySelectorAll("nav ul li")
const menuButton = document.querySelector("li.burgermenu i")
console.log(menuButton)
const menu = document.querySelector("header nav ul")
let tal = 0

window.addEventListener("resize", windowUpdate)

//dette er update funktionen som kører hver gang der bliver trukket i vinduet





menuButton.addEventListener("click", showHideMenu)

//denne kode bruges til at placere menu punkterne rigtigt på mobil versionen
menuItems.forEach(element => {
    element.classList.add("placeLi")
;
});

function showHideMenu(){
    console.log("erer")
    menu.classList.toggle("invisible")  
    menuButton.classList.toggle("fa-x")  
    menuButton.classList.toggle("fa-bars")  
}



function windowUpdate(){
    if(window.innerWidth >400){
        menuItems.forEach(element => {    
       element.classList.remove("placeLi")
        });
       
    }else{
        menuItems.forEach(element => {    
            element.classList.add("placeLi")
            
    })
}}
