<template>
  <footer class="p-0 bg-white">
    <div v-show="mobile">
      <div class="container">
        <div class="nav-item d-flex flex-row justify-content-center align-items-center mt-4 mb-0">
          <img :src="require('@/assets/img/logo.png')" class="logo-navbar" alt="Logo" />
          <a style="font-size: large; font-weight: 500;">Clinica Abertamente
          </a>
        </div>
        <div class="mt-4 mb-3 p-3">
          <div class="text-tertiary" style="font-size: large; font-weight: 500;">
            Redes Sociais
          </div>
          <div class="social-media-icons d-flex flex-row justify-content-center align-items-center gap-4 mt-3">
            <img :src="require('@/assets/img/instagram.svg')" class="" alt="Logo" />
            <img :src="require('@/assets/img/facebook.svg')" class="" alt="Logo" />
            <img :src="require('@/assets/img/youtube.svg')" class="" alt="Logo" />
            <img :src="require('@/assets/img/linkedin.svg')" class="" alt="Logo" />
          </div>
        </div>
        <div class="border-top p-3 mb-3">
          <div class="text-tertiary" style="font-size: large; font-weight: 500;">
            Formas de Pagamento
          </div>
          <div class="payment-methods-icons d-flex flex-row mt-4"
            style="justify-content: center; align-items: center; flex-wrap: wrap;">
            <img :src="require('@/assets/img/amex.svg')" class="" alt="Logo" />
            <img :src="require('@/assets/img/mercado-pago.svg')" class="" alt="Logo" />
            <img :src="require('@/assets/img/dinners.svg')" class="" alt="Logo" />
            <img :src="require('@/assets/img/visa.svg')" class="" alt="Logo" />
            <img :src="require('@/assets/img/mastercard.svg')" class="" alt="Logo" />
            <img :src="require('@/assets/img/elo.svg')" class="" alt="Logo" />
            <img :src="require('@/assets/img/hipercard.svg')" class="" alt="Logo" />
            <img :src="require('@/assets/img/pix.svg')" class="" alt="Logo" />
          </div>
        </div>
        <div class="border-top p-3 mb-3">
          <div class="text-tertiary" style="font-size: large; font-weight: 500;">
            Fale Conosco
          </div>
          <div class="d-flex flex-column align-items-center mt-3">
            <div class="d-flex flex-row gap-3 align-items-center mb-3">
              <img :src="require('@/assets/img/atendimento.svg')" />
              <div>
                Segunda a Sexta das 7:30H às 17:30
              </div>
            </div>
            <div class="d-flex flex-row gap-3 align-items-center mb-3">
              <img :src="require('@/assets/img/email.svg')" />
              <div>
                suporte@clinicaabertamente.com.br
              </div>
            </div>
            <div class="d-flex flex-row gap-3 align-items-center">
              <img :src="require('@/assets/img/whatsapp.svg')" />
              <div>
                (43) 99664-0028
              </div>
            </div>
          </div>
        </div>
        <div class="border-top p-3 mb-3">
          <div class="text-tertiary" style="font-size: large; font-weight: 500;">
            Novidades
          </div>
          <div class="d-flex flex-column align-items-center justify-content-center mt-3">
            <div style="max-width: 400px;">
              <p>
                Seja o primeiro a saber sobre novidades,
                promoções e muito mais!
              </p>
              <div class="input-group" style="margin-bottom: 40px;">
                <input type="text" class="form-control" placeholder="Seu e-mail..." aria-label="Usuario"
                  aria-describedby="Assinar">
                <button class="btn btn-dark" type="button" id="assinar">Assinar</button>
              </div>
              <button type="button" class="btn btn-dark" style="width: 100%; margin-bottom: 0px;">Seja Um
                Parceiro</button>
            </div>
          </div>
        </div>
        <div class="mb-3 p-1">
          © 2024 Clínica Abertamente. Todos os direitos reservados.
        </div>
      </div>
    </div>
    <div v-show="!mobile">
      <div class="d-flex flex-column">
        <div class="d-flex flex-row justify-content-center container" style="gap: 60px;">
          <div style="padding-top: 40px;">
            <h6 class="text-start">
              Redes Sociais
            </h6>
            <ul class="list-inline gap-3 d-flex pt-2">
              <li class="list-inline-item">
                <img :src="require('@/assets/img/instagram.svg')" alt="Logo" />
              </li>
              <li class="list-inline-item">
                <img :src="require('@/assets/img/facebook.svg')" alt="Logo" />
              </li>
              <li class="list-inline-item">
                <img :src="require('@/assets/img/youtube.svg')" alt="Logo" />
              </li>
              <li class="list-inline-item">
                <img :src="require('@/assets/img/linkedin.svg')" alt="Logo" />
              </li>
            </ul>
          </div>
          <div style=" padding-top: 40px;">
            <h6 class="text-start text-rowrap w-100">
              Formas de Pagamento
            </h6>
            <ul class="list-inline gap-2 d-flex pt-2 flex-row flex-wrap">
              <li class="list-inline-item">
                <img :src="require('@/assets/img/amex.svg')" class="icon" />
              </li>
              <li class="list-inline-item">
                <img :src="require('@/assets/img/mercado-pago.svg')" class="icon" />
              </li>
              <li class="list-inline-item">
                <img :src="require('@/assets/img/dinners.svg')" class="icon" />
              </li>
              <li class="list-inline-item">
                <img :src="require('@/assets/img/visa.svg')" class="icon" />
              </li>
              <li class="list-inline-item">
                <img :src="require('@/assets/img/mastercard.svg')" class="icon" />
              </li>
              <li class="list-inline-item">
                <img :src="require('@/assets/img/elo.svg')" class="icon" />
              </li>
              <li class="list-inline-item">
                <img :src="require('@/assets/img/hipercard.svg')" class="icon" />
              </li>
              <li class="list-inline-item">
                <img :src="require('@/assets/img/pix.svg')" class="icon" />
              </li>
            </ul>
          </div>
          <div style="padding-top: 40px;">
            <div>
              <h6 class="text-start">
                Fale Conosco
              </h6>
              <p class="text-rowrap text-start">
                Segunda a Sexta das 7:30H às 17:30
              </p>
            </div>
            <div class="d-flex flex-row gap-3 align-items-center mb-3">
              <img :src="require('@/assets/img/whatsapp.svg')" />
              <div>
                (43) 99664-0028
              </div>
            </div>
            <div class="d-flex flex-row gap-3 align-items-center">
              <img :src="require('@/assets/img/email.svg')" />
              <div>
                suporte@clinicaabertamente.com.br
              </div>
            </div>

          </div>
          <div class="border-start"
            style="padding-bottom: 40px; padding-top: 40px; padding-left: 60px; max-width: 400px;">
            <h6 class="text-start">
              Novidades
            </h6>
            <p class="text-start">
              Seja o primeiro a saber sobre novidades,
              promoções e muito mais!
            </p>
            <div class="input-group" style="margin-bottom: 40px;">
              <input type="text" class="form-control " placeholder="Seu e-mail..." aria-label="Usuario"
                aria-describedby="Assinar">
              <button class="btn btn-dark" type="button" id="assinar">Assinar</button>
            </div>
            <button type="button" class="btn btn-dark" style="width: 100%; margin-bottom: 0px;">Seja Um
              Parceiro</button>
          </div>
        </div>
        <div class="border-top"></div>

        <div class="d-flex flex-row w-100 align-items-center justify-content-between container"
          style="padding-top: 20px; padding-bottom: 20px;">
          <div>
            © 2024 Clínica Abertamente. Todos os direitos reservados.
          </div>
          <div class="d-flex flex-row align-items-center">
            <img :src="require('@/assets/img/logo.png')" class="logo-navbar" alt="Logo" />
            <a class="nav-link text-nowrap m-0 p-0" aria-current="page" href="#" style="font-weight: 500;">Clinica
              Abertamente</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      mobile: false,
    };
  },
  mounted() {
    this.checkIsMobile();
    window.addEventListener('resize', this.checkIsMobile);
  },
  methods: {
    checkIsMobile() {
      this.mobile = window.innerWidth <= 1180;
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIsMobile);
  }
};
</script>


<style lang="scss">
.min-height-300 {
  min-height: 300px;
}


.social-media-icons img {
  height: auto;
  width: 27px;
}

.payment-methods-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 25px 35px;
}

footer {
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
}
</style>