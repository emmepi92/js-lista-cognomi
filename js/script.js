var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];  
var userSurname = prompt("Inserisca il suo Cognome");   

cognomi.push(userSurname);  
cognomi.sort(); 

var outputList = document.getElementsByClassName("result-list")[0]; 
var result = '';    

for (i=0; i < cognomi.length; i++) {    
    result += '<li>' + cognomi[i] + '</li>';    
}   

outputList.innerHTML = result;  

var outputHtml = document.getElementById("result-position");    
var position = cognomi.indexOf(userSurname) + 1;    

outputHtml.innerHTML = 'Il suo cognome è in posizione ' + position; 