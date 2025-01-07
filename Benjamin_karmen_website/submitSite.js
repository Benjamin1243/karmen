//Først tager jeg fat i formen
document.querySelector("#buyForm").addEventListener("submit", validate)




//DEtte er den function der validere brugerens input
function validate(evt) {
   
    let error
    //Vi starter med at tjekke addressen
    if (this.adress.value == "") {
        //denne function sørger for at formularen ikke bliver sendt afsted
        evt.preventDefault()
        error = "udfyld venligst din adresse!"
        this.adress.placeholder = error
        this.adress.classList.add('fail');
      
        //vi fokusere makøren i inputfeltet med name navn
        this.adress.focus()
       
        return false;
    } else {
        this.adress.classList.remove('fail');
    }


    //Nu tjekker vi bynavnet
    if (this.town.value == "") {
        //denne function sørger for at formularen ikke bliver sendt afsted
        evt.preventDefault()
        error = "skriv venligst bynavnet"
        this.town.placeholder = error
        this.town.classList.add('fail');
   
        //vi fokusere makøren i inputfeltet med name navn
        this.town.focus()
       
        return false;
    } else {
        this.town.classList.remove('fail');
    }

    //Nu tjekker jeg postnummeret 

    if (this.zipCode.value == "") {
        //denne function sørger for at formularen ikke bliver sendt afsted
        evt.preventDefault()
        error = "skriv venligst bynavnet"
        this.zipCode.placeholder = error
        this.zipCode.classList.add('fail');
   
        //vi fokusere makøren i inputfeltet med name navn
        this.zipCode.focus()
       
        return false;
    } else {
        this.zipCode.classList.remove('fail');
    }
   //Nu kommer vi til email
     // email validering, skal udfyldese og skal matche regular expression for en email
    const regxp_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let email1Val = this.eMail.value;
    if (email1Val == "") {
        evt.preventDefault();
        this.eMail.focus();
        error = "Indtast din email!";
        this.eMail.placeholder = error
        this.eMail.classList.add('fail');
        
        return false;
    } else if (!regxp_email.test(this.eMail.value)) {
        evt.preventDefault();
        this.eMail.focus();
        error = "Din email skal indeholde bogstaver - @ - bogstaver - . - bogstaver (test@mail.dk)";
        
        this.eMail.placeholder = error
   
        return false;
    } else {
        this.eMail.classList.remove('fail');
       
    }
//Nu tjekker vi kortnummeret
if (this.cardNum.value == "") {
    //denne function sørger for at formularen ikke bliver sendt afsted
    evt.preventDefault()
    error = "udfyld venligst dit kortNummer :)"
    this.cardNum.placeholder = error
    this.cardNum.classList.add('fail');
  
    //vi fokusere makøren i inputfeltet med name navn
    this.cardNum.focus()
   
    return false;
} else if(this.cardNum.value < 16){
    error = "DET SKAL VÆRE HELE NUMMERET TAK :("
    this.cardNum.placeholder = error
}
else {
    this.cardNum.classList.remove('fail');
}

    

    //nu er det tid til udløbsdato

    if(this.expirationDate.value == "") {
        //denne function sørger for at formularen ikke bliver sendt afsted
        evt.preventDefault()
        error = "udløbsDato Tak :)"
        this.expirationDate.placeholder = error
        this.expirationDate.classList.add('fail');
      
        //vi fokusere makøren i inputfeltet med name navn
        this.expirationDate.focus()
       
        return false;
    }else{
        this.expirationDate.classList.remove('fail');
    }

//Nu tjekker vi CVV

    if(this.cardCvv.value == "") {
        //denne function sørger for at formularen ikke bliver sendt afsted
        evt.preventDefault()
        error = "et lille CVV"
        this.cardCvv.placeholder = error
        this.cardCvv.classList.add('fail');
      
        //vi fokusere makøren i inputfeltet med name navn
        this.cardCvv.focus()
       
        return false;
    }else{
        this.cardCvv.classList.remove('fail');
    }
//Nu tjekker vi navn
if(this.name.value == "") {
    //denne function sørger for at formularen ikke bliver sendt afsted
    evt.preventDefault()
    error = "Dit navn tak!"
    this.name.placeholder = error
    this.name.classList.add('fail');
  
    //vi fokusere makøren i inputfeltet med name navn
    this.name.focus()
   
    return false;
}else{
    this.name.classList.remove('fail');
}
}