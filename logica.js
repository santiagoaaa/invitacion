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
          { "nombre": "Jessica Rivera" },
          { "nombre": "Santiago Alvarado" }
        ]
      },
      {
        "idInvitado": 2,
        "codigoInvitaciones": "xHNr",
        "nombre": "Jose Luis Ruiz Uitzil",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Jose Luis Ruiz Uitzil" }
        ]
      },
      {
        "idInvitado": 3,
        "codigoInvitaciones": "NYuD",
        "nombre": "Nancy Rivera Garcia",
        "numPases": 4,
        "nombrePases": [
          { "nombre": "Nancy Rivera Garcia" },
          { "nombre": "Francisco Javier Muñoz Buenavista" },
          { "nombre": "Brayan Emmanuel Mendoza Rivera" },
          { "nombre": "Axel Emilio Muñoz Rivera (Niño)" }
        ]
      },
      {
        "idInvitado": 4,
        "codigoInvitaciones": "vuXo",
        "nombre": "Maria de Jesus Garcia Perez (Mama Novia)",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Maria de Jesus Garcia Perez (Mamá Novia)" }
        ]
      },
      {
        "idInvitado": 5,
        "codigoInvitaciones": "mBoa",
        "nombre": "Maria de la Luz Garcia Perez",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Maria de la Luz Garcia Perez" },
          { "nombre": "Celestina Perez Perez" }
        ]
      },
      {
        "idInvitado": 6,
        "codigoInvitaciones": "uxgY",
        "nombre": "Roxana Medina Garcia",
        "numPases": 4,
        "nombrePases": [
          { "nombre": "Roxana Medina Garcia" },
          { "nombre": "Martín Patiño Martínez" },
          { "nombre": "Mateo Patiño Medina" },
          { "nombre": "Bruno Patiño Medina (niño)" }
        ]
      },
      {
        "idInvitado": 7,
        "codigoInvitaciones": "PBrO",
        "nombre": "Rogelio Garcia Perez",
        "numPases": 3,
        "nombrePases": [
          { "nombre": "Rogelio Garcia Perez" },
          { "nombre": "Toña" },
          { "nombre": "Valeria Garcia" }
        ]
      },
      {
        "idInvitado": 8,
        "codigoInvitaciones": "toNx",
        "nombre": "Leticia Garcia Perez",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Leticia Garcia Perez" }
        ]
      },
      {
        "idInvitado": 9,
        "codigoInvitaciones": "FwtY",
        "nombre": "Ana Karen Olvera Garcia",
        "numPases": 3,
        "nombrePases": [
          { "nombre": "Ana Karen Olvera Garcia" },
          { "nombre": "Abel Montoya" },
          { "nombre": "Ariana Montoya Olvera (Niña)" }
        ]
      },
      {
        "idInvitado": 10,
        "codigoInvitaciones": "PQiC",
        "nombre": "Karla Andrea Olvera Garcia",
        "numPases": 4,
        "nombrePases": [
          { "nombre": "Karla Andrea Olvera Garcia" },
          { "nombre": "Diego Flores Maruri" },
          { "nombre": "Jimena Flores Olvera (Niña)" },
          { "nombre": "Diego Flores Olvera (Niño)" }
        ]
      },
      {
        "idInvitado": 11,
        "codigoInvitaciones": "LWhx",
        "nombre": "Marcos Adrian Olvera Garcia",
        "numPases": 4,
        "nombrePases": [
          { "nombre": "Marcos Adrian Olvera Garcia" },
          { "nombre": "Yola" },
          { "nombre": "Kevin" },
          { "nombre": "Santi" }
        ]
      },
      {
        "idInvitado": 12,
        "codigoInvitaciones": "rnQC",
        "nombre": "Gely",
        "numPases": 3,
        "nombrePases": [
          { "nombre": "Gely" },
          { "nombre": "Rosa Maria Garcia Perez" },
          { "nombre": "Julia" }
        ]
      },
      {
        "idInvitado": 13,
        "codigoInvitaciones": "RJin",
        "nombre": "Alejandro Rivera Camacho (Papa Novia)",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Alejandro Rivera Camacho (Papa Novia)" }
        ]
      },
      {
        "idInvitado": 14,
        "codigoInvitaciones": "KRhz",
        "nombre": "Olivia Rivera Camacho",
        "numPases": 5,
        "nombrePases": [
          { "nombre": "Olivia Rivera Camacho" },
          { "nombre": "Israel Baltazar Rodríguez" },
          { "nombre": "Damaris Baltazar Rivera" },
          { "nombre": "Daniela Baltazar Rivera" },
          { "nombre": "Raúl Guerrero Acosta" }
        ]
      },
      {
        "idInvitado": 15,
        "codigoInvitaciones": "FuuB",
        "nombre": "Teresa Rivera Camacho",
        "numPases": 3,
        "nombrePases": [
          { "nombre": "Teresa Rivera Camacho" },
          { "nombre": "Miriam Salinas Rivera" },
          { "nombre": "Priscila Salinas Rivera" }
        ]
      },
      {
        "idInvitado": 16,
        "codigoInvitaciones": "ziQF",
        "nombre": "Maribel Rivera Camacho",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Maribel Rivera Camacho" }
        ]
      },
      {
        "idInvitado": 17,
        "codigoInvitaciones": "Beue",
        "nombre": "Sonia Morelos Rivera",
        "numPases": 3,
        "nombrePases": [
          { "nombre": "Sonia Morelos Rivera" },
          { "nombre": "Miguel Angel Garcia Perez" },
          { "nombre": "Javier Garcia Morelos (Niño)" }
        ]
      },
      {
        "idInvitado": 18,
        "codigoInvitaciones": "cURg",
        "nombre": "Christian Morelos Rivera",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Christian Morelos Rivera" },
          { "nombre": "Juan Esposo de chris" }
        ]
      },
      {
        "idInvitado": 19,
        "codigoInvitaciones": "jbRT",
        "nombre": "Luis Enrique Cerrito Rodriguez",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Luis Enrique Cerrito Rodriguez" }
        ]
      },
      {
        "idInvitado": 20,
        "codigoInvitaciones": "mcaE",
        "nombre": "Dylan Javier Alejos Alva",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Dylan Javier Alejos Alva" },
          { "nombre": "Anabel Alva Guerrero" }
        ]
      },
      {
        "idInvitado": 21,
        "codigoInvitaciones": "MOJm",
        "nombre": "Rodo",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Rodo" }
        ]
      },
      {
        "idInvitado": 22,
        "codigoInvitaciones": "lHyw",
        "nombre": "Diego",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Diego" }
        ]
      },
      {
        "idInvitado": 23,
        "codigoInvitaciones": "sUhV",
        "nombre": "Isaac",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Isaac" }
        ]
      },
      {
        "idInvitado": 24,
        "codigoInvitaciones": "AKzl",
        "nombre": "Paola Daniela Ramos Rodriguez",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Paola Daniela Ramos Rodriguez" },
          { "nombre": "Acompañante" }
        ]
      },
      {
        "idInvitado": 25,
        "codigoInvitaciones": "GSPP",
        "nombre": "Marisol",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Marisol" }
        ]
      },
      {
        "idInvitado": 26,
        "codigoInvitaciones": "BVGK",
        "nombre": "Ana Maria Cano",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Ana Maria Cano" },
          { "nombre": "Acompañante" }
        ]
      },
      {
        "idInvitado": 27,
        "codigoInvitaciones": "MgHc",
        "nombre": "Sergio Camaho Uribe",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Sergio Camaho Uribe" }
        ]
      },
      {
        "idInvitado": 28,
        "codigoInvitaciones": "BqmH",
        "nombre": "Juan Armando Flores Garcia",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Juan Armando Flores Garcia" },
          { "nombre": "Tanya Clorio Ayala" }
        ]
      },
      {
        "idInvitado": 29,
        "codigoInvitaciones": "IOYG",
        "nombre": "Jose Cruz Diaz Lopez",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Jose Cruz Diaz Lopez" },
          { "nombre": "Maria Hortencia Morales Lopez" }
        ]
      },
      {
        "idInvitado": 30,
        "codigoInvitaciones": "xCzD",
        "nombre": "Raul Garcia Perez",
        "numPases": 3,
        "nombrePases": [
          { "nombre": "Raul Garcia Perez" },
          { "nombre": "Raul Daniel Garcia" },
          { "nombre": "Litzy Daniela Garcia" }
        ]
      },
      {
        "idInvitado": 31,
        "codigoInvitaciones": "sWfn",
        "nombre": "Arleth Mendoza",
        "numPases": 4,
        "nombrePases": [
          { "nombre": "Arleth Mendoza" },
          { "nombre": "Neftali Mendoza" },
          { "nombre": "Jacob Mendoza" },
          { "nombre": "Lea Mendoza" }
        ]
      },
      {
        "idInvitado": 32,
        "codigoInvitaciones": "dZNC",
        "nombre": "Martin Garcia Perez",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Martin Garcia Perez" }
        ]
      },
      {
        "idInvitado": 33,
        "codigoInvitaciones": "LgHH",
        "nombre": "Maria Camacho Tinajero",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Maria Camacho Tinajero" },
          { "nombre": "David Rivera Cerrano" }
        ]
      },
      {
        "idInvitado": 34,
        "codigoInvitaciones": "IOHR",
        "nombre": "Consultores",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Consultores" }
        ]
      },
      {
        "idInvitado": 35,
        "codigoInvitaciones": "zyCd",
        "nombre": "Eyder Alonso Perera Herrera",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Eyder Alonso Perera Herrera" },
          { "nombre": "1 Acompañante" }
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
        nombres += "<li>" + item.nombre + "</li>"
    });
    return nombres;
  }