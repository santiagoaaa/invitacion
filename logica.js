function buscarInvitadoPorCodigo(jsonData, codigoABuscar) {
    try {
      // Parsear el contenido JSONcodigoInvitaciones
      const invitaciones = jsonData.invitaciones;
      
      // Buscar el invitado por el código
      const invitadoEncontrado = invitaciones.find(invitaciones => invitaciones.codigoInvitaciones === codigoABuscar);
  
      if (invitadoEncontrado) {
        return invitadoEncontrado;
      } else {
        url = '/'
        location.href = url;
        return null;
      }
    } catch (error) {
      console.error('Error al analizar el JSON:', error);
      return null;
    }
  }
  // Ejemplo de uso
  const jsonData = {
    "invitaciones": [
      {
        "idInvitado": 1,
        "codigoInvitaciones": "XOhR",
        "nombre": "jessica rivera",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "jessica rivera" },
          { "nombre": "Wero el gatito" }
        ]
      },
      {
        "idInvitado": 2,
        "codigoInvitaciones": "xHNr",
        "nombre": "Santiago Alvarado",
        "numPases": 3,
        "nombrePases": [
          { "nombre": "Canicas" },
          { "nombre": "Pambazo" },
          { "nombre": "Romeo" }
        ]
      }
    ]
  };

  var params = new URLSearchParams(window.location.search);
  
  const codigoABuscar = params.get('codigo');
  console.log("Codigo a buscar " + codigoABuscar);

  if(codigoABuscar === "" || codigoABuscar === null){
    url = 'index.html'
    location.href = url;
  }

  const invitadoEncontrado = buscarInvitadoPorCodigo(jsonData, codigoABuscar);

  if (invitadoEncontrado) {
    console.log("Invitado encontrado:", invitadoEncontrado);
    document.getElementById("listaInvitados").innerHTML = obtenerNombres(invitadoEncontrado.nombrePases);
  } else {
    console.log("No se encontró ningún invitado con ese código.");
  }

  function obtenerNombres(listaPases){
    var nombres = "";
    listaPases.forEach(item => {
        nombres += item.nombre + ", "
    });
    console.log(nombres);
    return nombres;
  }