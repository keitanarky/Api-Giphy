import './style.css'
import './bases/01-const-let'
import './bases/02-template-string'
import './bases/03=object-literal'
import './bases/08-import-export'
// import './bases/10-fetch-api'

const API_KEY = 'spqOUM7FsasYhzfS8tvHEcdkjWS7nUmK';

// Insertamos la portada directamente en #app
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #4e54c8, #8f94fb);
      color: white;
      text-align: center;
      padding: 40px;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 10px;
    }
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 40px;
    }
    .gif-card {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      padding: 15px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(8px);
    }
    img {
      width: 100%;
      border-radius: 12px;
    }
  </style>

  <h1>✨ GIFs Aleatorios desde GIPHY ✨</h1>
  <p>Se están cargando nuevos GIFs automáticamente...</p>

  <div class="container" id="gifContainer"></div>
`;

// Función que carga un gif
function loadGif() {
  fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      const imageUrl = data.data.images.original.url;
      const container = document.getElementById('gifContainer')!;

      const card = document.createElement('div');
      card.className = 'gif-card';

      const img = document.createElement('img');
      img.src = imageUrl;

      card.appendChild(img);
      container.appendChild(card);
    })
    .catch((err) => console.error(err));
}

// Cargar 8 GIF al inicio
for (let i = 0; i < 8; i++) {
  loadGif();
}

// Agregar 1 GIF nuevo cada 5 segundos
setInterval(() => loadGif(), 1000);
