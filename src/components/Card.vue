<template>
  <div class="card custom-card">
    <div class="card custom-card">
      <div class="card-header custom-card-header">
      </div>
      <div class="card-body custom-card-body">
        <div class="content-header">
          <h5 class="card-title text-center">{{titulo}}</h5>
          <p class="card-text text-center">{{descricao}}</p>
        </div>
        <div class="social-icons">
          <img :src="require('@/assets/img/facebook.svg')" class="logo" alt="Facebook Logo" />
          <img :src="require('@/assets/img/instagram.svg')" class="logo" alt="Instagram Logo" />
          <img :src="require('@/assets/img/youtube.svg')" class="logo" alt="YouTube Logo" />
          <img :src="require('@/assets/img/linkedin.svg')" class="logo" alt="LinkedIn Logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    titulo: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped>


.card.custom-card {
  min-height: 350px;
  min-width: 250px;
  margin: 0px;
  display: flex;
  flex-direction: column;
}

.card.custom-card .custom-card-header {
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #D9D9D9;
}

.card.custom-card .custom-card-body {
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
}


.social-icons {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: auto;
}
</style>