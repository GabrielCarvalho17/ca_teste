<template>
  <main id="app">
    <NavBar />
    <OffCanvas />
    <HeroSection />
    <LayoutPhoto />

    <CarouselClinic />

    <SplitScreen title="Demandas que Atendemos" :items="[
      '<strong>Transtornos de Ansiedade</strong> (ansiedade generalizada, fobia social, pânico, TEPT)',
      '<strong>Depressão</strong>',
      '<strong>TDAH</strong> (Transtorno de Déficit de Atenção e Hiperatividade)',
      '<strong>Transtorno Afetivo Bipolar</strong>',
      '<strong>Transtornos alimentares</strong> (anorexia, bulimia e compulsão alimentar)',
      '<strong>Transtornos de Personalidade</strong>',
      '<strong>TOC</strong> (Transtorno Obsessivo Compulsivo)',
      '<strong>Transtorno do Controle de Impulsos</strong>',
      'E outros!'
    ]" :textLeft="true" :showDescription="false" />

    <SplitScreen title="Serviços" :items="[
      '<strong>Psicoterapia Individual:</strong> Atendimento psicológico para adolescentes, crianças e adultos nas abordagens da Terapia.',
      '<strong>Terapia de Casal:</strong> Acolhimento em ambiente neutro, facilitando a comunicação e resolução de conflitos.',
      '<strong>Supervisão Clínica:</strong> Aperfeiçoamento de técnicas e autoconhecimento para profissionais da psicologia.'
    ]" :textLeft="false" :showDescription="false" />


    <CarouselCards>
      <Card titulo="Profissional 1" descricao="Texto - Profissional 1" />
      <Card titulo="Profissional 2" descricao="Texto - Profissional 2" />
      <Card titulo="Profissional 3" descricao="Texto - Profissional 3" />
      <Card titulo="Profissional 4" descricao="Texto - Profissional 4" />
      <Card titulo="Profissional 5" descricao="Texto - Profissional 5" />
      <Card titulo="Profissional 6" descricao="Texto - Profissional 6" />
      <Card titulo="Profissional 7" descricao="Texto - Profissional 7" />
      <Card titulo="Profissional 8" descricao="Texto - Profissional 8" />
      <Card titulo="Profissional 9" descricao="Texto - Profissional 9" />
      <Card titulo="Profissional 10" descricao="Texto - Profissional 10" />
      <Card titulo="Profissional 11" descricao="Texto - Profissional 11" />
      <Card titulo="Profissional 12" descricao="Texto - Profissional 12" />
    </CarouselCards>


    <GoogleMap />

    <Footer />
  </main>
</template>

<script>
import { NavBar, OffCanvas, Footer, HeroSection, LayoutPhoto, SplitScreen, CarouselCards, Card, CarouselClinic, GoogleMap } from './components/';

export default {
  name: 'App',
  components: {
    NavBar,
    OffCanvas,
    Footer,
    LayoutPhoto,
    HeroSection,
    SplitScreen,
    CarouselCards,
    Card,
    CarouselClinic,
    GoogleMap
  },
};
</script>


<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.vazio {
  flex: 1;
  min-height: 1000px;
  /* O conteúdo principal ocupa o espaço restante */
}

.bg-empty {
  background-color: #d9d9d9;
}

.section-title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
}

.section-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

.section-description .highlight {
  color: #007bff;
  font-weight: bold;
}
</style>
