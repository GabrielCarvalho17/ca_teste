<template>
    <nav class="navbar fixed-top bg-white navbar-expand-lg">
        <div class="container position-relative">
            <ul class="navbar-nav">
                <li class="nav-item d-flex flex-row justify-content-between align-items-center">
                    <img :src="require('@/assets/img/logo.png')" class="logo-navbar" alt="Logo" />
                    <a class="nav-link text-nowrap m-0 p-0" aria-current="page" href="#" style="font-weight: 500; color: black;">Clinica Abertamente</a>
                </li>
            </ul>
            <div class="collapse navbar-collapse w-100 position-absolute" id="navbarNav">
                <ul class="navbar-nav d-flex flex-row w-100 justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Início</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Clínica</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Equipe</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Metodologia</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Localização</a>
                    </li>
                </ul>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

        </div>
    </nav>
</template>

<script>

export default {
    name: 'NavBar',
}

</script>

<style lang="scss">
.logo-navbar {
    width: 30px;
    height: auto;
}

.navbar {
    height: 60px;
}
</style>