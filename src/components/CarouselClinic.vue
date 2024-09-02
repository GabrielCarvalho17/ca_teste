<template>
  <div class="container" style="margin-top: 20px; margin-bottom: 100px;">
    <h5 class="section-title">Nossa Clínica</h5>
    <p class="section-description mb-4" style="margin: 0px;">
      Projetamos tudo para oferecer um ambiente acolhedor e tranquilo, com cada detalhe pensado para proporcionar uma
      experiência de tratamento única e confortável. Da recepçào às salas de atendimento, cada espaço foi planejado
      paia garantir privacidade e bem-estar.
    </p>
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner rounded">
        <div class="carousel-item active">
          <div class="bg-empty d-block w-100" style="height: 420px;" alt="..."></div>
          <div class="carousel-caption d-none d-md-block text-secondary">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="bg-empty d-block w-100" style="height: 420px;" alt="..."></div>
          <div class="carousel-caption d-none d-md-block text-secondary">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="bg-empty d-block w-100" style="height: 420px;" alt="..."></div>
          <div class="carousel-caption d-none d-md-block text-secondary">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <p class="section-description mt-4" style="margin: 0px;">
      Acreditamos que um ambierile haimonioso é essencial paia a cura e o descimentó pessoal. Com um compromisso
      inabalável com a excelencia no cuidado, estamos aqui para ajudar você a encontrar o equilíorio e a saúde mental
      que merece. Venha nos conhecer e descubra como podemos contribuir para o seu bem estar.
    </p>
  </div>
</template>

<script>
export default {
  name: 'CarouselClinic',
}

</script>

<style lang="scss"></style>