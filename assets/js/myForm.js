/* ############################### variables #########################*/

// on pointe sur les champs
var fullName = document.querySelector("#fullName");
var eMail = document.querySelector("#eMail");
var theMessage = document.querySelector("#theMessage");

// on chope les endroits où afficher les erreurs s'il y en a
var fullNameErrorPlace = document.querySelector("#fullNameErrorPlace");
var eMailErrorPlace = document.querySelector("#eMailErrorPlace");
var theMessageErrorPlace = document.querySelector("#theMessageErrorPlace");
var submitErrorPlace = document.querySelector("#submitErrorPlace");

// ici c'est le submit
var myForm = document.querySelector("#myForm");

// // les regEx
// var regExFullName = new RegExp(/^[a-zA-ZàâéèêëîïôùûçÀÂÉÈÔÙÛÇ]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/gi);
// var regExFullName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

/* caracters supported with next one :
    abcdefghijklmnopqrstwxyz
    ABCDEFGHIJKLMNOPQRSTUVWXYZ
    áéíóúäëïöüÄ'
    陳大文
    łŁőŐűŰZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųū
    ÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁ
    ŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ.-
    ñÑâê都道府県Федерации
    আবাসযোগ্য জমির걸쳐 있는
*/
var regExFullName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
var regExEmail  = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
var regExtheMessage = /.{3,}\s?/;

// we'll need an error counter on inputs
var errorInputCounter;


/* ############################# eventListeners ###############################*/
// full name input
fullName.addEventListener("blur", function(){
  checkInputContent(fullName, regExFullName,  fullNameErrorPlace, event, "fullName");
});

// email input
eMail.addEventListener("blur", function(){
  checkInputContent(eMail, regExEmail,  eMailErrorPlace, event, "eMail");
});

// email input
theMessage.addEventListener("blur", function(){
  checkInputContent(theMessage, regExtheMessage, theMessageErrorPlace, event, "theMessage");
});

// form submit
myForm.addEventListener("submit", function(_event){
  checkEachInputAfterSubmit(event);
});



/* ############################### Functions #################################*/

/* check input content function
    arguments :
      1 _inputToCheck : the input to check
      2 _regEx : the regular expression to compare with
      3 _errorPlace : the place to fill out with error message if needed
      4 _event : the event which has triggered the eventlistener
      5 _whoIsChecked : this should be some text to know who we're talking about while sending error :
            here : "fullName", "eMail" or "theMessage"
*/
function checkInputContent (_inputToCheck, _regEx, _errorPlace, _event, _whoIsChecked) {
  // reset error counter
  errorInputCounter = 0;
  // first, prevent sending the form
  _event.preventDefault();
  // is the input empty ?
  if (_inputToCheck.value == "") {
    // increment the counter
    errorInputCounter++;
    // message under the input
    _errorPlace.innerHTML = "Please fill out this field !";
  }
  // is the rexEx respected ?  
  else if (!_inputToCheck.value.match(_regEx)) {
    // increment counter
    errorInputCounter++;
    // need to know where error occured to give a custom error message
    switch (_whoIsChecked) {
      case "fullName" :
        _errorPlace.innerHTML = "Could you please write your name correctly ?";
        break;
      case "eMail" :
        _errorPlace.innerHTML = "Please give a valid email adress.";
        break;
      case "theMessage" :
        _errorPlace.innerHTML = "your message has some invalid characters.";
        break;
    }
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



// a submit has been tried
function checkEachInputAfterSubmit (_event) {

  // first, prevent sending the form
  _event.preventDefault();

  // reset main error counter
  var errorSubmitCounter = 0;

  // check fields again and increment counter if error
  checkInputContent(fullName, regExFullName,  fullNameErrorPlace, event, "fullName");
  errorSubmitCounter += errorInputCounter;
  checkInputContent(eMail, regExEmail,  eMailErrorPlace, event, "eMail");
  errorSubmitCounter += errorInputCounter;
  checkInputContent(theMessage, regExtheMessage, theMessageErrorPlace, event, "theMessage");
  errorSubmitCounter += errorInputCounter;

  // error detected
  if (errorSubmitCounter != 0) {
    // display a global error message
    submitErrorPlace.style.color = "red";
    submitErrorPlace.innerHTML = "Each field need to be valid to send the message.";
  }
  // no error, we can send the message to the server
  else {
    submitErrorPlace.style.color = "green";
    submitErrorPlace.innerHTML = "Message would be sent if it was a real site ...";
  }
}