<template>
  <div class="container mb-5">
    <h5 class="section-title">Onde estamos?</h5>
    <div class="d-flex flex-column position-relative">
      <div id="map" class="rounded" style="height: 420px; width: 100%;"></div>
      <div v-show="isLargeScreen">
        <div class="bg-white shadow position-absolute rounded d-flex flex-column p-3"
          style="max-height: 100%; max-width: 200px; left: 10px; top: 10px;">
          <img :src="require('@/assets/img/local-clinica.jpeg')" class="rounded" />
          <h5 style="font-size: 12px;" class="mt-2">Clínica Abertamente</h5>
          <p style="font-size: 12px;" class="m-0"><strong>Endereço:</strong></p>
          <p style="font-size: 12px;" class="m-0 mb-2">Rua Belo Horizonte, 1558 - Centro.</p>
          <p style="font-size: 12px;" class="m-0"><strong>Funcionamento:</strong></p>
          <p style="font-size: 12px;">Seg-Sex: 08:00 - 18:00</p>
          <a :href="'https://maps.app.goo.gl/g3CEto2FWgxh7W4w6'" target="_blank">
            <button class="btn btn-primary btn-sm w-100 d-flex justify-content-end align-items-center position-relative"
              style="font-size: 12px;">
              <span class="position-absolute" style="left: 50%; transform: translateX(-50%);">Ver Rotas</span>
              <img :src="require('@/assets/img/rotas.svg')" style="height: auto; width: 16px;" />
            </button>
          </a>
        </div>
      </div>
      <p class="m-0 mt-4">Apoio psicológico e emocional para você viver melhor.</p>

    </div>
  </div>
</template>


<script>
import { Loader } from '@googlemaps/js-api-loader';

export default {
  name: 'GoogleMap',
  data() {
    return {
      isLargeScreen: window.innerWidth >= 992,
    };
  },
  methods: {
    handleResize() {
      this.isLargeScreen = window.innerWidth >= 992;
    },
    async loadMap() {
      const loader = new Loader({
        apiKey: 'AIzaSyBztPzuJjueRREUXh3klDJhveKVK7_Q5x4',
        version: 'weekly',
      });

      try {
        const { Map } = await loader.importLibrary('maps');
        const { AdvancedMarkerElement } = await loader.importLibrary('marker');

        const map = new Map(document.getElementById('map'), {
          center: { lat: -23.31823771555449, lng: -51.16684439062751 },
          zoom: 18,
          mapId: '33177c9f4ed143ee',
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
          tilt: 70,
          heading: -18,
          gestureHandling: 'greedy', // Permite usar um dedo para interações
        });

        // Criação do conteúdo do marcador com ícone e rótulo
        const markerContent = document.createElement('div');
        markerContent.style.position = 'relative';
        markerContent.style.display = 'flex';
        markerContent.style.flexDirection = 'column';
        markerContent.style.alignItems = 'center';
        

        // Ícone personalizado
        const iconElement = document.createElement('img');
        iconElement.src = require('@/assets/img/teste.svg');
        iconElement.style.width = '60px';
        iconElement.style.height = '60px';

        // Label (rótulo)
        const labelElement = document.createElement('div');
        labelElement.textContent = 'Clínica Abertamente';
        labelElement.style.color = '#41b883';
        labelElement.style.fontSize = '14px';
        labelElement.style.fontWeight = '500';
        labelElement.style.margin = '0px';

        // Adicionando ícone e rótulo ao conteúdo do marcador
        markerContent.appendChild(iconElement);
        markerContent.appendChild(labelElement);

        // Criação do marcador usando AdvancedMarkerElement
        new AdvancedMarkerElement({
          position: { lat: -23.31823771555449, lng: -51.16684439062751 },
          map: map,
          content: markerContent,
          title: 'Clínica Abertamente',
        });

        // Criação do conteúdo do balão de detalhes (infowindow)
        const infoWindowContent = document.createElement('div');
        infoWindowContent.style.backgroundColor = '#ffffff';
        infoWindowContent.style.gap = '10px';
        infoWindowContent.style.margin = '0px';
        infoWindowContent.style.padding = '10px';
        infoWindowContent.style.maxHeight = '88px';
        infoWindowContent.classList.add('shadow', 'rounded', 'd-flex', 'flex-row');
        infoWindowContent.style.zIndex = '9999';

        // Definindo a URL da imagem usando require
        const localClinica = require('@/assets/img/local-clinica.jpeg');

        // Definindo o conteúdo HTML
        infoWindowContent.innerHTML = `
          <div class="d-flex flex-column align-items-center justify-content-center h-100" style="max-width: 78px;">
            <img src="${localClinica}" class="rounded w-100 h-100"/>
          </div>
          <div class="d-flex flex-column justify-content-between"> 
            <p style="margin: 0; font-size: 14px; font-weight: 500">Clinica Abertamente</p>
            <p style="margin: 0; font-size: 12px;">Rua Belo Horizonte, 1558 - Centro</p>
            <p style="margin: 0; font-size: 12px;" class="mt-1">Seg - Sex: 08:00 - 18:00</p>
          </div>
        `;

        const marker = new AdvancedMarkerElement({
          position: { lat: -23.31823771555449, lng: -51.16684439062751 },
          map: map,
          content: infoWindowContent,
          title: 'Detalhes da Clínica',
        });

        // Adicionar o evento de clique ao marcador
        marker.addListener('click', () => {
          window.open('https://maps.app.goo.gl/g3CEto2FWgxh7W4w6', '_blank');
        });

       // Posicionando o balão um pouco acima do marcador
        infoWindowContent.style.transform = 'translateY(-100%) translateY(-5px)';
      } catch (error) {
        console.error('Erro ao carregar o Google Maps:', error);
      }
    },
  },
  mounted() {
    // Listener para redimensionamento da janela
    window.addEventListener('resize', this.handleResize);
    this.loadMap();
  },
  beforeUnmount() {
    // Remover listener quando o componente for desmontado
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>





<style scoped>
#map {
  width: 100%;
  height: 420px;
}

.section-title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
}
</style>
