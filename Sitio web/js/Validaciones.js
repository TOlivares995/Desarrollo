function validar(){
var rut,nombre,apellido,correo,telefono,expresion;
rut=document.getElementById("rut").value;
nombre=document.getElementById("nombre").value;
apellido=document.getElementById("apellido").value;
correo=document.getElementById("correo").value;
telefono=document.getElementById("telefono").value;
expresion=/\w+@\w+\.+[a-z]/;

if (rut===""||nombre===""||apellido===""||correo===""||telefono===""){
    alert("Todos los campos son obligatorios");   
    return false;
}
else if(rut.length>12){
    alert("Rut demasiado largo");
    return false;
}

else if(nombre.length>10){
    alert("Nombre demasiado largo");
    return false;
}
else if(apellido.length>30){
    alert("Apellido demasiado largo");
    return false;
}
else if(correo.length>30){
    alert("Correo demasiado largo");
    return false;
}
else if(telefono.length>30){
    alert("Telefono demasiado largo");
    return false;
}

else if (!expresion.test(correo)){
    alert("El correo no es valido");
    return false;
}


}