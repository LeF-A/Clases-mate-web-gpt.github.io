const temasContenedor = document.getElementById("lista-temas");

// Obtener los datos de las bicicletas
fetch("temas.json")
  .then(response => response.json())
  .then(data => {
    // Almacenar los datos en una variable global
    window.temas = data.temas;
    // Mostrar las bicicletas en la página
    mostrartemas();
  })
  .catch(error => console.error(error));

// Función para mostrar las bicicletas en la página
function mostrartemas() {
  const temasContenedor = document.getElementById("lista-temas");
  temasContenedor.innerHTML = "";

  // Iterar sobre la lista de temas y agregar elementos a la página
  window.temas.forEach(tema => {
    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const img = document.createElement("img");

    h2.textContent = tema.nombre;
    p.textContent = tema.definicion;
    img.src = "img/" + tema.imagen; // agregar la ruta de la imagen

    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(img); // agregar la imagen al elemento de la lista

    temasContenedor.appendChild(li);
  });

}