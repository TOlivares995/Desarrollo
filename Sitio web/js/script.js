// <!-- SCRIPTS -->
$(document).ready(function(){
    $('.slider1').bxSlider({
    });

  });

  function validarRut() {

    var rut = document.getElementById("rut").value;
    var txtRut = document.getElementById("rut");

    //Campo obligatorio
    if (rut == null || rut.length == 0 || /^\s+$/.test(rut)) {
            alert('ERROR: El campo rut no debe ir vacío');
            txtRut.classList.add('error');
    } else {
        txtRut.classList.remove('error');
    }
}

  function validarNombre() {

    var nombre = document.getElementById("nombre").value;
    var txtNombre = document.getElementById("nombre");

    //Campo obligatorio
    if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
        alert('ERROR: El campo nombre no debe ir vacío');
        txtNombre.classList.add('error');
    } else {
        txtNombre.classList.remove('error');
    }
}
function validarApellido() {

  var apellido = document.getElementById("apellido").value;
  var txtApellido = document.getElementById("apellido");

  //Test campo obligatorio
  if (apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
      alert('ERROR: El campo apellido no debe ir vacío');
      txtApellido.classList.add('error');
  } else {
      txtApellido.classList.remove('error');
  }
}


function validarCorreo() {

    var correo = document.getElementById("mail").value;
    var txtCorreo = document.getElementById("mail");

    //Test correo
    if (correo == null || correo.length == 0 || !(/\S+@\S+\.\S+/.test(correo))) {
        alert('ERROR: Debe escribir un correo válido');
        txtCorreo.classList.add('error');
    } else {
        txtCorreo.classList.remove('error');
    }
}

function validarFormulario() {
    validarRut();
    validarNombre();
    validarCorreo();
    validarApellido();
    
}
