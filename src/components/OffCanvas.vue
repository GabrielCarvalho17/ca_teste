<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-body">
            <ul class="navbar-nav gap-4">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Início</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Clínica</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Equipe</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Metologia</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Contato</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavBar',
}

</script>

<style lang="scss">
#offcanvasNavbar.offcanvas {
    max-width: 300px;
}
</style>