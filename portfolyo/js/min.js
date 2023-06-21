
                   var input = document.querySelectorAll("form input,form textarea");                    
                       onkeyup = function(){
                         if(input[0].value.length == '30'){
                             input[0].style.border = "1px solid #FF0000";
                         }else{
                           input[0].style.border = "none";
                         } if(input[1].value.length == '60'){
                           input[1].style.border = "1px solid #FF0000";
                         }else{
                           input[1].style.border = "none";
                         }if(input[2].value.length == '16'){
                           input[2].style.border = "1px solid #FF0000";
                         }else{
                           input[2].style.border = "none";
                         }if(input[3].value.length == '30'){
                           input[3].style.border = "1px solid #FF0000";
                         }else{
                           input[3].style.border = "none";
                         } if(input[4].value.length == '200'){
                           input[4].style.border = "1px solid #FF0000";
                         }else{
                           input[4].style.border = "none";
                         }
                       }
    


$(document).ready(function() { 

                     // Validation Contact Form
                     var name = document.getElementById("name"),
                         email = document.getElementById("email"),
                         subject = document.getElementById("subject"),
                         msg = document.getElementById("msg"),
                         numero = document.getElementById("numero"),
                         error = document.getElementById("error"),
                         btn = document.getElementById("btn");
                     btn.onclick = function(e){
                        e.preventDefault();
                        if(name.value == ""){
                           error.textContent = "Please Entre Name";
                           error.classList.add("alert-danger");
                        }else if(email.value == ""){
                           error.textContent = "Please Entre Email";
                           error.classList.add("alert-danger");
                        }else if(numero.value == ""){
                           error.textContent = "Please Entre Phonne Number";
                           error.classList.add("alert-danger");
                        }else if(subject.value == ""){
                           error.textContent = "Please Entre Subject";
                           error.classList.add("alert-danger");
                        }else if(msg.value == ""){
                           error.textContent = "Please Entre Message";
                           error.classList.add("alert-danger");
                        }else{
                          error.textContent = "";
                          error.classList.remove("alert-danger");
                          $.ajax({
          type: 'POST',
          url: 'process.php',
          data: { name: name.value, email: email.value, subject: subject.value, msg: msg.value, numero: numero.value},
          success: function(response) {
             // $('#result').html(response);
             if(response){
              error.textContent = JSON.parse(response);
              error.classList.add("success");
              btn.disabled = 'true';
              setTimeout(function(){
                error.textContent = "";
                error.classList.remove("success");
                location.reload(true); 
              }, 8000);
             }                 
          }

      });

           }

      } 


});              
                   
                   
                   
                   
                   
            
  