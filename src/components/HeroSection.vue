<template>
  <div v-show="mobile">
    <div class="hero-section container d-flex flex-column"
      style="height: 600px; padding-top: 45px; margin-top: 60px; padding-bottom: 10px;">
      <div ref="sizeContainer" class="bg-white rounded text-secondary d-flex align-items-center justify-content-center"
        style="width: 100%; font-size: larger; height: 100%;">
     
      </div>
      <div class="text-center h-100 w-100 d-flex flex-column align-items-center justify-content-center">
        <h1>Cuide da sua mente, cuide de você.</h1>
        <p class="mt-3">
          Agende uma consulta para melhorar sua qualidade de vida. Estamos
          aqui para ajudar.
        </p>
        <button class="btn btn-primary mt-3">Marque sua consulta</button>
      </div>
    </div>
  </div>
  <div v-show="!mobile">
    <div class="hero-section d-flex flex-row"
      style="padding-top: 60px; margin-top: 60px; padding-bottom: 60px; height: 500px;">
      <div class="container d-flex flex-row gap-5">
        <div class="rounded d-flex align-items-center position-relative"
          style="padding: 24px; padding-left: 0px; width: 35%;">
          <div class="text-center position-absolute d-flex flex-column align-items-center">
            <h1>Cuide da sua mente, cuide de você.</h1>
            <p class="mt-3">
              Agende uma consulta para melhorar sua qualidade de vida. Estamos
              aqui para ajudar.
            </p>
            <button class="btn btn-primary mt-4">Marque sua consulta</button>
          </div>
        </div>
        <div ref="sizeContainer"
          class="bg-white rounded text-secondary d-flex align-items-center justify-content-center"
          style="width: 75%; font-size: larger;">
      
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      mobile: false,
    };
  },
  methods: {
    checkIsMobile() {
      this.mobile = window.innerWidth <= 1180;
    }
  },
  mounted() {
    this.checkIsMobile();
    window.addEventListener('resize', this.checkIsMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIsMobile);
  },
};
</script>


<style scoped>
.hero-section {
  background-color: #D9D9D9;
  width: 100%;
}

@media (min-width: 1181px) {
  .hero-section {
    margin-bottom: 75px;
  }
}

@media (max-width: 1180px) {
  .hero-section {
    margin-bottom: 50px;
  }
}

.btn-primary {
  color: #fff;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  display: inline-block;
  width: 200px;
}
</style>