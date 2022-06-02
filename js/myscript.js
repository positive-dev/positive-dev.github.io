function sendForm() {
    let correo=document.getElementsByName("email")[0].value;
    let nombre=document.getElementsByName("nombre")[0].value;
    let apellido=document.getElementsByName("apellido")[0].value;
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido= expReg.test(correo);
    if(correo.length==0 || apellido.length==0 || nombre.length==0){
        alert("Campos Vacios. Completelos adecuadamente.");
    }else{
        if(esValido){
            alert("Subscripto Correctamente!")
        }else{
            alert("El Correo Electronico NO es Válido");
        }
    }
    return false;
  }