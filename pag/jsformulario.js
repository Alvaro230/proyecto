function validar() {
    
    var nombre, apellido, mail, tlf, expresion;
    
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    mail = document.getElementById("mail").value;
    tlf = document.getElementById("tlf").value;
    
    expresion = /\w+@\w+\.+[a-z]/;
    
    /**************************************/
    
    if ( nombre === "" || apellido === "" || mail === "" || tlf === "") {
        alert("Todos los campos obligatorios deben de estar rellenos");
        return false;
    }
    else if (nombre.length > 15) {
        alert("El nombre es demasiado largo");
        return false;
    }else if (apellido.length > 15) {
        alert("El apellido es demasiado largo");
        return false;
    }else if (!expresion.test(mail)) {
        alert("El correo no es valido");
        return false;
    }
    else if (tlf.length != 9) {
        alert("Telefono incorrecto");
        return false;
    }
    else{
        return true;
    }
}