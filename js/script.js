
const form= document.querySelector('form');


form.addEventListener('submit', validateForm);
function validateForm(e){
  e.preventDefault();   
  const name=document.getElementById('name');
const lastName=document.getElementById('last-name');
const email=document.getElementById('email');
const pwd=document.getElementById('pwd');


  if(name.value ===""){
    
    const errName= document.getElementById('errName');
   errName.innerHTML="First Name can not be empty!";
    errName.style.color="red";
    name.style.borderColor="red";
    const nl= document.getElementById('nl');
   nl.style.display="block";

    } 


     if(lastName.value ===""){
      const errLast= document.getElementById('errLast');
   errLast.innerHTML="Last Name can not be empty!";
    errLast.style.color="red";
    lastName.style.borderColor="red";
    const ll= document.getElementById('ll');
   ll.style.display="block";

    }
    
     if(email.value ===""|| ! email.includes('@')){
      const errEmail= document.getElementById('errEmail');
      errEmail.innerHTML="Looks like this is not an email!";
      errEmail.style.color="red";
     email.style.borderColor="red";
      const el= document.getElementById('el');
   el.style.display="block";
     
    }
     if(pwd.value ===""){
      const errPwd= document.getElementById('errPwd');
      errPwd.innerHTML="Password can not be empty!";
      errPwd.style.color="red";
      pwd.style.borderColor="red";
      const bl= document.getElementById('pl');
      pl.style.display="block";
     
    }

  
 
  
}
  









