function validation ( )
{
    document.getElementById("resultat").setAttribute("hidden",'hidden');
    document.getElementById("error").setAttribute("hidden",'hidden');

    if (document.getElementById("fname").value.length < 5 && document.getElementById("fname").value.length > 0 ) { 
        document.getElementById("error").innerHTML = "Le nom doit contenir au moins 5 caractères !";
         document.getElementById("error").removeAttribute("hidden");
	}
	else if (document.getElementById("fname").value.length == 0 ) { 
        document.getElementById("error").innerHTML = "Veuillez renseigner tous les champs  !";
         document.getElementById("error").removeAttribute("hidden");
	}
	
	  
    else if (document.getElementById("lname").value.length < 5 && document.getElementById("lname").value.length > 0 ) { 
        document.getElementById("error").innerHTML = "Le prénom doit contenir au moins 5 caractères !";
         document.getElementById("error").removeAttribute("hidden");
    }    
	else if (document.getElementById("lname").value.length == 0 ) { 
        document.getElementById("error").innerHTML = "Veuillez renseigner tous les champs  !";
         document.getElementById("error").removeAttribute("hidden");
	}
      
	  
    else if (document.getElementById("adresse").value.length < 5 && document.getElementById("adresse").value.length > 0 ) { 
        document.getElementById("error").innerHTML = "L'adresse doit contenir au moins 5 caractères !";
         document.getElementById("error").removeAttribute("hidden");
    }    
	else if (document.getElementById("adresse").value.length == 0 ) { 
        document.getElementById("error").innerHTML = "Veuillez renseigner tous les champs  !";
         document.getElementById("error").removeAttribute("hidden");
	}
	
	
    else if (document.getElementById("mail").value.length < 5 && document.getElementById("mail").value.length > 0 ) { 
        document.getElementById("error").innerHTML = "Veuillez renseigner tous les champs  !";
         document.getElementById("error").removeAttribute("hidden");
    }
	else if (document.getElementById("mail").value.length == 0 ) { 
        document.getElementById("error").innerHTML = "Veuillez renseigner tous les champs  !";
         document.getElementById("error").removeAttribute("hidden");
	} 
	
     else {
        document.getElementById("resultat").removeAttribute("hidden");
        document.getElementById("resultat").innerHTML = "Bienvenue Mr / Mm   " + document.querySelector("#lname").value
     }
 }