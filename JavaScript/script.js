// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



 // Define the Dialog and its properties.
function fnOpenNormalDialog() {
 
  $("#dialog-confirm").dialog({
      resizable: false,
      modal: true,
      title: "Select Character",
      height: 200,
      width: 450,
      create: function (e, ui) {
          var pane = $(this).dialog("widget").find(".ui-dialog-buttonpane")
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

$(document).on("change", ".Upper_Case input", function () {
  
  if(this.checked)
  {
  upper=true;
  }
  else{
    upper=false;
  }
  
})

 
$(document).on("change", ".Lower_Case input", function () {
  
  if(this.checked)
  {
    lower=true;
  }
  else{
    lower=false;
  }
  
})

$(document).on("change", ".Number_ input", function () {
  
  if(this.checked)
  {
    number=true;
  }
  else{
    number=false;
  }
  
})

$(document).on("change", ".Symbol_ input", function () {
  
  if(this.checked)
  {
    symbol=true;
  }
  else{
    symbol=false;
  }
  
})

