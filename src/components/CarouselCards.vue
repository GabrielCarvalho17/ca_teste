<template>
  <div v-show="mobile">
    <div class="container mb-4 mt-4">
      <h5 class="section-title">Nossa equipe</h5>
      <p class="section-description" style="margin: 0px;">
        Nossa equipe é formada por profissionais dedicados e experientes. Estamos comprometidos em fornecer o
        melhor cuidado possível.</p>
    </div>
    <div class="container position-relative d-flex align-items-center gap-3 mt-4">
      <div ref="scrollContainer" class="scroll-container">
        <div class="card-container">
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="container mb-4 mt-4">
      <p class="section-description" style="margin: 0px;">
        Cada membro possui uma especialização única, garantindo um atendimento completo e
        personalizado.
      </p>
    </div>
  </div>
  <div v-show="!mobile">
    <div class="container mb-4 mt-4">
      <h5 class="section-title">Nossa equipe</h5>
      <p class="section-description" style="margin: 0px;">
        Nossa equipe é formada por profissionais dedicados e experientes. Estamos comprometidos em fornecer o
        melhor cuidado possível.</p>
    </div>
    <div class="container position-relative d-flex align-items-center gap-3" style="margin-bottom: 30px;">

      <img src="@/assets/img/arrow-left-circle.svg" class="arrow-left arrow" alt="Previous" @click="prevSlide" />

      <div ref="scrollContainer" class="scroll-container">
        <div class="card-container">
          <slot></slot>
        </div>
      </div>

      <img src="@/assets/img/arrow-right-circle.svg" class="arrow-right arrow" alt="Next" @click="nextSlide" />
    </div>
    <div class="container mb-4">
      <p class="section-description" style="margin: 0px;">
        Cada membro possui uma especialização única, garantindo um atendimento completo e
        personalizado.
      </p>
    </div>
  </div>

</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: 'CarouselCards',
  setup() {
    const scrollContainer = ref(null);
    const mobile = ref(false);

    const scrollByPixels = (pixels) => {
      const container = scrollContainer.value;
      container.scrollBy({
        left: pixels,
        behavior: 'smooth',
      });
    };

    const prevSlide = () => {
      scrollByPixels(-266); // Rola 266 pixels para a esquerda
    };

    const nextSlide = () => {
      scrollByPixels(266); // Rola 266 pixels para a direita
    };

    const checkIsMobile = () => {
      mobile.value = window.innerWidth <= 1180;
    };

    onMounted(() => {
      checkIsMobile();
      window.addEventListener('resize', checkIsMobile);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', checkIsMobile);
    });

    return {
      scrollContainer,
      prevSlide,
      nextSlide,
      mobile,
    };
  },
};
</script>

<style scoped>
.scroll-container {
  overflow-x: scroll;
  scroll-behavior: smooth;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.card-container {
  display: flex;
  gap: 16px;
}

.arrow {
  cursor: pointer;
  width: 30px;
  height: 30px;
  z-index: 1;
}
</style>
