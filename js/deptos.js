// Evento para el mapa de El Salvador
let departamentos = [["santaana", "Santa Ana", 264.091, "Santa Ana", "Santaneco"], ["ahuachapan", "Ahuachapán", 129.750, "Ahuachapán", "Ahuachapaneco"], ["chalatenango", "Chalatenango", 21.102, "Chalatenango", "Chalateco"], ["sonsonate", "Sonsonate", 72.951, "Sonsonate", "Sonsonateco"], ["lalibertad", "La Libertad", 843.500, "Santa Tecla", "Libertadense"], ["sansalvador", "San Salvador", 570.459, "San Salvador", "Capitalino"], ["cuscatlan", "Cuscatlán", 232.238, "Cojutepeque", "Cuscatleco"], ["cabañas", "Cabañas", 215.400, "Sensuntepeque", "Cabañiense"], ["lapaz", "La Paz", 320.379, "Zacatecoluca", "Pacense"], ["sanvicente", "San Vicente", 53.213, "San Vicente", "Vicentino"], ["usulutan", "Usulután", 73.75, "Usulután", "Usuluteco"], ["sanmiguel", "San Miguel", 247.126, "San Miguel", "Migueleño"], ["morazan", "Morazán", 251.447, "San Francisco Gotera", "Morazanece"], ["launion", "La Unión", 372.271, "La Unión", "Unionense"]];

const mapaDepto = document.getElementsByTagName('area');

for(let i = 0; i < mapaDepto.length; i++) {
   mapaDepto[i].addEventListener("mouseover", () => {
      for(let j = 0; j < departamentos.length; j++) {
         if(mapaDepto[i].getAttribute('alt') == departamentos[j][0]) {
            // Obteniendo los valores de los departamentos
            let img = departamentos[j][0];
            let departamento = departamentos[j][1];
            let poblacion = departamentos[j][2];
            let cabecera = departamentos[j][3];
            let gentilicio = departamentos[j][4];

            // Obteniendo los parrafos donde se agregaran los valores obtenidos del array
            let boxDepto = document.getElementById('depto');
            let boxImg = document.getElementById('boxImg');
            let boxPobla = document.getElementById('poblacion');
            let boxCabecera = document.getElementById('cabecera');
            let boxGentilicio = document.getElementById('gentilicio');

            // Agregando los valores a las cajas correspondientes
            boxDepto.textContent = departamento;
            boxImg.setAttribute("src","img/Departamentos/" + img + ".png");
            boxPobla.textContent = "Poblacion: " + poblacion + " hab";
            boxCabecera.textContent = "Cabecera: " + cabecera;
            boxGentilicio.textContent = "Gentilicio: " + gentilicio;
         }
      }
   })
}