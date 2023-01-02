// Assignment Code
var upper =false;
var lower =false;
var number =false;
var symbol =false;
var passwordlength;



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Define the Dialog and its properties.
function fnOpenNormalDialog() {
  document.getElementById("password").value = "";
  $("#dialog-confirm").dialog({
    resizable: false,
    modal: true,
    title: "Select Character",
    //height: 250,
    //width: 450,
    modal: true,
    autoOpen: true,
    draggable: false,
    resizable: false,
    width: "auto",
    position: { my: "center", at: "center", of: window },
    
    create: function (e, ui) {
      var pane = $(this).dialog("widget").find(".ui-dialog-buttonpane")
      $("<label class='Length_' ><input  type='Number' max='128' min='8'/> Length</label>").prependTo(pane)

      $("<label class='Upper_Case' ><input  type='checkbox'/> Upper Case</label>").prependTo(pane)
      $("<label class='Lower_Case' ><input  type='checkbox'/> Lower Case</label>").prependTo(pane)
      $("<label class='Number_' ><input  type='checkbox'/> Number</label>").prependTo(pane)
      $("<label class='Symbol_' ><input  type='checkbox'/> Symbol</label>").prependTo(pane)
    },


    buttons: {
      "Generate": function () {
        $(this).dialog('close');
        callback(true);
      }
    }
  });
}

// Define Check Box Checked Action.

$('#generate').click(fnOpenNormalDialog);

$(document).on("change", ".Lower_Case input", function () {

  if (this.checked) {
    lower = true;
  }
  else {
    lower = false;
  }

})

$(document).on("change", ".Upper_Case input", function () {

  if (this.checked) {
    upper = true;
  }
  else {
    upper = false;
  }

})


$(document).on("change", ".Lower_Case input", function () {

  if (this.checked) {
    lower = true;
  }
  else {
    lower = false;
  }

})

$(document).on("change", ".Number_ input", function () {

  if (this.checked) {
    number = true;
  }
  else {
    number = false;
  }

})


$(document).on("change", ".Symbol_ input", function () {

  if (this.checked) {
    symbol = true;
  }
  else {
    symbol = false;
  }

})

$(document).on("change", ".Length_ input", function () {

  if (this.value>=8) {
    passwordlength=this.value;
  }
  else {
    passwordlength= randomNumber(8, 128);
  }

})

// Select Random Number Between 8-128.
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// function Select Random Lowercase
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// function Select Random Uppercase
function getRandomUper() {
  const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return symbols[Math.floor(Math.random() * symbols.length)];
}


// function Select Random Numeric
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// function Select Random special characters
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// function Generate Password

function generatePassword(number, symbol, upperCase, lowerCase, length) {
  let generatedPassword = '';
  let variationsCount = [number, symbol, upperCase, lowerCase].length

  for (let i = 0; i < length; i++) {
    if (upperCase) {
      generatedPassword += getRandomUper();
    }
    if (symbol) {
      generatedPassword += getRandomSymbol();
    }
    if (number) {
      generatedPassword += getRandomNumber();
    }
    if (lowerCase) {
      generatedPassword += getRandomLower();
    }

  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}


//Action SPM ;
function callback(value) {
  if (value) {




    var key = randomNumber(8, 120);

    if (upper || lower || number || symbol == true) {
      document.getElementById("password").value = generatePassword(number, symbol, upper, lower, passwordlength)

    }
    else {
      alert(" ⚠️ Please select atleast one character type");
      document.getElementById("password").value = "";
    }



  } else {
    alert("Rejected");
    document.getElementById("password").value = "";
  }
}



