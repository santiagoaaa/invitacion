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
          { "nombre": "Maria de Jesus Garcia Perez" },
          { "nombre": "Jesus Gutierrez Rodriguez" },
          { "nombre": "Jesus Gutierrez Gonzalez" },
          { "nombre": "Laura Yesenia Lopez Rodriguez" }
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
          { "nombre": "Antonia Patiño Martinez" },
          { "nombre": "Valeria Garcia Patiño" }
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
          { "nombre": "Karen Olvera Garcia" },
          { "nombre": "Abel Montoya Martinez" },
          { "nombre": "Ariana Montoya Olvera (Niña)" }
        ]
      },
      {
        "idInvitado": 10,
        "codigoInvitaciones": "PQiC",
        "nombre": "Karla Andrea Olvera Garcia",
        "numPases": 4,
        "nombrePases": [
          { "nombre": "Andrea Olvera Garcia" },
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
          { "nombre": "Yolanda Nava Maya" },
          { "nombre": "Kevin Olvera Nava (Niño)" },
          { "nombre": "Santiago Olvera Nava (Niño)" }
        ]
      },
      {
        "idInvitado": 12,
        "codigoInvitaciones": "rnQC",
        "nombre": "Gely",
        "numPases": 3,
        "nombrePases": [
          { "nombre": "Angelica Perez Garcia" },
          { "nombre": "Rosa Maria Garcia Perez" },
          { "nombre": "Julia Herrera Perez" }
        ]
      },
      {
        "idInvitado": 13,
        "codigoInvitaciones": "RJin",
        "nombre": "Alejandro Rivera Camacho (Papa Novia)",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Alejandro Rivera Camacho" },
          { "nombre": "Miriam Aguilar" },
          { "nombre": "Valentina Rivera Aguilar (Niña)" }
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
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Christian Morelos Rivera" }
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
          { "nombre": "Rodolfo Guadalupe Frias Lugo" }
        ]
      },
      {
        "idInvitado": 22,
        "codigoInvitaciones": "lHyw",
        "nombre": "Diego",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Diego Pizano Lopez" }
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
          { "nombre": "Marisol Rodriguez Caballero" }
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
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Sergio Camaho Uribe" },
          { "nombre": "Acompañante" }
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
          { "nombre": "Jacob Mendoza (Niño)" },
          { "nombre": "Lea Mendoza (Niña)" }
        ]
      },
      {
        "idInvitado": 32,
        "codigoInvitaciones": "dZNC",
        "nombre": "Martin Garcia Perez",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Martin Garcia Perez" },
          { "nombre": "Julissa Garcia" }
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
        "nombre": "Eyder Alonso Perea Herrera",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Eyder Alonso Perera Herrera" },
          { "nombre": "1 Acompañante" }
        ]
      },
      {
        "idInvitado": 36,
        "codigoInvitaciones": "TaGA",
        "nombre": "Ma. Carmen Alva Arreguin",
        "numPases": 4,
        "nombrePases": [
          { "nombre": "Ma. Carmen Alva Arreguin" },
          { "nombre": "Gerado Rosiles Garcia" },
          { "nombre": "Kevin Imanol Rosiles Alva" },
          { "nombre": "Valeria Mendoza Contreras" }
        ]
      },
      {
        "idInvitado": 37,
        "codigoInvitaciones": "jawC",
        "nombre": "Juanita Alba Arreguin",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Juanita Alba Arreguin" },
          { "nombre": "Leopoldo Ortiz Uribe" }
        ]
      },
      {
        "idInvitado": 38,
        "codigoInvitaciones": "QsjJ",
        "nombre": "Claudia Iveth Ortiz Alba",
        "numPases": 4,
        "nombrePases": [
          { "nombre": "Claudia Iveth Ortiz Alba" },
          { "nombre": "Israel Rodriguez Saldaña" },
          { "nombre": "Maya Isibeth Rodriguez Ortiz" },
          { "nombre": "Eugenio Rodriguez Ortiz  (Niño)" }
        ]
      },
      {
        "idInvitado": 39,
        "codigoInvitaciones": "LnkA",
        "nombre": "Leopoldo Ortiz Alba",
        "numPases": 3,
        "nombrePases": [
          { "nombre": "Leopoldo Ortiz Alba" },
          { "nombre": "Marisa Flores Saldaña" },
          { "nombre": "Melisa Ortiz Flores (Niña)" }
        ]
      },
      {
        "idInvitado": 40,
        "codigoInvitaciones": "tEUv",
        "nombre": "Gerardo Alba Arreguin",
        "numPases": 7,
        "nombrePases": [
          { "nombre": "Gerardo Alba Arreguin" },
          { "nombre": "Laura Gallart Alcantara" },
          { "nombre": "Gerardo Alba Gallart" },
          { "nombre": "Novia Lalito" },
          { "nombre": "Diego Kisai Alba Gallart" },
          { "nombre": "Maria Jose" },
          { "nombre": "Iker Alba (Niño)" },
          {"nombre": "Yolanda Alcántara López"}
        ]
      },
      {
        "idInvitado": 41,
        "codigoInvitaciones": "dyhY",
        "nombre": "Guillermina Alba Arreguin",
        "numPases": 5,
        "nombrePases": [
          { "nombre": "Guillermina Alba Arreguin" },
          { "nombre": "Mayela Martinez Alba" },
          { "nombre": "Luis Eduardo Jara Martinez" },
          { "nombre": "Ricardo Lerma Martinez" },
          { "nombre": "Pedro Lerma Martinez" }
        ]
      },
      {
        "idInvitado": 42,
        "codigoInvitaciones": "zkiL",
        "nombre": "Guillermo Martinez Alba",
        "numPases": 3,
        "nombrePases": [
          { "nombre": "Guillermo Martinez Alba" },
          { "nombre": "Delfina Pozos" },
          { "nombre": "Camila Martinez (niña)" }
        ]
      },
      {
        "idInvitado": 43,
        "codigoInvitaciones": "NhqG",
        "nombre": "Lourdes Flores",
        "numPases": 4,
        "nombrePases": [
          { "nombre": "Lourdes Flores" },
          { "nombre": "Arturo Alba Lopez" },
          { "nombre": "Eliot Bravo Flores" },
          { "nombre": "Arturo Alba Flores" }
        ]
      },
      {
        "idInvitado": 44,
        "codigoInvitaciones": "OgZc",
        "nombre": "Sergio Alba Lopez",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Sergio Alba Lopez" }
        ]
      },
      {
        "idInvitado": 45,
        "codigoInvitaciones": "QgeI",
        "nombre": "Javier Alba Arreguin",
        "numPases": 3,
        "nombrePases": [
          { "nombre": "Javier Alba Arreguin" },
          { "nombre": "Laura Patricia Estrada" },
          { "nombre": "Valeria Alba Estrada" }
        ]
      },
      {
        "idInvitado": 46,
        "codigoInvitaciones": "lFXH",
        "nombre": "Laura Estefania Alba Estrada",
        "numPases": 3,
        "nombrePases": [
          { "nombre": "Laura Estefania Alba Estrada" },
          { "nombre": "Jorge Guitierrez Unzueta" },
          { "nombre": "Atenea Gutierrez Alba (niña)" }
        ]
      },
      {
        "idInvitado": 47,
        "codigoInvitaciones": "SHBe",
        "nombre": "Francisco Javier Alba Estrada",
        "numPases": 4,
        "nombrePases": [
          { "nombre": "Francisco Javier Alba Estrada" },
          { "nombre": "Karen" },
          { "nombre": "Fco Javier" },
          { "nombre": "Aitana " }
        ]
      },
      {
        "idInvitado": 48,
        "codigoInvitaciones": "mtyJ",
        "nombre": "Veronica Alba",
        "numPases": 8,
        "nombrePases": [
          { "nombre": "Veronica Alba" },
          { "nombre": "Eustaquio Herrera Soto" },
          { "nombre": "Gerardo Herrera Alba" },
          { "nombre": "Daniel Ulises Herrera Alba" },
          { "nombre": "Tabata Marina" },
          { "nombre": "Greko" },
          { "nombre": "Leonardo Herrera" },
          { "nombre": "Novia Leo" }
        ]
      },
      {
        "idInvitado": 49,
        "codigoInvitaciones": "QGtv",
        "nombre": "Margarita Alvarado Luna",
        "numPases": 3,
        "nombrePases": [
          { "nombre": "Margarita Alvarado Luna" },
          { "nombre": "Pedro Sachez" },
          { "nombre": "Pedro Sanchez Alvarado" }
        ]
      },
      {
        "idInvitado": 50,
        "codigoInvitaciones": "xvxa",
        "nombre": "Juanita Alvarado Luna",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Juanita Alvarado Luna" },
          { "nombre": "Liliana Dutel Alvarado" },
          { "nombre": "Elian" }
        ]
      },
      {
        "idInvitado": 51,
        "codigoInvitaciones": "CLRk",
        "nombre": "Antonio Rangel",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Antonio Rangel" }
        ]
      },
      {
        "idInvitado": 52,
        "codigoInvitaciones": "fCXS",
        "nombre": "Jorge Rico",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Jorge Rico" },
          { "nombre": "Acompañante" }
        ]
      },
      {
        "idInvitado": 53,
        "codigoInvitaciones": "vpAJ",
        "nombre": " Rodrigo Ibarra",
        "numPases": 2,
        "nombrePases": [
          { "nombre": " Rodrigo Ibarra" },
          { "nombre": "Georgina Torres" }
        ]
      },
      {
        "idInvitado": 54,
        "codigoInvitaciones": "AmLC",
        "nombre": "Daniel Rodriguez",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Daniel Rodriguez" },
          { "nombre": "Acompañante" }
        ]
      },
      {
        "idInvitado": 55,
        "codigoInvitaciones": "eolg",
        "nombre": "Daniel Zamudio",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Daniel Zamudio" }
        ]
      },
      {
        "idInvitado": 56,
        "codigoInvitaciones": "wjMA",
        "nombre": "Ana Karina Arredondo Salomon",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Ana Karina Arredondo Salomon" },
          { "nombre": "Miguel Angel Puga Rojas" }
        ]
      },
      {
        "idInvitado": 57,
        "codigoInvitaciones": "zgdu",
        "nombre": "Rodrigo Gutierrez",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Rodrigo Gutierrez" },
          { "nombre": "Vanessa Carmona Perez" }
        ]
      },
      {
        "idInvitado": 58,
        "codigoInvitaciones": "oTLZ",
        "nombre": "Javier Rico",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Javier Rico" },
          { "nombre": "Acompañante" }
        ]
      },
      {
        "idInvitado": 59,
        "codigoInvitaciones": "jpqw",
        "nombre": "Jaime",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Jaime" },
          { "nombre": "Acompañante" }
        ]
      },
      {
        "idInvitado": 60,
        "codigoInvitaciones": "mSnY",
        "nombre": "Ma. Guadalupe Alva Arreguin",
        "numPases": 3,
        "nombrePases": [
          { "nombre": "Ma. Guadalupe Alva Arreguin" },
          { "nombre": "Pedro Emilio Alvarado Alva" },
          { "nombre": "Mayra Guadalupe Alvarado Alva" }
        ]
      },
      {
        "idInvitado": 61,
        "codigoInvitaciones": "teub",
        "nombre": "Higinio Alvarado Luna",
        "numPases": 1,
        "nombrePases": [
          { "nombre": "Higinio Alvarado Luna" }
        ]
      },
      {
        "idInvitado": 62,
        "codigoInvitaciones": "seKZ",
        "nombre": "Marco Antorio Zaraut",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Marco Antorio Zaraut" },
          { "nombre": "Yaretzi Zaraut" }
        ]
      },
      {
        "idInvitado": 63,
        "codigoInvitaciones": "fyfZ",
        "nombre": "Karen López ",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Karen López" },
          { "nombre": "Heriberto González" }
        ]
      },
      {
        "idInvitado": 64,
        "codigoInvitaciones": "qmWa",
        "nombre": "Israel Montoya",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Israel Montoya" }
        ]
      },
      {
        "idInvitado": 65,
        "codigoInvitaciones": "snAt",
        "nombre": "Luis Alba Arreguin",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Luis Alba Arreguin" }
        ]
      },
      {
        "idInvitado": 66,
        "codigoInvitaciones": "hiis",
        "nombre": "Arcelia Mancera",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Arcelia Mancera" },
          { "nombre": "Nela Maldonado" }
        ]
      },
      {
        "idInvitado": 67,
        "codigoInvitaciones": "evtJ",
        "nombre": "Esther Nuñez",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Esther Nuñez" },
          { "nombre": "Pablo" }
        ]
      },
      {
        "idInvitado": 68,
        "codigoInvitaciones": "ZlHl",
        "nombre": "Alejandro Galera",
        "numPases": 2,
        "nombrePases": [
          { "nombre": "Alejandro Galera" },
          { "nombre": "Jessica Estrada" }
        ]
      }
    ]
  }
  
  

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