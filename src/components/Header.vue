<template>
    <div>
<header class="header">
    <div class="header__info-wrp">
        <div class="center">
                    <div class="header__info">
            <div class="header__info-lang">
                <span class="header__info-lang_txt">RU</span>
                <span class="header__info-lang_txt">EN</span>
            </div>
            <div class="header__info-tel">
                <a href="tel:+3710000000">+3710000000</a>
            </div>
        </div>
        </div>
    </div>
        <nav class="nav">
            <div class="nav__wrp center">
                <div class="nav__menu">
                <ul class="nav__menu-list">
                    <li v-for="(item, index) in menuItems" :key="index"  class="nav__menu-item">
                        <router-link :to="item.path" :class="{ 'nav__menu-link': true, 'active-menu': isActive(item.path) }">{{ item.label }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="nav__logo">
                <router-link to="/" class="nav__logo-img"></router-link>
            </div>
            <div class="nav__user">
                <ul class="nav__user-list">
                    <li class="nav__user-item">
                        <router-link class="nav__user-us" to="/"></router-link>
                    </li>
                    <li class="nav__user-item">
                        <router-link class="nav__user-favor" to="/"></router-link>
                    </li>
                    <li class="nav__user-item">
                        <router-link class="nav__user-cart" to="/"></router-link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
</header>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuItems: [
                    { path: '/', label: 'Home' },
                    { path: '/about', label: 'About' },
                    { path: '/menu', label: 'Menu' },
                    { path: '/reservation', label: 'Reservation' }
                ]
            };
        },
        methods: {
    isActive(path) {
      return this.$route.path === path;
    }
    }
}
</script>

<style lang="scss" scoped>

</style>