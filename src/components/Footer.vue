<template>
    <div>
<footer class="footer">
    <div class="center">
        <div class="footer__wrp">
            <div class="footer__logo">
                <router-link to="/">
                    <img src="@/assets/img/logo-footer.png" alt="">
                </router-link>
            </div>
            <div class="footer__menu">
                <ul class="footer__menu-list">
                    <li class="footer__menu-item" v-for="(item, index) in menuItems" :key="index">
                        <router-link :to="item.path" :class="{ 'footer__menu-link': true, 'active-menu': isActive(item.path) }">{{ item.label }}</router-link></li>
                </ul>
            </div>
            <div class="footer__contacts">
                <ul class="footer__contacts-list">
                    <li class="footer__contacts-item">
                        <router-link class="footer__menu-link" to="/">Contacts</router-link>
                    </li>
                    <li class="footer__contacts-item">
                        <router-link class="footer__menu-link" to="/">Privacy policy</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
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