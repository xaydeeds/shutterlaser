function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    

function checkEMAIL()
{
    if(validateEmail(document.getElementById("gmail").value)) {
        console.log(validateEmail(document.getElementById("gmail").value));
        document.getElementById("gmail").style = "border: 1px solid #5dc26a!important;";
        return true
    }
    document.getElementById("gmail").style = "border: 1px solid #f54336!important;";
    console.log(validateEmail(document.getElementById("gmail").value));
    return false
}

window.onload = function() {
    document.getElementById('botondescargar').addEventListener('click', function(event) {
        if(checkEMAIL() === true) {
            window.open('file:///C:/Users/youst/Desktop/Nueva%20carpeta%20(7)/Multi-Layer-Mandala-Sea-Turtle.zip', '_blank').focus();
        }
    });
}