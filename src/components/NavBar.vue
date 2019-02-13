<template>
<div id="NavBar">
    <nav class="white">
        <div class="container">
            <div class="nav-wrapper">
                <a href="/" class="brand-logo black-text">[ Logo ]</a>
                <a href="" class="sidenav-trigger " data-target="mobile-menu">
                    <i class="material-icons black-text">menu</i>
                </a>
                <ul class="right hide-on-med-and-down" id="initial-menu">
                    <li>
                        <a href="/" class="black-text">Accueil</a>
                    </li>
                    <li>
                        <a href="#" class="black-text">Suivi de projets</a>
                    </li>
                    <li>
                        <a href="#" class="black-text">Équipe</a>
                    </li>
                    <li>
                        <a href="#" class="black-text">À propos</a>
                    </li>
                    <li>
                        <a href="#" class="black-text">Compte</a>
                    </li>
                    <li>
                        <a href="#" class="black-text">Aide</a>
                    </li>
                </ul>
                <ul class="sidenav" id="mobile-menu">
                    <li>
                        <a href="#">Accueil</a>
                    </li>
                    <li class="active">
                        <a href="#">Suivi de projets</a>
                    </li>
                    <li>
                        <a href="#">Équipe</a>
                    </li>
                    <li>
                        <a href="#">À propos</a>
                    </li>
                    <li>
                        <a href="#">Compte</a>
                    </li>
                    <li>
                        <a href="#">Aide</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: 'NavBar',
    data () {
        return {
            user: null
        }
    },
    mounted () {
        $(document).ready(function(){
            $('.sidenav').sidenav();
        });
    }
}
</script>

<style>
a {
    @extend .blue-text;
}
</style>
