<template>
  <div v-show="mobile">
    <div class="container mt-3 custom-container gap-3" style="margin-bottom: 58px;">
      <div class="custom-row gap-3">
        <div ref="mobilePhoto1" class="custom-photo rounded">

        </div>
        <div ref="mobilePhoto2" class="custom-photo rounded">

        </div>
      </div>
      <div class="custom-row gap-3">
        <div ref="mobilePhoto3" class="custom-photo rounded">

        </div>
        <div ref="mobilePhoto4" class="custom-photo rounded">

        </div>
      </div>
    </div>
  </div>
  <div v-show="!mobile">
    <div class="custom-layout container">
      <div ref="customBox" class="custom-box rounded d-flex align-items-center justify-content-center">

      </div>
      <div class="custom-column-container">
        <div class="custom-row-container">
          <div ref="customRowItem1" class="custom-row-item rounded d-flex align-items-center justify-content-center">

          </div>
          <div ref="customRowItem2" class="custom-row-item rounded d-flex align-items-center justify-content-center">

          </div>
        </div>
        <div ref="customColumnItem" class="custom-column-item rounded d-flex align-items-center justify-content-center">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutPhoto',
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
/* ======== Estilos para dispositivos móveis ======== */
.custom-container {
  display: flex;
  flex-direction: column;
  height: 450px; /* Define a altura fixa de 400px */
}

.custom-row {
  flex: 1; /* Permite que cada linha ocupe o espaço disponível de forma igual */
  display: flex;
  flex-direction: row;
}

.custom-photo {
  background-color: #D9D9D9;
  flex: 1; /* Permite que cada foto ocupe o espaço disponível de forma igual */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* ======== Estilos para dispositivos não móveis ======== */
.custom-layout {
  display: flex;
  flex-direction: row;
  height: 450px;
  margin-bottom: 60px;
  gap: 5px;
}

.custom-box {
  background-color: #D9D9D9;
  height: 100%;
  width: 40%;
}

.custom-column-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 5px;
}

.custom-row-container {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  gap: 5px;
}

.custom-row-item,
.custom-column-item {
  background-color: #D9D9D9;
  width: 100%;
}

.custom-column-item {
  height: 100%;
}

/* Padding for larger screens */
@media (min-width: 992px) {
  .custom-row-container,
  .custom-column-container,
  .custom-layout {
    gap: 15px;
  }
}
</style>

