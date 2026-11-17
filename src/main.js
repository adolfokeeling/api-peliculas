
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const input = document.getElementById("nombre-pelicula");
const formulario = document.getElementById("form-busqueda");
const resultados = document.getElementById("resultados");

// Mostrar las películas en pantalla
function mostrarPeliculas(peliculas) {
  resultados.innerHTML = "";

  peliculas.forEach((pelicula) => {
    const anio = pelicula.release_date
      ? pelicula.release_date.slice(0, 4)
      : "Sin fecha";

    const sinopsis = pelicula.overview || "Sin sinopsis disponible.";

    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";

    const titulo = document.createElement("h3");
    titulo.textContent = pelicula.title;

    const fecha = document.createElement("p");
    fecha.className = "anio";
    fecha.textContent = anio;

    const descripcion = document.createElement("p");
    descripcion.className = "sinopsis";
    descripcion.textContent = sinopsis;

    if (pelicula.poster_path) {
      const imagen = document.createElement("img");
      imagen.src = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;
      imagen.alt = pelicula.title;
      tarjeta.appendChild(imagen);
    }

    tarjeta.append(titulo, fecha, descripcion);
    resultados.appendChild(tarjeta);
  });
}

// Buscar películas utilizando fetch()
async function buscarPeliculas(nombre) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(nombre)}&language=es-MX`;

  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error("Error al consultar TMDB");
  }

  return await respuesta.json();
}

// Ejecutar búsqueda sin recargar la página
formulario.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nombre = input.value.trim();

  if (!nombre) {
    resultados.textContent = "Escribí el nombre de una película.";
    return;
  }

  resultados.textContent = "Cargando películas...";

  try {
    const datos = await buscarPeliculas(nombre);

    if (datos.results.length === 0) {
      resultados.textContent = "Película no encontrada";
      return;
    }

    mostrarPeliculas(datos.results);
  } catch (error) {
    resultados.textContent =
      "Error de conexión. Intentá nuevamente.";
    console.error(error);
  }
});
const btnPopulares = document.getElementById("btnPopulares");

btnPopulares.addEventListener("click", async () => {
  resultados.textContent = "Cargando películas populares...";

  try {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-MX`;

    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error("Error al obtener películas populares");
    }

    const datos = await respuesta.json();

    mostrarPeliculas(datos.results);
  } catch (error) {
    resultados.textContent =
      "Error de conexión. Intentá nuevamente.";
    console.error(error);
  }
});
