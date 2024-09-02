<template>
  <div class="container mb-5 mt-3">
    <h5 class="section-title">Onde estamos?</h5>
    <div class="d-flex flex-column position-relative">
      <div id="map" class="rounded" :style="{ height: '420px', width: '100%' }"></div>
      <div class="bg-white shadow position-absolute rounded d-flex flex-column p-3"
        style="max-height: 100%; max-width: 200px; left: 10px; top: 10px;">
        <img :src="require('@/assets/img/local-clinica.jpeg')" class="rounded" />
        <h5 style="font-size: 12px;" class="mt-2">Clínica Abertamente</h5>
        <p style="font-size: 12px;" class="m-0"><strong>Endereço:</strong></p>
        <p style="font-size: 12px;" class="m-0 mb-2">Rua Belo Horizonte, 1558 - Centro.</p>
        <p style="font-size: 12px;" class="m-0"><strong>Funcionamento:</strong></p>
        <p style="font-size: 12px;">Seg-Sex: 08:00 - 18:00</p>
        <a :href="'https://maps.app.goo.gl/g3CEto2FWgxh7W4w6'" target="_blank">
          <button class="btn btn-primary btn-sm w-100" style="font-size: 12px;">Ver Rotas</button>
        </a>
      </div>

      <p class="m-0 mt-4">Apoio psicológico e emocional para você viver melhor.</p>

    </div>
  </div>
</template>


<script>
import { Loader } from '@googlemaps/js-api-loader';

export default {
  name: 'GoogleMap',
  async mounted() {
    this.$nextTick(async () => {
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
        labelElement.style.color = '#41B883';
        labelElement.style.fontSize = '14px';
        labelElement.style.fontWeight = 'bold';
        labelElement.style.marginTop = '0px';

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
        infoWindowContent.style.padding = '10px';
        infoWindowContent.style.backgroundColor = '#ffffff';
        infoWindowContent.style.borderRadius = '8px';
        infoWindowContent.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
        infoWindowContent.innerHTML = `
          <h5 style="margin: 0; font-size: 16px;">Clínica Abertamente</h5>
          <p style="margin: 0; font-size: 12px;">Rua Belo Horizonte, 1558 - Centro</p>
          <p style="margin: 0; font-size: 12px;">Seg-Sex: 08:00 - 18:00</p>
        `;

        // Posicionando o balão de detalhes acima do marcador
        new AdvancedMarkerElement({
          position: { lat: -23.31823771555449, lng: -51.16684439062751 },
          map: map,
          content: infoWindowContent,
          title: 'Detalhes da Clínica',
        });

        // Posicionando o balão um pouco acima do marcador
        infoWindowContent.style.transform = 'translateY(-100%) translateY(-10px)';

      } catch (error) {
        console.error('Erro ao carregar o Google Maps:', error);
      }
    });
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
