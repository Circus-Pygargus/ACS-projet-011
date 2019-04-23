/* ############################### variables #########################*/

// on pointe sur les champs
var fullName = document.querySelector("#fullName");
var eMail = document.querySelector("#eMail");
var theMessage = document.querySelector("#theMessage");

// on chope les endroits où afficher les erreurs s'il y en a
var fullNameErrorPlace = document.querySelector("#fullNameErrorPlace");
var eMailErrorPlace = document.querySelector("#eMailErrorPlace");
var theMessageErrorPlace = document.querySelector("#theMessageErrorPlace");

// ici c'est le submit
var myForm = document.querySelector("myForm");

// les regEx
var regExFullName = /^[a-zA-ZàâéèêëïôùûçÀÂÉÈÔÙÛÇ]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/gi;
var regExEmail  = "";
var regExtheMessage = "";


/* ############################# eventListeners ###############################*/
// full name input
fullName.addEventListener("blur", function(){
  checkInputContent (fullName, regExFullName,  fullNameErrorPlace, event);
});

// email input
eMail.addEventListener("blur", function(){
  checkInputContent (eMail, regExEmail,  eMailErrorPlace, event);
});

// email input
theMessage.addEventListener("blur", function(){
  checkInputContent (theMessage, regExtheMessage, theMessageErrorPlace, event);
});


/* ############################### Functions #################################*/
/* check input content function
    arguments :
      1 _inputToCheck : the input to check
      2 _regEx : the regular expression to compare with
      3 _errorPlace : the place to fill out with error message if needed
      4 _event : l'évènement qui a déclenché l'action
*/
function checkInputContent (_inputToCheck, _regEx, _errorPlace, _event) {
  // error counter
  var errorInputCounter = 0;
  // first, prevent sending the form
  _event.preventDefault();
  // is the input empty ?
  if (_inputToCheck.value == "") {
    // increment the counter
    errorInputCounter++;
    // message under the input
    _errorPlace.innerHTML = "Il faut renseigner ce champ !";
  }
  // is the rexEx respected ?
  else if (!_regEx.test(_inputToCheck.value)) {
    // increment counter
    errorInputCounter++;
    // message under the input
    _errorPlace.innerHTML = "Tu sais pas écrire ton nom ?";
  }

  // is there any error ?
  if (errorInputCounter != 0) {
    // border red on the input
    _inputToCheck.style.borderColor = "red";
    // change text color because it's transparent by default
    _errorPlace.style.color = "red";
  }
  // no error : text transparent and border-color as default
  else {
    // border red on the input
    _inputToCheck.style.borderColor = "white";
    // change text color because it's transparent by default
    _errorPlace.style.color = "transparent";
  }
}



// eventListeners
// fullName.addEventListener("blur", checkName);
// eMail.addEventListener("blur", checkEmail);
// theMessage.addEventListener("blur", checkMessage);
// myForm.addEventListener("submit", checkAll);


// // verifie le champ name
// function checkName (event) {
//   // on empêche l'envoi du formulaire
//   event.preventdefault();
//   // récup du contenu du champ
//   var nameToCheck = fullName.value;
//   // regEx
//   // var regularExpression = 
// }


// // verifie le champ email
// function checkEmail (event) {
//   // on empêche l'envoi du formulaire
//   event.preventdefault();
//   // récup du contenu du champ
//   var emailToCheck = eMail.value;
// }


// // vérifie le champ message
// function checkMessage (event) {
//   // on empêche l'envoi du formulaire
//   event.preventdefault();
//   // récup du contenu du champ
//   var messageToCheck = theMessage.value;
// }


// // vérifie le tout
// function checkAll (event) {
//   // on commence par check tous les champs
//   checkName();
//   checkEmail();
//   checkMessage();
  
//   // on empêche l'envoi du formulaire
//   event.preventdefault();
// }