# 🎬 Buscador de Películas — TMDB

**Alumno:** Adolfo Keeling  
**Academia:** Kodigo.org  
**Curso:** Desarrollo FrontEnd

## Descripción del proyecto

Aplicación web desarrollada con HTML, CSS y JavaScript que permite buscar películas utilizando la API pública de The Movie Database (TMDB).

El proyecto utiliza `fetch()` para realizar solicitudes HTTP, procesa respuestas en formato JSON y actualiza los resultados dinámicamente mediante la manipulación del DOM, sin recargar la página.

## Funcionalidades

- Buscar películas por nombre.
- Consultar películas populares.
- Mostrar pósteres, títulos, años de lanzamiento y sinopsis.
- Mostrar un mensaje cuando no se encuentra una película.
- Manejar errores de conexión.
- Diseño adaptable a computadoras y dispositivos móviles.
- Fondo cinematográfico con cortinas rojas y palomitas.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Vite
- pnpm
- TMDB API

## Instalación y ejecución

Clonar el repositorio:

```bash
git clone https://github.com/adolfokeeling/api-peliculas.git
```

Ingresar al proyecto:

```bash
cd api-peliculas
```

Instalar dependencias:

```bash
pnpm install
```

Crear un archivo `.env` en la raíz del proyecto con la siguiente variable:

```env
VITE_TMDB_API_KEY=TU_API_KEY
```

Iniciar el servidor:

```bash
pnpm dev
```

Abrir la dirección local que indique Vite, normalmente `http://localhost:5173/`.

## API utilizada

The Movie Database (TMDB).

Endpoints utilizados:

- `/3/search/movie` — búsqueda de películas.
- `/3/movie/popular` — películas populares.

## Seguridad

El archivo `.env` está excluido de Git mediante `.gitignore`. Sin embargo, las variables `VITE_` se incorporan al código del navegador y no deben considerarse secretas. Para proteger una clave privada en producción se requiere una función de servidor.

## Autor

Adolfo Keeling  
Estudiante de Desarrollo FrontEnd — Kodigo.org

Proyecto académico de consumo de API y manipulación del DOM.
