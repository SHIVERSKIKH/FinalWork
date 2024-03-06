<template>
    <div>
      <header class="header">
        <div class="header__info-wrp">
          <div class="center">
            <div class="header__info">
              <div class="header__info-lang">
                <span :class="{ 'header__info-lang_txt--active': currentLanguage === 'ru' }" @click="changeLanguage('ru')" class="header__info-lang_txt">RU</span>
                <span :class="{ 'header__info-lang_txt--active': currentLanguage === 'en' }" @click="changeLanguage('en')" class="header__info-lang_txt">EN</span>
              </div>
              <div class="header__info-tel">
                <a href="tel:+3710000000">+3710000000</a>
              </div>
            </div>
          </div>
        </div>
        <nav class="nav">
          <div class="center">
           <div class=" nav__wrp">
            <div class="nav__menu">
              <ul class="nav__menu-list">
                <li v-for="(item, index) in menuItems" :key="index" class="nav__menu-item">
                  <router-link :to="item.path" :class="{ 'nav__menu-link': true, 'active-menu': isActive(item.path) }">
                    {{ $t(item.label) }}
                  </router-link>
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
                  <router-link class="nav__user-favor" to="/"><span class="favorite-span">{{ favoriteCount }}</span></router-link>
                </li>
                <li class="nav__user-item">
                  <router-link class="nav__user-cart" to="/"></router-link>
                </li>
              </ul>
            </div>
           </div>
          </div>
          <div class="mobile-menu">
                  <div class="center">
                    <div class="mobile-menu__container">
                            <div class="nav__logo">
                <router-link to="/" class="nav__logo-img"></router-link>
                </div>
                        <div class="mobile__wrp">
                            <input id="menu-switch" type="checkbox">
                            <label @click="toggleVisibility" class="mobile-menu__burger" for="menu-switch">
                            <span></span>
                            </label>
                        </div>
                    </div>
                    <div :style="{ visibility: isVisible ? 'hidden' : 'visible' }" class="mobile__menu-wrapper">
                                            <div :style="{ visibility: isVisible ? 'hidden' : 'visible' }" :class="{ 'flex-container': !isVisible }"  class="menu__list">
                                              <ul class="header__menu-list menu-list-mob">
              <li v-for="(item, index) in menuItems" :key="index" class="nav__menu-item">
                <router-link @click="toggleVisibility, toggleMenu" :to="item.path" :class="{ 'nav__menu-link': true, 'active-menu': isActive(item.path) }">{{ item.label }}</router-link>
              </li>
            </ul>
            <div class="nav__user">
              <ul class="nav__user-list">
                <li class="nav__user-item">
                  <router-link class="nav__user-us" to="/"></router-link>
                </li>
                <li class="nav__user-item">
                  <router-link class="nav__user-favor" to="/"><span class="favorite-span">{{ favoriteCount }}</span></router-link>
                </li>
                <li class="nav__user-item">
                  <router-link class="nav__user-cart" to="/"></router-link>
                </li>
              </ul>
            </div>
                    </div>
                    </div>
                  </div>
                </div>
        </nav>
      </header>
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations } from 'vuex';
  import i18n from '@/i18n';

  
  export default {
    i18n,
    data() {
      return {
        isVisible: true,
        menuItems: [
          { path: '/', label: 'home' },
          { path: '/about', label: 'about' },
          { path: '/menu', label: 'menu' },
          { path: '/reservation', label: 'reservation' }
        ]
      };
    },
    methods: {
      isActive(path) {
        return this.$route.path === path;
      },
      ...mapMutations(['setLanguage']),
      changeLanguage(lang) {
        this.setLanguage(lang);
      },
      toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    },
    computed: {
      ...mapState(['currentLanguage', 'favoriteCount'])
    }
  };
  </script>