function sendData(){
    console.log("Diste click");
    var codigoInvitacion = document.getElementById("txtCodigo").value;
    url = '/invitacion.html?codigo=' + codigoInvitacion
    location.href = url;
}