
let index = 2
/*Her tager jeg fat i de 3 små blå cirkler*/
const circles = document.querySelectorAll("div.dotsDiv__dot")
const imgTag = document.querySelector("img#productImg")
//her tager jeg fat i de 2 pile
const rightArrow = document.querySelector("#next")

const leftArrow = document.querySelector("#prev")
/*Her adder jeg eventlisteners*/
rightArrow.addEventListener("click", show)
leftArrow.addEventListener("click", show)

/*denne funktion kører når man trykker på en af knappperne*/
function show(){
    //Hvis man trykker på pilen til højre
    if(this.getAttribute("id") == "next"){
        index++     
        //Hvis man trykker på pilen til venstre
    }else{
        index--
    }
    /*Denne funktion kører hvis man trykker next og kommer over på det sidste billede*/ 
    if(index > 3 || index < 1 && this.getAttribute("id") == "next"){
        //starter forfra ved billede 1
        index =1
          /*Denne funktion kører hvis man trykker prev og kommer over på det første billede*/ 
    } else if(index > 3 || index < 1 && this.getAttribute("id") == "prev"){
        /*Starter på det sidste billede*/ 
        index = 3
    }
    //Her sker der en så kalt "sammenkædning", hvor vi tager nogle strings og lægger sammen med variabler
    /*Denne funktion fjerner baggrundsudfyldning i den nuværende cirkel*/ 
    circles.forEach(changeCircle);
    /*Denne funktion udfylder baggrundsudfyldning i den kommende cirkel   !OBS gruden til at jeg minuser index med 1 er fordi at nodelisten(cicles) starter på 0*/ 
    circles[index -1].classList.add("dotsDiv__dot--chosen")
    imgTag.setAttribute("src", "imgs/products/plante" + index + ".png")
}

function changeCircle(element){
    console.log(element)
    element.classList.remove("dotsDiv__dot--chosen")
}