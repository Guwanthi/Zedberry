function nameValidate(val){
  if(!isNaN(val)){
    document.getElementById("cName").value=""; 
    alert("You can only type letters in this field.");   
  }
}

function validateForm() {

let y = document.forms["Form"]["c_email"].value;
let x = document.forms["Form"]["c_message"].value;
  if (y == "" && x == "") {
    alert("Email and Message must be filled out");
    return false;
  }

  else if (y == "") {
    alert("Email must be filled out");
    return false;
  }
  
  else if (x == "") {
    alert("Message must be filled out");
    return false;
  }  
}


